import React, {} from 'react';
import {Link} from "react-router-dom";


const Header = () => {


    return (
        <header id="header">
            <div className="container">
                <div className="header--general">
                    <Link to='/'>
                        <h1 className="header--general__logo">Портер<span>Такси</span></h1>

                    </Link>
                    <nav className="header--general__navigation">
                        <Link to="/rates">Тарифы</Link>
                        <a href="#">Услуги</a>
                        <a href="#">Контакты</a>
                        <div className="header--general__navigator--group">
                            <div className="header--general__navigation--group__block">
                                <div><i className="fab fa-telegram"></i></div>
                                <div><i className="fab fa-whatsapp"></i></div>
                                <a href="tell:0504-41-68-33">0504-41-68-33</a>
                            </div>
                            <div className="header--general__navigation--group__block">
                                <div><i className="fab fa-telegram"></i></div>
                                <div><i className="fab fa-whatsapp"></i></div>
                                <a href="tell:0504-41-68-33">0504-41-68-33</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;