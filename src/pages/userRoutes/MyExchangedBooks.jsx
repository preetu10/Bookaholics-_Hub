/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect,useState,useContext} from 'react'
import Base from '../../components/Base'
import {Table,Col,Row} from "reactstrap"
import {getMyExchange} from '../../services/user-service';
import { useParams,useNavigate } from 'react-router-dom';
import userContext from '../../context/userContext';
// import {toast} from 'react-toastify';
const MyExchangedBooks=()=> {
    const object=useContext(userContext);
    const [posts,setPosts]=useState();
    const {eEmail}=useParams();
    const navigate=useNavigate();
  
  useEffect(()=>{
    getMyExchange(eEmail).then((response)=>{
        console.log(response);
      setPosts(response);
    }).catch((error)=>{
      console.log(error);
    })
  },[eEmail]);
  return (
  <Base>
   <Row className="m-4">
        <Col>
        <h2 className="mb-4">My Exchanged Books</h2>
        <Table responsive striped bordered={false} className="text-justify-center">
            <thead>
                <tr className='text-center'>
                    <th>Serial No</th>
                    <th>Title of Book</th>
                    <th>Author of Book</th>
                    <th>Edition of Book</th>
                    <th>Request Time</th>
                    <th>Title of Desired Book</th>
                    <th>Author of Desired Book</th>
                    <th>Edition of Desired Book</th>
                    <th>Exchanger Email</th>
                    <th>State</th>
                </tr>
            </thead>
            {posts?(
            <tbody>            {posts.map((book) => (
              
               <tr key={book.epId} className='text-center'> 
                        <td>{book.epId}</td>
                        <td>{book.b_title}</td>
                        <td>{book.b_authorname}</td>
                        <td>{book.b_edition}</td>
                        <td>{book.postAt}</td>
                        <td>{book.wishedBook}</td>
                        <td>{book.wishedBookAuthor}</td>
                        <td>{book.wishedBookEdition}</td>
                        <td>{book.soldBy_Email}</td>
                        <td>{book.state}</td>
                    </tr>
                    ))}
                    </tbody>):
                    <>
                    <h3>No requests found...</h3>
                    </>
            }
        </Table>
   </Col>
   </Row>
    </Base>
  )
}

export default MyExchangedBooks;