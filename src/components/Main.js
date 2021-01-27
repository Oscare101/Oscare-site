import React from 'react'
import img1 from './img/1.jpg'
import img2 from './img/2.jpg'
import img3 from './img/3.jpg'
import img4 from './img/4.jpg'
import img5 from './img/5.jpg'
import img6 from './img/6.jpg'
import img7 from './img/7.jpg'
import img8 from './img/8.jpg'
const Main = () => {
  return (
    <div className="intro">
      <div className="intro__container">
        <div className="flex">
          <div className="flex-left">
            <p>
              Вы на сайте с альбомами и блокнотами сделаными вручную, Вы можете
              заказать товар сделаный специально для Вас, либо купить из
              сущечтвующих (все детали уточнять лично)
            </p>
            <p className="pale">Подарки сделанные с любовью ❤</p>
            <p>Чтоб просмотреть все товары перейдите в каталог</p>
          </div>
          <div className="flex">
            <div className="photo-list">
              <div className="photo-list-item-main">
                <img src={img1} alt="" />
              </div>
              <div className="photo-list-item-main">
                <img src={img2} alt="" />
              </div>
              <div className="photo-list-item-main">
                <img src={img3} alt="" />
              </div>
              <div className="photo-list-item-main">
                <img src={img4} alt="" />
              </div>
              <div className="photo-list-item-main">
                <img src={img5} alt="" />
              </div>
              <div className="photo-list-item-main">
                <img src={img6} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
