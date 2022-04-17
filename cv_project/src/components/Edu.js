import React from 'react'
import {Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Educational = () => {
  return (
    <div>
       
      <div className="container mt-5 text-center">
      <Card className="mb-3">
        <h2 class="display-4 mb-3">Educational Experience</h2>
  <Card.Body>
    <div className="contianer mb-5 py-4">
    <Card.Title  className="text-success lead"><h3>School Name</h3></Card.Title>
      <Card.Text><h2>University of Template School</h2></Card.Text>
    </div>
    <div className="contianer mb-5 py-4">
    <Card.Title  className="text-success lead"><h3>Title of Study</h3></Card.Title>
      <Card.Text className="text-primary"><h2>(B.Eng) Software Engineering</h2></Card.Text>
    </div>

    <div className="contianer mb-5 py-4">
    <Card.Title  className="text-success lead"><h3>Year of Bachelor's degree</h3></Card.Title>
      <Card.Text><h2>2009 to 2014</h2></Card.Text>
    </div>
    <hr></hr>
    <div className="contianer py-4">
    <Card.Title  className="text-success lead"><h3>School Name</h3></Card.Title>
      <Card.Text><h2>Master University</h2></Card.Text>
    </div>
    <div className="contianer mb-5 py-4">
    <Card.Title  className="text-success lead"><h3>Title of Study</h3></Card.Title>
      <Card.Text className="text-primary"><h2>(M.Eng) Software Engineering</h2></Card.Text>
    </div>
    <div className="contianer mb-5 py-4">
    <Card.Title  className="text-success lead"><h3>Year of Master's degree</h3></Card.Title>
      <Card.Text><h2>2016 to 2020</h2></Card.Text>
    </div>
    </Card.Body>
</Card>
        
        </div>
    </div>
    
  );
}

export default Educational