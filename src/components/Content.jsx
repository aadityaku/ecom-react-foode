import { Grid } from "@mui/material";
import RecipeCard from "./RecipeCard";

import { useState } from "react";
export default function Content(props){
    const[product,getProduct]=useState(props.product);
    return(
        <Grid container spacing={2} sx={{padding:2}}>
            {
                product.map((key,value)=>(
                    <Grid item lg={3} key={key}>
                        <RecipeCard img={ "/images/" + key.img} price={key.price} title={key.title}/>
                    </Grid>
                ))
            }
            
            
        </Grid>
    )
}