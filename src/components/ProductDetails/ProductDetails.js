import React, { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';


const ProductDetails = () => {
    const { productId } = useParams();
    const [products, setProducts] = useState({});
    const { quantity } = products;

    useEffect(() => {
        const url = `https://fruits-warehouse.onrender.com/products/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products]);

    // handle descrease 
    const handleUpdatQuantity = () => {
        const updatedQuantity = parseInt(quantity - 1)
        const url = `https://fruits-warehouse.onrender.com/products/${productId}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ updatedQuantity })
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
            })
    }
    const handleQuantity = (event) => {
        event.preventDefault();
        const newQuantity = event.target.quantity.value;
        const updatedQuantity = parseInt(quantity) + parseInt(newQuantity);
        const url = `https://fruits-warehouse.onrender.com/products/${productId}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ updatedQuantity })
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                event.target.reset()
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
                        {products.quantity == 0 ? <Button>sold</Button> : <Button onClick={() => handleUpdatQuantity(products._id)} variant="primary" className='bg-warning border-0'>Delivered</Button>}
                    </Card.Body>
                </Card>
            </div>
            <div className='text-center'>
                <form onSubmit={handleQuantity}>
                    <input type="number" name="quantity" id="" />
                    <input type="submit" value="Add item" className='bg-warning border-0 text-white p-1 ms-1 rounded' />
                </form>
                <Link to='/manageItem'><Button variant="warning" className='text-white my-2'>Manage Item</Button></Link>
            </div>
        </>
    );
};

export default ProductDetails;