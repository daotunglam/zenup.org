/**
 * ONTOP BUTTON
 */
 window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        document.getElementById('onTopButton').style.display = 'block';
    }
    else {
        document.getElementById('onTopButton').style.display = 'none';
    }
})
function onTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}