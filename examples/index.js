const Koa = require('koa');

const app = new Koa();

const googleVerification = require('rawb-google-verification');

app.use(googleVerification({ code: 'aaaaaaaaaaaabbbbbbbbbbb' }));

app.listen(8080, function(err) {
    if (err) {
        console.log('ERROR', err);
        return;
    }
    console.log('Server started');
});
