import {GraphQLInt, GraphQLObjectType, GraphQLString} from "graphql";
import {connection} from "../../DatabaseConnector";

export default new GraphQLObjectType({
    name: "Technos",
    fields: {
        id: {type: GraphQLInt},
        name: {type: GraphQLString},
        icon: {type: GraphQLString},
        description: {type: GraphQLString},
    }
});

export const TechnoResolver = async (_: any, params: any) => {
    return params.id ?
        await connection.query("SELECT * FROM Technos WHERE id=?", [params.id])
        : await connection.query("SELECT * FROM Technos");
};