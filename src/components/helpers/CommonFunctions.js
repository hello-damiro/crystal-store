export const randomNumber = (num) => {
    return Math.floor(Math.random() * num);
};

export function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
