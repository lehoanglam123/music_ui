import { createContext, useRef, useState } from 'react';

const GlobalDataContext = createContext();

function GlobalContext({ children }) {
    const [songData, setSongData] = useState({});
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef();

    const handleLoadStart = (e) => {
        const src = e.nativeEvent.srcElement.src;
        const audio = new Audio(src);

        audio.onloadedmetadata = () => {
            if (audio.readyState > 0) {
                console.log(audio.duration);
                setDuration(audio.duration);
            }
        };
    };

    const handlePlayingAudio = (data) => {
        if (!isPlaying) {
            setSongData(data);
            audioRef.current.play();
            setIsPlaying(true);
        } else {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    const globalData = {
        songData,
        isPlaying,
        duration,
        handlePlayingAudio,
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
