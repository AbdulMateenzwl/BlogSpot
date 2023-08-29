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
		<nav className='flex bg-green-400 justify-between'>
			<Link href={'/'}>
				<Image
					src='/next.svg'
					width={216}
					height={30}
					alt='logo'
					className='mx-2 scale-50 sm:scale-100'
				/>
			</Link>

			<ul className='flex h-[50px] '>
				<li className='text-lg m-1 mx-2 bg-green-800 hover:bg-green-50'>
					<Link href={'/about'}>About</Link>
				</li>
				<li className='text-lg m-1 mx-2 bg-green-800 hover:bg-green-50'>
					<Link href={'/blog'}>Blog</Link>
				</li>
				<li className='text-lg m-1 mx-2 bg-green-800 hover:bg-green-50'>
					<Link href={'/users'}>Users</Link>
				</li>
				<li>{session && <LoggedUserData />}</li>
				<li className='text-lg m-1 mx-2 bg-green-800 hover:bg-green-50'>
					{session !== null ? <SignOutButton /> : <SignInButton />}
				</li>
			</ul>
		</nav>
	);
}
