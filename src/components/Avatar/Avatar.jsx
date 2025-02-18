import React, { useState } from 'react';
import './Avatar.scss';

function Avatar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='avatar-container'>
            <img 
                src='' 
                alt=''
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
