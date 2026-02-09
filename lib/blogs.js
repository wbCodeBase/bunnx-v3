import graphqlRequest from "@/lib/graphqlRequest";

export async function getAllBlogPosts() {
  const query = {
    query: `query NewQuery {
            posts {
              nodes {
                id
                title
                content
                slug
                date
                excerpt(format: RENDERED)
                
                featuredImage {
        node {
          mediaDetails {
            file
            sizes {
              height
              sourceUrl
              width
            }
          }
          author {
            node {
              name
              avatar {
                url
                size
                width
              }
            }
          }
        }
      }

                categories {
                  nodes {
                    name
                    slug
                  }
                }
              }
              pageInfo {
                endCursor
                hasNextPage
                hasPreviousPage
                startCursor
              }
            }
          }`,
  };

  const resJson = await graphqlRequest(query);
  const allBlogPosts = resJson.data.posts;
  return allBlogPosts;
}

export async function getSingleBlogPost(slug) {
  const query = {
    query: `query getSingleBlogPost {
  post(id: "${slug}", idType: SLUG) {
    content(format: RENDERED)
    date
    excerpt(format: RENDERED)
    modified
    slug
    title
    featuredImage {
      node {
        mediaDetails {
          sizes {
            height
            sourceUrl
            width
          }
        }
      }
    }
    categories {
      nodes {
        name
        slug
      }
    }
    author {
      node {
        name
        avatar {
          size
          url
          width
        }
      }
    }
    blogHeadingsAcf {
      blogHeadings
    }
  }
}`,
  };

  const resJson = await graphqlRequest(query);
  const singleBlogPost = resJson.data.post;
  return singleBlogPost;
}

export const formatDate = (dateString) => {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short", // "Dec"
    day: "2-digit", // "16"
  }).format(new Date(dateString));
};
