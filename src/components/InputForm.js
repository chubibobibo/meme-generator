import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function InputForm() {
    //setting up a new state with an initial state of an empty string:
    const [memeImg, setMemeImg] = useState(
        {
            topText: '',
            bottomText: '',
            randomImage: 'http://i.imgflip.com/1bij.jpg'
        }
    )
    const [allMemeImages, setAllMemeImages] = useState()

    // useEffect(() => {
    //     fetch("https://api.imgflip.com/get_memes")
    //         .then(res => {
    //             return res.json()
    //         })
    //         .then(data => {
    //             setAllMemeImages(data)
    //         })
    // }, [])

    //Another way of using useEffect in calling an API:
    useEffect(() => {
        //declaring an async function
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemeImages(data)
        }
        //calling the async function created to run it
        getMemes()
    }, [])

    //function to handle clicks by creating a random number that we will use to select a random entry in our memesdata(memesData.data.memes) the random number must be the between 0 and the exact length of the array. Then we will be using taht randNumn to select the url of the image. for the meantime we will jsut log it out
    //UPDATE: integrate the state in our click handler function
    function handleClick() {
        const randNum = Math.floor(Math.random() * allMemeImages.data.memes.length)
        const url = allMemeImages.data.memes[randNum].url
        //setting the new state with the random meme image we genrated
        // setAllMemeImages(allMemeImages.data.memes[randNum].url
        // )
        setMemeImg(prevMemeImg => ({
            ...prevMemeImg,
            randomImage: url,
        }))
        console.log('clicked')
        console.log(memeImg.randomImage)
    }

    function changeHandler(event) {
        const { name, value } = event.target
        setMemeImg(prevMemeImg => ({
            ...prevMemeImg,
            [name]: event.target.value
        }))
    }
    return (
        <Container className='input-form'>
            <div>
                <Row>
                    <Col className='first-input'>
                        <Form.Group className="mb-3 mt-5" controlId="formBasicText">
                            <Form.Control
                                type="text"
                                placeholder="Shut up"
                                name='topText'
                                onChange={changeHandler}
                                value={memeImg.topText}
                            />
                        </Form.Group>
                    </Col>
                    <Col className='second-input'>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control
                                type="text"
                                placeholder="and take my money"
                                name='bottomText'
                                value={memeImg.bottomText}
                                onChange={changeHandler}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        </Form.Group>
                    </Col>
                </Row>
                <Button onClick={handleClick} style={{ backgroundColor: 'blueviolet' }} className='btn-submit' variant="primary">
                    Get a new meme image
                </Button>
            </div>
            <div className='meme-image'>
                <h2 className='meme-text top'>{memeImg.topText}</h2>
                <img src={memeImg.randomImage} alt="" style={{ margin: '3rem 3rem', padding: '0rem 20rem', width: '80rem' }} />
                <h2 className='meme-text bottom'>{memeImg.bottomText}</h2>
            </div>
        </Container>
    )
}

export default InputForm