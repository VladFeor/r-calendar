import './App.css';
import CalendarHeader from './components/calendarHeader/calendarHeader.tsx';
import { useState } from 'react';
import CalendarList from './components/calendarList/calendarList.tsx';


function App() {
  const [monthValue, setMonthValue] = useState(2)
  const [dayValue, setDayValue] = useState(1);
  const [yearValue, setYearValue] = useState(2024)

  const changeMonthHandler = (newMonth) => {
    setMonthValue(newMonth)
  }
  const changeYearHandler = (newYear) => {
    setYearValue(newYear)
  }
  return (
    <div className="App">
      <CalendarHeader
        month={monthValue}
        year={yearValue}
        changeMonth={changeMonthHandler}
        changeYear={changeYearHandler}
      />
      <CalendarList
        month={monthValue}
        year={yearValue}
        changeMonth={changeMonthHandler}
        changeYear={changeYearHandler}
      />
    </div>
  );
}

export default App;
