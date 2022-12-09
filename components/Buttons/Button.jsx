import s from './Button.module.css'


export default function Button(props){
    return(
        <div onClick={props.onClick} className={`${s.button} ${props.disabled ? s.disabled : ''}`}>
            <p className={s.text}>{props.text}</p>
        </div>
    )
}