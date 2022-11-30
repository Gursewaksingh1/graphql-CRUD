var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var bello = require("./reslover");
var schema = require("./schema");
const mongoose = require("mongoose")
var app = express();
const dotenv = require("dotenv");
dotenv.config();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: bello,
    graphiql: true,
    customFormatErrorFn(err){
        if(!err.originalError) {
            return err;
        }
        console.log({data:err.originalError });
        let data = err.originalError.data || "error occourd";
        let msg = err.originalError.message || "many errors"
        let statusCode = err.originalError.statusCode || 500;
        return {data,statusCode, msg}

    }
}));

mongoose.connect(process.env.MONGODB)
app.listen(3000, () => console.log('Express GraphQL Server Now Running On localhost:3000/graphql'));