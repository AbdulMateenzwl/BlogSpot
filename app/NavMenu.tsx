import Link from 'next/link';
import Image from 'next/image';
import {
	SignInButton,
	SignOutButton,
	LoggedUserData,
} from '@/components/Buttons';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from './api/auth/[...nextauth]/route';


export default async function NavMenu() {
	const session = await getServerSession(authOptions);

	return (
		<nav className='flex bg-white justify-between border border-1 border-b-blue-950'>
			<Link href={'/'}>
				<Image
					src='/logo.svg'
					width={216}
					height={30}
					alt='logo'
					className='mx-2 scale-50 sm:scale-100'
				/>
			</Link>

			<ul className='flex h-[50px] items-center justify-center '>
				<li className='text-lg m-1 mx-2 bg-blue-800 hover:bg-blue-200 hover:text-black text-white flex items-center justify-center px-3 py-1 rounded-lg'>
					<Link href={'/about'}>About</Link>
				</li>
				<li className='text-lg m-1 mx-2 bg-blue-800 hover:bg-blue-200 hover:text-black text-white flex items-center justify-center px-3 py-1 rounded-lg'>
					<Link href={'/blog'}>Blog</Link>
				</li>
				<li className='text-lg m-1 mx-2 bg-blue-800 hover:bg-blue-200 hover:text-black text-white flex items-center justify-center px-3 py-1 rounded-lg'>
					<Link href={'/users'}>Users</Link>
				</li>
				<li>{session && <LoggedUserData />}</li>
				<li className='items-center justify-center px-1 py-2 rounded-lg'>
					{session !== null ? <SignOutButton /> : <SignInButton />}
				</li>
			</ul>
		</nav>
	);
}
