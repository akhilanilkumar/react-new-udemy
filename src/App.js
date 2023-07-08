import "./styles.css";
import {Alert, Container, Grid} from "@mui/material";
import MediaCard from "./media-card/card";
import {useEffect, useState} from "react";
import {axiosInstance} from "./config/https";
import ContactForm from "./forms/ContactForm";

export default function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axiosInstance
            .get("titles")
            .then(response => setData(response.data.results.filter(item => item.primaryImage)))
            .catch(err => console.log(err))
    }, []);

    const EmptyMessage = () => <Alert severity="warning">Empty Response!</Alert>;

    const CardContent = () => data.map(item => {
        const {primaryImage: {url: uri, caption: {plainText: caption}}, titleText: {text: title}} = item;
        return (
            <Grid item xs={2} md={3} lg={4} key={item.id}>
                <MediaCard
                    imageUri={uri}
                    caption={caption}
                    title={title}/>
            </Grid>
        );
    });

    const appCallback = (data) => {
        console.log("Data from child", data);
    }

    return (
        <Container maxWidth="lg">
            <Grid
                container
                rowSpacing={4}
                columnSpacing={{xs: 1, sm: 1, md: 1, lg: 1}}
            >
                {data.length ? <CardContent/> : <EmptyMessage/>}

                {/*<Grid item xs={2} md={3} lg={4}>
                    <ContactForm callback={appCallback}/>
                </Grid>*/}
            </Grid>
        </Container>
    )
        ;
}
