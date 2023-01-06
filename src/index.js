/** @format */

import React from "react";
import ReactDOM from "react-dom";
//css
import "./index.css";
//setup vars
const books = [
	{
		title: "I Love you to the moon and back",
		image: "https://m.media-amazon.com/images/I/8144Vic9C5L._AC_UY218_.jpg",
		author: "Amelia Hepworth",
	},

	{
		title: "Our Class is a Family",
		image: "https://m.media-amazon.com/images/I/71aLultW5EL._AC_UY218_.jpg",
		author: "Shannon Olsen ",
	},
];

function BookList() {
	return (
		<section className="booklist">
			{/* <Book
				img={firstBoook.image}
				title={firstBoook.title}
				author={firstBoook.author}></Book>
			<Book
				img={secondBoook.image}
				title={secondBoook.title}
				author={secondBoook.author}
			/> */}
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
