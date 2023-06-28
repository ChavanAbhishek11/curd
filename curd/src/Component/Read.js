
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Read() {
  const [apiData, setApiData] = useState([]);

  function getData() {
    axios.get("https://6476df159233e82dd53a6dcb.mockapi.io/crud")
      .then((response) => {
        setApiData(response.data);
        console.log("data", response.data);
      });
  }
  function handleDelete(id){
    axios.delete(`https://6476df159233e82dd53a6dcb.mockapi.io/crud/${id}`)
    .then(()=>{
      getData();
    })
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="row">
      <div className="col-md-12">
      <div className='mt-2 mb-2'>
      <Link to="/create">
      <button className='btn-primary'>Create New Data</button>
      </Link>
      </div>
        <table className="table table-striped table-dark table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>AGE</th>
              <th>EMAIL</th>
              <th>GENDER</th>
              <th>EDIT</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {apiData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.e_name}</td>
                <td>{item.e_age}</td>
                <td>{item.e_email}</td>
                <td>{item.e_gender}</td>
                <td>
                  <button className="btn btn-primary">Edit</button>
                </td>
                <td>
                  <button className="btn btn-danger" onClick={()=>{if (window.confirm("Are you sue you want to delete??")){handleDelete(item.id)}}}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Read;
