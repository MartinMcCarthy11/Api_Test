{
	let testObject;
	async function getPosts() {
		const response = await fetch(
			'https://jsonplaceholder.typicode.com/posts/1'
		);
		const data = await response.json();

		// testObject.userId = data.userId;
		// testObject.id = data.id;
		// testObject.title = data.title;
		// testObject.body = data.body;
		testObject = {
			userPosts: [
				{
					userId: data.userId,
					id: data.id,
					title: data.title,
					body: 'This is a test',
				},
				{
					userId: data.userId,
					id: data.id,
					title: data.title,
					body: data.body,
				},
			],
		};

		console.log('data', data);
		console.log('testObj', testObject);
	}

	async function postNewPost() {
		const response = await fetch(
			'https://jsonplaceholder.typicode.com/posts',
			{
				method: 'POST',
				body: JSON.stringify(testObject),
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
			}
		);

		const data = await response.json();
		console.log('Response', data);
	}
	getPosts();
	postNewPost();
}
