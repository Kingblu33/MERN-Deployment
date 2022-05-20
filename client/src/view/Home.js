import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const Home = (props) => {

  const [petList, setPetList] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/api/find/pets")
      .then((res) => {
        const results = res.data.sort((a, b) => a.petType.localeCompare(b.petType))
        setPetList(results);
      })
      .catch(err => console.log(err))
  }, [])
  petList.sort((a, b) => {
    return a.name - b.name;
  })
  console.log(petList)
  return (
    <div>
      <Link to="/add/pet">Add Pet</Link>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Type</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>

        {
          petList.map((pet, index) => {
            return (
              <tr key={index}>
                <td>{pet.name}</td>
                <td>{pet.petType}</td>
                <td>

                  <Link to={`/pet/details/${pet._id}`}>Details</Link> | <Link to={`/pet/edit/${pet._id}`}>Edit</Link>
                </td>
              </tr>
            );
          })
        }
      </table>
    </div>

  );
}



export default Home;