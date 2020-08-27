const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);
  const wordPressPostTemplate = path.resolve(`src/templates/wordpress-blog-post.js`);
  // Query for Mdx nodes to use in creating pages.
  return graphql(`
    query loadPagesQuery {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    // Create blog post pages.
    result.data.allMdx.nodes.forEach(node => {
      createPage({
        path: `/dev-blog/${node.frontmatter.slug}`,
        component: blogPostTemplate,
        context: {
          id: node.id
        }
      });
    });
    
  });
};
