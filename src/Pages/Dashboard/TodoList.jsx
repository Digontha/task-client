
import useTask from '../../Hooks/useTask';
import Loader from '../../Components/Loader/Loader';
import useAxiosPublic from '../../Axios/useAxiosPublic';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";

const TodoList = () => {
    const [task, isPending, refetch] = useTask()
    console.log("task", task);

    const axiosPublic = useAxiosPublic()

    const handleAddToOngoing = (info) => {
        console.log("info", info);
        const data = {
            tasks: info.tasks,
            description: info.description,
            deadline: info.deadline,
            priority: info.priority,
            email: info.email,
        }

        console.log(data);
        axiosPublic.post("/ongoing", data)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    axiosPublic.delete(`/todo/${info._id}`)
                        .then(res => {
                            console.log(res.data);
                            swal("Add to ongoing", "You Task Add to ongoing Successfully!", "success");
                            refetch()
                        })
                        .catch(err => {
                            console.log(err);
                        })

                }
            })
            .catch(err => {
                console.log(err);
            });

    };


    const handleAddToCompleted = (info) => {
        console.log("info", info);
        const data = {
            tasks: info.tasks,
            description: info.description,
            deadline: info.deadline,
            priority: info.priority,
            email: info.email,
        }

        console.log(data);
        axiosPublic.post("/completed", data)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    axiosPublic.delete(`/todo/${info._id}`)
                        .then(res => {
                            console.log(res.data);
                            swal("Add to completed", "You Task Add to completed Successfully!", "success");
                            refetch()
                        })
                        .catch(err => {
                            console.log(err);
                        })

                }
            })
            .catch(err => {
                console.log(err);
            });

    };


    const handleDelete = (id) => {
        axiosPublic.delete(`/todo/${id}`)
            .then(res => {
                console.log(res.data);
                swal("Add to completed", "You Task Add to completed Successfully!", "success");
                refetch()
            })
            .catch(err => {
                console.log(err);
            })
    }



    return (
        <>
            {isPending ? <Loader></Loader> : <div className="overflow-y-auto bg-gray-500 text-white w-full lg:p-20">
                <table className="table">
                    <thead>
                        <tr className='text-xl font-bold text-white'>
                            <th></th>
                            <th>Task</th>
                            <th>Description</th>
                            <th>Deadline</th>
                            <th>Priority</th>
                            <th>Action</th>

                        </tr>
                    </thead>

                    <tbody>
                        {task?.map((item, inx) => (
                            <tr key={item?._id}>
                                <td>{inx + 1}</td>
                                <td>{item?.tasks}</td>
                                <td>{item?.description}</td>
                                <td>{item?.deadline}</td>
                                <td>{item?.priority}</td>
                                <div className='lg:flex gap-3'>
                                    <td onClick={() => handleAddToOngoing(item)} className='btn btn-sm btn-neutral'>Save to Ongoing</td>
                                    <td onClick={() => handleAddToCompleted(item)} className='btn btn-sm btn-neutral'>Save to Completed</td>
                                    <td onClick={()=>handleDelete(item?._id)} className='btn btn-sm btn-neutral '><MdDelete></MdDelete> </td>
                                    <Link to={`/dashboard/todoupdate/${item._id}`}><td className='btn btn-sm btn-neutral '><RiEdit2Fill></RiEdit2Fill> </td></Link>
                                </div>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>}

        </>
    );
};

export default TodoList;