import { updateProfile } from 'firebase/auth';
import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Register = () => {
    const { createUser, googleLogin } = useContext(AuthContext)
  const navigate = useNavigate()
  const handleRegister = (e) => {

    e.preventDefault();
    const name = e.target.name.value
    const image = e.target.image.value
    const email = e.target.email.value
    const password = e.target.password.value
    console.log(name, image, email, password);

    if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+={}\[\]:;"'<>,.?/\\|`])[A-Za-z0-9!@#$%^&*()_+={}\[\]:;"'<>,.?/\\|`]{7,}$/.test(password)) {

      swal("error", "password must be at least 6 characters one capital letter and one special letter", "error");
    } else {
      createUser(email, password, name, image)
        .then(res => {
          console.log(res.user);
          swal("success", "Your account create successfully", "success");
          updateProfile(res.user, { displayName: name, photoURL: image })
            .then(() => {
                navigate("/")
            })
        })
        .catch(() => {

          swal("error", "something went wrong", "error");
        })
    }




  }
  const handleGoogle = () => {
    googleLogin()
      .then((res) => {
      console.log(res.user);
        swal("success", "Your account create successfully", "success");
      })
      .catch((err) => {
        console.log(err);
        swal("error", "something went wrong", "error");
      })
  }

  return (
    <>
      <div className='lg:flex flex-row-reverse min-h-screen items-center lg:w-full bg-gray-100'>
        <div className='flex flex-col justify-center lg:w-1/2 items-center mt-4 lg:h-[70vh]'>
          <h1 className="text-2xl font-semibold  ">Please Register</h1>
          <div className="card lg:w-full">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" name="name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input type="text" placeholder="Image URL" name="image" className="input input-bordered" />
              </div>
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
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <Link className="text-center" to="/login"><p>Have a account? <span className="font-bold btn btn-link">login</span></p></Link>
            <div className="p-5">
              <button onClick={handleGoogle} className="btn btn-sm btn-neutral w-full"><FcGoogle></FcGoogle> Google</button>
            </div>
          </div>

        </div>
        <div className='lg:w-1/2'>
          <img src="https://th.bing.com/th/id/R.3da9876d71250ea2350fab949702f1ca?rik=HpNY1ESJW4aN5Q&pid=ImgRaw&r=0" alt="" />
        </div>
      </div>

    </>

  );
};

export default Register;