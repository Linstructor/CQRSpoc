import {GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLSchema} from "graphql";
import TechnoType, {TechnoResolver} from "./model/TechnoType";

const querySchema = new GraphQLObjectType({
    name: "Query",
    fields: {
        technos: {
            name: "technos",
            type: GraphQLList(TechnoType),
            resolve: TechnoResolver,
            args: { id: { type: GraphQLInt } },
        }
    }
});

export default new GraphQLSchema({ query: querySchema});