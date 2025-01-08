function Timer(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `0${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}
export default Timer;
