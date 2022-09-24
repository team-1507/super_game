const express = require('express');
const { DATA, EVAL, expressCspHeader, INLINE, SELF, NONCE }  = require('express-csp-header');
require('./src/database');

const app = express();
const port = process.env.PORT || 3000;
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

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});
