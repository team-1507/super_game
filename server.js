const express = require('express');
require('./src/database');

const app = express();
const port = process.env.PORT || 3000;
app.use(express.static(`${__dirname}/build`));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/posts', require('./src/database/routes/postRoutes'));

app.get('/*', (_req, res) => {
    res.sendFile(`${__dirname}/build/index.html`);
});

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});
