import express from 'express';

const app = express();

app.get('/', (req, res) => {
    return res.send("get nlw");
});

app.post('/', (req, res) => {
    return res.send('post nlw');
})

app.listen(3000, () => console.log('Server is running ;D'));