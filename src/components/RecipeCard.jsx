import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

export default function RecipeCard(props){
    return (
        <Card>
            <CardActionArea>
            <CardMedia src={props.img} component="img" height="155" />
                <CardContent>
                    <Typography variant="h5">{props.title}</Typography>
                    <Typography variant="h5">Rs {props.price}/-</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}