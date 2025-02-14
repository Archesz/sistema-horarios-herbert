import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { House, ClockAlert, Calendar, GraduationCap, Menu } from 'lucide-react';
import "./Sidebar.scss";

import logo from "../../assets/logo.png";

function Sidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className={`sidebar-container ${isSidebarOpen ? 'open' : 'closed'}`}>

            <img src={logo} alt="" className='logo' />

            {/* Ícone de menu para dispositivos móveis */}
            <div className="sidebar-toggle" onClick={toggleSidebar}>
                <Menu />
            </div>

            <ul className="sidebar-menu">
                <li>
                    <Link to="/" className="menu-item" data-label="Dashboard">
                        <House />
                    </Link>
                </li>
                <li>
                    <Link to="/horarios" className="menu-item" data-label="Marketplace">
                        <GraduationCap />
                    </Link>
                </li>
                <li>
                    <Link to="/calendar" className="menu-item" data-label="Posts">
                        <Calendar />
                    </Link>
                </li>
                <li>
                    <Link to="/formulario" className="menu-item" data-label="Users">
                        <ClockAlert />
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
