import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const MyItemDetail = ({ item }) => {
    const { name, picture, description, supplierName, price, quantity, _id } = item;
    const handleProductsDelete = id => {
        const checkout = window.confirm('Are you sure you want to delete products');
        if (checkout) {
            const url = `https://gentle-hollows-65771.herokuapp.com/products/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    console.log('deleted product item');
                    alert('Are you sure you want to delete your product')
                })
        }
    }
    return (
        <div>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={picture} />
                    <Card.Body>
                        <Card.Title>Name: {name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Card.Text>
                            SupplierName: {supplierName}
                        </Card.Text>
                        <Card.Text>
                            Price: ${price}
                        </Card.Text>
                        <Card.Text>
                            Quantity: {quantity}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className='text-center bg-warning'>
                        <button onClick={() => handleProductsDelete(_id)} className='w-100 border-0 bg-warning fw-bold text-white fs-5 update-button'>Delete</button>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
};

export default MyItemDetail;