export default {
	// Pens.
	'pens.picked': () => 'http://cpv2api.com/pens/picks',
	'pens.popular': () => 'http://cpv2api.com/pens/popular',
	'pens.recent': () => 'http://cpv2api.com/pens/recent',

	'pens.user.loved': user => `http://cpv2api.com/pens/loved/${user}`,
	'pens.user.popular': user => `http://cpv2api.com/pens/popular/${user}`,
	'pens.user.public': user => `http://cpv2api.com/pens/public/${user}`,
	'pens.user.forked': user => `http://cpv2api.com/pens/forked/${user}`,
	'pens.user.showcase': user => `http://cpv2api.com/pens/showcase/${user}`,

	// Posts.
	'posts.picked': () => 'http://cpv2api.com/posts/picks',
	'posts.popular': () => 'http://cpv2api.com/posts/popular',
	'posts.user.loved': user => `http://cpv2api.com/posts/loved/${user}`,
	'posts.user.popular': user => `http://cpv2api.com/posts/popular/${user}`,
	'posts.user.public': user => `http://cpv2api.com/posts/public/${user}`,

	// Collections.
	'collections.picked': () => 'http://cpv2api.com/collections/picks',
	'collections.popular': () => 'http://cpv2api.com/collections/popular',

	'collections.id': id => `http://cpv2api.com/collection/${id}`,

	'collections.user.loved': user => `http://cpv2api.com/collections/loved/${user}`,
	'collections.user.popular': user => `http://cpv2api.com/collections/popular/${user}`,
	'collections.user.public': user => `http://cpv2api.com/collections/public/${user}`,

	// User.
	'user.followers': user => `http://cpv2api.com/followers/${user}`,
	'user.following': user => `http://cpv2api.com/followers/${user}`,
	'user.profile': user => `http://cpv2api.com/profile/${user}`,
};