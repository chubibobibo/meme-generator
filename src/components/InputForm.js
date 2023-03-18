import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import memesData from '../memesData'

function InputForm() {

    //fucntion to handle clicks by creating a random number that we will use to select a random entry in our memesdata(memesData.data.memes) the random number must be the between 0 and the exact length of the array. Then we will be using taht randNumn to select the url of the image. for the meantime we will jsut log it out
    function handleClick() {
        const randNum = Math.floor(Math.random() * memesData.data.memes.length)
        const url = memesData.data.memes[randNum].url
        console.log('clicked')
        console.log(url)
    }
    return (
        <Container className='input-form'>
            <div>
                <Row>
                    <Col className='first-input'>
                        <Form.Group className="mb-3 mt-5" controlId="formBasicText">
                            <Form.Control type="text" placeholder="Shut up" />
                        </Form.Group>
                    </Col>
                    <Col className='second-input'>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="text" placeholder="and take my money" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        </Form.Group>
                    </Col>
                </Row>
                <Button onClick={handleClick} style={{ backgroundColor: 'blueviolet' }} className='btn-submit' variant="primary" type="submit">
                    Get a new meme image
                </Button>
            </div>
        </Container>
    )
}

export default InputForm