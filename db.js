const {MongoClient} = require('mongodb');

const client = new MongoClient('mongodb+srv://goktug-dev:jgDiUWiusE0HTmsW@webapp.xuhzygk.mongodb.net/ErolNET-WebApp?retryWrites=true&w=majority');

async function start() {
    await client.connect();
    module.exports = client.db();
    const app = require("./app");
    app.listen(3000);
}

start();

