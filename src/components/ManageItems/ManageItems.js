import React, { useEffect, useState } from 'react';
import AllProducts from '../AllProducts/AllProducts';
import './Manageitems.css';
import { Button } from 'react-bootstrap';
const ManageItems = () => {
    const [manageitem, setManageitem] = useState([]);
    useEffect(() => {
        fetch('http://localhost:7000/products')
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
        </div>
    );
};

export default ManageItems;