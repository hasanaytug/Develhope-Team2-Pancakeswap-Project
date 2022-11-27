/* START of PHISHING-WARNING */
const phishingWarning = document.querySelector('#phishing-warning');
setTimeout(() => phishingWarning.style.display = 'flex', 3000);

const phishingButton = document.querySelector('#phishing-warning > button');
phishingButton.addEventListener('click', () => {
  phishingWarning.style.display = 'none';
});
/* END of PHISHIN-WARNING */

/* START of INFOS */
const infosTitle = ["Farms", "Syrup Pools"];
const dataBoxTitles = {
  Farms: [
    "TWT-BNB LP",
    "KRS-BUSD LP",
    "XCAD-BUSD LP",
    "CO-BUSD LP",
    "ARV-BNB LP",
  ],
  "Syrup Pools": [
    "Stake CAKE",
    "Stake CAKE - Earn HOOP",
    "Stake CAKE - Earn CO",
    "Stake CAKE - Earn KRS",
    "Stake CAKE - Earn MGP",
  ],
};
const dataBoxPercentages = {
  Farms: ["199.050%", "188.301%", "179.283%", "162.717%", "153.702%"],
  "Syrup Pools": ["59.200%", "220.422%", "175.543%", "169.051%", "133.768%"],
};

let categoryIndex = 0;
let dataBoxIndex = 0;

document.querySelectorAll(".data-box > h3").forEach((el) => {
  el.textContent = dataBoxTitles[infosTitle[categoryIndex]][dataBoxIndex++];
});

dataBoxIndex = 0;
document.querySelectorAll("#percentage").forEach((el) => {
  el.textContent =
    dataBoxPercentages[infosTitle[categoryIndex]][dataBoxIndex++];
});

let upDownButton = document.querySelector("#up-down-button");
let timerId = setInterval(() => upDownButton.click(), 6000);

upDownButton.addEventListener("click", () => {
  let currentCategory = infosTitle[++categoryIndex % infosTitle.length];
  document.querySelector("#category").textContent = currentCategory;

  dataBoxIndex = 0;
  document.querySelectorAll(".data-box > h3").forEach((el) => {
    el.textContent =
      dataBoxTitles[currentCategory][
        dataBoxIndex++ % dataBoxTitles[currentCategory].length
      ];
  });

  document.querySelectorAll("#percentage").forEach((el) => {
    el.textContent =
      dataBoxPercentages[currentCategory][
        dataBoxIndex++ % dataBoxTitles[currentCategory].length
      ];
  });

  document.querySelector(".data-box:first-child > p").textContent =
    currentCategory === infosTitle[0] ? "APR" : "APY";
  clearInterval(timerId);
  timerId = setInterval(() => upDownButton.click(), 6000);
});
/* END of INFOS */
