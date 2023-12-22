import React, { useState } from 'react';
import swal from 'sweetalert';
import useAxiosPublic from '../../Axios/useAxiosPublic';
import { useLoaderData, useNavigate } from 'react-router-dom';

const OngoingUpdate = () => {
    const navigate = useNavigate()
    const taskData = useLoaderData()
    console.log(taskData);
    const { tasks, description, deadline, _id } = taskData

    const [priority, setPriority] = useState('High');

    const axiosPublic = useAxiosPublic()

    const handleUpdate = (e) => {
        e.preventDefault();
        const from = e.target
        const tasks = from.task.value
        const description = from.description.value
        const deadline = from.deadline.value

        const updateData = {
            tasks,
            description,
            deadline

        }
        axiosPublic.put(`/ongoing/${_id}`, updateData)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    swal("Updated", "Your Task update successfully", "success");
                    navigate(-1)
                }
            })
            .catch(err => {
                console.log(err);
            })

    };


    return (
        <>
            <form onSubmit={handleUpdate} className=' lg:flex lg:flex-col gap-6 p-20 bg-gray-500'>
                <div className='lg:flex justify-between gap-4 mb-3'>
                    <input defaultValue={tasks} name='task' className='border border-5 border-black px-14 py-7' placeholder='Add Your Task' type="text" />
                    <input defaultValue={description} name='description' className='border border-5 border-black px-14 py-7' placeholder='Add Your Description' type="text" />
                </div>

                <div className='lg:flex gap-16 '>
                    <input defaultValue={deadline} name='deadline' className='border border-5 border-black px-14 py-7 mb-3' placeholder='Add Your Deadline' type="date" />
                    <div>
                        <select
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                            className='select select-bordered w-full max-w-xs'
                        >
                            <option disabled selected>
                                Priority
                            </option>
                            <option value='High'>High</option>
                            <option value='Medium'>Medium</option>
                            <option value='Low'>Low</option>
                        </select>
                    </div>
                </div>
                <input className='btn btn-neutral' type="submit" value="Update" />
            </form>
        </>
    );
};

export default OngoingUpdate;