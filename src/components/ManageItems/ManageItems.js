import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AllProducts from '../AllProducts/AllProducts';
import './Manageitems.css';
const ManageItems = () => {
    const [manageitem, setManageitem] = useState([]);
    useEffect(() => {
        fetch('https://fruits-warehouse.onrender.com/products')
            .then(res => res.json())
            .then(data => setManageitem(data))
    }, [manageitem])
    return (
        <div className='container my-5'>
            <div className="manageItemContainer">
                {
                    manageitem.map(manages => <AllProducts
                        key={manages._id}
                        manages={manages}
                    ></AllProducts>)
                }
            </div>
            <div className='text-center my-3'>
                <Link to='/additem'><button className='bg-warning border-0 text-white p-2 rounded fw-bold'>Add new Item</button></Link>
            </div>
        </div>
    );
};

export default ManageItems;