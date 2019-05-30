import uuid from 'uuid';
import md5 from 'md5';
import * as mutations from '../app/store/mutations';
import { connectDB } from './connect-db';

const authenticationTokens = [];

async function assembleUserState(user) {
    let db = await connectDB(),
        tasks = await db.collection('tasks').find({owner:user.id}).toArray(),
        groups = await db.collection('groups').find({owner:user.id}).toArray();

    return {
        tasks,
        groups,
        session:{authenticated: mutations.AUTHENTICATED, id: user.id}
    }
}

export const authenticationRoute = app => {
    app.post('/authenticate', async(req, res) => {
        let { username, password } = req.body,
            db = await connectDB(),
            collection = db.collection('users'),
            user = await collection.findOne({name: username});

        if (!user) {
            return res.status(500).send('User not found!');
        }

        let hash = md5(password),
            passwordCorrect = hash === user.passwordHash;

        if (!passwordCorrect) {
            return res.status(500).send('Password incorrect');
        }

        let token = uuid();

        authenticationTokens.push({
            token,
            userID: user.id
        });

        let state = await assembleUserState(user);

        res.send({token, state});
    });
};