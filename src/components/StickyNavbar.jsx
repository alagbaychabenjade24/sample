import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../dist/styles/StickyNavbar.scss';

import BSASolutionsIncLogo from '../dist/img/bsa-solutions-inc-logo.png';

import { IoIosMenu } from 'react-icons/io';
import { AiOutlineClose } from 'react-icons/ai';

function StickyNavbar() {
	const [menu, setMenu] = useState(false);
	const [hide, setHide] = useState(false);

	const openMenu = () => setMenu(!false);
	const closeMenu = () => setMenu(false);

	const hideMenu = () => setHide(!false);
	const showMenu = () => setHide(false);

	return (
		<nav className='sticky__nav'>
			<div className='minmax'>
				<div className='sticky__nav__container'>
					<Link to='/' className='sticky__nav__logo'>
						<img src={BSASolutionsIncLogo} alt='bsa solutions inc logo' />{' '}
						<h1>BSA Solutions Inc.</h1>
					</Link>
					<ul
						className={
							menu
								? 'sticky__nav__links sticky__nav__links__active'
								: 'sticky__nav__links'
						}
					>
						<li>
							<Link to='/about-us'>About Us</Link>
						</li>
						<li>
							<Link to='/services'>Services</Link>
						</li>
						<li>
							<Link to='/applicants-space'>Applicants Space</Link>
						</li>
						<li>
							<Link to='/contact-us'>Contact Us</Link>
						</li>
					</ul>

					<div className='sticky__nav__menu'>
						<IoIosMenu
							onClick={() => {
								openMenu();
								hideMenu();
							}}
							className={hide ? 'menu' : 'menu menu__active'}
						/>
						<AiOutlineClose
							onClick={() => {
								closeMenu();
								showMenu();
							}}
							className={hide ? 'menu menu__active' : 'menu'}
						/>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default StickyNavbar;
