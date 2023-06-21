import express from "express";
import config from "./src/dbase/config.js";
import routes from "./src/Routes/routes.js";


const app =express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


routes(app)


app.get('/', (req, res)=>{
    res.send('Now you are Here, waptech values you');


});  

app.listen(config.port,()=>{
    console.log(`Waptech server is running on ${config.url}`);
});