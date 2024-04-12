import React, { useEffect, useState } from "react";
import './calendarList.css';
import CalendarItem from "../calenderItem/calendarItem";

interface CalendarListProps {
  year: number;
  month: number;
}

const CalendarList = (props) => {
  const calendarArray = Array.from({ length: new Date(props.year, props.month + 1, 0).getDate() }, (_, index) => index + 1);
  const daysOfWeek: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const [isChangeFocus,setIsChangeFocus] = useState(false)
  const clearFocus = () =>{
     setIsChangeFocus(!isChangeFocus)
  }
  const decrementationHandler = () => {
    clearFocus()
    if (props.month == 0) {
      props.changeMonth(11)
      return props.changeYear(props.year - 1)
    }
    props.changeMonth(props.month - 1)
  }
  const incrementationHandler = () => {
    clearFocus()
    if (props.month == 11) {
      props.changeMonth(0)
      return props.changeYear(props.year + 1)
    }
    props.changeMonth(props.month + 1)
  }
  const setDataPastMonth = (needCount: number): number[] => {
    const pastMonthDays = new Date(props.year, props.month, 0).getDate();
    const startDay = pastMonthDays - needCount + 1;
    const pastMonthSequence = Array.from({ length: needCount }, (_, index) => startDay + index);
    return pastMonthSequence;
  }
  const setNextMonthData = (firstDaysCount: number): number[] => {
    const today = new Date();
    const nextMonth = today.getMonth() + 2;
    const year = today.getFullYear();
    const nextMonthDays = new Date(year, nextMonth, 0).getDate();

    const nextMonthSequence = Array.from({ length: firstDaysCount }, (_, index) => index + 1);
    return nextMonthSequence;
  }
  const getDayOfWeek = (year: number, month: number, day: number): number => {
    const date = new Date(year, month - 1, day);
    return date.getDay();
  };
  useEffect(() => {
    getDayOfWeek(props.year, props.month + 1, 1)
    clearFocus()
  }, [props.month]);
  return (
    <div className="calendar__list">
      <div className="days__week">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="days__item">
            {day}
          </div>
        ))}
      </div>
      <div className="calendar__content">
        {setDataPastMonth(getDayOfWeek(props.year, props.month + 1, 1)).map((day, dayIndex) => (
          <CalendarItem key={dayIndex} day={day} isDark={true} functional={decrementationHandler}  />
        ))}
        {calendarArray.map((day, dayIndex) => (
          <CalendarItem key={dayIndex} day={day} isFocus={isChangeFocus} clearFocus={clearFocus}/>
        ))}
        {setNextMonthData(42 - (getDayOfWeek(props.year, props.month + 1, 1) + calendarArray.length)).map((day, dayIndex) => (
          <CalendarItem key={dayIndex} day={day} isDark={true} functional={incrementationHandler} />
        ))}
      </div>
    </div>
  );
}

export default CalendarList;
