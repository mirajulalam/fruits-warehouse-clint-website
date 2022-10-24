import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from './../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
const AddItem = () => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const [user] = useAuthState(auth);

    const onSubmit = data => {

        const url = `https://fruits-warehouse.onrender.com/products?email=${user.email}`;
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
                toast('New product added')
                reset();
            })

    };
    return (
        <div className="w-50 mx-auto text-center" style={{ height: '76vh' }}>
            <h1 className='text-warning'>Please Add New Products</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>

                <input className='mb-2' placeholder='name' name="name" {...register("name", { required: true })} />

                <input className='mb-2' placeholder='Description' name='description' {...register("description")} />

                <input className='mb-2' placeholder='Price' type="number" name='number' {...register("price")} />

                <input className='mb-2' placeholder='Enter email' type="email" name='email' {...register("email")} />

                <input className='mb-2' placeholder='Image url' type="text" {...register("picture")} />

                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />

                <input className='mb-2' placeholder='SupplierName' {...register("supplierName", { required: true })} />

                <input type="submit" value="Add product" className='bg-warning border-0 text-white rounded fw-bold p-2' />
            </form>

        </div>
    );
};

export default AddItem;