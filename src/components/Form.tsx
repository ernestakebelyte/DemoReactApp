import React, { useEffect, useState } from "react";

import CustomTextField from "./CustomTextField";
import CustomDropDown from "./CustomDropDown";
import { Button, Paper, Typography, createStyles, makeStyles } from "@material-ui/core";
import { TaskType, fetchTaskTypes } from "../api/taskTypes/taskTypes";
import { Task, saveTask } from "../api/taskTypes/tasks";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles(() => createStyles({
    form: {
        display: "flex",
        flexDirection: "column",
    },
    container: {
        backgroundColor: "#ffffff",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        padding: 30,
        textAlign: "center"
    },
    title: {
        margin: "0px 0 20px 0"
    },
    button: {
        margin: "20px 0"
    }
}))

const Form = () => {

    const classes = useStyles();
    const [task, setValues] = useState<Task>({
        name: "",
        description: "",
        taskTypeId: 0,
        taskTypeName: "",
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...task, [event.target.name]: event.target.value });
    }

    const notify = () => {
        toast("Submitted");
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        saveTask(task);
        notify();
    }
    const [taskTypes, setTaskTypes] = useState<TaskType[]>([]);

    useEffect(() => {
        fetchTaskTypes().then((data) => setTaskTypes(data));
    }, []);


    return (
        <Paper className={classes.container}>
            <Typography variant={"h4"} className={classes.title}>Task Form</Typography>
            <form onSubmit={(e) => handleSubmit(e)} className={classes.form}>
                <CustomTextField changeHandler={handleChange} label={"Task Name"} name={"name"} />
                <CustomTextField changeHandler={handleChange} label={"Task Description"} name={"description"} />
                <CustomDropDown label={"Task Type"} name={"taskTypeId"} changeHandler={handleChange} 
                    values={taskTypes} currentValue={task.taskTypeId} />
                <Button type={"submit"} variant={"contained"} className={classes.button}>Submit</Button>
            </form>
        </Paper>
    );
}

export default Form;