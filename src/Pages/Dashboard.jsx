import React, { useContext } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { IoCreateSharp } from "react-icons/io5";
import { LuListTodo } from "react-icons/lu";
import { FaHome, FaRunning } from "react-icons/fa";
import { TbArrowElbowRight } from "react-icons/tb";
import { IoLogOutSharp } from "react-icons/io5";
import { AuthContext } from '../AuthProvider/AuthProvider';
const Dashboard = () => {
    const {logOut}=useContext(AuthContext)
    const navigate=useNavigate()
    const handleLogOut=() => {
        logOut()
        .then(res=>{
            console.log(res);
            navigate("/login")
        })
    }
    return (
        <>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content mt-4">
                        {/* Sidebar content here */}
                        <Link to="/dashboard"><li className='btn btn-neutral mb-10 w-full'><p><IoCreateSharp></IoCreateSharp> Create Task</p></li></Link>
                        <Link to="/dashboard/todo"><li className='btn btn-neutral mb-10 w-full'><p><LuListTodo></LuListTodo>Todo list</p></li></Link>
                        <Link to="/dashboard/ongoing"><li className='btn btn-neutral mb-10 w-full'><p><FaRunning></FaRunning>Ongoing list</p></li></Link>
                        <Link to="/dashboard/completed"><li className='btn btn-neutral mb-10 w-full'><p><TbArrowElbowRight></TbArrowElbowRight>Completed list</p></li></Link>

                        <div className='flex flex-col w-full'>
                            <div className="divider divider-neutral"></div>
                        </div>

                        <div className='mt-10'>
                            <Link to="/"><li className='btn btn-neutral mb-10 w-full'><p><FaHome></FaHome>Home</p></li></Link>
                            <Link onClick={handleLogOut}><li className='btn btn-neutral mb-10 w-full'><p><IoLogOutSharp></IoLogOutSharp> Log out</p></li></Link> 
                        </div>
                    </ul>


                </div>
            </div>
        </>
    );
};

export default Dashboard;