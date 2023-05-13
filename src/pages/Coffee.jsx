import React from 'react';
import { FaEye, FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const Coffee = ({ coffee, coffees, setCoffees }) => {
    const { category, chef, name, photoUrl, _id } = coffee;


    // handle Delete Btn
    const handleDeleteBtn = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffees/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(coffee)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remaining = coffees.filter(coffee => coffee._id !== id)
                            setCoffees(remaining)
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })

    }

    return (
        <div className="hero-content border border-red-500 ">
            <img src={photoUrl} className="max-w-sm rounded-lg shadow-2xl w-1/2" />
            <div className='flex items-center w-1/2'>
                <div>
                    <p className="py-2">Name: {name}</p>
                    <p className="py-2">Chef: {chef}</p>
                    <p className="py-2">Category: {category}</p>
                </div>
                <div className="btn-group btn-group-vertical gap-4">
                    <button className="btn"><FaEye></FaEye></button>
                    <Link to={`/update/${_id}`}><button className="btn"><FaPencilAlt></FaPencilAlt></button></Link>
                    <button onClick={() => handleDeleteBtn(_id)} className="btn"><FaTrashAlt></FaTrashAlt></button>
                </div>
            </div>

        </div>


    );
};

export default Coffee;