const express = require('express');

const app = express();

app.use(express.static(`${__dirname}/build`));

app.get('/*', (_req: any, res: { sendFile: (arg0: string) => void; }) => {
    res.sendFile(`${__dirname}/build/index.html`);
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server listening on port 3000');
});
