let netSelectionOptions = Array.from(document.querySelector('#network-selection').getElementsByTagName('li'));
netSelectionOptions.shift();

netSelectionOptions.map(li => {
    li.addEventListener('click', () => li.querySelector('a').classList.add('navbar-network-selected'));
});