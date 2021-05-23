
import React from 'react';
import Header from '../Header'
import Footer from '../Footer'
import FilterButton from '../FilterButton'
import CalendarBlock from './CalendarBlock'
import { useEffect, useState } from "react";

export default function Calendar ({arrEvents}) {
    const [DataFilter, SetDataFilter] = useState()
    const [isMonth, setIsMonth] = useState(false)
    // useEffect(()=>{
    //     setIsMonth(true)
    // }, [DataFilter])
    
    // function handlerData(arr){
    //     Array.from(arr.forEach(item => (new Data(item))))
    //     return 
    // }

  return (
    <>
      <Header/>
      <main className="content page__content">
        <section className="content__header">
          <h1 className="title">Календарь</h1>
          <section className="menu">
            <ul className="menu__list menu__list_center">
              {handlerData(arrEvents).map(item => (
              <FilterButton
              nameMonth ={item}
              />
              ))}
            </ul>
          </section>
        </section>
        <section className="calendar">
          <ul className="list">
            {arrEvents.map((item)=>(
              <CalendarBlock
                onCaption={}
                onData={}
                ontitle={}
                onNumber={}
                onContactTime={}
                onPlace={}
                onContactPerson={}
                onPlaceNumber={}
              />
            ))}
          </ul>
        </section>
      </main>
      <Footer/>
    </>
  )
}