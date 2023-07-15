/*
	ok,  add a state for the current mode
	save it in the local storage api
	it is an object array, lightmode 0, darkmode 1, leaves space for other themes

	index type => int > 0 

	should I be doing this in sass? probably lol


*/


const global = {
	margin: 16,
	padding: 16,
	borderRadius: 4,
	page: {
		display: 'flex',
		flexDirection: 'column',
		minWidth: 270,
		width: '80%',
		maxWidth: 1200,
		padding: 16,
		backgroundColor: 'white',
	},
}

export const breakponits = {
	mobile: 600,
	tablet: 1000,
	desktop: 1200,
}

export const style = [{
	...global,
	page: {...global.page, backgroundColor: 'white'}

}, {
	...global,
	page: {...global.page, backgroundColor: '#282C34'}

}];





