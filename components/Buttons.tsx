'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

export function LoggedUserData() {
	const { data: session, status } = useSession();

	if (status === 'loading') {
		return <>Loading ...</>;
	}

	if (status === 'authenticated') {
		return (
			<div>
				<Link href={'/dashboard'}>
					<Image
						className='rounded-full'
						src={session.user?.image ?? '/user.jpg'}
						alt='user image'
						width={32}
						height={32}
					></Image>
				</Link>
			</div>
		);
	}
}

export function SignInButton() {
	return (
		<button
			onClick={() => signIn()}
			className='mx-2 p-2 bg-blue-800 rounded-xl'
		>
			Sign In
		</button>
	);
}

export function SignOutButton() {
	return (
		<button
			onClick={() => signOut()}
			className='mx-1 sm:mx-2 p-2 bg-green-800 rounded-xl'
		>
			Sign Out
		</button>
	);
}
