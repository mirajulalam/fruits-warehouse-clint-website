import React, { useEffect, useState } from 'react';

const useProductDetails = productId => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:3000/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [productId])
    return [product];
};

export default useProductDetails;