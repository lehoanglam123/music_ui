import { createContext, useState } from 'react';

const GlobalDataContext = createContext();

function GlobaleDataProvider({ children }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [showPlayIcon, setShowPlayIcon] = useState(true);
    const [showPlayerBar, setShowPlayerBar] = useState(false);
    const [activeSongId, setActiveSongId] = useState(null);
    const [dataMusic, setDataMusic] = useState({});
    const [volume, setVolume] = useState(40);
    const [currentTimeGlobal, setCurrentTimeGlobal] = useState(0);

    const GlobalData = {
        isPlaying,
        dataMusic,
        activeSongId,
        showPlayerBar,
        showPlayIcon,
        volume,
        currentTimeGlobal,
        setIsPlaying,
        setDataMusic,
        setShowPlayerBar,
        setShowPlayIcon,
        setActiveSongId,
        setVolume,
        setCurrentTimeGlobal,
    };
    return (
        <GlobalDataContext.Provider value={GlobalData}>
            {children}
        </GlobalDataContext.Provider>
    );
}

export { GlobaleDataProvider, GlobalDataContext };
