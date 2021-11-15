const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({extended:false}));

require('./db/conn');

const Igr = require('./models/igrs');

app.get('/igr_dataset', async (req, res) => {
    try {
         const sData = await Igr.find();
         res.status(201).send(sData);
    } catch (e) {
         res.status(400).send(e);
    }
 });

 // /v1/landdata/igr

 app.post('/v1/landdata/igr', async (req, res) => {
     try {
//           const {locality,name,area} = req.body;
// if(locality !== '' && name !== '' && area !== '') {
//           const Data = await Igr.find({$or: [
//                {Locality:locality},
//                {Building_Name:name},
//                {Area:area}
//           ]}).limit(1);
//                res.status(201).send(Data);
//      } else {
          const Data = await Igr.find({$or: [
               {Locality:locality},
               {Building_Name:name},
               {Area:area}
          ]});
               res.status(201).send(Data);          
//      }

     } catch (e) {
          res.status(400).send(e);
     }
  });
 
app.listen(port, () => {
    console.log(`connected at ${port}`);
});
