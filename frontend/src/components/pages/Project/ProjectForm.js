import React, { useState } from 'react';
import Input from '../form/Input';
import styles from './ProjectForm.module.css';

function ProjectForm() {
    const [formData, setFormData] = useState({
        name: '',
        budget: '',
        category_id: '',
        file: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            file: e.target.files[0]
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('name', formData.name);
        data.append('budget', formData.budget);
        data.append('category_id', formData.category_id);
        data.append('file', formData.file);

        fetch('http://localhost:5000/upload-file', { // Changed port here
            method: 'POST',
            body: data
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <Input 
                type="text"
                text="Nome do projeto"
                name="name"
                placeholder="Insira o nome do seu projeto"
                handleOnChange={handleChange}
                value={formData.name}
            />
            <Input 
                type="number"
                text="Orçamento do projeto"
                name="budget"
                placeholder="Insira o orçamento total"
                handleOnChange={handleChange}
                value={formData.budget}
            />
            <div className={styles.form_group}>
                <label htmlFor="category_id" className={styles.label}>Categoria</label>
                <select name="category_id" id="category_id" className={styles.select} onChange={handleChange}>
                    <option disabled>Seleciona a categoria</option>
                    <option value="1">Categoria 1</option>
                    <option value="2">Categoria 2</option>
                </select>
            </div>
            <div className={styles.form_group}>
                <label htmlFor="file" className={styles.label}>Arquivo</label>
                <input type="file" name="file" id="file" className={styles.input} onChange={handleFileChange} />
            </div>
            <div className={styles.form_group}>
                <input type="submit" value="Criar projeto" className={styles.submit_button} />
            </div>
        </form>
    );
}

export default ProjectForm;
