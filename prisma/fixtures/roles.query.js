module.exports = [
	`mutation createDefaultRole {
  createRole(
    data: {
      name: "default",
      type: USER,
      description: "Default role",
      privileges: {
          create: [
              {
                  name: "Mutation_updateMyUser",
                  description: "Allows updating own user",
                  type: GRAPHQL
              },
              {
                  name: "Mutation_approveUserEmail",
                  description: "Approve user email by token",
                  type: GRAPHQL
              }
          ]
      }
    }
  ) {
    id
    name
    type
    privileges {
      name
      type
    }
  }
}`,
`mutation createAdminRole {
  createRole(
    data: {
      name: "admin",
      type: ADMIN,
      description: "Admin role",
      privileges: {
        create: {
            name: "Query_users",
            description: "Allows fetching all users",
            type: GRAPHQL
        }
      }
    }
  ) {
    id
    name
    type
    privileges {
      name
      type
    }
  }
}`
];
