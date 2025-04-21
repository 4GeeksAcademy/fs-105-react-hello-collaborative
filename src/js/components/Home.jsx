import React from "react";
import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { Card } from "./Card";
import { Footer } from "./Footer";


const Home = () => {
	return (
		<>
			<div >
				<Navbar />
			</div>
			<div>
				<Jumbotron />
			</div>
			<div className="container-fluid">
				<div className="row">
					<div className="col-12 col-md-6 col-lg-3">
						<Card />
					</div>
					<div className="col-12 col-md-6 col-lg-3">
						<Card />
					</div>
					<div className="col-12 col-md-6 col-lg-3">
						<Card />
					</div>
					<div className="col-12 col-md-6 col-lg-3">
						<Card />
					</div>
				</div>
				<Footer/>
			</div>
		</>
	);
};

export default Home;