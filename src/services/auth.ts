import { shield, rule, or} from 'graphql-shield';
import {merge} from '../utils/object';

const PRIVILEGE_GRAPHQL_TYPE = 'GRAPHQL';

export async function getShield(prisma) {
    const roles = await getRoles(prisma);
    const rules = await getRules(roles);

    const permissions = {};

    roles.forEach((role) => {
        role.privileges.filter((privilege) => privilege.type === PRIVILEGE_GRAPHQL_TYPE).forEach((privilege) => {
            const [type, name] = privilege.name.split('_');
            merge(permissions, {[type]: {[name]: [`is${role.type}`]}});
        });
    });

    Object.keys(permissions).forEach( (permissionKey) => {
        const permission = permissions[permissionKey];
        Object.keys(permission).forEach((ruleKey) => {
            if (Array.isArray(permission[ruleKey])) {
                permission[ruleKey] = or.apply(or, permission[ruleKey].map(ruleKey => rules[ruleKey]));
            }
        });
    });

    return shield(permissions);
}

export async function getRoles(prisma) {
    const fragment = `
        fragment RoleWithPrivileges on Role {
          id
          name
          type
          privileges {
            id
            name
            type
          }
        }
    `;

    return prisma.roles({}).$fragment(fragment);
}

export async function getRules(roles) {
    const rules = {};

    roles.forEach((role) => {
        rules[`is${role.type}`] = rule({ cache: 'contextual' })(
            async (parent, args, context, info) => {
                if (context.user?.role?.type !== role.type) {
                    throw new Error(`User should have ${role.type} role to manage this data...`)
                }
                return true;
            },
        )
    });

    return rules;
}
