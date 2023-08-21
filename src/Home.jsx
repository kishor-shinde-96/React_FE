import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Home() {

    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5310/')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    })
    return (
        <div className='d-flex vh-100 bg-secondary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <h2>Student list</h2>
             
                <div className='d-flex justify-content-end'> 
                <Link to="/create" className='btn btn-success'>Create +</Link> 
                </div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>City</th>
                            <th>Education</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((student, index) => {
                            return (
                                <tr key={index}>
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                    <td>{student.city}</td>
                                    <td>{student.education}</td>
                                    <td>{student.age}</td>
                                    <td>
                                        <Link to={`/read/${student.id}`} className='btn btn-sm btn-info'>Read</Link>
                                        <Link to={`/edit/${student.id}`} className='btn btn-sm btn-primary mx-2'>Edit</Link>
                                        <Link to={`/delete/${student.id}`} className='btn btn-sm btn-danger'>Delete</Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default Home