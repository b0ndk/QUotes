var quotes = [
    { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { text: "Your time is limited, don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { text: "Whether you think you can or you think you can’t, you’re right.", author: "Henry Ford" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { text: "So many books, so little time.", author: "Frank Zappa" },
    { text: "A room without books is like a body without a soul.", author: "Marcus Tullius Cicero" },
    { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { text: "If you tell the truth, you don't have to remember anything.", author: "Mark Twain" },
    { text: "Act as if what you do makes a difference. It does.", author: "William James" }
];

function generateQuote() {
     var randomIndex = Math.floor(Math.random() * quotes.length);
    var selectedQuote = quotes[randomIndex];
    document.getElementById("quote").textContent = `"${selectedQuote.text}"`;
    document.getElementById("author").textContent = `- ${selectedQuote.author}`;
}