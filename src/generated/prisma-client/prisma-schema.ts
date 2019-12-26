// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregatePrivilege {
  count: Int!
}

type AggregateRole {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Json

scalar Long

type Mutation {
  createPrivilege(data: PrivilegeCreateInput!): Privilege!
  updatePrivilege(data: PrivilegeUpdateInput!, where: PrivilegeWhereUniqueInput!): Privilege
  updateManyPrivileges(data: PrivilegeUpdateManyMutationInput!, where: PrivilegeWhereInput): BatchPayload!
  upsertPrivilege(where: PrivilegeWhereUniqueInput!, create: PrivilegeCreateInput!, update: PrivilegeUpdateInput!): Privilege!
  deletePrivilege(where: PrivilegeWhereUniqueInput!): Privilege
  deleteManyPrivileges(where: PrivilegeWhereInput): BatchPayload!
  createRole(data: RoleCreateInput!): Role!
  updateRole(data: RoleUpdateInput!, where: RoleWhereUniqueInput!): Role
  updateManyRoles(data: RoleUpdateManyMutationInput!, where: RoleWhereInput): BatchPayload!
  upsertRole(where: RoleWhereUniqueInput!, create: RoleCreateInput!, update: RoleUpdateInput!): Role!
  deleteRole(where: RoleWhereUniqueInput!): Role
  deleteManyRoles(where: RoleWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Privilege {
  id: ID!
  name: String!
  type: PrivilegeTypes!
  payload: Json
  description: String
}

type PrivilegeConnection {
  pageInfo: PageInfo!
  edges: [PrivilegeEdge]!
  aggregate: AggregatePrivilege!
}

input PrivilegeCreateInput {
  id: ID
  name: String!
  type: PrivilegeTypes
  payload: Json
  description: String
}

input PrivilegeCreateManyInput {
  create: [PrivilegeCreateInput!]
  connect: [PrivilegeWhereUniqueInput!]
}

type PrivilegeEdge {
  node: Privilege!
  cursor: String!
}

enum PrivilegeOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  type_ASC
  type_DESC
  payload_ASC
  payload_DESC
  description_ASC
  description_DESC
}

type PrivilegePreviousValues {
  id: ID!
  name: String!
  type: PrivilegeTypes!
  payload: Json
  description: String
}

input PrivilegeScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  type: PrivilegeTypes
  type_not: PrivilegeTypes
  type_in: [PrivilegeTypes!]
  type_not_in: [PrivilegeTypes!]
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  AND: [PrivilegeScalarWhereInput!]
  OR: [PrivilegeScalarWhereInput!]
  NOT: [PrivilegeScalarWhereInput!]
}

type PrivilegeSubscriptionPayload {
  mutation: MutationType!
  node: Privilege
  updatedFields: [String!]
  previousValues: PrivilegePreviousValues
}

input PrivilegeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PrivilegeWhereInput
  AND: [PrivilegeSubscriptionWhereInput!]
  OR: [PrivilegeSubscriptionWhereInput!]
  NOT: [PrivilegeSubscriptionWhereInput!]
}

enum PrivilegeTypes {
  GRAPHQL
  CUSTOM
}

input PrivilegeUpdateDataInput {
  name: String
  type: PrivilegeTypes
  payload: Json
  description: String
}

input PrivilegeUpdateInput {
  name: String
  type: PrivilegeTypes
  payload: Json
  description: String
}

input PrivilegeUpdateManyDataInput {
  name: String
  type: PrivilegeTypes
  payload: Json
  description: String
}

input PrivilegeUpdateManyInput {
  create: [PrivilegeCreateInput!]
  update: [PrivilegeUpdateWithWhereUniqueNestedInput!]
  upsert: [PrivilegeUpsertWithWhereUniqueNestedInput!]
  delete: [PrivilegeWhereUniqueInput!]
  connect: [PrivilegeWhereUniqueInput!]
  set: [PrivilegeWhereUniqueInput!]
  disconnect: [PrivilegeWhereUniqueInput!]
  deleteMany: [PrivilegeScalarWhereInput!]
  updateMany: [PrivilegeUpdateManyWithWhereNestedInput!]
}

input PrivilegeUpdateManyMutationInput {
  name: String
  type: PrivilegeTypes
  payload: Json
  description: String
}

input PrivilegeUpdateManyWithWhereNestedInput {
  where: PrivilegeScalarWhereInput!
  data: PrivilegeUpdateManyDataInput!
}

input PrivilegeUpdateWithWhereUniqueNestedInput {
  where: PrivilegeWhereUniqueInput!
  data: PrivilegeUpdateDataInput!
}

input PrivilegeUpsertWithWhereUniqueNestedInput {
  where: PrivilegeWhereUniqueInput!
  update: PrivilegeUpdateDataInput!
  create: PrivilegeCreateInput!
}

input PrivilegeWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  type: PrivilegeTypes
  type_not: PrivilegeTypes
  type_in: [PrivilegeTypes!]
  type_not_in: [PrivilegeTypes!]
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  AND: [PrivilegeWhereInput!]
  OR: [PrivilegeWhereInput!]
  NOT: [PrivilegeWhereInput!]
}

input PrivilegeWhereUniqueInput {
  id: ID
}

type Query {
  privilege(where: PrivilegeWhereUniqueInput!): Privilege
  privileges(where: PrivilegeWhereInput, orderBy: PrivilegeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Privilege]!
  privilegesConnection(where: PrivilegeWhereInput, orderBy: PrivilegeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PrivilegeConnection!
  role(where: RoleWhereUniqueInput!): Role
  roles(where: RoleWhereInput, orderBy: RoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Role]!
  rolesConnection(where: RoleWhereInput, orderBy: RoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RoleConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Role {
  id: ID!
  name: String
  type: RolesType
  description: String
  privileges(where: PrivilegeWhereInput, orderBy: PrivilegeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Privilege!]
}

type RoleConnection {
  pageInfo: PageInfo!
  edges: [RoleEdge]!
  aggregate: AggregateRole!
}

input RoleCreateInput {
  id: ID
  name: String
  type: RolesType
  description: String
  privileges: PrivilegeCreateManyInput
}

input RoleCreateOneInput {
  create: RoleCreateInput
  connect: RoleWhereUniqueInput
}

type RoleEdge {
  node: Role!
  cursor: String!
}

enum RoleOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  type_ASC
  type_DESC
  description_ASC
  description_DESC
}

type RolePreviousValues {
  id: ID!
  name: String
  type: RolesType
  description: String
}

enum RolesType {
  ADMIN
  USER
}

type RoleSubscriptionPayload {
  mutation: MutationType!
  node: Role
  updatedFields: [String!]
  previousValues: RolePreviousValues
}

input RoleSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RoleWhereInput
  AND: [RoleSubscriptionWhereInput!]
  OR: [RoleSubscriptionWhereInput!]
  NOT: [RoleSubscriptionWhereInput!]
}

input RoleUpdateDataInput {
  name: String
  type: RolesType
  description: String
  privileges: PrivilegeUpdateManyInput
}

input RoleUpdateInput {
  name: String
  type: RolesType
  description: String
  privileges: PrivilegeUpdateManyInput
}

input RoleUpdateManyMutationInput {
  name: String
  type: RolesType
  description: String
}

input RoleUpdateOneRequiredInput {
  create: RoleCreateInput
  update: RoleUpdateDataInput
  upsert: RoleUpsertNestedInput
  connect: RoleWhereUniqueInput
}

input RoleUpsertNestedInput {
  update: RoleUpdateDataInput!
  create: RoleCreateInput!
}

input RoleWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  type: RolesType
  type_not: RolesType
  type_in: [RolesType!]
  type_not_in: [RolesType!]
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  privileges_every: PrivilegeWhereInput
  privileges_some: PrivilegeWhereInput
  privileges_none: PrivilegeWhereInput
  AND: [RoleWhereInput!]
  OR: [RoleWhereInput!]
  NOT: [RoleWhereInput!]
}

input RoleWhereUniqueInput {
  id: ID
  name: String
}

type Subscription {
  privilege(where: PrivilegeSubscriptionWhereInput): PrivilegeSubscriptionPayload
  role(where: RoleSubscriptionWhereInput): RoleSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String!
  name: String!
  password: String!
  role: Role!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  email: String!
  name: String!
  password: String!
  role: RoleCreateOneInput!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  name_ASC
  name_DESC
  password_ASC
  password_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  name: String!
  password: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  email: String
  name: String
  password: String
  role: RoleUpdateOneRequiredInput
}

input UserUpdateManyMutationInput {
  email: String
  name: String
  password: String
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  role: RoleWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`