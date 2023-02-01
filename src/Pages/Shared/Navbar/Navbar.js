import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import logo from './../../../images/banner/logo.webp'
import './Navbar.css'
const Navbar = () => {

    const {user,logOut} = useContext(AuthContext)

    const handleLogout = () =>{
        logOut()
        .then(()=>{})
        .catch(err => console.log(err))
    }
    const menuItems = <React.Fragment>
    <li><Link className="tcl" to="/">Home</Link></li>
    <li><Link className="tcl" to="/about">About </Link></li>
    <li><Link className="tcl" to="/courses">Courses</Link></li>
    <li><Link className="tcl" to="/blog">Blog</Link></li>
    <li><Link className="tcl" to="/contact">Contact</Link></li>
   

    {
        user?.uid ?
        <>
        <li><Link className="tcl" to="/dashboard">Dashboard</Link></li>
        <li><button className="tcl" onClick={handleLogout}>Logout</button></li>
        
        </>
        :
        <>
        <li><Link className="tcl" to="/signup">Signup</Link></li>
        <li><Link className="tcl" to="/login">Login</Link></li>
        </>
    }
        
</React.Fragment>
    return (
        <div className="navbar bg-base-100 shadow-lg">
        <div className="navbar-start">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost  btn-circle swap swap-rotate lg:hidden">
                    
                    <input type="checkbox" />
  <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
  
  <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
  
                </label>
                <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {menuItems}
                </ul>
            </div>
            <Link to="/"><img src={logo} className='img-fluid' alt="" /></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu  menu-horizontal p-0 ">
                {menuItems}
            </ul>
        </div>
    </div>
);
};

export default Navbar;