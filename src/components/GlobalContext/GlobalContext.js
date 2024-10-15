import { createContext, useRef, useState } from 'react';

const GlobalDataContext = createContext();

function GlobalContext({ children }) {
    const [songData, setSongData] = useState({});
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState('');
    const [showPlayerControl, setShowPlayerControl] = useState(false);
    const audioRef = useRef();

    // console.log(songData.audio);
    // console.log(audioRef);
    const handleLoadStart = (e) => {
        const src = e.nativeEvent.srcElement.src;
        const audio = new Audio(src);
        audio.onloadedmetadata = () => {
            if (audio.readyState > 0) {
                const min = Math.floor(302) / 60;
                const second = Math.floor(302) % 60;
                if (second >= 10) {
                    console.log(Math.floor(min) + ':' + second);
                } else {
                    console.log(Math.floor(min) + ':0' + second);
                }
            }
        };
    };

    const handleShowPlayerControl = (data) => {
        setShowPlayerControl(true);
        setSongData(data);
    };

    const handlePlayingAudio = (data) => {
        setIsPlaying(true);
        audioRef.current.play();
    };

    const handleStopAudio = () => {
        setIsPlaying(false);
        audioRef.current.pause();
    };

    const globalData = {
        songData,
        showPlayerControl,
        isPlaying,
        handleStopAudio,
        handlePlayingAudio,
        handleShowPlayerControl,
        setAudioRef: (ref) => {
            audioRef.current = ref;
        },
    };
    return (
        <GlobalDataContext.Provider value={globalData}>
            {children}
            <audio
                ref={audioRef}
                src={songData.audio}
                hidden
                onLoadStart={handleLoadStart}
            />
        </GlobalDataContext.Provider>
    );
}

export { GlobalContext, GlobalDataContext };
