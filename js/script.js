document.getElementById('showDropdown').addEventListener('click', updateHeader);

function updateHeader() {
    const dropdownItems = document.getElementsByClassName('page-title');
    const landingTitle = document.getElementById('title');
    const dropdownContainer = document.getElementsByClassName('dropdown-content')[0];

    const updateTitle = function() {
        const attribute = this.getAttribute('data');
        landingTitle.innerHTML = attribute;
    };
    for (let i = 0; i < dropdownItems.length; i++) {
        dropdownItems[i].addEventListener('click', updateTitle, false);
    }   
    dropdownContainer.classList.toggle('active');
};
