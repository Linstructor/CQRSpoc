import express from "express";
import graphqlHTTP from "express-graphql";
import QuerySchema from "./schema/query";
import {init} from "./DatabaseConnector"

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: QuerySchema,
    graphiql: true,
}));

init().then(() => {
    app.listen(4000, () => {
        console.log('Query opened on 4000')
    });
}).catch((err: Error) => console.error(err));