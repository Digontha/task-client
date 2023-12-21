import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import swal from 'sweetalert';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const { signInUser, user, googleLogin } = useContext(AuthContext)
    console.log(user);
    const location = useLocation()
    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password);



        signInUser(email, password)
            .then(() => {

                swal("Logged", "You login successfully", "success");
                e.target.reset()
                navigate(location?.state ? location.state : "/")

            })
            .catch(() => {

                swal("Error", "Your email or  password dose not match", "error");
            })





    }
    const handleGoogle = () => {
        googleLogin()
            .then(() => {
                swal("Logged", "You login successfully", "success");

            })
            .catch(() => {
                swal("Error", "something went wrong", "error");
            })
    }


    return (
        <>
            <div className='lg:flex min-h-screen items-center flex-row-reverse lg:w-full bg-base-100'>
                <div className='lg:w-1/2 flex flex-col justify-center items-center mt-10 lg:h-[70vh]'>
                    <h1 className="text-3xl font-semibold py-3">Please Login </h1>
                    <div className="card w-full  ">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <Link className="text-center" to="/register"><p>Haven't any account? <span className="font-bold btn btn-link">register</span></p></Link>
                        <div className="p-5">
                            <button onClick={handleGoogle} className="btn btn-sm btn-neutral w-full"><FcGoogle></FcGoogle> Google</button>
                        </div>
                    </div>
                </div>
                <div className='lg:w-1/2'>
                    <img src="https://th.bing.com/th/id/R.6dffd49b9b21c72f529e3f076d147464?rik=sSWLOiuWSpIw%2fQ&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fdi7%2fLgd%2fdi7Lgd4xT.png&ehk=92cPQBJePlppvURjXxgnfIQnVSlUqosIGELv22uljtY%3d&risl=&pid=ImgRaw&r=0" alt="" />
                </div>
            </div>

        </>

    );
};

export default Login;