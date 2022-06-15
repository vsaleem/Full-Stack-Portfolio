import React from "react";

function Header(props) {
	return (
		<>
			{/* <!-- Header --> */}
			<section id='header' className='header wrapper'>
				{/* <!-- Logo --> */}
				<div className='header__logo-box'></div>

				{/* Heading */}
				<div className='header__text-box'>
					<h1 className='header-primary'>
						<p className='header-primary--name'>Victoria Saleem</p>
						<p className='header-primary--title'>Frontend Developer</p>
					</h1>

					{/* Button to Resume */}
					<a href='#' className='resume-link btn-text'>
						Link to my Resume
					</a>
				</div>
			</section>
		</>
	);
}

export default Header;