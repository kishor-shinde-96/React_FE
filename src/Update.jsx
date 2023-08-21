import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Update() {
    const navigate = useNavigate();
    const { id } = useParams();    

    useEffect(() => {
        axios.get('http://localhost:5310/read/' + id)
            .then(res => {
                console.log(res);
                //  setValues(res.data[0]);
                setValues({...values,
                    name: res.data[0].name,
                    city: res.data[0].city,
                    education: res.data[0].education,
                    age: res.data[0].age
                })
            })
            .catch(err => console.log(err));
    }, [])

    const [values, setValues] = useState({
        name: '',
        city: '',
        education: '',
        age: '',
    });

    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put('http://localhost:5310/update/' + id, values)
            .then(res => {
                console.log(res)
                navigate('/')
            }).catch(err => console.log(err));

    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleUpdate}>
                    <h2>Update Student</h2>
                    <div className='mb-2'>
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder='Enter Name' className='form-control' value={values.name}
                            onChange={e => setValues({ ...values, name: e.target.value })} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">City</label>
                        <input type="text" placeholder='Enter city' className='form-control' value={values.city}
                            onChange={e => setValues({ ...values, city: e.target.value })} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Education</label>
                        <input type="text" placeholder='Enter Education' className='form-control' value={values.education}
                            onChange={e => setValues({ ...values, education: e.target.value })} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Age</label>
                        <input type="text" placeholder='Enter Age' className='form-control' value={values.age}
                            onChange={e => setValues({ ...values, age: e.target.value })} />
                    </div>
                    <button className='btn btn-success'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default Update