import React from 'react'
import Form from './Form'
import img from './img/Oscar.jpg'
import youtube from './img/youtube.png'
import viber from './img/viber.png'
import instagram from './img/instagram.png'
import telegram from './img/telegram.png'
const Contact = () => {
  return (
    <div className="main" id="main">
      <div className="container">
        <div className="info">
          <img src={img} alt="" />
          <article>
            <h2>Привет</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              natus ex suscipit numquam facere possimus delectus sunt
              perspiciatis voluptatem iusto, architecto odit quam error incidunt
              tenetur placeat veritatis et commodi, cupiditate, dignissimos
              similique! Culpa eaque accusamus eius enim ex, fugiat illum fugit,
              possimus deserunt, reprehenderit laudantium amet illo debitis
              recusandae?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              blanditiis!
            </p>
          </article>
        </div>
        <div className="contact__info">
          <div className="numbers">
            <h2>Мои соцсети</h2>
            <div className="img">
              <a
                href="https://l.instagram.com/?u=https%3A%2F%2Fwww.youtube.com%2Fchannel%2FUCWjQHPcyshJdaT_eyqNTgow&e=ATN9UB4KarsU-Hz8snadlByQ0UDimaR4uSSx57reawGPUR5YSJnmU4n5_rG4E8LlPThurmKvHjjd-26_tdrVwQ&s=1"
                target="_blank"
              >
                <img src={youtube} alt="" />
              </a>
              <a
                href="https://instagram.com/oscar_scrap?igshid=11ewttsi55u3b"
                target="_blank"
              >
                <img src={instagram} alt="" />
              </a>
              <a href="https://t.me/oscar_scrap" target="_blank">
                <img src={telegram} alt="" />
              </a>
              <a href="" target="_blank">
                <img src={viber} alt="" />
              </a>
            </div>
            <h2>Телефоны</h2>
            <div class="tel">
              <a href="tel:+380632371435">+38(063)-237-14-35</a>
              <a href="tel:+380986371017">+38(098)-637-10-17</a>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </div>
  )
}

export default Contact
