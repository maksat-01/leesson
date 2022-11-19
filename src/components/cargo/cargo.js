import React from 'react';

const Cargo = () => {
    return (
        <section id="cargo">
            <div className="container">
                <div className="cargo--general">
                    <h1>Есть груз <span>прямо сейчас?</span></h1>
                    <div className="cargo--general__block">
                        <div className="cargo--general__block--group">
                            <input type="text" placeholder="Ф.И.О."/>
                            <div className="cargo--general__block--group__line"></div>
                        </div>
                        <div  className="cargo--general__block--group">
                            <input type="text" placeholder="Номер вашего телефона"/>
                            <div className="cargo--general__block--group__line"></div>
                        </div>
                    </div>
                    <h2>Выберите <span>подходящие</span> услуги:*</h2>
                    <div className="cargo--general__title">
                        <div>
                            <input type="radio"/>
                            <h3>Портер</h3>
                        </div>
                        <div>
                            <input type="radio"/>
                            <h3>Грузчики</h3>
                        </div>
                        <div>
                            <input type="radio"/>
                            <h3>Разборка/сборка мебели</h3>
                        </div>
                        <div>
                            <input type="radio"/>
                            <h3>Вывоз мусора</h3>
                        </div>
                    </div>
                    <textarea cols="30" rows="10" placeholder="      Комментарии к заказу (необязательно)" className="cargo--general__text"></textarea>
                    <button className="cargo--general__btn">Заказать</button>

                </div>
            </div>
        </section>
    );
};

export default Cargo;