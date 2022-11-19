/* START of INFOS */
const infosTitle = ['Farms', 'Syrup Pools'];
const dataBoxTitles = {
    'Farms' : ['TWT-BNB LP', 'KRS-BUSD LP', 'XCAD-BUSD LP', 'CO-BUSD LP', 'ARV-BNB LP'],
    'Syrup Pools' : ['Stake CAKE', 'Stake CAKE - Earn HOOP', 'Stake CAKE - Earn CO', 'Stake CAKE - Earn KRS', 'Stake CAKE - Earn MGP']
}

let categoryIndex = 0;
let dataBoxIndex = 0;

document.querySelectorAll('.data-box > h3').forEach(el => {
    el.textContent = dataBoxTitles[infosTitle[categoryIndex]][dataBoxIndex++];
});

document.querySelector('#up-down-button').addEventListener('click', () => {
    let currentCategory = infosTitle[++categoryIndex % infosTitle.length];
    document.querySelector('#category').textContent = currentCategory;
    
    dataBoxIndex = 0;
    document.querySelectorAll('.data-box > h3').forEach(el => {
        el.textContent = dataBoxTitles[currentCategory][dataBoxIndex++ % dataBoxTitles[currentCategory].length];
    });
});
/* END of INFOS */