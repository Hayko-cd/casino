import { Balance, EGT_PAYMENTS, LINES } from "./gameData.js";

// balance Field
let userBalanceStorage = localStorage.getItem("userBalance");
let winBlock = document.getElementById("win-modal");
winBlock.style.display = "none";

if (userBalanceStorage) {
  const BalanceField = document.getElementById("balance");
  const balanceFieldText = document.createTextNode(userBalanceStorage);
  BalanceField.appendChild(balanceFieldText);
} else {
  localStorage.setItem("userBalance", Balance);
  const BalanceField = document.getElementById("balance");
  const balanceFieldText = document.createTextNode(Balance);
  BalanceField.appendChild(balanceFieldText);
}

// SPIN LOGIC
const spinButton = document.getElementById("spin-reel");
spinButton.addEventListener("click", () => {
  winBlock.style.display = "none";
  let sound20SuperHot = document.getElementById("sound-20-super-hot");
  if (sound20SuperHot.paused) {
    sound20SuperHot.play();
  } else {
    sound20SuperHot.pause();
  }

  const random_index = Math.floor(Math.random() * LINES.length);
  const firstLine = LINES[random_index][0]?.items;
  const secondLine = LINES[random_index][1]?.items;
  const thirdLine = LINES[random_index][2]?.items;
  const fourthLine = LINES[random_index][3]?.items;
  const FifthLine = LINES[random_index][4]?.items;
  const WIN_PRICE = LINES[random_index][5]?.win_price;

  const Static1 = document.getElementById("static-background-1");
  const Static2 = document.getElementById("static-background-2");
  const Static3 = document.getElementById("static-background-3");
  const Static4 = document.getElementById("static-background-4");
  const Static5 = document.getElementById("static-background-5");

  Static1.innerHTML = "";
  Static2.innerHTML = "";
  Static3.innerHTML = "";
  Static4.innerHTML = "";
  Static5.innerHTML = "";
  Static1.style.animation = "";
  Static2.style.animation = "";
  Static3.style.animation = "";
  Static4.style.animation = "";
  Static5.style.animation = "";

  setTimeout(() => {
    firstLine.map((element) => {
      const FruitImage = document.createElement("img");
      FruitImage.setAttribute("src", element);
      FruitImage.setAttribute("class", "fruit");
      Static1.appendChild(FruitImage);
      Static1.style.animation = "";
      Static1.style.animation = "animacia 0.15s ease-in-out 0.3s forwards";
    });

    secondLine.map((element) => {
      const FruitImage = document.createElement("img");
      FruitImage.setAttribute("src", element);
      FruitImage.setAttribute("class", "fruit");
      Static2.appendChild(FruitImage);
      Static2.style.animation = "animacia 0.15s ease-in-out 0.6s forwards";
    });

    thirdLine.map((element) => {
      const FruitImage = document.createElement("img");
      FruitImage.setAttribute("src", element);
      FruitImage.setAttribute("class", "fruit");
      Static3.appendChild(FruitImage);
      Static3.style.animation = "animacia 0.15s ease-in-out 0.9s forwards";
    });

    fourthLine.map((element) => {
      const FruitImage = document.createElement("img");
      FruitImage.setAttribute("src", element);
      FruitImage.setAttribute("class", "fruit");
      Static4.appendChild(FruitImage);
      Static4.style.animation = "animacia 0.15s ease-in-out 1.3s forwards";
    });

    FifthLine.map((element) => {
      const FruitImage = document.createElement("img");
      FruitImage.setAttribute("src", element);
      FruitImage.setAttribute("class", "fruit");
      Static5.appendChild(FruitImage);
      Static5.style.animation = "animacia 0.15s ease-in-out 1.7s forwards";
    });
  }, 300);

  let userBalanceStore = localStorage.getItem("userBalance");
  let userActiveSpinCount = localStorage.getItem("activeValue");
  userBalanceStore = userBalanceStore - userActiveSpinCount;
  localStorage.setItem("userBalance", userBalanceStore);
  const BalanceField = document.getElementById("balance");
  BalanceField.innerHTML = "";
  const balanceFieldText = document.createTextNode(userBalanceStore);
  BalanceField.appendChild(balanceFieldText);

  const winTextField = document.getElementById("text-price");
  winTextField.innerHTML = "";
  const win = userActiveSpinCount * WIN_PRICE;
  const winTextNode = document.createTextNode(win);
  console.log(winTextNode, "winTextNode");

  if (win > 0) {
    setTimeout(() => {
      BalanceField.innerHTML = "";
      winTextField.appendChild(winTextNode);
      const balanceFieldText = document.createTextNode(win + userBalanceStore);
      localStorage.setItem("userBalance", win + userBalanceStore);
      BalanceField.appendChild(balanceFieldText);
      winBlock.style.display = "flex";
    }, 2500);

    setTimeout(() => {
      winBlock.style.display = "none";
    }, 6000);
  }
});

// EGT Credits Field

const PricesField = document.getElementById("prices");

EGT_PAYMENTS.map((element) => {
  // price Block

  const priceBlock = document.createElement("div");
  priceBlock.addEventListener("click", () => {
    const activeElements = PricesField.querySelectorAll(".active");
    activeElements.forEach((element) => {
      element.classList.remove("active");
    });

    priceBlock.classList.add("active");
    localStorage.setItem("activeValue", element.egt_count);
  });

  priceBlock.setAttribute("class", "price");
  if (element.active) {
    priceBlock.classList.add("active");
    localStorage.setItem("activeValue", element.egt_count);
  }

  // Egt text span

  let egtSpan = document.createElement("span");
  egtSpan.innerHTML = "EGT";

  //   Egt Value

  let egtValueSpan = document.createElement("span");
  egtValueSpan.setAttribute("class", "price-text-size");
  let egtCount = document.createTextNode(element.egt_count);
  egtValueSpan.appendChild(egtCount);

  //   Egt Bet

  let egtBetText = document.createElement("span");
  egtBetText.innerHTML = "Bet";

  // appending spans into  price Block

  priceBlock.appendChild(egtSpan);
  priceBlock.appendChild(egtValueSpan);
  priceBlock.appendChild(egtBetText);

  // appending price block to EGT Credits Field

  PricesField.appendChild(priceBlock);
});
