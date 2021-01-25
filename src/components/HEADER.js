import React from 'react'

const HEADER = () => {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__title">Hand made by oscar</h1>
        <h3 className="header__title__sign">Подарки сделаные с любовью</h3>
        <nav className="nav">
          <a className="nav__link" href="/Main">
            Главная
          </a>
          <a className="nav__link" href="/Contact">
            Контакты
          </a>
          <a className="nav__link" href="/Catalog">
            Каталог
          </a>
          <a className="nav__link" href="">
            photos
          </a>
          <a className="nav__link" href="">
            more
          </a>
        </nav>
      </div>
    </header>
  )
}

export default HEADER
