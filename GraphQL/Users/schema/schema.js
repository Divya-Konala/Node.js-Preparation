const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList, GraphQLNonNull } = require("graphql");
const axios = require('axios');
const _ = require('lodash');

const CompanyType = new GraphQLObjectType({
    name: "Company",
    fields: () => ({
        id : {type: GraphQLString},
        name : {type: GraphQLString},
        description : {type: GraphQLString},
        // bi-directional references
        users: {
            type: new GraphQLList(UserType), //circular references error - to resolve wrap fields in arrow function -> it means the function is executed only after UserType is defined
            resolve(parentValue, args){
                // return axios.get(`http://localhost:3000/companies/${parentValue.id}/users`)
                return axios.get(`http://localhost:3000/users?companyId=${parentValue.id}`)
                .then((res) => res.data)
            }
        }
    })
});

// nested queries
const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id : {type: GraphQLString},
        firstName : {type: GraphQLString},
        age : {type: GraphQLInt},
        company : {
            type: CompanyType,
            resolve(parentValue, args) {
                return axios.get(`http://localhost:3000/companies/${parentValue.companyId}`)
                .then((res)=>res.data)
            }
        }
    })
});

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        user: {
            type: UserType,
            args: {id: {type: GraphQLString}},
            resolve(parentValue, args) {
                return axios.get(`http://localhost:3000/users/${args.id}`)
                .then((res) => res.data);
            }
        },
        company : {
            type: CompanyType,
            args: {id: {type: GraphQLString}},
            resolve(parentValue, args) {
                return axios.get(`http://localhost:3000/companies/${args.id}`)
                .then((res)=>res.data)
            }
        }
    }
})

const mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addUser: {
            type: UserType,
            args: {
                firstName: {type: new GraphQLNonNull(GraphQLString)},
                age: {type: new GraphQLNonNull(GraphQLInt)},
                companyId: {type: GraphQLString},
            },
            resolve(parentValue, {firstName, age}){
                return axios.post('http://localhost:3000/users',{firstName, age})
                .then(res => res.data)
            }
        },
        deleteUser: {
            type: UserType,
            args: {id: {type: new GraphQLNonNull(GraphQLString)}},
            resolve(parentValue, args){
                return axios.delete(`http://localhost:3000/users/${args.id}`)
                .then(res => res.data)
            }
        },
        editUser: {
            type: UserType,
            args: {
                id: {type: new GraphQLNonNull(GraphQLString)},
                firstName: {type: GraphQLString},
                age: {type: GraphQLInt},
                companyId: {type: GraphQLString},
            },
            resolve(parentValue, args) {
                return axios.patch(`http://localhost:3000/users/${args.id}`,args)
                .then(res => res.data)
            }
        }
    },
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation
})