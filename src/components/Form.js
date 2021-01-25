import React from 'react'

const Form = () => {
  return (
    <div className="form">
      <form
        className="__form"
        // action="mailto:kirillfedortsev2000@gmail.com"
        // enctype="text/plain"
      >
        <h2>Мы Вам ответим</h2>
        <input name="name" type="text" placeholder="имя" />
        <input name="tel" type="tel" placeholder="ссылка на соцсеть" />
        <textarea
          type="text"
          tupe="text"
          placeholder="введите текст"
          id="message"
        ></textarea>
        <input type="submit" value="Отправить" id="submit" />
      </form>
    </div>
  )
}

export default Form
