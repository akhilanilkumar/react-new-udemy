import "./styles.css";
import {Container, Grid} from "@mui/material";
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
    return (
        <Container maxWidth="lg">
            <Grid
                container
                rowSpacing={4}
                columnSpacing={{xs: 1, sm: 1, md: 1, lg: 1}}
            >
                {/*{data.map(item => {
                        const {primaryImage: {url: uri, caption: {plainText: caption}}, titleText: {text: title}} = item;
                        return (
                            <Grid item xs={2} md={3} lg={4} key={item.id}>
                                <MediaCard
                                    imageUri={uri}
                                    caption={caption}
                                    title={title}/>
                            </Grid>
                        )
                    }
                )}*/}
                <Grid item xs={2} md={3} lg={4}>
                    <ContactForm/>
                </Grid>
            </Grid>
        </Container>
    )
        ;
}
