import express from 'express'

const app = express();

app.get('/login', (req, res) =>{
    const loginParams = new URLSearchParams({
        client_id:'fullcyle-client',
        redirect_uri: 'http://localhost:3000/callback',
        response_type: 'code',
        scope: 'openid'
    })
    const url = `http://localhost:8090/realms/fullcycle-realm/protocol/openid-connect/auth?${loginParams.toString()}`
    console.log(url);
    res.redirect(url);

});

app.listen(3000,() => {
    console.log('Listening on port 3000');
})