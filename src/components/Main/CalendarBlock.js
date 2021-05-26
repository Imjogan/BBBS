import React from 'react';


function CalendarBlock(props) {
/* const tags = props.pageContent.event.tags;  
 tags.map((obj( function (obj) {
  return obj.name;
 }
 )) */

  return (
    <li className="list__element">
      <div className="list__header">
        <p className="list__caption">Волонтёры</p>
        <p className="list__date">декабрь / суббота</p>
      </div>
      <div className="list__theme">   
        <h2 className="list__title">Занятие с выпускниками: как составить резюме</h2>
        <p className="list__number">20</p>
      </div>
      <div className="list__contacts">
        <p className="list__contact">12:00–14:00</p>
        <p className="list__contact list__contact_center">Садовническая наб., д. 77 стр. 1 (офис компании Ernst&Young)
        </p>
        <p className="list__contact">Александра, +7 926 356-78-90</p>
      </div>
      <div className="list__footer">
        <button type="submit" className="list__submit list__submit_type_register">Записаться</button>
        <p className="list__place-number">Осталось 5 мест</p>
        <button type="button" className="list__button-view"></button>
      </div>
    </li> 
  )
}

export default CalendarBlock;