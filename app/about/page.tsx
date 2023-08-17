export const dynamic = 'force-static';

import { Metadata } from 'next';


export const meta: Metadata = {
	title: 'About Us',
	description: 'About page',
	
};

export default function page() {
	return (
		<>
			<div>About</div>
			<p>Hi this is about page.</p>
		</>
	);
}
