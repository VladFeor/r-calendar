import React, { useEffect, useState } from "react"
import './calendarItem.css';


const CalendarItem = (props) => {
    const [isFocus, setIsFocus] = useState(false)
    const [areaText, setAreaText] = useState('')
    const [selectedColor, setSelectedColor] = useState('#B9B9B9');
    const changeFocus = async () => {
        if (props.functional) {
            return props.functional()
        }
        await props.clearFocus()
        setIsFocus(!isFocus)
    }
    const handleColorChange = (event) => {
        setSelectedColor(event.target.value);
    };
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
                            style={{ borderLeftColor: selectedColor, ...(!isFocus && {resize: 'none'}) }}
                            onClick={(e) => isFocus && e.stopPropagation()}
                            onChange={(e) => setAreaText(e.target.value)}
                        />
                        {isFocus
                            &&
                            <input
                                className="color__area"
                                type="color"
                                id="colorPicker"
                                value={selectedColor}
                                onClick={(e) => isFocus && e.stopPropagation()}
                                onChange={handleColorChange}
                            />
                        }

                    </>

                }
            </div>
        </div>
    )
}

export default CalendarItem