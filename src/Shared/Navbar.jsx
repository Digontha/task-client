
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navLinks = <div className='text-[20px] flex gap-5 items-center font-semibold '>
        <NavLink  to="/" className={({ isActive, isPending }) =>
       
            isPending ? "pending" : isActive ? "text-white bg-[#A955BA] p-[5px] rounded-xl" : "text-black"
        }>Home
        </NavLink>
        <NavLink  to="/about" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-white bg-[#A955BA] p-1 rounded-xl" : "text-black"
        }>About
        </NavLink>
        <NavLink  to="/contact" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-white bg-[#A955BA] p-1 rounded-xl" : "text-black"
        }>Contact
        </NavLink>
    </div>
    return (
        <>
            <div className="navbar bg-[#AE8FB4] p-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                           {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost font-mono text-white text-xl">TO<span className='text-3xl  text-orange-900'>DO</span></a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {navLinks}
                    </ul>
                </div>
                {/* <div className="navbar-end">
                    <a className="btn">Button</a>
                </div> */}
            </div>
        </>
    );
};

export default Navbar;