const { buildSchema } = require("graphql");

module.exports = buildSchema(`
type user {
    id: Int
    name: String
    email: String
    password: String
}
input userInputdata {
    name: String 
    email: String
    password: String
}
input user_id {
    id: String
}
input userUpdate {
    id: String
    name: String 
    email: String
    password: String 
}
type Query {
    getUser(input: user_id): [user]
}

type Mutation {
    createUser(input: userInputdata): user
    updateUser(input: userUpdate): user
    deleteUser(input: user_id): user
}
`);

// type Query {
//     bello: String
//     desi: hello
// }
