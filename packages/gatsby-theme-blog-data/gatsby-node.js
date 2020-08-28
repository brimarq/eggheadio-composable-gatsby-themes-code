exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions;
  createTypes(`interface BlogPost @nodeInterface {
    id: ID!
    title: String!
    slug: String!
    excerpt: String
    content: String!
  }`);
};