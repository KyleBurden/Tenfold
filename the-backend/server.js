//get the data from the file
//const wordlistData=require('./words.json'); //just pretend this came from mysql or mongodb :) [cuz its over kill]
//express
const express=require('express');
const cors=require('cors');
const { MongoClient } = require('mongodb');
const app=express();
const PORT=3030;

//dir locations
const UI_LOCATION=`${__dirname}/build/`;

//middleware
app.use(cors());
app.use(express.static(UI_LOCATION));

app.get('/data',async(req,res)=>{
    //res.json(wordlistData);
    const client = new MongoClient('mongodb+srv://kyleburden709:zPgtuoZpTodXFmFT@cluster0.dcv3ppw.mongodb.net')

    await client.connect();

    const db = client.db('wordlistDB');

    const wordData = await db.collection('words').find({}).toArray();
    console.log(wordData)
    res.json(wordData.map(word => word.word));
})

app.listen(PORT,()=>{console.log(`Listening on port ${PORT}...`)});