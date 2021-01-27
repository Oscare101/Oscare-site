import React from 'react'
import img1 from './img/1.jpg'
import img2 from './img/2.jpg'
import img3 from './img/3.jpg'
import img4 from './img/4.jpg'
import img5 from './img/5.jpg'
import img6 from './img/6.jpg'
import img7 from './img/7.jpg'
import img8 from './img/8.jpg'

const WeddingAlb = () => {
  return (
    <div className="container examples">
      <h1>Свадебные книги пожеланий и альбомы</h1>
      <p>
        Книга пожеланий в цветовой гамме вашей свадьбы, с ярким акцентом или
        нежным декором, украсит Ваш праздник и сохранит поздравления гостей на
        долгие годы. Обложка мягкая, декорирована кружевом, атласными лентами,
        цветами и бисером.
      </p>
      <p>
        Завязывается на ленту. Внутри на первом форзаце предусмотрено место для
        фотографии жениха и невесты.{' '}
      </p>
      <p>
        20 плотных листов для пожеланий украшены штампами. Это для свадьбы с
        примерно 40-50 гостями, т.к гости пишут пожелания от семьи/пары. 10
        дополнительных листов - 10 грн. Полностью ручная работа.
      </p>
      <p>
        Возможно изготовление в привычных свадебных цветах (розовый, персиковый,
        красный,фиолетовый) и нестандартной цветовой гамме ( серый, синий,
        желтый и т.д), а также книги из мешковины в стиле рустик.
      </p>
      <p>Цена 550 грн</p>
      <button>
        <a href="http://oscar-scrap.blogspot.com/" target="_blank">
          Больше в блоге
        </a>
      </button>
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

export default WeddingAlb
