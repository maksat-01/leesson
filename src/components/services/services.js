import React from 'react';
import port from "./../../asstets/img/port.png"
import pe from "./../../asstets/img/pe.png"
import pe2 from "./../../asstets/img/pe2.png"
import pe3 from "./../../asstets/img/pe3.png"
import pe4 from "./../../asstets/img/pe4.png"
import Slider from "react-slick";


const Services = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: false,
    };
    return (
        <section id="services">
            <div className="container">
                <div className="services--general__line"/>
                <p className="services--general__desc"> Грузовые перевозки по низкой цене осуществляются в любое <br/>время
                    дня и ночи. Организуем комфортный переезд или <br/>быструю доставку груза по Бишкеку и Кыргызстану.
                </p>
                <div className="services--general">
                    <Slider {...settings}>
                        <div>
                            <div className="services--general__block">
                                <img src={port} alt="img"/>
                                <h1>Портер </h1>
                                <p>У нас имеются 20 <br/>портеров</p>
                                <span>500 сом/час</span>
                            </div>
                        </div>
                        <div>
                            <div className="services--general__block">
                                <img src={pe} alt="img"/>
                                <h1>Грузчики </h1>
                                <p>Мы сотрудничаем с 80     грузчиками</p>
                                <span>300 сом/час</span>
                            </div>
                        </div>
                        <div>
                            <div className="services--general__block">
                                <img src={pe2} alt="img"/>
                                <h1>Разборка/сборка мебели </h1>
                                <p>Тщательная установка <br/>вашей мебели</p>
                                <span>Договорная</span>
                            </div>
                        </div>
                        <div>
                            <div className="services--general__block">
                                <img src={pe3} alt="img"/>
                                <h1>Вывоз мусора </h1>
                                <p>Мы за чистый город и за <br/>чистый дом</p>
                                <span>От 1000 сом</span>
                            </div>
                        </div>
                        <div>
                            <div className="services--general__block">
                                <img src={pe4} alt="img"/>
                                <h1>Спринтер </h1>
                                <p>У нас имеются 20  <br/>спринтеров</p>
                                <span>500 сом/час</span>
                            </div>
                        </div>
                        <div>
                            <div className="services--general__block">
                                <img src={port} alt="img"/>
                                <h1>Портер </h1>
                                <p>У нас имеются 20 <br/>портеров</p>
                                <span>500 сом/час</span>
                            </div>
                        </div>
                        <div>
                            <div className="services--general__block">
                                <img src={pe} alt="img"/>
                                <h1>Грузчики </h1>
                                <p>Мы сотрудничаем с 80     грузчиками</p>
                                <span>300 сом/час</span>
                            </div>
                        </div>
                        <div>
                            <div className="services--general__block">
                                <img src={pe2} alt="img"/>
                                <h1>Разборка/сборка мебели </h1>
                                <p>Тщательная установка <br/>вашей мебели</p>
                                <span>Договорная</span>
                            </div>
                        </div>
                        <div>
                            <div className="services--general__block">
                                <img src={pe3} alt="img"/>
                                <h1>Вывоз мусора </h1>
                                <p>Мы за чистый город и за <br/>чистый дом</p>
                                <span>От 1000 сом</span>
                            </div>
                        </div>
                        <div>
                            <div className="services--general__block">
                                <img src={pe4} alt="img"/>
                                <h1>Спринтер </h1>
                                <p>У нас имеются 20  <br/>спринтеров</p>
                                <span>500 сом/час</span>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Services;