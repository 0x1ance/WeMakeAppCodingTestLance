import { ApolloServer, gql, makeExecutableSchema } from 'apollo-server-micro'
import scrapedData from '../../utils/scraper'

const typeDefs = gql`
    type ScrapedEntry {
        id: String
        title: String
        points: Int
        author: String
        time: String
        numOfComments: Int
        url: String
    }
    type Query {
        data: [ScrapedEntry!]
    }
`

const resolvers = {
    Query: {
        data() {
            return scrapedData
        },
    },
}

export const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
})

export const config = {
    api: {
        bodyParser: false,
    },
}

export default new ApolloServer({ schema }).createHandler({
    path: '/api/graphql',
})
