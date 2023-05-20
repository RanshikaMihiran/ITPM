import React , {useState, useEffect} from "react";
import axios from "axios";
import { DataGrid } from '@mui/x-data-grid';
import { Button } from "@mui/material";

export default function AddProject(){

  const [name , setName] = useState ("");
  const [description , setDescription] = useState ("");
  const [patners , setPatners] = useState ("");
  const [amount , setAmount] = useState ("");

  const columns = [
    //   { field: '_id', headerName: 'UserID',width:240},
      { field: 'name', headerName: 'Name'},
      { field: 'description', headerName: 'Description'},
      { field: 'amount', headerName: 'Amount'},
      { field: 'patners', headerName: 'Partner'},
      
    {
            headerName:"Delete User",
            field: "Delete",
            width: 220,
            renderCell: (cellValues) => {
              return (
        <Button
                  variant="contained"
                  color="error"
                  onClick={(event) => {
                    axios.delete(`http://localhost:8070/project/delete/${cellValues.row._id}`).then((res)=>{
                      alert("Deleted");
                    }).catch((err)=>{
                        alert(err.message)
                    })
                  }}
        >
                  Delete
        </Button>
              );
            }
          }
        
    ];

    const [projects , setProjects] = useState([]);

    function getProjects(){
      axios.get("http://localhost:8070/project/").then((res)=>{
          console.log(res.data);
          setProjects(res.data);

      }).catch((err)=>{
          alert(err.message);
      })
  }

    useEffect (()=>{
      
        getProjects();
    },[getProjects])

  function sentData(e){

    e.preventDefault();
    
    const newProject = {
        name,
        description,
        patners,
        amount
    }

    axios.post("http://localhost:8070/project/add" , newProject).then(()=>{
        alert("Project Added")
        setName("");
        setDescription("");
        setPatners("");
        setAmount("");
        

    }).catch((err)=>{
        alert(err)

    })
  }
  
    return (
     
    <div className="container" style={{margin:"100px", marginLeft:"400px"}}>
    <form onSubmit={sentData}>
        

        <div class="form-group">
            <label for="name">Project Name</label>
            <input type="text" class="form-control" id="name" placeholder="Enter Project Name" onChange={(e)=>{
              
              setName(e.target.value);  
            
            }}/>
            
        </div>
        <div class="form-wrapper">
            <label for="description">Description</label>
            <input type="text" class="form-control" id="description" placeholder="Enter Description"onChange={(e)=>{
              
              setDescription(e.target.value);  
            
            }}/>
            
        </div>
        <div class="form-group">
            <label for="patners">Patners</label>
            <input type="text" class="form-control" id="patners" placeholder="Enter Patners" onChange={(e)=>{
              
              setPatners(e.target.value);  
            
            }}/>
            
        </div>
        <div class="form-group">
            <label for="amount">Amount</label>
            <input type="text" class="form-control" id="patners" placeholder="Enter Patners" onChange={(e)=>{
              
              setAmount(e.target.value);  
            
            }}/>
            
        </div>

        {/* <div class="form-group">
            <label for="file"> Add Image</label>
            <input type="file" class="form-control-file" id="Input Image"/>
        </div> */}

        
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>

    <h1 style={{margin:"100px", marginLeft:"400px"}}> All Projects </h1>

                    <div style={{width:'auto'}}></div>
                <DataGrid
                getRowId={(row) => row._id}
                rows={projects}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                customToolbarSelect
      />

</div>


  )
   
           
}