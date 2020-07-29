import React, { useState }from 'react';

import { FormContainer, TextField, Label} from './styles';

function Form({ onSubmit }) {
    const data = {
        name: '',
        description: '',
        color: '',
    };

    const [values, setValues] = useState(data);
    function setData(key, value) {
        setValues({
            ...values,
            [key]: value,
        })
    }

    function handleChange(e) {
        setData(e.target.getAttribute('name'), e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(
            values
        )
        setData('name', '');
    }

    return (
        <FormContainer onSubmit={handleSubmit}>
            <h1>Nova Categoria</h1>
            <Label id='floatField'htmlFor={values.name}>Nome da categoria</Label>
            <TextField
                name='name'
                type="text"
                placeholder='Filmes'
                value={values.name}
                onChange={handleChange}
            />
            <br />
            <button type='submit'>Enviar</button>
        </FormContainer>
    )
}

export default Form;