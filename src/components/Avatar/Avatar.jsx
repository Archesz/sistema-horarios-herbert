import React, { useState, useRef, useEffect } from 'react';
import './Avatar.scss';

function Avatar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        }

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMenuOpen]);

    return (
        <div className='avatar-container' ref={menuRef}>
            <img 
                src='' 
                className='avatar-image'
                onClick={toggleMenu}
            />
            {isMenuOpen && (
                <ul className='avatar-menu'>
                    <li>Perfil</li>
                    <li>Configurações</li>
                    <li>Sair</li>
                </ul>
            )}
        </div>
    );
}

export default Avatar;
