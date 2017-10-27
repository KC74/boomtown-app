import express from 'express';
import bodyParser from 'body-parser';
import {
    graphqlExpress,
    graphiqlExpress
} from 'apollo-server-express';
import schema from './api/schema'; // Next step!
import createLoaders from './api/loaders';
import cors from 'cors';

import initConfigs from './api/configs'
import initPostgres from './api/resources/pg-resources'

const app = express();

const GQL_PORT = process.env.PORT || 5000; // Where does this come from?

initConfigs(app);
export const database = initPostgres(app);

app.use('*', cors());
// Where we will send all of our GraphQL requests
app.use('/graphql', bodyParser.json(), graphqlExpress({
    schema,
    context: { loaders: createLoaders() }
}));
// A route for accessing the GraphiQL tool
app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',
}));
app.listen(GQL_PORT, () => console.log(
    `GraphQL is now running on http://localhost:${GQL_PORT}/graphql`
));