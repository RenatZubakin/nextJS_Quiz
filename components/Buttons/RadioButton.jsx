import s from './RadioButton.module.css'
import {useState} from "react";

export default function RadioButton(props){

    return(
        <div onClick={props.onClick} className={`${s.radio_button} ${props.disabled ? s.disabled : ''}`}>
            <div className={`${s.radio} ${props.checked ? s.radio_active : ''} ${props.disabled ? s.radio_disabled : ''} `}>
                <div className={`${props.checked ? s.inside_radio_active : ''}`}>
                </div>
            </div>
            <p className={s.text}>{props.text}</p>
        </div>
    )
}