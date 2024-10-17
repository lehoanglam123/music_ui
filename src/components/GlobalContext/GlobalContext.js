import { createContext, useState } from 'react';

const GlobalDataContext = createContext();

function GlobalContext({ children }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [playAudioCallback, setPlayAudioCallback] = useState(null);
    const GlobalData = {
        isPlaying,
        setIsPlaying,
        playAudioCallback,
        setPlayAudioCallback,
    };
    return (
        <GlobalDataContext.Provider value={GlobalData}>
            {children}
        </GlobalDataContext.Provider>
    );
}

export { GlobalContext, GlobalDataContext };
