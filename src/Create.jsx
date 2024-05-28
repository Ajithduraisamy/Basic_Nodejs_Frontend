import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Create() {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            name: "",
            age: 0
        },
        validate: (values) => {
            const errors = {};
            if (!values.name) {
                errors.name = 'Required';
            }
            if (!values.age) {
                errors.age = 'Required';
            } else if (values.age < 0) {
                errors.age = 'Age must be a positive number';
            }
            return errors;
        },
        onSubmit: async (values) => {
            try {
                await axios.post('http://localhost:3001/user', values);
                navigate('/');
            } catch (error) {
                console.error("Error submitting form:", error.message);
                alert(`Error: ${error.response?.data?.Message || error.message}`);
            }
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                />
                {formik.errors.name ? <div>{formik.errors.name}</div> : null}
            </div>
            <div>
                <label htmlFor="age">Age</label>
                <input
                    type="number"
                    name="age"
                    value={formik.values.age}
                    onChange={formik.handleChange}
                />
                {formik.errors.age ? <div>{formik.errors.age}</div> : null}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Create;
