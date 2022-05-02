import React, { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({})

    useEffect(() => {
        const url = `http://localhost:7000/products/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div className='d-flex justify-content-center my-3'>
            <Card style={{ width: '25rem' }}>
                <Card.Img variant="top" src={product.picture} />
                <Card.Body>
                    <Card.Title>Name: {product.name}</Card.Title>
                    <Card.Text>
                        {product.description}
                    </Card.Text>
                    <Card.Text>supplierName: {product.supplierName}</Card.Text>
                    <Card.Text>
                        Price: ${product.price}
                    </Card.Text>
                    <Card.Text>
                        Quantity:  {product.quantity}
                    </Card.Text>
                    <Button variant="primary" className='bg-warning border-0'>Delivered</Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default ProductDetails;