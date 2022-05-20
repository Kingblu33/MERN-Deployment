
import React, { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import axios from "axios";



const Details = (props) => {
    const { _id } = useParams();
    const [pet, setPet] = useState({});
    const history = useHistory();
    useEffect(() => {
        axios.get(`http://localhost:8000/api/findone/pets/${_id}`)
            .then(res => {
                console.log(res.data)
                setPet(res.data)
            })
            .catch(err => console.log(err));
    }, [])
    const deletePet = () => {
        axios
            .delete(`http://localhost:8000/api/delete/pets/${_id}`)
            .then((res) => {
                console.log(res.data);
                history.push("/pet/home")
            })
            .catch((err) => console.log(err))
    }
    return (
        <div>
            <p>Name: {pet.name}</p>
            <p>Type: {pet.petType}</p>
            <p>Description: {pet.petDescription}</p>
            <p>Skill1: {pet.skill1}</p>
            <p>Skill2: {pet.skill2}</p>
            <p>Skill3: {pet.skill3}</p>
            <button className="btn btn-danger" onClick={deletePet}>Delete Pet</button>

        </div>
    );


}

export default Details;