document.addEventListener("DOMContentLoaded", function () {
  // Your JavaScript code here
  const calculateButton = document.getElementById("calculate-button");

  calculateButton.addEventListener("click", function calculateImpact() {
    const deviceType = document.getElementById("device-type").value;
    const quantity = parseInt(document.getElementById("quantity").value);
    let impact = 0;

    switch (deviceType) {
      case "smartphone":
        impact = quantity * 5;
        break;
      case "laptop":
        impact = quantity * 10;
        break;
      case "tablet":
        impact = quantity * 7;
      case "television":
        impact = quantity * 6;
        break;
      case "Earphone":
        impact = quantity * 2;
        break;
      case "Headphone":
        impact = quantity * 3;
        break;
      case "CD-Player":
        impact = quantity * 5.5;
        break;
    }

    displayResult(impact);
  });
});

const calcContainer = document.querySelector(".calculator-container");
const calcBtn = document.querySelector(".ewaste-btn");
const calcMec = document.querySelector(".calculator-mec");

document.addEventListener("DOMContentLoaded", function () {
  calcBtn.addEventListener("click", function () {
    calcContainer.style.display = "block";
  });
});

function hidePlaceholderOption() {
  var placeholderRemoved = false;

  if (!placeholderRemoved) {
    var select = document.getElementById("device-type");
    var placeholderOption = select.options[0];
    if (placeholderOption.classList.contains("default")) {
      placeholderOption.classList.add("removed");
      setTimeout(function () {
        placeholderOption.remove();
      }, 500); // Remove the option after the transition (0.5s)
      placeholderRemoved = true;
    }
  }
}

function displayResult(impact) {
  const resultElement = document.getElementById("result");
  resultElement.textContent = `Recycling these devices would save ${impact} kg of CO2 emissions!`;
}

// education vid usage

function openTopic(evt, topicName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(topicName).style.display = "block";
  evt.currentTarget.className += " active";
}

function registerForEvent(eventName) {
  alert(`You have successfully registered for ${eventName}! See you there!`);
}

//reward

const recbtn = document.querySelector(".recycle-btn");
let recycleCount = 0;

document.addEventListener("DOMContentLoaded", function () {
  recbtn.addEventListener("click", function () {
    recycleCount++;
    document.getElementById("recycleCount").innerText = recycleCount;

    // Check if user has reached a reward level
    if (recycleCount % 10 === 0) {
      giveReward();
    }
  });
});

function giveReward() {
  const rewardsContainer = document.getElementById("rewards");
  const rewardLevel = Math.floor(recycleCount / 10);
  const reward = document.createElement("div");
  reward.classList.add("reward");
  reward.textContent = `Congratulations! You've earned a reward at Level ${rewardLevel}. Keep up the good work!`;
  reward.style.fontSize = "1em";
  reward.style.color = "green";
  reward.style.animation = "bounce 1s infinite";
  rewardsContainer.appendChild(reward);
}
