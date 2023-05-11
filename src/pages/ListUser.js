import React, {useEffect, useState} from 'react'
import { Card } from 'antd';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ListUser = () => {
    const { id } = useParams();
    const [ListUser, setListUser] = useState({});

    useEffect(() => {
        axios
        .get(`https://api.github.com/users/${id}`)
        .then((data) => {
            setListUser(data.data)
        })
        .catch((err) => {
            setListUser([])
        }
        )
    }, [id]);

    console.log(ListUser);
  return (

    <Card style={{textAlign: 'center'}}>
        <img src={ListUser.avatar_url} 
            style={{maxHeight: 200,
            borderRadius: 50}}
        />
        <h1>{ListUser.login}</h1>
        <h1>Actual Name : {ListUser.name}</h1>
    </Card>
    )
}

export default ListUser
