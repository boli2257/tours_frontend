import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap';

const Mycard = ({id, name, image, price, info}) => {
    return (
        <div className='container'>
            <Card className='kartya' style={{ maxWidth: '300px' }}>
                <CardImg
                    alt="Sample"
                    src={image}
                    />
                <CardBody>
                    <CardTitle tag="h5">
                        {name}
                    </CardTitle>
                    <Button>
                        Read more
                    </Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default Mycard
