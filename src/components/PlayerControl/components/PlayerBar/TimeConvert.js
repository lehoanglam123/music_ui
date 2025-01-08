function TimeConvert(time) {
    let min = '0' + Math.floor(time / 60);
    let second = Math.floor(time % 60);
    let decimalSecond = (time % 1).toFixed(1).substring(2); // Lấy phần thập phân sau dấu chấm
    if (second < 10) {
        second = '0' + second;
    }
    return `${min}:${second}.${decimalSecond}`;
}

export default TimeConvert;
