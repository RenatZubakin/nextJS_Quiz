import {CountdownCircleTimer} from "react-countdown-circle-timer";


export default function Timer(props){

    const formatRemainingTime = time => {
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds}`;
    };


    const renderTime = ({remainingTime}) => {
        if (remainingTime === 0) {
            return <div className="timer">Время вышло</div>;
        }
        return (
            <div>
                <div>{formatRemainingTime(remainingTime)}</div>
            </div>
        );
    };


    return(
            <CountdownCircleTimer
                key={'timer'}
                isPlaying={true}
                duration={props.time}
                colors='#00EAD9'
                size={120}
                strokeWidth={2}
                onComplete={props.onClick()}
            >
                {renderTime}
            </CountdownCircleTimer>
    )
}