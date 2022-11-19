import React from 'react';
import icon from "../../../asstets/img/icon.svg";
import icon2 from "../../../asstets/img/icon2.svg";
import icon3 from "../../../asstets/img/icon3.svg";
import icon4 from "../../../asstets/img/icon4.svg";

const Rates = () => {
    return (
        <section id="advant">
            <div className="container">
                <div className="advant--general">
                    <div className="advant--general__block">
                        <img src={icon} alt="img"/>
                        <p>Надёжная и бережная <br/>доставка</p>
                    </div>
                    <h1 className="advant--general__title">Преи<span>мущес</span>тва</h1>
                    <div className="advant--general__block">
                        <img src={icon2} alt="img"/>
                        <p>Саблюдаем дорожные <br/>правила и этикет</p>
                    </div>
                </div>
                <div className="advant--group">
                    <div className="advant--general__block">
                        <img src={icon3} alt="img"/>
                        <p>5 лет опыта работы</p>
                    </div>
                    <div className="advant--general__block">
                        <img src={icon4} alt="img"/>
                        <p>На месте когда и где <br/>нужно</p>
                    </div>

                </div>
            </div>
        </section>

    );
};

export default Rates;