import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import Category from "./components/Category";
import Content from "./components/Content";
import Header from "./components/Header";
import OrderTable from "./components/Order";
import product from "./Data/Product";

function App() {
  return (
    <>
     <Header/>
     
       <Grid container rowSpacing={0} >
         <Grid item lg={2} >
            <Category/>
         </Grid>
         <Grid item lg={6.7}>
            <Content product={product}/>
         </Grid>
         <Grid item lg={3.3} sx={{marginTop:2}}>
            <OrderTable/>
         </Grid>
       </Grid>
     
    </>
   
  );
}

export default App;
