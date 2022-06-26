import { ApolloClient, InMemoryCache } from "@apollo/client";

//https://api-us-west-2.graphcms.com/v2/cl4ow6c8j19e601xsezs83oa3/master
export const client = new ApolloClient({
  uri: import.meta.env.VITE_API_URL,
  headers: {
    'Authorization': `Bearer ${import.meta.env.VITE_API_ACESS_TOKEN}`
  },
  cache: new InMemoryCache()  
})
