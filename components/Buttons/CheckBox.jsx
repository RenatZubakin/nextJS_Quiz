import s from './CheckBox.module.css'

export default function CheckBox(props) {
    return (
        <div className={`${s.check_box} ${props.checked? s.checked :''} `}>
                <p>&#10003;</p>
        </div>
    )
}