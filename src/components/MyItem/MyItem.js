import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './MyItem.css';
import MyItemDetail from '../MyItemDetail/MyItemDetail';
const MyItem = () => {
    const [user] = useAuthState(auth);
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const getProduct = async () => {
            const email = user?.email;
            const url = `https://gentle-hollows-65771.herokuapp.com/products?email=${email}`;
            const { data } = await axios.get(url)
            setProduct(data)
        }
        getProduct()
    }, [product])
    return (
        <div className='container'>
            <div className="products-container">
                {
                    product.map(item => <MyItemDetail
                        key={item._id}
                        item={item}
                    ></MyItemDetail>)
                }
            </div>
        </div>
    );
};

export default MyItem;