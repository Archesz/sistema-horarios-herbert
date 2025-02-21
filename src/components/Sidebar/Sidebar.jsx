import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { House, ClockAlert, Calendar, GraduationCap, Menu, X, ChevronLeft, Glasses, Users } from "lucide-react"; // Adicionando o ícone ChevronLeft
import "./Sidebar.scss";
import logo from "../../assets/logo.png";
import Avatar from "../Avatar/Avatar";

function Sidebar({ onCollapse }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    const toggleSidebarCollapse = () => {
        const newState = !isSidebarCollapsed;
        setIsSidebarCollapsed(newState);
        onCollapse(newState); // Passa o estado de colapso para o componente pai
    };


    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            setIsSidebarOpen(false);
            setIsSidebarCollapsed(false); // Reseta o estado de retração ao mudar para mobile
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            {/* Barra superior com botão de menu no mobile */}
            {isMobile && (
                <div className="menu-top">
                    <button className="menu-button" onClick={toggleSidebar}>
                        <Menu />
                    </button>
                    
                    <img src={logo} className="logo-menu" srcset="" />

                    <div className="menu-icons">
                        <Avatar />
                    </div>
                </div>
            )}

            {/* Sidebar */}
            <div className={`sidebar-container ${isSidebarOpen ? "open" : "closed"} ${isSidebarCollapsed ? "collapsed" : ""} ${isMobile ? "mobile" : ""}`}>

                {isMobile && (
                    <button className="close-button" onClick={toggleSidebar}>
                        <X />
                    </button>
                )}

                {!isMobile && (
                    <div className="sidebar-header">
                        <img src={logo} alt="Logo" className="logo" />
                        <button className="collapse-button" onClick={toggleSidebarCollapse}>
                            {isSidebarCollapsed ? <ChevronLeft /> : <ChevronLeft />}
                        </button>
                    </div>
                )}

                <ul className="sidebar-menu">
                    {!isSidebarCollapsed && <span className="menu-title">Utilidades</span>}
                    <li>
                        <Link to="/" className="menu-item">
                            <House />
                            {!isSidebarCollapsed && <span>Home</span>}
                        </Link>
                    </li>
                    <li>
                        <Link to="/horarios" className="menu-item">
                            <GraduationCap />
                            {!isSidebarCollapsed && <span>Horários</span>}
                        </Link>
                    </li>
                    <li>
                        <Link to="/calendar" className="menu-item">
                            <Calendar />
                            {!isSidebarCollapsed && <span>Calendário</span>}
                        </Link>
                    </li>
                    <li>
                        <Link to="/formulario" className="menu-item">
                            <ClockAlert />
                            {!isSidebarCollapsed && <span>Disponibilidade</span>}
                        </Link>
                    </li>
                    <li>
                        <Link to="/plantao" className="menu-item">
                            <Glasses />
                            {!isSidebarCollapsed && <span>Plantões</span>}
                        </Link>
                    </li>

                    {!isSidebarCollapsed && <span className="menu-title">Dados</span>}

                    <li>
                        <Link to="/alunos" className="menu-item">
                            <Users />
                            {!isSidebarCollapsed && <span>Alunos</span>}
                        </Link>
                    </li>

                </ul>
            </div>

            {/* Overlay para fechar o menu ao clicar fora */}
            {isMobile && isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
        </>
    );
}

export default Sidebar;
