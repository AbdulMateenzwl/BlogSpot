import { SignOutButton } from '@/components/Buttons';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { ProfileForm } from './ProfileForm';
export default async function DashBoard() {
	const session = await getServerSession(authOptions);

	if (!session) {
		redirect('/api/auth/signin');
	}

	const currentUserEmail = session?.user?.email!;
	const user = await prisma.user.findUnique({
		where: {
			email: currentUserEmail,
		},
	});

	// const user ={
	// 	name: 'test',
	// 	bio: 'test',
	// 	age: 0,
	// 	image: 'https://github.com/abdulmateenzwl.png',
	// }

	return (
		<div>
			<h1 className='text-center mt-3 text-5xl font-bold'>Dashboard</h1>
			<ProfileForm user={user} />
		</div>
	);
}
