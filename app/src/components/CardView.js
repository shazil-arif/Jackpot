import React, { Component } from 'react'
import { CardColumns, Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'

class CardView extends Component {
    render() {
        return (
            <div style={{ marginLeft: '10%', marginRight: '10%', width: '80%'}}>
            <CardColumns>
                <Card>
                    <Card.Img variant="top" src="https://thumbs-prod.si-cdn.com/VC2deYXdTFZI_hT79qwW41RUDds=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/36/9d/369ddaba-c53c-4a17-abee-5d24c79c9bf4/sudoku-image.png" height="350px" width="100px" />
                    <Card.Body>
                    <Card.Title>Sudoku</Card.Title>
                    <Card.Text>
                    Are u a math prodigy? Enjoy the time of your life playing Victor's Sudoku.

                    <div style={{marginTop: '5%'}}>

                        <Button variant="primary">
                            Play Now!
                        </Button>
                        
                    </div>
                    
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://scx1.b-cdn.net/csz/news/800a/2019/themastermin.jpg" height="350px" width="160px" />
                    <Card.Body>
                    <Card.Title>MasterMind</Card.Title>
                    <Card.Text>
                        Enjoy Gary's in house game from scratch. Made in China.
                    <div style={{marginTop: '5%'}}>

                        <Button variant="primary">
                            Play Now!
                        </Button>

                    </div>

                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="http://www.techpublishnow.com/wp-content/uploads/2020/04/Start-the-year-with-some-exciting-slots.jpg" height="350px" width="160px"  />
                    <Card.Body>
                    <Card.Title>Slots</Card.Title>
                    <Card.Text>Like to bet your odds on a coin flip? Me Neither. Enjoy Maanvas PM style project negotation

                    <div style={{marginTop: '5%'}}>

                        <Button variant="primary">
                            Play Now!
                        </Button>

                    </div>

                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://image.winudf.com/v2/image1/Y29tLmNpYmVyZHJvaXgucnVzc2lhbnJvdWxldHRlX3NjcmVlbl8wXzE1NTAwNTQ4NDRfMDcz/screen-0.jpg?fakeurl=1&type=.jpg" height="350px" width="160px" />
                    <Card.Body>
                    <Card.Title>Russian Roulette</Card.Title>
                    <Card.Text>
                         Don't ask, just play. Or Wenzhi will shoot you.
                    <div style={{marginTop: '5%'}}>

                        <Button variant="primary">
                            Play Now!
                        </Button>

                    </div>
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://dots.helpshift.com/improxy?url=https%3A%2F%2Fis5-ssl.mzstatic.com%2Fimage%2Fthumb%2FPurple124%2Fv4%2F01%2Fbb%2Ff3%2F01bbf384-d21f-bb75-1fa5-aca163fd8140%2Fsource%2F512x512bb.jpg&kot=8coIf9lwQiKyHu%2FNhaKtrn%2F2qJMaI8FuF0CUSVL4IwA%3D&size=200x200" height="350px" width="160px"/>
                    <Card.Body>
                    <Card.Title>TwoDots</Card.Title>
                    <Card.Text>
                    Like drawing random lines without putting any thought? Same.

                    <div style={{marginTop: '5%'}}>

                        <Button variant="primary">
                            Play Now!
                        </Button>

                    </div>

                    </Card.Text>
                    </Card.Body>
                </Card>
            </CardColumns>
            </div>
        )
    }
}

export default CardView;
