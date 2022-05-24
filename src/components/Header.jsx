import {AppBar, Button, Menu, MenuItem, Toolbar, Typography} from "@mui/material"
import { Box } from "@mui/system"
export default function Header(){
    return (
        <AppBar position="sticky">
            <Toolbar>
                <Box sx={{flex:1.8}}>
                    <Button color="inherit" >KeyBord</Button>
                    <Button color="inherit" >Orderitem</Button>
                    <Button color="inherit" >Take Away</Button>
                    <Button color="inherit" >Deliverey</Button>
                    
                </Box>
                <Typography sx={{fontWeight:"500",fontSize:23,flex:0.7}}>Ecom Store</Typography>
                <Box sx={{flex:1.9}}>
                    <Button color="inherit" >Sales Return</Button>
                    <Button color="inherit" >New</Button>
                    <Button color="inherit" >K.O.T</Button>
                    <Button color="inherit" >Hold</Button>
                    <Button color="inherit" >unHold</Button>
                    <Button color="inherit" >settings</Button>
                    <Button color="inherit" >logout</Button>
                </Box>
            </Toolbar>
         
        </AppBar>
    )
}