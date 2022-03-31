
// SLIDER FUNCTIONALITY

let sliderDown = document.getElementById("downRange");
let sliderTrade = document.getElementById("tradeRange");
let downValue = document.getElementById("downPrice");
let tradeValue = document.getElementById("tradePrice");
let popupsliderDown = document.getElementById("popupdownRange");
let popupsliderTrade = document.getElementById("popuptradeRange");
let popupdownValue = document.getElementById("popupDownPrice");
let popuptradeValue = document.getElementById("popupTradePrice");

// downValue.value = sliderDown.value;
// tradeValue.innerHTML = sliderTrade.value;
// popupdownValue.innerHTML = popupsliderDown.value;
// popuptradeValue.innerHTML = popupsliderTrade.value;

sliderDown.oninput = function() {
    downValue.value = this.value;
}

downValue.oninput = function() {
    sliderDown.value = this.value;
}

sliderTrade.oninput = function() {
    tradeValue.value = this.value;
}

tradeValue.oninput = function() {
    sliderTrade.value = this.value;
}

popupsliderDown.oninput = function() {
    popupdownValue.value = this.value;
}

popupsliderTrade.oninput = function() {
    popuptradeValue.value = this.value;
}

popupdownValue.oninput = function() {
    popupsliderDown.value = this.value;
}

popuptradeValue.oninput = function() {
    popupsliderTrade.value = this.value;
}

// SLIDER TRADE

function updateGradientTrade(rangeValue) {
    const percentage = (rangeValue - sliderTrade.min) / (sliderTrade.max - sliderTrade.min) * 100;
    sliderTrade.style.backgroundImage = `linear-gradient(90deg, #ec0000 ${percentage}%, transparent ${percentage}%)`;
  }
  
  // Update gradient onload
updateGradientTrade(sliderTrade.value);

  
sliderTrade.addEventListener('input', (e) => {
    tradeValue.value = e.target.value;
    updateGradientTrade(e.target.value);
  });
tradeValue.addEventListener('input', (e) => {
    sliderTrade.value = e.target.value;
    updateGradientTrade(e.target.value);
  });

  // SLIDER DOWN

  function updateGradientDown(rangeValue) {
    const percentage = (rangeValue - sliderDown.min) / (sliderDown.max - sliderDown.min) * 100;
    sliderDown.style.backgroundImage = `linear-gradient(90deg, #ec0000 ${percentage}%, transparent ${percentage}%)`;
  }
  
  // Update gradient onload
  updateGradientDown(sliderDown.value);

  sliderDown.addEventListener('input', (e) => {
    downValue.value = e.target.value;
    updateGradientDown(e.target.value);
  });
  downValue.addEventListener('input', (e) => {
    sliderDown.value = e.target.value;
    updateGradientDown(e.target.value);
  });

  function updatepopGradientTrade(rangeValue) {
    const percentage = (rangeValue - popupsliderTrade.min) / (popupsliderTrade.max - popupsliderTrade.min) * 100;
    popupsliderTrade.style.backgroundImage = `linear-gradient(90deg, #ec0000 ${percentage}%, transparent ${percentage}%)`;
  }
  
  // Update gradient onload
updatepopGradientTrade(popupsliderTrade.value);
  
popupsliderTrade.addEventListener('input', (e) => {
    popuptradeValue.value = e.target.value;
    updatepopGradientTrade(e.target.value);
  });
  popuptradeValue.addEventListener('input', (e) => {
    popupsliderTrade.value = e.target.value;
    updatepopGradientTrade(e.target.value);
  });

  function updatepopGradientDown(rangeValue) {
    const percentage = (rangeValue - popupsliderDown.min) / (popupsliderDown.max - popupsliderDown.min) * 100;
    popupsliderDown.style.backgroundImage = `linear-gradient(90deg, #ec0000 ${percentage}%, transparent ${percentage}%)`;
  }
  
  // Update gradient onload
updatepopGradientDown(popupsliderDown.value);
  
popupsliderDown.addEventListener('input', (e) => {
    popupdownValue.value = e.target.value;
    updatepopGradientDown(e.target.value);
  });
  popupdownValue.addEventListener('input', (e) => {
    popupsliderDown.value = e.target.value;
    updatepopGradientDown(e.target.value);
  });


// BIG CAROUSEL

const bigCarouselCards = document.querySelectorAll('.similar-card');
const bigCarouselBtn = document.querySelectorAll('.big-carousel-btn');
const numberOfCardsB = document.querySelectorAll('.similar-card').length;

let imageIndexB = 1;
let translateXB = 0;

bigCarouselBtn.forEach(button => {
    button.addEventListener('click', event => {
        if(event.target.getAttribute('id') === 'big-carousel-btn-left') {
            console.log("test1");
            if (imageIndexB !== 1) {
                    imageIndexB--;
                    translateXB += 450;
            }
        }
        else {
            console.log("test2")
            if (imageIndexB !== (numberOfCardsB - 2)) {
                    console.log(numberOfCardsB)
                    imageIndexB++;
                    translateXB -= 450;
                }
            }
  
        for (var i = 0; i < numberOfCardsB; i++) { 
            bigCarouselCards[i].style.transform = `translateX(${translateXB}px)`;
        }
  
    })
})

// SMALL CAROUSEL

const smallCarouselCards = document.querySelectorAll('.models-card');
const smallCarouselBtn = document.querySelectorAll('.small-carousel-btn');
const numberOfCardsS = document.querySelectorAll('.models-card').length;

let imageIndexS = 1;
let translateXS = 0;

smallCarouselBtn.forEach(button => {
    button.addEventListener('click', event => {
        if(event.target.getAttribute('id') === 'small-carousel-btn-left') {
            console.log("test1");
            if (imageIndexS !== 1) {
                    imageIndexS--;
                    translateXS += 245;
            }
        }
        else {
            console.log("test2")
            if (imageIndexS !== (numberOfCardsS - 5)) {
                    console.log(numberOfCardsS)
                    imageIndexS++;
                    translateXS -= 245;
                }
            }
  
        for (var i = 0; i < numberOfCardsS; i++) { 
            smallCarouselCards[i].style.transform = `translateX(${translateXS}px)`;
        }
  
    })
})
      

// LEASE FINANCE CASH

const leaseButton = document.getElementById("lease");
const financeButton = document.getElementById("finance");
const cashButton = document.getElementById("cash");
const selectionsTitle = document.getElementById("car-selections-title");
const mpy = document.getElementById("mpy");
const selectionsHeadingSummary = document.getElementById("selections-heading-summary");
const selectionsBio = document.getElementById("selections-bio");
const selectionsInterested = document.getElementById("selections-interested");
const selectionsBtn = document.getElementById("selections-btn");
const termMonths = document.getElementById("term-months");

leaseButton.addEventListener("click", () => {
    selectionsTitle.innerText= ("Lease");
    mpy.classList.remove("remove");
    selectionsHeadingSummary.classList.remove("remove");
    selectionsBio.classList.remove("remove");
    selectionsInterested.classList.remove("remove");
    selectionsBtn.innerHTML = ("Lease This Vehicle Now");
    termMonths.innerHTML = ("48 Months");
})

financeButton.addEventListener("click", () => {
    selectionsTitle.innerText= ("Finance");
    mpy.classList.remove("remove");
    selectionsHeadingSummary.classList.remove("remove");
    selectionsBio.classList.remove("remove");
    selectionsInterested.classList.remove("remove");
    selectionsBtn.innerHTML = ("Lease This Vehicle Now");
    termMonths.innerHTML = ("60 Months");
})

cashButton.addEventListener("click", () => {
    selectionsTitle.innerText= ("Buy");
    mpy.classList.add("remove");
    selectionsHeadingSummary.classList.add("remove");
    selectionsBio.classList.add("remove");
    selectionsInterested.classList.add("remove");
    selectionsBtn.innerHTML = ("I'm Interested");
    termMonths.innerHTML = ("48 Months");
})


// CAR SECTION IMAGE CHANGES

const bigCar = document.getElementById("big-car");
const smallCar1 = document.getElementById("small-car-1");
const smallCar2 = document.getElementById("small-car-2");
const smallCar3 = document.getElementById("small-car-3");
const bigCarTemp = document.getElementById("img-temp");

smallCar1.addEventListener("click", event  => {
    bigCarTemp.src = bigCar.src;
    bigCar.src = smallCar1.src;
    smallCar1.src = bigCarTemp.src;
})

smallCar2.addEventListener("click", event  => {
    bigCarTemp.src = bigCar.src;
    bigCar.src = smallCar2.src;

    smallCar2.src = smallCar1.src
    smallCar1.src = bigCarTemp.src
})

smallCar3.addEventListener("click", event  => {
    bigCarTemp.src = bigCar.src;
    bigCar.src = smallCar3.src;

    smallCar3.src = smallCar2.src;
    smallCar2.src = smallCar1.src;
    smallCar1.src = bigCarTemp.src;
})

//POPUP

const openPopupButton = document.querySelectorAll('[data-popup-target]');
const closePopupButton = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('popup-overlay');

openPopupButton.forEach(button => {
    button.addEventListener('click', () => {
        const popup = document.getElementById('popup')
        openPopup(popup);
    })
})

closePopupButton.forEach(button => {
    button.addEventListener('click', () => {
        const popup = button.closest('.popup')
        closePopup(popup);
    })
})

function openPopup(popup) {
    if (popup == null) return
    popup.classList.add('active')
    overlay.classList.add('active')
}

function closePopup(popup) {
    if (popup == null) return
    popup.classList.remove('active')
    overlay.classList.remove('active')
}
