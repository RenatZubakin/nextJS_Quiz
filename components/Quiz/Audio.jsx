import AudioPlayer from "react-h5-audio-player";
import styles from 'react-h5-audio-player/lib/styles.css';

export default function Audio(props){
    return(
        <AudioPlayer
           style={{width:'500px', margin:0}}
            src={props.src}

            showSkipControls={false}
            showFilledVolume={true}
            showJumpControls={false}
        />
    )
}