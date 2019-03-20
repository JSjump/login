import express from 'express';
import users from './routes/users';
import auth from './routes/auth';
import bodyParser from 'body-parser';


let app = express();
app.use(bodyParser.json());
app.use('/api/users',users);
app.use('/api/auth', auth);

app.get('/',(req,res) => {
    res.send('hello')
});

app.listen(6060,() =>console.log('Running on localhost:6060'));
