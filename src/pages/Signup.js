import React, { useState } from 'react'
import Base from '../components/Base'
import {Card, CardBody, Col, Row, CardHeader, Container, Form, FormGroup, Label, Input, Button} from "reactstrap";
import { signUp } from '../services/user-service';
import { toast} from 'react-toastify';
function Signup() {
    const [data, setData]=useState({
        name:'',
        email:'',
        address:'',
        phone:'',
        role:'',
        password:'',
        error:'',
    })
//   const [error,setError]=useState({
//     errors:{},
//     isError:false
//   })

  const handleChange = (event,property)=> {
    setData({...data,[property]:event.target.value})
  }
  const submitForm = (event)=>{
    event.preventDefault();
    //console.log(data);
    signUp(data).then((response)=>{
        toast.success("User is registered successfully."+ response.id);
        setData({
            name:'',
            email:'',
            address:'',
            phone:'',
            role:'',
            password:'',
        })
    }).catch((error)=>{
        console.log(error);
    })
  }
  const handleReset=()=>{
    setData(
        {
        name:'',
        email:'',
        address:'',
        phone:'',
        role:'',
        password:'',
        }
    )
  }
    return (
    <Base>
    <Container >
    <Row className="mt-4">
        <Col sm={{size:6,offset:3}}>
        <Card color="dark" outline>
        <CardHeader>
            <h3 className="text-center">Sign up for creating new account</h3>
        </CardHeader>
        <CardBody>
            <Form onSubmit={submitForm}>
                <FormGroup>
                    <Label for="name">Enter full name</Label>
                    <Input 
                    type="text"
                    placeholder="Enter here"
                    id="name"
                    onChange={(e)=>handleChange(e,'name')}
                    value={data.name}
                    required></Input>
                </FormGroup>
                <FormGroup>
                    <Label for="email">Enter email address</Label>
                    <Input 
                    type="text"
                    placeholder="Enter here"
                    id="email"
                    onChange={(e)=>handleChange(e,'email')}
                    value={data.email}
                    required></Input>
                </FormGroup>
                <FormGroup>
                    <Label for="address">Enter address</Label>
                    <Input 
                    type="text"
                    placeholder="Enter here"
                    id="address"
                    onChange={(e)=>handleChange(e,'address')}
                    value={data.address}
                    required></Input>
                </FormGroup>
                <FormGroup>
                    <Label for="tel">Enter phone number</Label>
                    <Input 
                    type="telephone"
                    placeholder="Enter here"
                    id="phone"
                    onChange={(e)=>handleChange(e,'phone')}
                    value={data.phone}
                    required></Input>
                </FormGroup>
                <FormGroup>
                    <Label for="role">Select Role</Label>
                    <Input 
                    type="select"
                    id="role"
                    onChange={(e)=>handleChange(e,'role')}
                    required>
                        <option value={"General"}>
                            General
                        </option>
                        <option value={"Publisher"}>
                            Publisher
                        </option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="name">Enter password name</Label>
                    <Input 
                    type="password"
                    placeholder="Enter here"
                    id="password"
                    onChange={(e)=>handleChange(e,'password')}
                    value={data.password}
                    required></Input>
                </FormGroup>
                <Container className="text-center">
                    <Button color="primary" outline>
                        Sign up
                    </Button>
                    <Button onClick={handleReset} color="secondary" outline className="m-4">
                        Reset
                    </Button>
                </Container>
            </Form>
        </CardBody>
    </Card>
        </Col>
    </Row>
    </Container>
    </Base>
  )
};

export default Signup;