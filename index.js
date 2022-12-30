const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

// dbUser1
// EzOOLvd3h9fQWEOV

// middleware
app.use(cors());
app.use(express());




const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.lotbzfp.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        const appointmentOptionCollection = client.db('dentalStudio').collection('appointmentOptions');

        // get all appointment options
        app.get('/appointmentOptions', async (req, res) => {
            const query = {};
            const options = await appointmentOptionCollection.find(query).toArray();
            res.send(options)
        })
    }
    finally {

    }
}
run().catch(console.log);



// --------------------------------------------------
app.get('/', async (req, res) => {
    res.send('dental studio server is running')
})

app.listen(port, () => console.log(`dental studio server running on ${port}`))