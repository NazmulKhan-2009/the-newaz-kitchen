import { Button, Grid } from '@material-ui/core';
import Link from 'next/link';
import { useState } from 'react';
import AdminController from '../AdminController';
import FoodController from '../FoodController';
import OrderController from '../OrderController';
import Servicecontroller from '../Servicecontroller';
import classes from "./AdminNav.module.scss"

export default function AdminNav() {

 const [isOpen, setIsOpen]=useState(false)
 const [titleWise, setTitlewise]=useState("")
 const adminTask=[
 {title:"Food Control Management", comp:<FoodController/> },
 {title:"Admin Control Management", comp:<AdminController/>},
 {title:"Order Control Management", comp:<OrderController/> },
 {title:"Service Control Management",comp:<Servicecontroller/>}
  ]

 const handleSelector=(item)=>{
  setIsOpen(true)
  setTitlewise(item)
 }
 
 return (
  <Grid >
  <h2>Admin Panel</h2>

  <ul className={classes.list_item}>
  {adminTask.map((item,i)=>{
   return (
    <Grid key={i}>
     <li ><Button variant="outlined" color="secondary"  onClick={()=>handleSelector(item.title)}>{item.title}</Button></li>
     {
      isOpen && item.title === titleWise && item.comp||
      isOpen && item.title === titleWise && item.comp||
      isOpen && item.title === titleWise && item.comp||
      isOpen && item.title === titleWise && item.comp
     }
    </Grid>
   )
  }
   
   
     
   
  )
  }
  </ul>

    
  
  
  
  
   

  
     {/* <Link  href="/admin/foodcms"><Button variant="outlined" color="secondary"><a>Food Control Management</a></Button>
     </Link>

     <Link href="/admin/admincms"><Button variant="outlined" color="secondary"><a>Admin Control Management</a></Button>
     </Link> */}
   
  </Grid>
 )
}
