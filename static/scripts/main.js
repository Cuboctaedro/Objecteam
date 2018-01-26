function toggleClass(el, className) {
    
    if (el.classList) {
        el.classList.toggle(className);
    } else {
        var classes = el.className.split(' ');
        var existingIndex = classes.indexOf(className);
        if (existingIndex >= 0) {
            classes.splice(existingIndex, 1);
        } else {
            classes.push(className);
        }
    el.className = classes.join(' ');
    }
};

for (var item of document.querySelectorAll('[toggle-target]')) {
    item.addEventListener(
      "click", function(event){
        event.preventDefault();
        toggleClass(document.querySelector(this.getAttribute('toggle-target')), 'active')
      }, false);
}
