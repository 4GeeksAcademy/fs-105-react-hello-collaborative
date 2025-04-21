import React from "react";
import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { Card } from "./Card";


const Home = () => {
	return (
		<>
			<div className="w-100">
				<Navbar />
			</div>
			<div>
				<Jumbotron />
			</div>
			<div className="d-flex justify-content-between w-85">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</>
	);
};

export default Home;