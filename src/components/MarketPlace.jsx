import React,{useEffect, useState} from 'react'
import { getBuyPosts } from '../services/user-service';
import { Button, Col, Row } from 'reactstrap';
import Post from './Post';
function MarketPlace() {
  const [posts,setPosts]=useState(null);
  
  useEffect(()=>{
    //load all the sell posts from server
    getBuyPosts().then((response)=>{
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
          <h1>Market Place for Selling Books</h1>
          <Button color='primary' href="/user/addsell">Add Books for Sell</Button>
         {
           posts.map((post) => {
             return <Post post={post} key={post.bid} />
          })
          
         }
        </Col>
      </Row>
    </div> 
    ) :"Loading..."
   
  )
}

export default MarketPlace;