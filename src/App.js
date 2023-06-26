import "./styles.css";
import {Container, Grid} from "@mui/material";
import MediaCard from "./media-card/card";
import {useEffect, useState} from "react";
import {axiosInstance} from "./config/https";

export default function App() {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        axiosInstance
            .get("food/search?query=apple&offset=606&number=10")
            .then((response) => {
                console.log(response.data);
                setFoods(response.data.searchResults);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <Container maxWidth="lg">
            <Grid
                container
                rowSpacing={4}
                columnSpacing={{xs: 1, sm: 1, md: 1, lg: 1}}
            >
                {foods.map((item, index) => {
                    return (
                        <Grid item xs={2} md={3} lg={4} key={index}>
                            <MediaCard name={item.name}/>
                        </Grid>
                    );
                })}
            </Grid>
        </Container>
    );
}
