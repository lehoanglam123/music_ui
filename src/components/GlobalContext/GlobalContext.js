import { createContext, useState } from 'react';

const GlobalDataContext = createContext();

function GlobalContext({ children }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [showPlayerBar, setShowPlayerBar] = useState(false);
    const [dataMusic, setDataMusic] = useState({});

    const GlobalData = {
        isPlaying,
        dataMusic,
        showPlayerBar,
        setIsPlaying,
        setDataMusic,
        setShowPlayerBar,
    };
    return (
        <GlobalDataContext.Provider value={GlobalData}>
            {children}
        </GlobalDataContext.Provider>
    );
}

export { GlobalContext, GlobalDataContext };
