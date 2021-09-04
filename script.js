let price = {
  chocolate: 300,
  strawberry: 100,
  butterscotch: 200,
  vanilla: 250,
  redvelvet: 350,
};

let flavour = {
  chocolate: false,
  butterscotch: false,
  vanilla: false,
  strawberry: false,
  redvelvet: false,
};

let choco = document.getElementById("layer1");
let butter = document.getElementById("layer3");
let vanilla = document.getElementById("layer4");
let strawberry = document.getElementById("layer2");
let redvelvet = document.getElementById("layer5");

function renderAll() {
  renderButter();
  renderChocolate();
  renderRedvel();
  renderStraw();
  renderVanilla();
  totalBill();
}

//render fuctions for all the flavoura

function renderChocolate() {
  if (flavour["chocolate"]) {
    choco.style.display = "inherit";
    document.getElementById("chocolateBill").innerHTML = "Chocolate...............300";
    document.getElementById("chocolateBtn").style.padding= "20px";
  } else {
    choco.style.display = "none";
    document.getElementById("chocolateBill").innerHTML = "";
    document.getElementById("chocolateBtn").style.padding= "8px";
  }
}

function renderButter() {
  if (flavour["butterscotch"]) {
    butter.style.display = "inherit";
    document.getElementById("butterscotchBill").innerHTML = "Butterscotch.........200";
    document.getElementById("butterscotchBtn").style.padding= "20px";
  } else {
    butter.style.display = "none";
    document.getElementById("butterscotchBill").innerHTML = "";
    document.getElementById("butterscotchBtn").style.padding= "8px";
  }
}

function renderStraw() {
  if (flavour["strawberry"]) {
    strawberry.style.display = "inherit";
    document.getElementById("strawberryBill").innerHTML = "Strawbwerry.........100";
    document.getElementById("strawberryBtn").style.padding= "20px";
  } else {
    strawberry.style.display = "none";
    document.getElementById("strawberryBill").innerHTML = "";
    document.getElementById("strawberryBtn").style.padding= "8px";
  }
}

function renderVanilla() {
  if (flavour["vanilla"]) {
    vanilla.style.display = "inherit";
    document.getElementById("vanillaBill").innerHTML = "Vanilla......................250";
    document.getElementById("vanillaBtn").style.padding= "20px";
  } else {
    vanilla.style.display = "none";
    document.getElementById("vanillaBill").innerHTML = "";
    document.getElementById("vanillaBtn").style.padding= "8px";
  }
}

function renderRedvel() {
  if (flavour["redvelvet"]) {
    redvelvet.style.display = "inherit";
    document.getElementById("redvelvetBill").innerHTML = "Redvelvet..............350";
    document.getElementById("redvelvetBtn").style.padding= "20px";
  } else {
    redvelvet.style.display = "none";
    document.getElementById("redvelvetBill").innerHTML = "";
    document.getElementById("redvelvetBtn").style.padding= "8px";
  }
}

//button functions

document.getElementById("chocolateBtn").onclick = function () {
  flavour.chocolate = !flavour.chocolate;
  renderAll();
};
document.getElementById("strawberryBtn").onclick = function () {
  flavour.strawberry = !flavour.strawberry;
  renderAll();
};
document.getElementById("butterscotchBtn").onclick = function () {
  flavour.butterscotch = !flavour.butterscotch;
  renderAll();
};
document.getElementById("vanillaBtn").onclick = function () {
  flavour.vanilla = !flavour.vanilla;
  renderAll();
};
document.getElementById("redvelvetBtn").onclick = function () {
  flavour.redvelvet = !flavour.redvelvet;
  renderAll();
};

//displaying the candle image

document.getElementById("buyBtn").onclick = function () {
  if (
    flavour.butterscotch ||
    flavour.chocolate ||
    flavour.redvelvet ||
    flavour.vanilla ||
    flavour.strawberry
  ) {
    document.getElementById("candle").style.display = "inherit";
    setTimeout(function(){window.alert("Enjoy your PARTY!!!!!");},1000)
    setTimeout(function(){location.reload();},2000)
    
  }
};

//calculating the bill amount
function totalBill() {
  let total = 0;
  if (flavour.chocolate) {
    total += price.chocolate;
  }
  if (flavour.strawberry) {
    total += price.strawberry;
  }
  if (flavour.butterscotch) {
    total += price.butterscotch;
  }
  if (flavour.vanilla) {
    total += price.vanilla;
  }
  if (flavour.redvelvet) {
    total += price.redvelvet;
  }

  document.getElementById("total").innerHTML = `Total: ₹${total}`;
  document.getElementById("total").style.background = "rgb(51, 44, 44)";
}
