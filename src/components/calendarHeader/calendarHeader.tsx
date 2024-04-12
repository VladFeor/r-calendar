import React from "react"
import './calendarHeader.css';


const CalendarHeader = (props) => {
    const getMonthName = () => {
        const date = new Date(2000, props.month, 1);
        const monthName = date.toLocaleString('en-US', { month: 'long' });
        return monthName;
    };
    const incrementationHandler = () => {
        if (props.month === 0) {
            props.changeMonth(11)
            return props.changeYear(props.year - 1)
        }
        props.changeMonth(props.month - 1)
    }
    const decrementationHandler = () => {
        if (props.month === 11) {
            props.changeMonth(0)
            return props.changeYear(props.year + 1)
        }
        props.changeMonth(props.month + 1)
    }
    return (
        <div className='header'>
            <div className="container">
                <div className='header__content'>
                    <div className="left__content">
                        <div className="btn__header"
                            onClick={incrementationHandler}
                        >
                            {"<"}
                        </div>
                    </div>
                    <div className="center__content">{getMonthName()} {props.month+1} {props.year}</div>
                    <div className="right__content">
                        <div className="btn__header"
                        onClick={decrementationHandler}
                        >
                            {">"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CalendarHeader