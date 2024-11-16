export default function ParseLyrics(lyrics) {
    if (typeof lyrics !== 'string') return lyrics;
    return lyrics
        .split(/[.]{3}|[.!?,]+/) // Tách dựa trên dấu chấm, ba chấm, dấu phẩy, hoặc dấu chấm hỏi
        .map((line) => line.trim()) // Loại bỏ khoảng trắng đầu và cuối mỗi câu
        .filter((line) => line.length > 0);
}
