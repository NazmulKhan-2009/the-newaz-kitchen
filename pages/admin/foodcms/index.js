import { Button } from "@material-ui/core";
import { useState } from "react";
import CreateFood from "./Components/Createfood/CreateFood";
import DeleteFood from "./Components/DeleteFood/DeleteFood";
import ReadFood from "./Components/ReadFood/ReadFood";
import UpdateFood from "./Components/UpdateFood/UpdateFood";


export default function Home() {

 const [createFood, setCreateFood]=useState("")

 const formTitle=["Create Food", "Delete Food" , "Read Food", "Update Food"]

const  handleCreateForm=(item)=>{
 setCreateFood(item)
 }

 return (
  <div>
   <h1>Welcome to Food content management system</h1>

   {formTitle.map((item,i)=>
    <Button key={i} variant="contained" color="secondary" onClick={()=>handleCreateForm(item)}>
     {item}
   </Button>
   )
    }

   {
    createFood==="Create Food" && <CreateFood/>||
    createFood==="Delete Food" && <DeleteFood/>||
    createFood==="Read Food" && <ReadFood/>||
    createFood==="Update Food" && <UpdateFood/>

   }
   

  </div>
 )
}
