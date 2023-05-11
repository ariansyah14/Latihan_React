import React, { useEffect, useState } from 'react'
import { Button, Typography, Input, Card } from 'antd'
import axios from 'axios';

const {Title, Text} = Typography;

const Headers = ({name, age}) => {
    const [counterAge, setCounterAge] = useState(age);
    const [employee, setEmployee] = useState({name: "rian", alamat: "pekalongan"});
    const [user, setUser] = useState({});

    const handleCounterAge = () => {
        setCounterAge((prevstate) => prevstate + 1);
    };

    const handleStateObject = (val) => {
        setEmployee((prevstate) => ({...prevstate, alamat: val.target.value}));
    };

    useEffect(() => {
        axios
        .get("https://api.github.com/users/ariansyah14")
        .then((data) => {
            setUser(data.data)
        })
        .catch((err) => {
            console.log(err);
        }
        )
    }, []);

  return (
    <>
    <div>
      <h1>Hello nama saya {name}</h1>
      <h1>Umur saya {counterAge}</h1>
      <Button type="primary" onClick={handleCounterAge}>
        Update Umur saya
      </Button>
    </div>

    <Title>{employee.name}</Title>
    <Title>{employee.alamat}</Title>
    <Input onChange={handleStateObject} type='text'></Input>
    <br/><br/>
    </>
  )
}


export default Headers
