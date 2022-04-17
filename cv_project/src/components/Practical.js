import React from 'react'
import {Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Practical = () => {
  return (
    <div>
       
      <div className="container mt-5 text-center">
        
      <Card className="mb-3">
        <h2 class="display-4 mb-3">Work Experience</h2>
  <Card.Body>
    <div className="contianer mb-5 py-4">
    <Card.Title  className="text-success lead"><h3>Company Name</h3></Card.Title>
      <Card.Text><h2>Maximum Software Technologies</h2></Card.Text>
    </div>
    <div className="contianer mb-5 py-4">
    <Card.Title  className="text-success lead"><h3>Position Title</h3></Card.Title>
      <Card.Text className="text-primary"><h2>Junior Software Engineer</h2></Card.Text>
    </div>

    <div className="contianer mb-5 py-4">
    <Card.Title  className="text-success lead"><h3>Year</h3></Card.Title>
      <Card.Text><h2>2014 to 2016</h2></Card.Text>
    </div>
    <hr></hr>
    <div className="contianer mb-5 py-4">
    <Card.Title  className="text-success lead"><h3>Company Name</h3></Card.Title>
      <Card.Text><h2>Summit Web Builders</h2></Card.Text>
    </div>
    <div className="contianer mb-5 py-4">
    <Card.Title  className="text-success lead"><h3>Position Title</h3></Card.Title>
      <Card.Text className="text-primary"><h2>Frontend Web developer</h2></Card.Text>
    </div>
    <div className="contianer mb-5 py-4">
    <Card.Title  className="text-success lead"><h3>Year</h3></Card.Title>
      <Card.Text><h2>2016 to 2021</h2></Card.Text>
    </div>
    </Card.Body>
</Card>
        
        </div>
    </div>
    
  );
}

export default Practical