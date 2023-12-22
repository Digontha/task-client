
import useCompleted from '../../Hooks/useCompleted';
import Loader from '../../Components/Loader/Loader';
import { MdDelete } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";
import useAxiosPublic from '../../Axios/useAxiosPublic';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
const Completed = () => {
    const [completed, isPending, refetch] = useCompleted()

    const axiosPublic = useAxiosPublic()

    const handleDelete = (id) => {
        axiosPublic.delete(`/completed/${id}`)
        .then(res=>{
            console.log(res.data);
            swal("Deleted", "You Task Delete Successfully!", "success");
            refetch()
        })
        .catch(err => {console.error(err)});
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
                        {completed?.map((item, inx) => (
                            <tr key={item?._id}>
                                <td>{inx + 1}</td>
                                <td>{item?.tasks}</td>
                                <td>{item?.description}</td>
                                <td>{item?.deadline}</td>
                                <td>{item?.priority}</td>
                                <div className='lg:flex gap-3'>
                                    <td className='btn btn-sm btn-success '>Completed</td>
                                    <td onClick={()=>handleDelete(item?._id)} className='btn btn-sm btn-neutral '><MdDelete></MdDelete> </td>
                                    <Link to={`/dashboard/update/${item?._id}`}><td className='btn btn-sm btn-neutral '><RiEdit2Fill></RiEdit2Fill> </td></Link>
                                </div>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>}
        </>
    );
};

export default Completed;