import { createContext, useRef, useState } from 'react';

const GlobalDataContext = createContext();

function GlobalContext({ children }) {
    const [songData, setSongData] = useState({});
    const [isPlaying, setIsPlaying] = useState(false);
    const [showPlayerControl, setShowPlayerControl] = useState(false);
    const audioRef = useRef(null);

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
        </GlobalDataContext.Provider>
    );
}

export { GlobalContext, GlobalDataContext };
