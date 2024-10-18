import { createContext, useState } from 'react';

const GlobalDataContext = createContext();

function GlobalContext({ children }) {
    const [isPlaying, setIsPlaying] = useState(false);

    const setPlayingCallback = (callback) => {
        setIsPlaying(true);
        if (typeof callback === 'function') {
            callback();
        }
    };
    const GlobalData = {
        isPlaying,
        setIsPlaying,
        setPlayingCallback,
    };
    return (
        <GlobalDataContext.Provider value={GlobalData}>
            {children}
        </GlobalDataContext.Provider>
    );
}

export { GlobalContext, GlobalDataContext };
