import React from 'react'
import Form from './Form'

const Contact = () => {
  return (
    <div className="main" id="main">
      <div className="container">
        <div className="info">
          {/* <img src="img/Oscar.jpg" alt="" /> */}
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
            {/* <div className="img">
              <a
                href="https://l.instagram.com/?u=https%3A%2F%2Fwww.youtube.com%2Fchannel%2FUCWjQHPcyshJdaT_eyqNTgow&e=ATN9UB4KarsU-Hz8snadlByQ0UDimaR4uSSx57reawGPUR5YSJnmU4n5_rG4E8LlPThurmKvHjjd-26_tdrVwQ&s=1"
                target="_blank"
              >
                <img src="img/youtube.png" alt="" />
              </a>
              <a
                href="https://instagram.com/oscar_scrap?igshid=11ewttsi55u3b"
                target="_blank"
              >
                <img src="img/instagram.png" alt="" />
              </a>
              <a href="https://t.me/oscar_scrap" target="_blank">
                <img src="img/telegram.png" alt="" />
              </a>
              <a href="" target="_blank">
                <img src="img/viber.png" href="" alt="" />
              </a>
            </div> */}
          </div>
          <Form />
        </div>
      </div>
    </div>
  )
}

export default Contact
