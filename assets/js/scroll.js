let ticking = false;
function handleScroll() {
	if (window.scrollY > 40) {
		document.body.classList.add('scrolled');
	} else {
		document.body.classList.remove('scrolled');
	}
}
window.addEventListener('scroll', function() {
	if (!ticking) {
		window.requestAnimationFrame(function() {
			handleScroll();
			ticking = false;
	});
	ticking = true;
}
});
