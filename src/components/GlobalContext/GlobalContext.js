import { useState, createContext } from 'react';

const GlobalDataContext = createContext();
function GlobalContext({ children }) {
    // console.log(children);
    const [play, setPlay] = useState(false);
    const handlePlay = () => {
        setPlay(true);
    };

    const globalData = {
        play,
        handlePlay,
    };
    return (
        <GlobalDataContext.Provider value={globalData}>
            {children}
        </GlobalDataContext.Provider>
    );
}

export { GlobalDataContext, GlobalContext };
