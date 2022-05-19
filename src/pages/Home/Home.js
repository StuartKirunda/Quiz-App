import { Button, MenuItem, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import './Home.css';

function Home({ name, setName, fetchQuestions }) {
    const [category, setCategory] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = () => {
        // if (!name) {
        //     setError(true);
        // }
        // else {
        // setError(false);
        fetchQuestions(category);
        navigate('/quiz');
        // }
    };

    return (
        <div className='content'>
            <div className='settings'>

                <span style={{ fontSize: 30, color: 'white' }}>Welcome!!</span>
                <div className='settings_select'>
                    {/* {error && <ErrorMessage>Please fill in all the fields</ErrorMessage>}
                    <TextField
                        style={{ marginBottom: 25 }}
                        label="Enter your name"
                        variant='outlined'
                        onChange={(e) => setName(e.target.value)} /> */}

                    {/* <TextField
                        select
                        label="Select Category"
                        variant='outlined'
                        style={{ marginBottom: 30 }}
                        onChange={(e) => setCategory(e.target.value)}
                        value={category}>

                        {Categories.map((cat) => (
                            <MenuItem key={cat.category} value={cat.value}>{cat.category}</MenuItem>
                        ))}

                    </TextField> */}

                    <Button variant='contained' color='primary' size="small" onClick={handleSubmit}>Start Quiz</Button>
                </div>
            </div>

            <img src='/quiz2.jpg' className='banner' alt='quiz img' />
        </div>
    );
}

export default Home;