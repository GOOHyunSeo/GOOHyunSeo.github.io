const quotes = [
  {
    quote: "I love you 3000.",
    from: "Tony Stark, /Avengers: Endgame/",
  },
  {
    quote: "No amount of money ever bought a second of time.",
    from: "Tony Stark, /Avengers: Endgame/",
  },
  {
    quote: "I would rather be a good man than a great king.",
    from: "Thor, /Thor: The Dark World/",
  },
  {
    quote: "I am Iron Man.",
    from: "Tony Stark, /Iron Man, Avengers: Endgame/",
  },
  {
    quote:
      "I don’t want to kill anyone. I don’t like bullies. I don’t care where they’re from.",
    from: "Steve Rogers, /Captain America: The First Avenger/",
  },
  {
    quote: "I can do this all day.",
    from: "Steve Rogers, /Captain America: The First Avenger/",
  },
  {
    quote: "That’s my secret, Captain. I’m always angry.",
    from: "Bruce Banner, /Avengers/",
  },
  {
    quote: "I’m gonna need a rain check on that dance.",
    from: "Steve Rogers, /Captain America: The First Avenger/",
  },
  {
    quote: "But If You Step Out That Door, You Are An Avenger.",
    from: "Clint Barton, /Avengers: Age Of Ultron/",
  },
  {
    quote: "Staying together is more important than how we stay together.",
    from: "Natasha Romanoff, /Captain America: Civil War/",
  },
];

const quote = document.querySelector("#quote span:first-child");
const from = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
from.innerText = todaysQuote.from;
