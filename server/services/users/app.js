const express = require('express');
const app = express();
const PORT = 3001;

const {connect} = require("./configs/mongo");
const {json} = require('express');

connect((err) => {
    if (!err) {
        app.use(express.json());
        app.use(express.urlencoded({extended: true}));
        app.use("/", require('./routes'))
        app.listen(PORT, () => {
            console.log("This movies app is running on port " + PORT);
        });
    } 
});



module.exports = app;