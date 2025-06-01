// content.js
// Remove /play from a given link
function removePlay(lnk) {
	const newLnk = lnk.split('/play')
	return newLnk[0] + newLnk[1]
}

// Return child tagname of parent id
function findFirstDescendant(parent, tagname) {
	parent = document.getElementById(parent)
	const descendants = parent.getElementsByTagName(tagname)
	if (descendants.length) {
		return descendants[0]
	}
	return null
}

// Get url
const url = window.location.href

// Cache type data
wptArray = [
	{ wptTypeId: '2', hash: '32bc9333-5e52-4957-b0f6-5a2c8fc7b257', name: 'Traditional Cache' },
	{ wptTypeId: '3', hash: 'a5f6d0ad-d2f2-4011-8c14-940a9ebf3c74', name: 'Multi-Cache' },
	{ wptTypeId: '8', hash: '40861821-1835-4e11-b666-8d41064d03fe', name: 'Mystery Cache' },
	{ wptTypeId: '5', hash: '4bdd8fb2-d7bc-453f-a9c5-968563b15d24', name: 'Letterbox Hybrid' },
	{ wptTypeId: '11', hash: '31d2ae3c-c358-4b5f-8dcd-2185bf472d3d', name: 'Webcam Cache' },
	{ wptTypeId: '4', hash: '294d4360-ac86-4c83-84dd-8113ef678d7e', name: 'Virtual Cache' },
	{ wptTypeId: '1858', hash: '0544fa55-772d-4e5c-96a9-36a51ebcf5c9', name: 'Wherigo Cache' },
	{ wptTypeId: '137', hash: 'c66f5cf3-9523-4549-b8dd-759cd2f18db8', name: 'EarthCache' },
	{ wptTypeId: '6', hash: '69eb8534-b718-4b35-ae3c-a856a55b0874', name: 'Event Cache' }, // Is actually all events, but used until we find the actual value
	{ wptTypeId: '6', hash: '69eb8534-b718-4b35-ae3c-a856a55b0874', name: 'All Event Cache Types' },
	{
		wptTypeId: '13',
		hash: '57150806-bc1a-42d6-9cf0-538d171a2d22',
		name: 'Cache In Trash Out® Event',
	},
	{
		wptTypeId: '3653',
		hash: '3ea6533d-bb52-42fe-b2d2-79a3424d4728',
		name: 'Community Celebration Event',
	},
	{ wptTypeId: '453', hash: '69eb8535-b718-4b35-ae3c-a856a55b0874', name: 'Mega-Event Cache' },
	{
		wptTypeId: '4738',
		hash: 'bc2f3df2-1aab-4601-b2ff-b5091f6c02e3',
		name: 'Geocaching HQ Block Party',
	},
	{
		wptTypeId: '7005',
		hash: '51420629-5739-4945-8bdd-ccfd434c0ead',
		name: 'Giga-Event Cache',
	},
	{
		wptTypeId: '12',
		hash: '8f6dd7bc-ff39-4997-bd2e-225a0d2adf9d',
		name: 'Locationless (Reverse) Cache',
	},
	{ wptTypeId: '9', hash: '2555690d-b2bc-4b55-b5ac-0cb704c0b768', name: 'Project APE Cache' },
	{ wptTypeId: '3773', hash: '416f2494-dc17-4b6a-9bab-1a29dd292d8c', name: 'Geocaching HQ' },
	{
		wptTypeId: '1304',
		hash: '72e69af2-7986-4990-afd9-bc16cbbb4ce3',
		name: 'GPS Adventures Exhibit',
	},
]

// Get which site
if (url.includes('www.geocaching.com/map')) {
	// Update link in map view
	// document.getElementById('ctl34_HyperLink1').href = '../map' OUTDATED NEEDS FIX
	// Remove 'Search geocaches' button
	// document.getElementsByClassName('map-cta')[0].remove() NOT WORKING PROPERLY WITH LEAFLET, MAKES CACHES INVISIBLE
} else if (url.includes('www.geocaching.com/geocache')) {
	// Update link on cache page
	// document.getElementById('ctl00_ctl29_HyperLink1').href = '../map' OUTDATED NEEDS FIX

	const mapTag = findFirstDescendant('ctl00_ContentBody_MapLinks_MapLinks', 'a') // "Geocaching.com Map"-button
	const link = mapTag.href
	mapTag.href = removePlay(link)
} else if (url === 'https://www.geocaching.com/play/search') {
	// Uppdate link on search/home page
	document.getElementsByClassName('map-search-option')[0].setAttribute('href', '/map')
}

// Get old cache find/hide list for everybody
if (
	url.includes('https://www.geocaching.com/p/default.aspx') &&
	url.includes('tab=geocaches#profilepanel')
) {
	const username = document.getElementById(
		'ctl00_ProfileHead_ProfileHeader_lblMemberName'
	).innerHTML

	// Cache type finds
	document.querySelectorAll('a[title]').forEach((link) => {
		const titleText = link.title.replace(/\s+/g, ' ').trim() // Normalize whitespace

		const match = wptArray.find((wpt) => wpt.name === titleText)

		if (match && link.id) {
			const isFound = link.id.includes('Found')
			const isHidden = link.id.includes('Hidden')

			if (isFound || isHidden) {
				const param = isFound ? 'ul' : 'u'
				link.href = `https://www.geocaching.com/seek/nearest.aspx?tx=${match.hash}&${param}=${username}`
			}
		}
	})

	// All finds
	const allFinds = document.querySelector('[title="All Geocache Finds"]')
	if (allFinds) {
		allFinds.href = `https://www.geocaching.com/seek/nearest.aspx?ul=${username}`
	}

	// All hides
	const allHides = document.querySelector('[title="All Geocache Hides"]')
	if (allHides) {
		allHides.href = `https://www.geocaching.com/seek/nearest.aspx?u=${username}`
	}
}

// Failsafe
// To be performed for unknown/not implemented sites
if (url.includes('www.geocaching.com/play/map')) {
	window.location.replace(removePlay(url))
}

// console.log(url)
