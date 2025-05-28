const express = require("express");
const expressGraphQL = require("express-graphql").graphqlHTTP;
const schema = require('./schema/schema');

const app = express();

//tell the app to pass any request to graphQL if it has "/graphql" in its request
app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true,
}));

app.listen(4000, () => {
    console.log("Listening!");
});