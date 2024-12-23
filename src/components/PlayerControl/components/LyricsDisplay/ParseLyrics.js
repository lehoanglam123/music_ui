export default function parseLyrics(lyrics) {
    if (typeof lyrics !== 'string') return [];
    return lyrics
        .split('...')
        .map((line) => line.trim())
        .filter((line) => line !== '');
}
