function Timer(time) {
    let min = '0' + Math.floor(time / 60);
    let second = Math.floor(time % 60);
    if (second < 10) {
        second = '0' + second;
    }
    return `${min}:${second}`;
}

export default Timer;
