import { MenuItem, TextField } from "@material-ui/core";
import React from "react";

type CustomDropDownProps = {
    label: string,
    name: string,
    changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
    values: Array<{ id: number, name: string }>,
    currentValue: number
}

const CustomTextField = (props: CustomDropDownProps) => {
    return (
        <TextField
            select
            label={props.label}
            name={props.name}
            onChange={props.changeHandler}
            value={props.currentValue}

            variant={"outlined"}
            size={"small"}
            margin={"dense"}
        >
            {props.values.map(option => (
                <MenuItem key={option.id} value={option.id}>
                    {option.name}
                </MenuItem>
            ))}
        </TextField>
    );
}

export default CustomTextField