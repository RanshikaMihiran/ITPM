import React , {useState, useEffect} from "react";
import axios from "axios";
import { DataGrid } from '@mui/x-data-grid';
import { Button } from "@mui/material";
// import Table from "react-boostrap/Table";




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


export default function AllProjects(){

    const [projects , setProjects] = useState([]);

    useEffect (()=>{
        function getProjects(){
            axios.get("http://localhost:8070/project/").then((res)=>{
                console.log(res.data);
                setProjects(res.data);

            }).catch((err)=>{
                alert(err.message);
            })
        }

        getProjects();
    },[])

        return(
         
            <diV>

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
            </diV>



 
        )


}

   