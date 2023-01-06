/** @format */

import React from "react";
import ReactDOM from "react-dom";
//css
import "./index.css";
//setup vars
const books = [
	{id: 1,
		img: "https://m.media-amazon.com/images/I/8144Vic9C5L._AC_UY218_.jpg",
		title: "I Love you to the moon and back",
		author: "Amelia Hepworth",
	},

	{id:2,
		img: "https://m.media-amazon.com/images/I/71aLultW5EL._AC_UY218_.jpg",
		title: "Our Class is a Family",
		author: "Shannon Olsen ",
	},
	{id:3,
		img: "https://m.media-amazon.com/images/I/81wgcld4wxL._AC_UY218_.jpg",
		title: "Atomic Habits",
		author: "James Clear ",
	},
];

function BookList() {
	return (
		<section className="booklist">
			{books.map((book) => {
				return <Book key = {book.id} {...book}></Book>;
			})}
		</section>
	);
}

const Book = (props) => {
	const { img, title, author } = props; //destructuring the props
	// console.log(props);
	return (
		<article className="book">
			<img src={img} alt="A book" />
			<h1>{title}</h1>
			<h4>{author}</h4>
		</article>
	);
};

ReactDOM.render(<BookList />, document.getElementById("root"));

/* <Book
				img={firstBoook.image}
				title={firstBoook.title}
				author={firstBoook.author}></Book>
			<Book
				img={secondBoook.image}
				title={secondBoook.title}
				author={secondBoook.author}
			/> */

// const names = ["John", "James", "Susan"];
// const newNames = names.map((name) => {
// 	return<h1>{name}</h1>
// });
// console.log(newNames);
