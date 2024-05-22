"use client"
import * as React from 'react';
import { Button, FormHelperText } from "@mui/material";
import { TextField } from "@mui/material";

const ButtonPpal = ({ colorButton, textButton, typeButton, iconoFinal, onClickButton }) => {
    return (
        <Button
            variant="contained"
            type={typeButton}
            color={colorButton}
            size="small"
            onClick={onClickButton}
            endIcon={iconoFinal}
            fullWidth={true}
            style={{ textTransform: 'inherit', fontSize: '14px', border: '1px solid #b8d704' }}>
            {textButton}
        </Button>

    );
}
const InputLight = ({ name, nameguide, color, error, helperText, onChange, nameValue, multiline, maxRows, value, disabled, textHelp, maxLength, required }) => {
    return (
        <>
            <TextField
                label={name}
                name={nameValue}
                placeholder={nameguide}
                variant="outlined"
                size="small"
                color={color}
                disabled={disabled}
                onChange={onChange}
                defaultValue={value}
                required={required}
                error={error}
                helperText={helperText}
                multiline={multiline}
                rows={maxRows}
                inputProps={{ maxLength: maxLength }}
                focused
                fullWidth
            />
            <FormHelperText id={name} sx={{ fontSize: '15px', pl: .5, color: '#fff' }}>
                {textHelp}
            </FormHelperText>
        </>
    )
}

export { ButtonPpal, InputLight };