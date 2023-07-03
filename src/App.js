import "./styles.css";
import {Container, Grid} from "@mui/material";
import MediaCard from "./media-card/card";
import {useEffect, useState} from "react";
import {axiosInstance} from "./config/https";

export default function App() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axiosInstance
            // .get("food/search?query=apple&offset=606&number=10")
            .get("titles")
            .then((response) => {
                console.log(response.data.results);
                setData(response.data.results.filter(item => item.primaryImage));
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
                {data
                    .map(item => {
                        return (
                            <Grid item xs={2} md={3} lg={4} key={item.id}>
                                <MediaCard data={item}/>
                            </Grid>
                        );
                    })}
            </Grid>
        </Container>
    );
}
