const express = require('express');
const { DATA, EVAL, expressCspHeader, INLINE, SELF, NONCE }  = require('express-csp-header');
require('./src/database');
const selfSigned = require('openssl-self-signed-certificate');
const https = require('https');
const app = express();

const { PORT = 3000, NODE_ENV = 'development' } = process.env;
const { key, cert } = selfSigned;

app.use(express.static(`${__dirname}/build`));
app.use(expressCspHeader({
    directives: {
        'default-src': [SELF, 'https://ya-praktikum.tech'],
        'script-src': [SELF, INLINE, EVAL, NONCE],
        'font-src': [SELF, DATA],
        'img-src': [DATA, SELF, INLINE, 'https://ya-praktikum.tech'],
        'style-src': [SELF, INLINE],
        'worker-src': [SELF],
    }
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/posts', require('./src/database/routes/postRoutes'));

app.get('/*', (_req, res) => {
    res.sendFile(`${__dirname}/build/index.html`);
});

if (NODE_ENV === 'development') {
    https.createServer({ key, cert }, app)
    .listen(PORT, '0.0.0.0', () => {
        console.info(`https://localhost:${PORT}`);
    });
} else {
    app.listen(PORT, () => {
        console.log(`Server listening on http://localhost:${PORT}`);
    });
}
