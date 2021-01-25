import React from 'react'

const Catalog = () => {
  return (
    <div class="container">
      <div class="photo-list">
        <div class="child">
          <h2>◽Детские◽</h2>
          <div class="photo-list-item">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
            />
            <article>
              <h3>Бебибуки</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                earum libero rem saepe sint provident, magnam aperiam, ratione,
                minus odit totam nobis laborum doloremque sequi neque ipsam
                fugit recusandae explicabo.{' '}
              </p>
            </article>
          </div>
          <div class="photo-list-item">
            <img src="img/IMG_3194.JPG.jpg" alt="" />
            <article>
              <h3>Детские альбомы</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Temporibus molestiae modi maxime sapiente quis id vitae,
                repellat vel in voluptates assumenda adipisci odit enim commodi
                ipsam explicabo error animi eius!
              </p>
            </article>
          </div>
          <div class="photo-list-item">
            <img src="img/IMG_2909.JPG.jpg" alt="" />
            <article>
              <h3>Скрап альбомы</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                fugiat mollitia facilis necessitatibus maxime suscipit animi ea
                perferendis similique dolores vel soluta, iure architecto
                impedit quidem quas ullam quisquam id.
              </p>
            </article>
          </div>
          <div class="photo-list-item">
            <img src="img/IMG_3201.JPG.jpg" alt="" />
            <article>
              <h3>Мамины сокровища</h3>
              <p></p>
            </article>
          </div>
        </div>
        <div class="adult">
          <h2>◾Взрослые◾</h2>
          <div class="photo-list-item">
            <img src="img/IMG_5110.JPG.jpg" alt="" />
            <article>
              <h3>Чековые книги</h3>
              <p></p>
            </article>
          </div>
          <div class="photo-list-item">
            <img src="img/IMG_3261.JPG.jpg" alt="" />
            <article>
              <h3>Кулинарные книги</h3>
              <p></p>
            </article>
          </div>
          <div class="photo-list-item">
            <img src="img/IMG_3199.JPG.jpg" alt="" />
            <article>
              <h3>Свадебные книги пожеланий</h3>
              <p></p>
            </article>
          </div>
          <div class="photo-list-item">
            <img src="img/IMG_3199.JPG.jpg" alt="" />
            <article>
              <h3>Альбомы</h3>
              <p></p>
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Catalog
