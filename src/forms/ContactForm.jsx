import {TextField, Button} from "@mui/material";
import {useState} from "react";

const ContactForm = () => {
    const [form, setForm] = useState({
        goal: 'default goal',
        desc: 'default description',
        category: 'default category'
    });
    const onFormBlur = ({key, value}) => {
        if (!form[key] || form[key] === value) return;
        setForm((prevForm) => ({...prevForm, [key]: value}));
    }

    const onSave = () => {
        console.log('Saved Form Value', form);
    }

    return (
        <form>
            <TextField
                style={{width: "200px", margin: "5px"}}
                error={false}
                type="text"
                label="setgoal"
                variant="standard"
                defaultValue={form.goal}
                onBlur={(event) => onFormBlur({key: 'goal', value: event.target.value})}
            />
            <br/>
            <TextField
                style={{width: "200px", margin: "5px"}}
                type="text"
                label="goal description"
                variant="outlined"
                defaultValue={form.desc}
                onBlur={(event) => onFormBlur({key: 'desc', value: event.target.value})}
            />
            <br/>
            <TextField
                style={{width: "200px", margin: "5px"}}
                type="text"
                label="Diversity catagory"
                variant="filled"
                defaultValue={form.category}
                onBlur={(event) => onFormBlur({key: 'category', value: event.target.value})}
            />
            <br/>
            <TextField
                style={{width: "200px", margin: "5px"}}
                type="text"
                label="Attribute"
                variant="standard"
            />
            <br/>
            <TextField
                style={{width: "200px", margin: "5px"}}
                type="text"
                label="goal stage"
                variant="outlined"
            />
            <br/>
            <TextField
                style={{width: "200px", margin: "5px"}}
                type="number"
                label="job id"
                variant="outlined"
            />
            <br/>
            <TextField
                style={{width: "200px", margin: "5px"}}
                type="text"
                label="job region"
                variant="outlined"
            />
            <br/>
            <Button variant="contained" color="primary" onClick={onSave}>
                save
            </Button>
        </form>
    );
}

export default ContactForm;
