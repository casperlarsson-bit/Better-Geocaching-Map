// content.js
// Remove /play from a given link
function removePlay (lnk) {
  const newLnk = lnk.split('/play')
  return newLnk[0] + newLnk[1]
}

// Return child tagname of parent id
function findFirstDescendant (parent, tagname) {
  parent = document.getElementById(parent)
  const descendants = parent.getElementsByTagName(tagname)
  if (descendants.length) {
    return descendants[0]
  }
  return null
}

// Get url
const url = window.location.href

// Get which site
if (url.includes('www.geocaching.com/map')) { // Update link in map view
  // document.getElementById('ctl34_HyperLink1').href = '../map' OUTDATED NEEDS FIX

  // Remove 'Search geocaches' button
  // document.getElementsByClassName('map-cta')[0].remove() NOT WORKING PROPERLY WITH LEAFLET, MAKES CACHES INVISIBLE
} else if (url.includes('www.geocaching.com/geocache')) { // Update link on cache page
  // document.getElementById('ctl00_ctl29_HyperLink1').href = '../map' OUTDATED NEEDS FIX

  const mapTag = findFirstDescendant('ctl00_ContentBody_MapLinks_MapLinks', 'a') // "Geocaching.com Map"-button
  const link = mapTag.href
  mapTag.href = removePlay(link)
} else if (url === 'https://www.geocaching.com/play/search') { // Uppdate link on search/home page
  document.getElementsByClassName('map-search-option')[0].setAttribute('href', '/map')
} else if (url === 'https://www.geocaching.com/p/default.aspx?tab=geocaches#profilepanel') { // Get old cache find list instead WIP, only works for my profile
  // FINDS
  document.querySelector('[title="All Geocache Finds"]').href = 'https://www.geocaching.com/seek/nearest.aspx?ul=repsac16' // All cache finds
  document.getElementById('ctl00_ContentBody_ProfilePanel1_uxUserFoundList_ctl01_uxViewTaxonomy').href = 'https://www.geocaching.com/seek/nearest.aspx?tx=32bc9333-5e52-4957-b0f6-5a2c8fc7b257&ul=repsac16' // Tradd
  document.getElementById('ctl00_ContentBody_ProfilePanel1_uxUserFoundList_ctl02_uxViewTaxonomy').href = 'https://www.geocaching.com/seek/nearest.aspx?tx=a5f6d0ad-d2f2-4011-8c14-940a9ebf3c74&ul=repsac16' // Multi
  document.getElementById('ctl00_ContentBody_ProfilePanel1_uxUserFoundList_ctl03_uxViewTaxonomy').href = 'https://www.geocaching.com/seek/nearest.aspx?tx=294d4360-ac86-4c83-84dd-8113ef678d7e&ul=repsac16' // Virtual
  document.getElementById('ctl00_ContentBody_ProfilePanel1_uxUserFoundList_ctl04_uxViewTaxonomy').href = 'https://www.geocaching.com/seek/nearest.aspx?tx=4bdd8fb2-d7bc-453f-a9c5-968563b15d24&ul=repsac16' // Letterbox
  document.getElementById('ctl00_ContentBody_ProfilePanel1_uxUserFoundList_ctl05_uxSubTaxonomyTypes_ctl01_uxViewTaxonomy').href = 'https://www.geocaching.com/seek/nearest.aspx?tx=69eb8534-b718-4b35-ae3c-a856a55b0874&ul=repsac16' // Event
  document.getElementById('ctl00_ContentBody_ProfilePanel1_uxUserFoundList_ctl05_uxSubTaxonomyTypes_ctl02_uxViewTaxonomy').href = 'https://www.geocaching.com/seek/nearest.aspx?tx=57150806-bc1a-42d6-9cf0-538d171a2d22&ul=repsac16' // CITO
  document.getElementById('ctl00_ContentBody_ProfilePanel1_uxUserFoundList_ctl05_uxSubTaxonomyTypes_ctl03_uxViewTaxonomy').href = 'https://www.geocaching.com/seek/nearest.aspx?tx=69eb8535-b718-4b35-ae3c-a856a55b0874&ul=repsac16' // Mega event
  document.getElementById('ctl00_ContentBody_ProfilePanel1_uxUserFoundList_ctl06_uxViewTaxonomy').href = 'https://www.geocaching.com/seek/nearest.aspx?tx=40861821-1835-4e11-b666-8d41064d03fe&ul=repsac16' // Mystery
  document.getElementById('ctl00_ContentBody_ProfilePanel1_uxUserFoundList_ctl07_uxViewTaxonomy').href = 'https://www.geocaching.com/seek/nearest.aspx?tx=31d2ae3c-c358-4b5f-8dcd-2185bf472d3d&ul=repsac16' // Webcam
  document.getElementById('ctl00_ContentBody_ProfilePanel1_uxUserFoundList_ctl08_uxViewTaxonomy').href = 'https://www.geocaching.com/seek/nearest.aspx?tx=c66f5cf3-9523-4549-b8dd-759cd2f18db8&ul=repsac16' // Earthcache
  document.getElementById('ctl00_ContentBody_ProfilePanel1_uxUserFoundList_ctl09_uxViewTaxonomy').href = 'https://www.geocaching.com/seek/nearest.aspx?tx=0544fa55-772d-4e5c-96a9-36a51ebcf5c9&ul=repsac16' // Wherigo

  // HIDES
  document.querySelector('[title="All Geocache Hides"]').href = 'https://www.geocaching.com/seek/nearest.aspx?u=repsac16' // All cache hides
  document.getElementById('ctl00_ContentBody_ProfilePanel1_uxUserHiddenList_ctl01_uxViewTaxonomy').href = 'https://www.geocaching.com/seek/nearest.aspx?tx=32bc9333-5e52-4957-b0f6-5a2c8fc7b257&u=repsac16' // Tradd
  document.getElementById('ctl00_ContentBody_ProfilePanel1_uxUserHiddenList_ctl02_uxViewTaxonomy').href = 'https://www.geocaching.com/seek/nearest.aspx?tx=a5f6d0ad-d2f2-4011-8c14-940a9ebf3c74&u=repsac16' // Multi
  document.getElementById('ctl00_ContentBody_ProfilePanel1_uxUserHiddenList_ctl03_uxViewTaxonomy').href = 'https://www.geocaching.com/seek/nearest.aspx?tx=4bdd8fb2-d7bc-453f-a9c5-968563b15d24&u=repsac16' // Letterbox
  document.getElementById('ctl00_ContentBody_ProfilePanel1_uxUserHiddenList_ctl04_uxViewTaxonomy').href = 'https://www.geocaching.com/seek/nearest.aspx?tx=69eb8534-b718-4b35-ae3c-a856a55b0874&u=repsac16' // Event
  document.getElementById('ctl00_ContentBody_ProfilePanel1_uxUserHiddenList_ctl05_uxViewTaxonomy').href = 'https://www.geocaching.com/seek/nearest.aspx?tx=40861821-1835-4e11-b666-8d41064d03fe&u=repsac16' // Mystery
  document.getElementById('ctl00_ContentBody_ProfilePanel1_uxUserHiddenList_ctl06_uxViewTaxonomy').href = 'https://www.geocaching.com/seek/nearest.aspx?tx=0544fa55-772d-4e5c-96a9-36a51ebcf5c9&u=repsac16' // Wherigo
  document.getElementById('ctl00_ContentBody_ProfilePanel1_uxUserHiddenList_ctl07_uxViewTaxonomy').href = 'https://labs.geocaching.com/builder/adventures' // Lab

  // https://www.geocaching.com/seek/nearest.aspx?tx=8f6dd7bc-ff39-4997-bd2e-225a0d2adf9d&ul=repsac16&sc=n locationless (found)
  // https://www.geocaching.com/seek/nearest.aspx?tx=3ea6533d-bb52-42fe-b2d2-79a3424d4728&ul=repsac16&sc=n Community celebration event
  // https://www.geocaching.com/seek/nearest.aspx?tx=2555690d-b2bc-4b55-b5ac-0cb704c0b768&ul=repsac16&sc=n APE
}

// An attempt to get old cache find list for everybody WIP
if (url.includes('https://www.geocaching.com/p/default.aspx') && url.includes('tab=geocaches#profilepanel')) {
  console.log(document.getElementById('ctl00_ProfileHead_ProfileHeader_lblMemberName').innerHTML)
}

// Failsafe
// To be performed for unknown/not implemented sites
if (url.includes('www.geocaching.com/play/map')) {
  window.location.replace(removePlay(url))
}

// console.log(url)
