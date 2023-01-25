import React, {useEffect} from 'react'
import { useState } from 'react';
import { Container, Row, Col, Form, Card } from 'react-bootstrap'
import './style.css'

function NewPage() {

    const [Post, setPost] = useState(0);
    const [Length, setLength] = useState(0);
    const [Height, setHeight] = useState(0);
    const [Size, setSize] = useState(0);
    const [PostHeight, setPostHeight] = useState(0);
    const [Sections, setSections] = useState(0);
    const [NumberofRales, setNumberofRales] = useState(0);
    const [RalesperSection, setRalesperSection] = useState(0);
    const [Pickets, setPickets] = useState(0);
    const [PicketWidth, setPicketWidth] = useState(0);
    const [PicketSpacing, setPicketSpacing] = useState(0);
    const [PostWidth, setPostWidth] = useState(0);
    const [PostThick, setPostThick ] = useState(0);
    const [PostDiameter, setPostDiameter] = useState(0);
    const [concrete, setConcrete] = useState(0);
    const [value, setValue] = useState(0);

    var [value1, setValue1] = useState(0) ;
    var [post, setpost] = useState(0);
    var [rales, setrales] = useState(0);
    var [pickets, setpickets] = useState(0);
    
    
    useEffect(() => {
        if (Length ===0 || Size === 0)
        {
            setPost(0);
            setSections(0);
        }
        else if (Length > 0 && Size > 0)
        {
            post = (Length/Size) + 1;   Math.ceil(post);
            setPost(post);
            setSections(Post-1);
        }
        if (Height === 0)
        {
            setPostHeight(0);
        }
        else if (Height > 0)
        {
            setPostHeight(Height*1.5);
        }
        if (RalesperSection !== 0)
        {
            rales = RalesperSection * Sections; Math.ceil(rales);
            setNumberofRales(rales);
        }
        if (PicketSpacing == 0)
        {
            pickets = (parseInt(Length)*39.37)/((parseInt(PicketWidth)/2.54) + (parseInt(PicketSpacing)/2.54)) + 0.0001;
            Math.ceil(pickets);
            setPickets(0);
        }
        if (Length !== 0 && PicketSpacing !== 0 && PicketWidth !== 0)
        {
            setPickets(pickets);
        }
        if (PostWidth == 0 || PostThick == 0 || PostDiameter == 0)
        {
            setConcrete(0);
        }
        if (PostThick !== 0 && PostWidth !== 0 && PostDiameter == 0)
        {
            setConcrete(PostThick*PostWidth*(PostHeight/Height));
        }
        if (PostThick !== 0 && PostWidth == 0 && PostDiameter !== 0)
        {
            setConcrete(PostThick*PostDiameter);
        }
    }, [Length, Size, Height, Post, 
        Sections, PostHeight, post,
        RalesperSection, NumberofRales
        ,rales, PicketSpacing, PicketWidth, 
        pickets, Pickets])

  return (
    <Container className='body'>

        <Row>
            <Col md={12}>
                <Card.Img variant="bottom" src={require('../images/2.png')}
                style={{
                        
                        border: '1px solid black',
                        margin: 'auto',
                        display: 'block',
                        width: '60%',
                        height: '100%',
                    }}
                />
            </Col>
        </Row>


    <Container style={
        {
            border: '1px solid black',
            margin: 'auto',
            display: 'block',
            marginTop: '10px',
            marginBottom: '10px',
        }}>
        <Row>
            <Col md={7}>
            <Form>
            <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={5}>
                    <h6>Enter Fence Length (m)</h6>
                </Form.Label>
                <Col sm={5}>
                    <Form.Control type="number" placeholder="Enter length" onChange={(e) => setLength(e.target.value)} />
                </Col>

                <Form.Label column sm={5}>
                    <h6>Enter Size of Sheet (m)</h6>
                </Form.Label>
                <Col sm={5}>
                    <Form.Control type="number" placeholder="Enter size" onChange={(e) => setSize(e.target.value)} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={5}>
                    <h6>Enter the Fence Height (m)</h6>
                </Form.Label>
                <Col sm={5}>
                    <Form.Control type="number" placeholder="Enter height" onChange={(e) => setHeight(e.target.value)} />
                </Col>

                <Form.Label column sm={5}>
                    <h6>Number of Rales per Section</h6>
                </Form.Label>
                <Col sm={5}>
                    <Form.Control type="number" placeholder="Enter rales" onChange={(e) => setRalesperSection(e.target.value)} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={5}>
                    <h6>Enter Picket Width (cm)</h6>
                </Form.Label>
                <Col sm={5}>
                    <Form.Control type="number" placeholder="Enter width" onChange={(e) => setPicketWidth(e.target.value)} />
                </Col>

                <Form.Label column sm={5}>
                    <h6>Enter Picket Spacing (cm)</h6>
                </Form.Label>
                <Col sm={5}>
                    <Form.Control type="number" placeholder="Enter spacing" onChange={(e) => setPicketSpacing(e.target.value)} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={5}>
                    <h5>Select Shape</h5>
                </Form.Label>
                <Col sm={4}>
                    <Form.Select onChange={(e) => setValue1(e.target.value)}>
                    <option >Please Choose...</option >
                    <option value={1}>Cuboid</option>
                    <option value={2}>Cylendrical</option>
                    {console.log(value1)}
                    </Form.Select>
                </Col>

                {value1 == 1 ? (
                
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <hr/>
                <Form.Label column sm={5}>
                    <h6>Post Width (cm)</h6>
                </Form.Label>
                <Col sm={5}>
                    <Form.Control type="number" placeholder="Enter width" onChange={(e) => setPostWidth(e.target.value)} />
                </Col>
                <Form.Label column sm={5}>
                    <h6>Post Thickness (cm)</h6>
                </Form.Label>
                <Col sm={5}>
                    <Form.Control type="number" placeholder="Enter thick" onChange={(e) => setPostThick(e.target.value)} />
                </Col>
                </Form.Group>
                ) : (
                    <div></div>
                )}
            {value1 == 2 ? (
                <Form.Group as={Row} controlId="formHorizontalEmail">
                <hr/>
                <Form.Label column sm={5}>
                    <h6>Post Diameter (cm)</h6>
                </Form.Label>
                <Col sm={5}>
                    <Form.Control type="number" placeholder="Enter diameter" onChange={(e) => setPostDiameter(e.target.value)} />
                </Col>
                </Form.Group>
                ) : (
                    <div></div>
                )}

            </Form.Group>
            </Form>
            </Col>

            

            <Col md={4} offset={4} style={{

                'maxWidth': '350px',
                'maxHeight': '300px',
                'margin': '10px auto',
                'padding': '10px',
                'border': '1px solid black',
                'borderRadius': '5px',
                'backgroundColor': 'lightgrey',
            }}>
                <Col>
                    <span className='textt'><h5 className="font-monospace">Number of Posts: <span className='text'>{Post.toFixed(0)}</span></h5></span>
                    <span className='textt'><h5 className="font-monospace">Number of Sections: <span className='text'>{Sections.toFixed(0)}</span></h5></span>
                    <span className='textt'><h5 className="font-monospace">Post Height (m): <span className='text'>{PostHeight}</span></h5></span>
                    <span className='textt'><h5 className="font-monospace">Number of Rales: <span className='text'>{NumberofRales}</span></h5></span>
                    <span className='textt'><h5 className="font-monospace">Number of Pickets: <span className='text'>{Pickets}</span></h5></span>
                    <span className='textt'><h5 className="font-monospace">Volume : <span className='text'>{concrete}</span></h5></span>
                </Col>
            </Col>
        </Row>

    </Container>

    </Container>
    
  )
}

export default NewPage