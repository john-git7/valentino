const quotes = [
    "A rose for you, a love for eternity. Happy Rose Day!",
    "Just like a rose, your love makes my life beautiful. Happy Rose Day!",
    "Roses are red, violets are blue, my heart belongs to you. Happy Rose Day!",
    "You are the rose in my heart, and I am the thorns protecting you. Happy Rose Day!",
    "A rose can't be compared to you because you are perfect. Happy Rose Day!",
    "The fragrance of a rose, just like the feeling I have for you, never fades. Happy Rose Day!",
    "On this Rose Day, I send you love and roses to brighten your day!",
    "Roses are nature's way of saying 'I love you'. Here's my token of love. Happy Rose Day!",
    "You are the rose of my life. Happy Rose Day, my love!",
    "A single rose can be my garden, a single friend my world. Happy Rose Day!"
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById("quoteDisplay").textContent = quote;
}
document.getElementById('bloomButton').addEventListener('click', function() {
    const petals = document.querySelectorAll('.petal');
    petals.forEach(petal => {
        petal.style.opacity = 1; 
    });
});
