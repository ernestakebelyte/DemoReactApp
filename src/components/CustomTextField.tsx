import { TextField } from '@material-ui/core';
import React from 'react';

type CustomTextFieldProps = {
    label: string,
    name: string,
    changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

const CustomTextField = (props: CustomTextFieldProps) => {
    return (
        <TextField
            label={props.label}
            name={props.name}
            onChange={props.changeHandler}

            variant={"outlined"}
            size={"small"}
            margin={"dense"}
        />
    );
}

export default CustomTextField