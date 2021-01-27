import React from 'react'
import youtube from './img/youtube.png'
import viber from './img/viber.png'
import instagram from './img/instagram.png'
import telegram from './img/telegram.png'
const FOOTER = () => {
  return (
    <footer className="footer">
      <p>Буду рада Вашим письмам и отзывам ❤</p>
      <div className="footer__nav">
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
            <img src={viber} href="" alt="" />
          </a>
        </div>
        <div className="tel">
          <a href="tel:+380632371435">+38(063)-237-14-35</a>
          <a href="tel:+380986371017">+38(098)-637-10-17</a>
        </div>
      </div>
    </footer>
  )
}

export default FOOTER
