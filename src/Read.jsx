import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function Read() {
  const { id } = useParams();
  const [student, setStudent] = useState([])


  useEffect(() => {
    axios.get('http://localhost:5310/read/' + id)
      .then(res => {
        console.log(res)
        setStudent(res.data[0])
      })
      .catch(err => console.log(err))

  }, []);

  if (student.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <div className='p-2'>
          <h2>Student data</h2>
          <div>
            <strong>ID:</strong> <span>{student.id}</span>
          </div>
          <div>
            <strong>Name:</strong> <span>{student.name}</span>
          </div>
          <div>
            <strong>City:</strong> <span>{student.city}</span>
          </div>
          <div>
            <strong>Education:</strong> <span>{student.education}</span>
          </div>
          <div>
            <strong>Age:</strong> <span>{student.age}</span>
          </div>
        </div>
        <Link to="/" className='btn btn-primary me-3'>Back</Link>
        <Link to={`/edit/${student.id}`} className='btn btn-info'>edit</Link>
      </div>
    </div>
  )
}

export default Read