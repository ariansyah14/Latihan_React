import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

import { Card, Col, Row, Typography, Button, Input } from 'antd';


function User() {
    const [user, setUser] = useState([]);

useEffect(() => {
    axios
    .get("https://api.github.com/users")
    .then((data) => {
        setUser(data.data)
    })
    .catch((err) => {
        setUser([])
    }
    )
}, []);

  return (
    <>
    <Row>
    {
        user?.map((item, key) =>(
            <Col span={8}>
                <Link to={`/user/${item.login}`}>
                <Card style={{textAlign: 'center'}}>
                    <h1>{item.login}</h1>
                    <img src={item.avatar_url} 
                        style={{maxHeight: 150,
                        borderRadius: 50}}
                    />
                </Card>
                </Link>
            </Col>
        )
        
        )
    }
    </Row>
    </>
  )
}

export default User
