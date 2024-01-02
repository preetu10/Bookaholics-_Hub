import React from 'react'
import Base from '../../components/Base';
import {Card, CardBody, Col, Row, CardHeader, Container, Form, FormGroup, Label, Input, Button, Table} from "reactstrap";

const OrderPlaceForm=()=> {
    
  return (
    <Base>
    <Container className="mt-3">
    <Row className="mt-4">
        <Col sm={{size:8,offset:2}}>
        <Card color="dark" outline>
        <CardHeader>
            <h3 className="text-center">Order Details</h3> 
            <p className="text-center">Please Fill Out Your Information Carefully</p>
        </CardHeader>
        <CardBody>
        <Table responsive striped bordered={false} className="text-justify-center">
                <tbody>
                  <tr>
                  <td>
                    <h6>Book ID:</h6>
                  </td>
                  <td>
                    40
                  </td>
                  </tr>
                  <tr>
                  <td>
                    <h6>Title of Book:</h6>
                  </td>
                  <td>
                    Probability and Statistics
                  </td>
                  </tr>
                  <tr>
                  <td>
                    <h6>Author of Book:</h6>
                  </td>
                  <td>
                    Bertsekas
                  </td>
                  </tr>
                  <tr>
                  <td>
                    <h6>Edition:</h6>
                  </td>
                  <td>
                    7th
                  </td>
                  </tr>
                  <tr>
                  <td>
                   <h6>Number of Pages:</h6>
                  </td>
                  <td>
                    230
                  </td>
                  </tr>
                  <tr>
                  <td>
                    <h6>Price:</h6>
                  </td>
                  <td>
                    250
                  </td>
                  </tr>
                  <tr>
                  <td>
                    <h6>Seller Email:</h6>
                  </td>
                  <td>
                    mahfujasolainman77@gmail.com
                  </td>
                  </tr>
                </tbody>
              </Table>
            <Form >
            <FormGroup>
                    <Label for="quantity">Enter Quantity</Label>
                    <Input 
                    type="number"
                    placeholder="Enter here"
                    id="b_quantity"
                    required></Input>
                </FormGroup>
                <FormGroup>
                    <Label for="address">Enter Address from Where You Will Receive the Order</Label>
                    <Input 
                    type="address"
                    placeholder="Enter here"
                    id="pickupPoint"
                    required></Input>
                </FormGroup>
                <FormGroup>
                    <Label for="email">Enter Your Email Address</Label>
                    <Input 
                    type="email"
                    placeholder="Enter here"
                    id="takenBy_Email"
                    required></Input>
                </FormGroup>
                <Container className="text-center">
                    <Button color="info" outline>
                        Place Order
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
}

export default OrderPlaceForm;



