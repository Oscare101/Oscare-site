import React from 'react'

import img1 from './img/1.jpg'
import img2 from './img/2.jpg'
import img3 from './img/3.jpg'
import img4 from './img/4.jpg'
import img5 from './img/5.jpg'
import img6 from './img/6.jpg'
import img7 from './img/7.jpg'
import img8 from './img/8.jpg'

const Catalog = () => {
  return (
    <div className="container">
      <div className="photo-list">
        <div className="child">
          <h2>◽Детские◽</h2>
          <a className="photo-list-item catalog" href="/Babybook">
            <img src={img1} alt="" />
            <article>
              <h3>Бебибуки</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                earum libero rem saepe sint provident, magnam aperiam, ratione,
                minus odit totam nobis laborum doloremque sequi neque ipsam
                fugit recusandae explicabo. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Voluptatem quia at vitae quam
                incidunt debitis, iure expedita exercitationem voluptas
                provident perspiciatis soluta illum pariatur unde doloribus,
                commodi dicta magnam corrupti?
              </p>
            </article>
          </a>
          <a className="photo-list-item catalog" href="/ChildAlb">
            <img src={img2} alt="" />
            <article>
              <h3>Детские альбомы</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Temporibus molestiae modi maxime sapiente quis id vitae,
                repellat vel in voluptates assumenda adipisci odit enim commodi
                ipsam explicabo error animi eius!
              </p>
            </article>
          </a>
          <a className="photo-list-item catalog" href="/ScrapAlb">
            <img src={img3} alt="" />
            <article>
              <h3>Скрап альбомы</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                fugiat mollitia facilis necessitatibus maxime suscipit animi ea
                perferendis similique dolores vel soluta, iure architecto
                impedit quidem quas ullam quisquam id.
              </p>
            </article>
          </a>
          <a className="photo-list-item catalog" href="/Mother">
            <img src={img4} alt="" />
            <article>
              <h3>Мамины сокровища</h3>
              <p></p>
            </article>
          </a>
        </div>
        <div className="adult">
          <h2>◾Взрослые◾</h2>
          <a href="/Checkbook" className="photo-list-item catalog">
            <img src={img5} alt="" />
            <article>
              <h3>Чековые книги</h3>
              <p></p>
            </article>
          </a>
          <a href="/Cook" className="photo-list-item catalog">
            <img src={img6} alt="" />
            <article>
              <h3>Кулинарные книги</h3>
              <p></p>
            </article>
          </a>
          <a href="/WeddingAlb" className="photo-list-item catalog">
            <img src={img7} alt="" />
            <article>
              <h3>Свадебные книги пожеланий</h3>
              <p>
                Книга пожеланий в цветовой гамме вашей свадьбы, с ярким акцентом
                или нежным декором, украсит Ваш праздник и сохранит поздравления
                гостей на долгие годы. Обложка мягкая, декорирована кружевом,
                атласными лентами, цветами и бисером. Завязывается на ленту.
              </p>
            </article>
          </a>
          <a href="/Albums" className="photo-list-item catalog">
            <img src={img8} alt="" />
            <article>
              <h3>Альбомы</h3>
              <p></p>
            </article>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Catalog
