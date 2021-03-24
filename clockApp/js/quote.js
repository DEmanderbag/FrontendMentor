// Quote section
const quoteText = document.querySelector(".quote__text");
const quoteAuthor = document.querySelector(".quote__author");

async function getQuote() {
  try {
    const request = await fetch("https://api.quotable.io/random");
    const { author, content } = await request.json();
    quoteAuthor.textContent = author;
    quoteText.textContent = content;
  } catch (error) {
    console.error(error);
    console.log("Unable to request data");

    let randomNumber = Math.floor(Math.random() * 20);
    const { author, content } = randomQuotes[randomNumber];
    quoteAuthor.textContent = author;
    quoteText.textContent = content;
  }
}

// These 20 quotes taken from https://api.quotable.io/quotes and are used in case the API request fails or if the user is offline
const randomQuotes = [
  {
    content: "Friendship is Love without his wings!",
    author: "Lord Byron",
  },
  {
    content: "A short saying often contains much wisdom.",
    author: "Sophocles",
  },
  {
    content:
      "Wisdom is a kind of knowledge. It is knowledge of the nature, career, and consequences of human values.",
    author: "Sidney Hook",
  },
  {
    content:
      "The three great essentials to achieve anything worth while are: Hard work, Stick-to-itiveness, and Common sense.",
    author: "Thomas Edison",
  },
  {
    content:
      "If you are bitter, you are like a dry leaf that you can just squash, and you can get blown away by the wind. There is much more wisdom in forgiveness.",
    author: "Vusi Mahlasela",
  },
  {
    content: "Applause is a receipt, not a bill.",
    author: "Dale Carnegie",
  },
  {
    content:
      "The greatest obstacle to being heroic is the doubt whether one may not be going to prove one's self a fool; the truest heroism is to resist the doubt; and the profoundest wisdom, to know when it ought to be resisted, and when it be obeyed.",
    author: "Nathaniel Hawthorne",
  },
  {
    content: "The eye sees only what the mind is prepared to comprehend.",
    author: "Henri Bergson",
  },
  {
    content: "Take things as they are. Punch when you have to punch. Kick when you have to kick.",
    author: "Bruce Lee",
  },
  {
    content: "Can you imagine what I would do if I could do all I can?",
    author: "Sun Tzu",
  },
  {
    content: "Knowledge speaks, but wisdom listens.",
    author: "Jimi Hendrix",
  },
  {
    content:
      "A tree is known by its fruit; a man by his deeds. A good deed is never lost; he who sows courtesy reaps friendship, and he who plants kindness gathers love.",
    author: "Basil of Caesarea",
  },
  {
    content: "Whatever happens, take responsibility.",
    author: "Tony Robbins",
  },
  {
    content: "Kind words do not cost much. Yet they accomplish much.",
    author: "Blaise Pascal",
  },
  {
    content:
      "You can tell whether a man is clever by his answers. You can tell whether a man is wise by his questions.",
    author: "Naguib Mahfouz",
  },
  {
    content:
      "Be Impeccable With Your Word. Speak with integrity. Say only what you mean. Avoid using the word to speak against yourself or to gossip about others. Use the power of your word in the direction of truth and love.",
    author: "Don Miguel Ruiz",
  },
  {
    content: "Who looks outside, dreams; who looks inside, awakes.",
    author: "Carl Jung",
  },
  {
    content: "By believing passionately in something that does not yet exist, we create it.",
    author: "Nikos Kazantzakis",
  },
  {
    content:
      "Give me a lever long enough and a fulcrum on which to place it, and I shall move the world.",
    author: "Archimedes",
  },
  {
    content:
      "Science and technology revolutionize our lives, but memory, tradition and myth frame our response.",
    author: "Arthur M. Schlesinger Jr.",
  },
];
