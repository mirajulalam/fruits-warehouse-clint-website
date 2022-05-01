import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import './Product.css';
import { useNavigate } from 'react-router-dom';
const Product = ({ product }) => {
    const { _id, name, supplierName, picture, description, quantity, price } = product;
    const navigate = useNavigate();
    const handleNavigateParames = (id) => {
        navigate(`/product/${id}`)
    }
    return (
        <div className='product-details'>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={picture} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Card.Text>
                            {supplierName}
                        </Card.Text>
                        <Card.Text>
                            ${price}
                        </Card.Text>
                        <Card.Text>
                            {quantity}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className='text-center bg-warning'>
                        <button onClick={() => handleNavigateParames(_id)} className='w-100 border-0 bg-warning fw-bold text-white fs-5 update-button'>Update</button>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Product;