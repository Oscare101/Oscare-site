import React from 'react'
import img1 from './img/1.jpg'
import img2 from './img/2.jpg'
import img3 from './img/3.jpg'
import img4 from './img/4.jpg'
import img5 from './img/5.jpg'
import img6 from './img/6.jpg'
import img7 from './img/7.jpg'
import img8 from './img/8.jpg'

const Cook = () => {
  return (
    <div className="container examples">
      <h1>Кулинарные Книги</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quo
        reiciendis similique, eaque voluptatibus consectetur neque voluptatum,
        recusandae nulla ea debitis pariatur quaerat. Totam, neque ut adipisci
        facilis dolores eum.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed facilis, a
        perferendis mollitia ipsum veniam est debitis quasi quo reprehenderit
        iure accusamus delectus eligendi aspernatur minus natus tempora? Et
        possimus, delectus libero dolorum enim unde maxime fugit tempore vel
        commodi atque aspernatur deleniti dicta doloremque deserunt voluptas
        blanditiis provident voluptate excepturi explicabo. Totam aperiam, iusto
        numquam saepe quod!
      </p>
      <div className="example__block">
        <h2>Синий альбом</h2>
        <div className="example__img">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Cook
