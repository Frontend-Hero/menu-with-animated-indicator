// Get the sliding indicator element
const activeListItem = document.getElementById('bg');

// Get the navigation container element
const navPrimary = document.getElementById('nav-primary');

// Get all the list items in the navigation
const listItems = document.querySelectorAll('#nav-primary li');

// Initialize the active list item index as null
let activeIndex = null;
		
// Define indicator() function to update activeListItem position, width, and visibility
function indicator(e) {	
    activeListItem.style.left = e.offsetLeft + 'px';
	activeListItem.style.width = e.offsetWidth + 'px';	
	activeListItem.classList.add("fade-in");
}

// Define hideIndicator() function to hide activeListItem
function hideIndicator() {
	activeListItem.classList.add("fade-out");
	activeListItem.classList.remove("fade-in");
}
	
// Iterate over list items, add 'mouseenter' event listeners, and check for 'active' class
listItems.forEach((listItem, index) => {
  	listItem.addEventListener('mouseenter', () => {
		indicator(listItem);
  	});

	// If the listItem has 'active' class, store its index in activeIndex
	if (listItem.classList.contains('active')) 
	{
		activeIndex = index;
	}
});

// Add 'mouseleave' event listener to navPrimary
navPrimary.addEventListener('mouseleave', () => {
		
	// If there's an active list item, update activeListItem position and width, and make it visible
	if (activeIndex !== null) {
		indicator(listItems[activeIndex]);
		activeListItem.classList.remove("fade-out");
	} 		
	// If there's no active list item, hide activeListItem
	else {
		hideIndicator();
	}
});
		
		
// Check if there's an active list item at page load
if (activeIndex !== null) {
		
    // Make activeListItem initially hidden
	activeListItem.classList.add("fade-out");
	activeListItem.classList.remove("fade-in");
		
	// Set a 200ms timeout to update activeListItem position and width
	setTimeout(function()
	{
		activeListItem.style.width = listItems[activeIndex].offsetWidth + 'px';
		activeListItem.style.left = listItems[activeIndex].offsetLeft + 'px';
	}, 200);
		
	// Set a 600ms timeout to make activeListItem visible
	setTimeout(function()
	{
		// activeListItem.style.opacity = 1;
		activeListItem.classList.remove("fade-out");
		activeListItem.classList.add("fade-in");
			
	}, 600);
		
} 
// If there's no active list item at page load, hide activeListItem
else {
	hideIndicator();
}
