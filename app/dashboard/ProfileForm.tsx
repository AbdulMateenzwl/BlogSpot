'use client';

export function ProfileForm({ user }: any) {
	const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);

		const body = {
			name: formData.get('name'),
			bio: formData.get('bio'),
			age: formData.get('age'),
			image: formData.get('image'),
		};

		const res = await fetch('/api/user', {
			method: 'PUT',
			body: JSON.stringify(body),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		await res.json();
	};

	return (
		<div className='container block mx-auto  max-w-[600px] sm:border-gray-500 sm:border py-6 px-3 sm:rounded-xl mt-4 sm:mb-8 sm:shadow-lg sm:shadow-gray-500 '>
			<h2 className='text-3xl'>Edit Your Profile</h2>
			<form onSubmit={updateUser} className='flex flex-col p-2'>
				<div className='flex flex-col sm:flex-row sm:items-center mt-2'>
					<label htmlFor='name'>Name</label>
					<input
						type='text'
						name='name'
						defaultValue={user?.name ?? ''}
						className='sm:w-full sm:mx-3'
					/>
				</div>
				<div className='flex flex-col sm:flex-row mt-2'>
					<label htmlFor='bio'>Bio</label>
					<textarea
						name='bio'
						cols={30}
						rows={10}
						defaultValue={user?.bio ?? ''}
						className='sm:w-full sm:mx-3'
					></textarea>
				</div>
				<div className='flex flex-col sm:flex-row sm:items-center mt-2'>
					<label htmlFor='age'>Age</label>
					<input
						type='number'
						name='age'
						defaultValue={user?.age ?? 0}
						className='sm:w-full sm:mx-2'
					/>
				</div>
				<div className='flex flex-col sm:flex-row sm:items-center mt-2'>
					<label htmlFor='image'>Profile Image URL</label>
					<input
						type='text'
						name='image'
						defaultValue={user?.image ?? ''}
						className='sm:w-full sm:mx-2'
					/>
				</div>
				<button className=' mx-auto mt-4 bg-green-600 hover:bg-green-700 py-3 px-8 rounded-lg text-yellow-100 border-b-4 border-green-700 hover:border-green-800 transition duration-300 w-[200px]' type='submit'>
					Save
				</button>
			</form>
		</div>
	);
}
