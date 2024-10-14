import { createContext, useRef, useState } from 'react';

const GlobalDataContext = createContext();

function GlobalContext({ children }) {
    const [songData, setSongData] = useState({});
    const [isPlaying, setIsPlaying] = useState(false);
    const [showPlayerControl, setShowPlayerControl] = useState(false);
    const audioRef = useRef();

    // console.log(songData.audio);
    // console.log(audioRef);

    const handleShowPlayerControl = (data) => {
        setShowPlayerControl(true);
        setSongData(data);
        handlePlayingAudio(data);
    };

    const handlePlayingAudio = (data) => {
        setIsPlaying(true);
        const audio = audioRef.current;
        if (audio.src !== data.audio) {
            audio.src = data.audio;
            audio.load();
        }
        audio.addEventListener(
            'canplaythrough',
            () => {
                setIsPlaying(true);
                audio.play();
            },
            { once: true },
        );
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
            <audio ref={audioRef} src={songData.audio} hidden />
        </GlobalDataContext.Provider>
    );
}

export { GlobalContext, GlobalDataContext };
