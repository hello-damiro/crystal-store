export const randomNumber = (num) => {
    return Math.floor(Math.random() * num);
};

export function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function formatCurrency(currencySymbol, separator, value) {
    const formattedValue = value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    const [dollars, cents] = formattedValue.split('.');
    const formattedDollars = dollars.replace('$', currencySymbol).replace(',', separator);
    return `${formattedDollars}.${cents}`;
}
