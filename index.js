const messages = [
  "Birthdays come around every year, but people like you only come once in a lifetime. I’m so glad you came into my life. Best wishes on your special day",
  "I promise that the more birthday candles you blow, the more I will be here for you to celebrate every special event in your life. Happy birthday!",
  "One day a year isn’t enough to celebrate someone as special as you.",
  "Here’s hoping you have a birthday that’s as special and wonderful as you are.",
  "If being awesome were a crime, you’d be on the top of the Most Wanted list. Happy Birthday!",
  "want to wish you all the love and happiness in the world, all of which you deserve. Happy birthday b",
  "Happy, happy birthday! You deserve all the cakes, love, hugs and happiness today. Enjoy your day b!",
];
const imgs = [
  "images/eastwood-done.png",
  "images/delivery-1.png",
  "images/lime-welcome.png",
  "images/eastwood-success.png",
  "images/marginalia-welcome.png",
  "images/open-doodles-ice-cream.png",
  "images/open-doodles-loving.png",
];

const btn = document.getElementById("btn");
btn.addEventListener("click", (text) => {
  document.getElementById("text").innerHTML =
    messages[Math.floor(Math.random() * messages.length)];
  document.getElementById("img").src =
    imgs[Math.floor(Math.random() * imgs.length)];
});
