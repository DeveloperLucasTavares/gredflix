import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import Form from '../../../components/Form';
import Table from '../../../components/Form/components/Table';

function CadastroCategoria() {

    const [categories, setCategories] = useState([]);

    function handleAddCategory(values) {
        setCategories([...categories, values])
    }

    return (
        <PageDefault>
            <Form onSubmit={handleAddCategory} />
            <ul>
                {categories.map((categoria, indice) => {
                    return (
                        <Table key={categoria + indice} categoria={categoria} />
                    )
                })}
            </ul>

            <Link to='/'>
                Ir para home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;