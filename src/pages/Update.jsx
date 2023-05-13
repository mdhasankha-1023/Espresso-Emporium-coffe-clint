import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {
    const coffeeInfo = useLoaderData();
    const { category, chef, name, photoUrl, _id, details, supplier, taste } = coffeeInfo;


    // handle Update Coffee Form
    const handleUpdateCoffeeForm = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photoUrl = form.photoUrl.value;

        const coffeeInfo = {name, chef, supplier, taste, category, details, photoUrl}

        console.log(coffeeInfo)

        fetch(`http://localhost:5000/coffees/${_id}` , {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(coffeeInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount >0){
                Swal.fire({
                    icon: 'success',
                    title: 'Successfully Updated',
                    text: 'You are successfully Updated this coffee'
                })
                
            }
        })
    }

    return (
        <div>
            <div className='mx-24 my-12 bg-[#F4F3F0] px-14 py-16'>
                <div className='text-center'>
                    <h1 className='text-3xl text-[#33363a]'>Update Your Coffee</h1>
                </div>

                <form onSubmit={handleUpdateCoffeeForm}>
                    {/* form fow */}
                    <div className="flex w-full my-8">
                        <div className='w-1/2 me-4'>
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='name' placeholder="type coffee name" className="input input-bordered w-full" defaultValue={name} />
                            </label>
                        </div>
                        <div className='w-1/2 ms-4'>
                            <label className="label">
                                <span className="label-text">Chef</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='chef' placeholder="type coffee chef" className="input input-bordered w-full" defaultValue={chef}/>
                            </label>
                        </div>

                    </div>
                    {/* form fow */}
                    <div className="flex w-full my-8">
                        <div className='w-1/2 me-4'>
                            <label className="label">
                                <span className="label-text">Supplier</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='supplier' placeholder="type coffee supplier" className="input input-bordered w-full" defaultValue={supplier}/>
                            </label>
                        </div>
                        <div className='w-1/2 ms-4'>
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='taste' placeholder="type coffee taste" className="input input-bordered w-full" defaultValue={taste}/>
                            </label>
                        </div>

                    </div>
                    {/* form fow */}
                    <div className="flex w-full my-8">
                        <div className='w-1/2 me-4'>
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='category' placeholder="type coffee category" className="input input-bordered w-full" defaultValue={category} />
                            </label>
                        </div>
                        <div className='w-1/2 ms-4'>
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <label className="input-group">
                                <input name='details' type="details" placeholder="type coffee details" className="input input-bordered w-full" defaultValue={details}/>
                            </label>
                        </div>

                    </div>
                    {/* form fow */}
                    <div className="w-full my-8">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='photoUrl' placeholder="type photo URL" className="input input-bordered w-full" defaultValue={photoUrl} />
                        </label>


                    </div>
                    <input className="btn btn-block my-8" type="submit" value="Update Coffee" />
                </form>
            </div>
        </div>
    );
};

export default Update;