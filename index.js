const { app } = require('./build/server.js');
console.log(app);
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Application is started on localhost:', port);
})
