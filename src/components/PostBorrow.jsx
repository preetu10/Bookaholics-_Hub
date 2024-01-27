import React from 'react'
import { Button, Card, CardBody, CardText, Badge } from 'reactstrap'

function PostBorrow({post={b_title:"This is default post title",b_authorname:"Author",b_edition:"Edition",borrId:"Identity code",b_numOfPages:"number",b_price:"price",b_description:"Default Post description",image:"coverImage"}}) {
  const imageSource='/'+post.image.replace(/^.*?\\public\\/, '').replace(/\\/g, '/');
  return (
    <Card className='border-1 shadow-sm my-3'>
        <CardBody>
          <h4>
        <Badge color= "info" >
           
        </Badge>
          </h4>
            <h1>
                {post.b_title}
            </h1>
            <h4>
             By {post.b_authorname}
            </h4>
            <h5>
            {post.b_edition} Edition   ||  Number of Pages: {post.b_numOfPages}
            </h5>
            <h6>
            Book ID: {post.borrId}
            </h6>
              <img src={imageSource} alt="cover page"  width="210px" height="210px"/> 
            <h5>
            <Badge color= "info" >
                 Tk. {post.b_price}
            </Badge>
            </h5>
            <CardText>
                {post.b_description}...
            </CardText>
            <div className='text-center'>
              <Button href={`/user/borrow-book-info/${post.borrId}`}>Borrow</Button>
            </div>
        </CardBody>
    </Card>
  )
}

export default PostBorrow;