import { createContext, useState } from 'react';

const GlobalDataContext = createContext();

function GlobalContext({ children }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [showPlayIcon, setShowPlayIcon] = useState(true);
    const [showPlayerBar, setShowPlayerBar] = useState(false);
    const [dataMusic, setDataMusic] = useState({});

    const GlobalData = {
        isPlaying,
        dataMusic,
        showPlayerBar,
        showPlayIcon,
        setIsPlaying,
        setDataMusic,
        setShowPlayerBar,
        setShowPlayIcon,
    };
    return (
        <GlobalDataContext.Provider value={GlobalData}>
            {children}
        </GlobalDataContext.Provider>
    );
}

export { GlobalContext, GlobalDataContext };
