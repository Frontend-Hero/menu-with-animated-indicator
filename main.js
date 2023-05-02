
/** 
* Declare variables
*/
const activeListItem = document.getElementById('indicator');
const navPrimary = document.getElementById('nav-primary');
const listItems = document.querySelectorAll('#nav-primary li');
let activeIndex = null;

/** 
* Define indicator() function to update activeListItem position, width, and visibilty
*/
function indicator(e) {	
	activeListItem.style.left = e.offsetLeft + 'px';
	activeListItem.style.width = e.offsetWidth + 'px';	
	
	activeListItem.classList.remove("fade-out");
	activeListItem.classList.add("fade-in");
}

/** 
* Iterate over list items, add 'mouseenter' event listeners, and check for 'active' class
*/
listItems.forEach((listItem, index) => {
	listItem.addEventListener('mouseenter', () => {
		indicator(listItem);
	});

	/**  
	* If the listItem has 'active' class, store its index in activeIndex
	*/
	if (listItem.classList.contains('active')) 
	{
		activeIndex = index;
	}
}); 


/**  
* Add 'mouseleave' event listener to navPrimary
*/
navPrimary.addEventListener('mouseleave', () => {

	/** 
	* If there's an active menu item, slide indicator position and width to this item
	*/
	if (activeIndex !== null) {
		indicator(listItems[activeIndex]);
	} 
	/** 
	* If there's no active list item, fade out indicator
	*/
	else {
		activeListItem.classList.add("fade-out");
		activeListItem.classList.remove("fade-in");
	}
}); 


/** 
* Check if there's an active list item on page load
*/
if (activeIndex !== null) {

	/** 
	* Make activeListItem initially hidden
	*/
	activeListItem.classList.add("fade-out");

	/** 
	* Set a 200ms timeout to update activeListItem position and width
	*/
	setTimeout(function()
	{
		activeListItem.style.width = listItems[activeIndex].offsetWidth + 'px';
		activeListItem.style.left = listItems[activeIndex].offsetLeft + 'px';

	}, 200);

	/** 
	* Set a 600ms timeout to make activeListItem visible
	*/
	setTimeout(function()
	{
		activeListItem.classList.remove("fade-out");
		activeListItem.classList.add("fade-in");

	}, 600);

}
