function showElement() {
	// body...
	alert(this.innerHTMl);
}

el = document.getElementById('list');
el.addEventListener('click',showElement,false);

el = document.getElementById('item');
el.addEventListener('click',showElement,false);

el = document.getElementById('link');
el.addEventListener('click',showElement,false);

el = document.getElementById('list2');
el.addEventListener('click',showElement,true);

el = document.getElementById('item2');
el.addEventListener('click',showElement,true);

el = document.getElementById('link2');
el.addEventListener('click',showElement,true);