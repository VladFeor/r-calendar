import React, { useEffect, useState } from "react"
import './calendarItem.css';


const CalendarItem = (props) => {
    const [isFocus, setIsFocus] = useState(false)
    const [areaText, setAreaText] = useState('')
    const changeFocus = async () => {
        if (props.functional) {
            return props.functional()
        }
        await props.clearFocus()
        setIsFocus(!isFocus)
    }
    useEffect(() => {
        setIsFocus(false)
    }, [props.isFocus]);
    return (
        <div
            className={isFocus ? 'calendar__item focus' : 'calendar__item'}
            onClick={changeFocus}
        >
            <div
                className={props.isDark ? "item__content item__dark" : "item__content"}
            >
                {props.day}
                {(!props.isDark && (areaText.trim() != '' || isFocus))
                    &&
                    <>
                        <textarea
                            className="item__area"
                            name=""
                            id=""
                            spellCheck="false"
                            value={areaText}
                            onClick={(e) => isFocus && e.stopPropagation()}
                            onChange={(e) => setAreaText(e.target.value)}
                        ></textarea>
                    </>

                }
            </div>
        </div>
    )
}

export default CalendarItem