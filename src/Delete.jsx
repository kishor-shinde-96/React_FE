import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Delete() {

 const { id } = useParams();
 const navigate = useNavigate();

 useEffect(() => {
    axios.delete('http://localhost:5310/delete/' + id)
      .then(res => console.log(res))
      .catch(err => console.log(err))
      navigate('/')
  }, []);

  return (
    <div>Delete karle</div>
  )
}

export default Delete