import userValidation from './user';

const Schemas = {
    query: {
        ...userValidation.query
    },
    mutation: {
        ...userValidation.mutation
    }
};

export async function validate(operation: string, selection: string, args: any): Promise<Array<string>> {
    if (!Schemas[operation]?.[selection] || !Object.keys(args).length) {
        return [];
    }
    return Schemas[operation]?.[selection]?.validate(args) || [];
}
