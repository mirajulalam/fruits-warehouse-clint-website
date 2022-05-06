import React, { useState, useEffect } from 'react';
import { Alert, Button, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';


const ProductDetails = () => {
    const { productId } = useParams();
    const [products, setProducts] = useState({});
    const { quantity } = products;
    console.log(products);
    console.log(quantity);

    useEffect(() => {
        const url = `http://localhost:7000/products/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleUpdatQuantity = () => {
        console.log('update');
    }
    const handleQuantity = (event) => {
        event.preventDefault();
        const newQuantity = event.target.quantity.value;
        const updatedQuantity = parseInt(quantity) + parseInt(newQuantity);
        console.log(updatedQuantity);
        const url = `http://localhost:7000/products/${productId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ updatedQuantity })
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('update user')
            })
    }
    return (
        <>
            <div className='d-flex justify-content-center my-3'>
                <Card style={{ width: '25rem' }}>
                    <Card.Img variant="top" src={products.picture} />
                    <Card.Body>
                        <Card.Title>Name: {products.name}</Card.Title>
                        <Card.Text>
                            {products.description}
                        </Card.Text>
                        <Card.Text>supplierName: {products.supplierName}</Card.Text>
                        <Card.Text>
                            Price: ${products.price}
                        </Card.Text>
                        <Card.Text>
                            Quantity:  {products.quantity}
                        </Card.Text>
                        {products.quantity === null ? <Button>sold</Button> : <Button onClick={() => handleUpdatQuantity()} variant="primary" className='bg-warning border-0'>Delivered</Button>}
                    </Card.Body>
                </Card>
            </div>
            <div className='text-center'>
                <form onSubmit={handleQuantity}>
                    <input type="number" name="quantity" id="" />
                    <input type="submit" value="Add item" className='bg-warning border-0 text-white p-1 ms-1 border-rounded' />
                </form>
                <Link to='/manageItem'><Button variant="warning" className='text-white'>Manage Item</Button></Link>
            </div>
        </>
    );
};

export default ProductDetails;