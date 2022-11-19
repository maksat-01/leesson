import bg from '../.././asstets/img/bg.png'
import car from './../../asstets/img/car.png'
import React from 'react';
const Hero = () => {


    return (
        <div>
            <section id="hero">
                <div className="container">
                    <div className="hero--general">
                        <img src={bg} alt="" className="hero--general__bg"/>
                        <div className="hero--general__group">
                            <h1>ПЕРЕЕЗД ДОМОВ, КВАРТИР <br/>И ОФИСОВ</h1>
                            <ul>
                                <li>Грузовые перевозки осуществляются 24/7</li>
                            </ul>
                            <ul>
                                <li>Организуем комфортный переезд по Бишкеку и по <br/>всему Кыргызстану!</li>
                            </ul>
                            <ul>
                                <li><span>Любим и гордимся своей работой</span></li>
                            </ul>
                            <button>Вызвать</button>
                        </div>
                        <img src={car} alt="img" className="hero--general__car"/>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;