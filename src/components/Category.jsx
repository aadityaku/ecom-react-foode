import {MenuItem, MenuList, Paper,Text, Typography } from "@mui/material";

export default function Category(){
    return(
        <Paper>
            <MenuList >
                <Typography sx={{fontSize:20,fonWeight:"bold",marginLeft:2}}>All Product</Typography>
            <MenuItem sx={{fontSize:20,fonWeight:"600"}}>Roll</MenuItem>
            <MenuItem  sx={{fontSize:20,fonWeight:"600"}}>Biryane</MenuItem>
            <MenuItem sx={{fontSize:20,fonWeight:"600"}}>Dosa  </MenuItem>
            <MenuItem sx={{fontSize:20,fonWeight:"600"}}>Momos  </MenuItem>
            <MenuItem sx={{fontSize:20,fonWeight:"600"}}>Chowmin </MenuItem>
            <MenuItem sx={{fontSize:20,fonWeight:"600"}}>Staters </MenuItem>
            <MenuItem sx={{fontSize:20,fonWeight:"600"}}>Sea Food </MenuItem>
            <MenuItem sx={{fontSize:20,fonWeight:"600"}}>Soups </MenuItem>
            <MenuItem sx={{fontSize:20,fonWeight:"600"}}>Nodels </MenuItem>
            <MenuItem sx={{fontSize:20,fonWeight:"600"}}>Chineese Gravy </MenuItem>
            <MenuItem sx={{fontSize:20,fonWeight:"600"}}>Chineese Rice </MenuItem>
            <MenuItem sx={{fontSize:20,fonWeight:"600"}}>Boneless Gravies </MenuItem>
            <MenuItem sx={{fontSize:20,fonWeight:"600"}}>Chicken With Bone </MenuItem>
            <MenuItem sx={{fontSize:20,fonWeight:"600"}}>Mutton Gravies </MenuItem>
            <MenuItem sx={{fontSize:20,fonWeight:"600"}}>Veg Roll </MenuItem>
        </MenuList>
        </Paper>
    )
}