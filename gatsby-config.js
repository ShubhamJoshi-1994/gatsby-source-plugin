/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [{
    resolve: "gatsby-source-apiserver",
      options: {
        typePrefix: "apiSource__",
        url: `https://jsonplaceholder.typicode.com/posts`,
        method: "get",
        headers: {
          "Content-Type": "application/json"
        },
        name: `posts`,
        localSave: false,
        path: `${__dirname}/src/gql/`,
        verboseOutput: true, // For debugging purposes

        // Pass an array containing any number of the entity configuration properties (except verbose, auth0Config),
        // any not specified are defaulted to the general properties that are specified
        // Only available from version 2.1.0
        entitiesArray: [
          {
            url: `https://jsonplaceholder.typicode.com/posts`,
            method: "get",
            headers: {
              "Content-Type": "application/json"
            },
            name: `posts`
          }
        ]
      }
    }]
}
