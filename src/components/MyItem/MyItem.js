import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './MyItem.css';
import MyItemDetail from '../MyItemDetail/MyItemDetail';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import axios from 'axios';
const MyItem = () => {
    const [user] = useAuthState(auth);
    const [product, setProduct] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        const getProduct = async () => {
            const email = user?.email;
            const url = `https://fruits-warehouse.onrender.com/myproducts?email=${email}`;
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                setProduct(data)
            }
            catch (error) {
                console.log(error);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth)
                    navigate('/login')
                }
            }
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