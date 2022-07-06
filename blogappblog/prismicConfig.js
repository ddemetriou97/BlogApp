// node-fetch is used to make network requests to the Prismic Rest API. 
// In Node.js Prismic projects, you must provide a fetch method to the
// Prismic client.
import fetch from 'node-fetch'
import * as prismic from '@prismicio/client'

const repoName = 'https://demetris-app.prismic.io/api/v2' // Fill in your repository name.


// The `routes` property is your Route Resolver. It defines how you will 
// structure URLs in your project. Update the types to match the Custom 
// Types in your project, and edit the paths to match the routing in your 
// project.
const routes = [
  {
    type: 'homepage',
    path: '/',
  }
]

export const client = prismic.createClient(repoName, { 
  fetch,
  routes,
})