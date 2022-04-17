import React from 'react'
import {Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const General = () => {
  return (
    <div>
      
      <div className="container mt-5 text-center">
      <Card className="mb-3">
        <h2 class="display-4 mb-3">General Information</h2>
  <Card.Body>
    <div className="contianer mb-5 py-4">
    <Card.Title  className="text-success lead"><h3>Name</h3></Card.Title>
      <Card.Text><h2>Samuel Fisher</h2></Card.Text>
    </div>
    <div className="contianer mb-5 py-4">
    <Card.Title  className="text-success lead"><h3>Email</h3></Card.Title>
      <Card.Text className="text-primary"><h2>samfisher27@gmail.com</h2></Card.Text>
    </div>

    <div className="contianer mb-5 py-4">
    <Card.Title  className="text-success lead"><h3>Address</h3></Card.Title>
      <Card.Text><h2>No 20 Template Street, Some town, Particular State, Nigeria</h2></Card.Text>
    </div>

    <div className="contianer mb-5 py-4">
    <Card.Title  className="text-success lead"><h3>Phone Number</h3></Card.Title>
      <Card.Text><h2>(+234) 805 444 5556</h2></Card.Text>
    </div>

    <div className="contianer py-4">
    <Card.Title  className="text-success lead"><h3>Age</h3></Card.Title>
      <Card.Text><h2>27</h2></Card.Text>
    </div>
    <div className="contianer py-4">
    <Card.Title  className="text-success lead"><h3>Position sought for</h3></Card.Title>
      <Card.Text><h2>Senior Software Engineer</h2></Card.Text>
    </div>
    </Card.Body>
</Card>
        
        </div>
    </div>
    
  );
}

export default General