const { ApolloServer, gql } = require('apollo-server');  
const typeDefs = gql` 
  type Company {  
    name: String  
    owner: String  
  }  
  type Query {  
    companies: [Company]  
  }  
`;  
const companies = [  
  {  
    name: 'Infosys',  
    owner: 'N.R Narayan Murthy',  
  },  
  {  
    name: 'Wipro',  
    owner: 'Mohamed Hasham Premji',  
  },  
  {  
    name: 'Reliance Industries',  
    owner: 'Dhirubhai Ambani',  
  },  
  {  
    name: 'Bajaj Auto',  
    owner: 'Jamnalal Bajaj',  
  },  
];  
const resolvers = {  
  Query: {  
    companies: () => companies,  
  },  
};  
const server = new ApolloServer({ typeDefs, resolvers });  
server.listen().then(({ url }) => {  
  console.log(`Server ready at ${url}`);  
}); 