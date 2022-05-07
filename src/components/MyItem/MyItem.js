import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItem = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const getProduct = async () => {
            const email = user?.email;
            console.log(email);
            const url = `https://gentle-hollows-65771.herokuapp.com/products?email=${email}`;
            const { data } = await axios.get(url)
            setProduct(data)
        }
        getProduct()
    }, [user])
    return (
        <div>
            <h2>My item {product.length}</h2>
        </div>
    );
};

export default MyItem;