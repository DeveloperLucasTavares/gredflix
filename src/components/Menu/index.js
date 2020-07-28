import React from 'react';

import Button from '../Button';
//import ButtonLink from './components/ButtonLink';

import Logo from '../../assets/img/logo.png';
import './styles.css';

function Menu() {
    return (
        <nav className='Menu'>
            <a href='/'>
                <img className='Logo' src={Logo} alt='Gredflix' />
            </a>

            <Button as='a' className='ButtonLink' href={Logo}>
                Novo vídeo
            </Button>
        </nav>
    )
}

export default Menu;