import React, { useEffect, useRef } from "react";

const FifthHomepage = (props) => {
	const animate = useRef(null);

	useEffect(() => {
		if (animate.current !== null) {
			animate.current.classList.add("show");
		}
	});

	if (props.display === "FifthPage") {
		return (
			<div className="wrapper bg-indigo" id="15">
				<div className="mw py-5 px-3 px-sm-5 py-5 h-100 works">
					<div className="about d-flex flex-column justify-content-center align-items-center text-light text-center px-4 px-sm-5 px-md-auto" ref={animate}>
						<h3 className="font-weight-bold mb-4 mb-md-5">Works in these 3 easy steps</h3>
						<div className="row">
							<div className="col-md-4">
								<div className="cc mb-2 mb-md-5 mx-auto border rounded-circle">01</div>
								<h5 className="font-weight-bold mb-3">Create an account</h5>
								<p className="d-none d-md-block">
									You can't wait to sign up. You'll be so amazed! First, Create an account on Qrate.
								</p>
							</div>
							<div className="col-md-4">
								<div className="cc mb-4 mb-md-5 mx-auto border rounded-circle">02</div>
								<h5 className="font-weight-bold mb-3">Select from Categories</h5>
								<p className="d-none d-md-block">
									You'll find many Categories of Art. Select the Art Categories you'll love to appear in your feed.
								</p>
							</div>
							<div className="col-md-4">
								<div className="cc mb-4 mb-md-5 mx-auto border rounded-circle">03</div>
								<h5 className="font-weight-bold mb-3">Explore, Buy or Sell Art</h5>
								<p className="d-none d-md-block">
									You'll find many categories of Art. Select the Art categories you'll love to appear in your feed.
								</p>
							</div>
							<div className="d-none col-md-9 d-none d-md-flex mx-auto mt-3">
								<div className="col-4 p-0 p-md-block my-auto">
									<img className="img-reduce-size" src="/images/homepage/screenshot.png" alt="Art" />
								</div>
								<div className="col-4 p-0 p-md-block my-auto">
									<img className="w-100" src="/images/homepage/2.png" alt="Art" />
								</div>
								<div className="col-4 p-0 p-md-block my-auto">
									<img className="img-reduce-size" src="/images/homepage/3.png" alt="Art" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	} else return null;
};

export default FifthHomepage;
