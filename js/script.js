document.getElementById('showDropdown').addEventListener('click', function() {
    let dropdownContent = document.getElementsByClassName('dropdown-content')[0];
    dropdownContent.classList.toggle('active');
});
function updateTitle() {
    const elements = document.getElementsByClassName('page-title');
    const titleElem = document.getElementById('title');

    const myFunction = function() {
        let attribute = this.getAttribute("data");
        titleElem.innerHTML = attribute;
    };
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', myFunction, false);
    }   
};
updateTitle();