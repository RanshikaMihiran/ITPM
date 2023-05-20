const router = require("express").Router();
let Project = require("../models/Project");


 // Add projects

router.route("/add").post((req,res)=>{
       
    const name = req.body.name;
    const description = req.body.description;
    const patners = req.body.patners;
    const amount = Number(req.body.amount);


    const newProject = new Project({

        name,
        description,
        patners,
        amount


    })

    newProject.save().then(()=>{
        res.json("Project Added")
    }).catch((err)=>{
        console.log(err);
    })


})


// Read projects 

router.route("/").get((req,res)=>{
    
    Project.find().then((projects)=>{
        res.json(projects)
    }).catch((err)=>{
        console.log(err);
    })

})


//update Prooject

router.route("/update/:id").put(async(req,res)=>{
    let projectID = req.params.id;
    const {name,description,patners,amount} = req.body;

    const updateProject = {
        name,
        description,
        patners,
        amount
    }

    const update = await Project.findByIdAndUpdate(projectID,updateProject).then(()=>{
        res.status(200).send({status:"Project updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.message});
    })


   
})


// delete Project

router.route("/delete/:id").delete(async(req,res)=>{
    let projectID =req.params.id;

    await Project.findByIdAndDelete(projectID).then(()=>{
        res.status(200).send({status:"Project deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with project delete",error: err.message});
    })

})


router.route("/get/:id").get(async(req,res)=>{
    let projectId = req.params.id;
    const project= await Project.findById(projectId).then((project)=>{
        res.status(200).send({status:"Project fetched",project})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with get project", error:err.message});
    })
})


//get a particular details of project and edit 

router.route('/edit-project/:id').get((req,res)=>{
    Project.findById(req.params.id,(error,data)=>{
        if(error){
            return next (error)
        }else{
            res.json(data)
        }
    })

})

module.exports = router;
