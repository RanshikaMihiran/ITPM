const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const projectSchema = new Schema({

    name : {
        type : String,
        
    },

    description : {
        type : String,
        
    },
    patners : {
        type : String,
    },
    amount : {
        type : Number,
    }

})


const Project = mongoose.model("Project",projectSchema);

module.exports = Project;


