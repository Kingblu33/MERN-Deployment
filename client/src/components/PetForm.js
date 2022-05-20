import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'


const PetForm = (props) => {
    const [form, setForm] = useState({
        name: "",
        petType: "",
        petDescription: "",
        skill1: "",
        skill2: "",
        skill3: ""
    });
    const [errors, setErrors] = useState([]);

    const history = useHistory();
    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value

        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8000/api/create/pets", form)
            .then(res => {
                history.push("/pet/home")
            })
            .catch(err => {
                console.log(err)
                console.log(err.response.data.err)
                const errorResponse = err.response.data.err.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);

            })
    }


    return (
        <div>
            <Link to="/pet/home">Go Home</Link>

            <form onSubmit={onSubmitHandler}>
                {errors.map((err, index) => <p className="text-danger" key={index}>{err}</p>)}
                <div className='form-group'>
                    <label htmlFor='name'>Name:</label>
                    <input type="text" name="name" className='form-control' onChange={onChangeHandler} />
                </div>
                <div className='form-group'>
                    <label htmlFor='name'>Pet Type:</label>
                    <input type="text" name="petType" className='form-control' onChange={onChangeHandler} />
                </div>
                <div className='form-group'>
                    <label htmlFor='name'>Description:</label>
                    <input type="text" name="petDescription" className='form-control' onChange={onChangeHandler} />
                </div>

                <div className='form-group'>
                    <label htmlFor='name'>Skill 1:</label>
                    <input type="text" name="skill1" className='form-control' onChange={onChangeHandler} />
                </div>
                <div className='form-group'>
                    <label htmlFor='name'>Skill 2:</label>
                    <input type="text" name="skill2" className='form-control' onChange={onChangeHandler} />
                </div>
                <div className='form-group'>
                    <label htmlFor='name'>Skill 3:</label>
                    <input type="text" name="skill3" className='form-control' onChange={onChangeHandler} />
                </div>
                <input type="submit" className='btn btn-info' value="Create Pet" />

            </form>


        </div>

    );

}

export default PetForm;