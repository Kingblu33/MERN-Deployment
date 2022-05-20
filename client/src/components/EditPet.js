import React, { useEffect, useState, } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import axios from 'axios'



const EditPet = (props) => {
    const { _id } = useParams();
    const [form, setForm] = useState({
        name: "",
        petType: "",
        petDescription: "",
        skill1: "",
        skill2: "",
        skill3: ""
    });
    const history = useHistory();
    const [errors, setErrors] = useState([]);
    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value

        })
    }
    useEffect(() => {
        axios.get(`http://localhost:8000/api/findone/pets/${_id}`)
            .then(res => {
                console.log(res.data)
                setForm({
                    name: res.data.name,
                    petType: res.data.petType,
                    petDescription: res.data.petDescription,
                    skill1: res.data.skill1,
                    skill2: res.data.skill2,
                    skill3: res.data.skill3
                })
            })

            .catch(err => console.log(err));
    }, [])
    const onSubmitHandler = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:8000/api/update/pets/${_id}`, form)
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
            <form onSubmit={onSubmitHandler}>
                {errors.map((err, index) => <p className="text-danger" key={index}>{err}</p>)}
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input value={form.name} type="text" name="name" className='form-control' onChange={onChangeHandler} />
                </div>
                <div className='form-group'>
                    <label htmlFor='name'>Pet Type:</label>
                    <input value={form.petType} type="text" name="petType" className='form-control' onChange={onChangeHandler} />
                </div>
                <div className='form-group'>
                    <label htmlFor='name'>Description:</label>
                    <input value={form.petDescription} type="text" name="petDescription" className='form-control' onChange={onChangeHandler} />
                </div>

                <div className='form-group'>
                    <label htmlFor='name'>Skill 1:</label>
                    <input value={form.skill1} type="text" name="skill1" className='form-control' onChange={onChangeHandler} />
                </div>
                <div className='form-group'>
                    <label htmlFor='name'>Skill 2:</label>
                    <input value={form.skill2} type="text" name="skill2" className='form-control' onChange={onChangeHandler} />
                </div>
                <div className='form-group'>
                    <label htmlFor='name'>Skill 3:</label>
                    <input value={form.skill3} type="text" name="skill3" className='form-control' onChange={onChangeHandler} />
                </div>
                <input type="submit" className='btn btn-info' value="Create Pet" />

            </form>

        </div>
    )
}

export default EditPet;