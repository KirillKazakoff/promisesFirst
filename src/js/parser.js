export default function json(data) {
    return new Promise((resolve) => {
        // эмуляция обработки ArrayBuffer
        setTimeout(() => {
            resolve(String.fromCharCode(...new Uint16Array(data)));
        }, 500);
    });
}
