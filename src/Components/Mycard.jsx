import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, CardBody, CardImg, CardTitle } from 'reactstrap';
import { useState } from 'react';
import { Mymodal } from './Mymodal';

export const Mycard = ({id, name, image, price, info}) => {

    const [modal, setModal] = useState(false)
    const [selImg,setSelImg] = useState(null)
    const [selPrice, setSelPrice] = useState(null)
    const [selInfo,setSelInfo] = useState(null)

    const toggle=()=>{
        setSelImg(image)
        setSelInfo(info)
        setSelPrice(price)
        setModal(!modal)
    }

    return (
        <div    >
            <Card className='kartya'>
                <CardImg
                id='kep'
                    alt="Sample"
                    src={image}
                    />
                <CardBody className="kartyatest">
                    <CardTitle className='kartyacim' tag="h5">
                        {name}
                    </CardTitle>
                    <Button className='kartyagomb' onClick={()=>toggle(image,price,info)}>
                        Read more
                    </Button>
                </CardBody>
            </Card>
        {modal && <Mymodal modal={modal} setModal={setModal} selImg={selImg} selPrice={selPrice} selInfo={selInfo}/>}
        </div>
        
    )
}