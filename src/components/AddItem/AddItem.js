import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
const AddItem = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:7000/products`;
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };
    return (
        <div className="w-50 mx-auto text-center">
            <h1>Please Add New Products</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>

                <input className='mb-2' placeholder='Name' {...register("name", { required: true })} />

                <textarea className='mb-2' placeholder='Description' {...register("description")} />

                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />

                <input className='mb-2' placeholder='Image url' type="text" {...register("picture")} />

                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />

                <input className='mb-2' placeholder='SupplierName' {...register("supplierName", { required: true })} />
                <input type="submit" value="Add product" />
            </form>
        </div>
    );
};

export default AddItem;