import clsx from 'clsx';
import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation()

    useEffect(() => {
        
    }, [])
    const handleLogout = () => {
        navigate("/login")
    }


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">SQA 6</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className={({ isActive }) => isActive ? "active nav-link" : "nav-link"} to="/" >Trang chủ</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className={({ isActive }) => isActive ? "active nav-link" : "nav-link"} to="/manage-racing">Quản lý chặng đua</NavLink>
                </li> 
            </ul>
            { location != '/login' ? <div className={clsx("align-items-center d-flex")}>
                <div className="mr-4">Cuongnm</div>
                <button type="button" className="btn btn-secondary" onClick={handleLogout}>Logout</button>
            </div>
            :
            <div className={clsx("align-items-center d-flex")}>
                <Link to={"/login"} className="btn btn-info">Login</Link>
            </div>}
        </div>
        

    </nav>

  )
}

export default Navbar