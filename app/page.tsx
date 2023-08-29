import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from './api/auth/[...nextauth]/route';

export default async function Home() {
	// const session = await getServerSession(authOptions);
	// if (!session) {
	return (
		<>
			<div className='h-[85vh] w-full flex items-center justify-center'>
				<p className='text-xl xl:text-2xl m-3 text-center'>
					You must be signed in to view this page.
				</p>
			</div>
		</>
	);
	// }

	// 	return (
	// 		<div>
	// 			<h1>Welcome to NextSpace!</h1>
	// 			<p>
	// 				A next-gen social media app to connect with frens inspired by MySpace
	// 			</p>
	// 			<p>To get started, sign up for an account</p>
	// 		</div>
	// 	);
}
