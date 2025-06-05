import 'dotenv/config';
import { createPoll } from './routes/create-poll';
import { getPoll } from './routes/get-poll';
import { voteOnPoll } from './routes/vote-on-poll';
import { pollResults } from './ws/poll-results';
import fastify from 'fastify';
import cookie from '@fastify/cookie';
import websocket from '@fastify/websocket';

const app = fastify();

app.register(cookie, {
    secret: 'asdka13asd2d234asd2alsd234asdn',
    hook: 'onRequest',
});
app.register(websocket);

app.register(createPoll);
app.register(getPoll);
app.register(voteOnPoll);

app.register(pollResults);

const port = Number(process.env.PORT);

app.listen({ port: port }).then(() => {
    console.log(`HTTP Server running on port: ${port}!`);
});