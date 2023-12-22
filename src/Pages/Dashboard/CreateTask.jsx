import React, { useContext, useState } from 'react';
import useAxiosPublic from '../../Axios/useAxiosPublic';
import swal from 'sweetalert';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const CreateTask = () => {

    const {user}=useContext(AuthContext)
    
    const axiosPublic = useAxiosPublic()
    const [priority, setPriority] = useState('High');
    const handleAddTask = (e) => {
        e.preventDefault();
        const form = e.target

        const tasks = form.task.value
        const description = form.description.value
        const deadline = form.deadline.value


        const info = {
            tasks,
            description,
            deadline,
            priority,
            email:user.email
        }

        axiosPublic.post("/todo", info)
            .then(res => {
                console.log(res.data);
                swal("Added", "You Task Add Successfully!", "success");
                form.reset();
            })
            .catch(err => {
                console.log(err);
            })

    }
    return (
        <>
            <form onSubmit={handleAddTask} className=' lg:flex lg:flex-col gap-6 p-20 bg-gray-500'>
                <div className='lg:flex justify-between gap-4 mb-3'>
                    <input name='task' className='border border-5 border-black px-14 py-7' placeholder='Add Your Task' type="text" />
                    <input name='description' className='border border-5 border-black px-14 py-7' placeholder='Add Your Description' type="text" />
                </div>

                <div className='lg:flex gap-16 '>
                    <input name='deadline' className='border border-5 border-black px-14 py-7 mb-3' placeholder='Add Your Deadline' type="date" />
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
                <input className='btn btn-neutral' type="submit" value="Add Task" />
            </form>
        </>
    );
};

export default CreateTask;