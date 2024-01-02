import React,{useEffect, useState} from 'react'
import { getExchangePosts } from '../services/user-service';
import { Col, Row, Button } from 'reactstrap';
import PostExchange from './PostExchange';
function MarketPlaceExchange() {
  const [posts,setPosts]=useState(null);
  
  useEffect(()=>{
    //load all the borrow posts from server
    getExchangePosts().then((response)=>{
      console.log(response);
      setPosts(response);
    }).catch((error)=>{
      console.log(error);
    })
  },[])
  return (
    posts?(
    <div className="container-fluid">
      <Row >
        <Col md={{size:10,offset:1}}>
          <h1>Exchangeable Books</h1>
          <Button color='primary' href="/user/addexchange">Add Books to Exchange</Button>
         {
           posts.map((post) => {
             return <PostExchange post={post} key={post.bid} />
          })
          
         }
        </Col>
      </Row>
    </div> 
    ) :"Loading..."
   
  )
}

export default MarketPlaceExchange;