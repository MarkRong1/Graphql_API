var { buildSchema } = require('graphql');

var schema = buildSchema(`
    type Query {
        hello:String
        connector(nickname: String!): Connector
        connectors: [Connector]
    },
    type Connector {
      CCFCID:String
      CCNAME:String
      CCGRPNAM:String
      CCNICK:String
      CCIP:String
      CCLINE:String
      CCSTS:String
    }
`);

module.exports = schema;