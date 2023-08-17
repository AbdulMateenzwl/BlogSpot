import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';


export default async function Home() {
	const session = await getServerSession();
	if (!session) {
		return (
			<>
				<div className='h-[85vh] w-full flex items-center justify-center'>
					<p className='text-xl xl:text-2xl m-3 text-center'>
						You must be signed in to view this page.
					</p>
				</div>
			</>
		);
	}

	return <main></main>;
}
