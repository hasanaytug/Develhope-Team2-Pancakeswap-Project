const selectionPanelText = document.querySelector("#select-network").querySelector('p');
const netSelection = document.querySelector('#network-selection');
let netSelectionOptions = Array.from(netSelection.getElementsByTagName('li'));
const selectionClass = 'navbar-network-selected';
netSelectionOptions.shift();

const unsetPrevSelection = (element, arr) => {
    const elementIndex = arr.indexOf(element);
    arr.map(item => {
        if (arr.indexOf(item) !== elementIndex 
            && item.classList.contains(selectionClass)) {
                item.classList.remove(selectionClass);
            }   
    });
}

let anchorTagsArr = Array.from(netSelection.querySelectorAll('a'));
netSelectionOptions.map(li => {
    li.addEventListener('click', () => {
        let anchorTag = li.querySelector('a');
        
        document.querySelector("#selection-icon").src = li.querySelector('img').src;
        unsetPrevSelection(anchorTag, anchorTagsArr);
        
        anchorTag.classList.add(selectionClass);
        selectionPanelText.textContent = anchorTag.textContent;
        
        netSelection.style.display = 'none';
        setTimeout(() => netSelection.style.display = '', 100); 
    });
});

let langSelect = document.querySelector('.lang-select');
let sublanguage = document.querySelector('.sublanguage');
langSelect.addEventListener('click', () => {
    if (sublanguage.style.display === '')
        sublanguage.style.display = 'block';
});


document.addEventListener('click', (event) => {
    if ((event.target.id !== 'worldimage' 
            && !event.target.classList.contains('lang-select')) 
            && sublanguage.style.display === 'block') {
        sublanguage.style.display = '';
    }
});


