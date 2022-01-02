import book from "./book.js";
const book1 = new book(
    "Think like a millionaire",
    "Donald Trump",
    2017,
    4
);
const book2 = new book(
    "God Father",
    "Mario Puzo",
    1997,
    4
)

console.log("Book 1: ", book1);
console.log("Recommend: ", book1.recommend());
console.log("Recommend: ", book1.changeRating(3));
console.log("Recommend: ", book1.recommend());
console.log("Book 2: ", book2);