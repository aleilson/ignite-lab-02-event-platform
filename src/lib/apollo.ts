import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o5qlf10nte01xi3klwcxcg/master',
    cache: new InMemoryCache()
})