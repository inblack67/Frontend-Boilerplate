import Link from 'next/link';

const Navbar = () => {
	return (
		<nav className='black'>
			<div className='nav-wrapper'>
				<div className='container'>
					<Link href='/'>
						<a>Next.js</a>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
