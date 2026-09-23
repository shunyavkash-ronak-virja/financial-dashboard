const header = document.querySelector("header");
if (header) {
  const userProfile = document.querySelector(".user-profile");
  const userAvatarWrapper = document.querySelector(".user-avatar-wrapper");
  const userProfileStack = document.querySelector(".user-profile-stack");
  const menuBtn = document.querySelector(".menu-btn");
  const asideCloseBtn = document.querySelector(".aside-close-btn");
  const aside = document.querySelector("aside");
  const dashboardWrapper = document.querySelector(".dashboard-wrapper");
  const notificationBlock = document.querySelector(".notification-block");
  const notificationBtn = notificationBlock.querySelector(".notification-btn");
  const notificationDropdown = notificationBlock.querySelector(".notification-dropdown");

  userAvatarWrapper.addEventListener("click", () => {
    userAvatarWrapper.classList.toggle("active");
    userProfileStack.classList.toggle("active");
  });

  document.addEventListener("click", function (event) {
    if (!userProfile.contains(event.target)) {
      userProfileStack.classList.remove("active");
      userAvatarWrapper.classList.remove("active");
    }
  });

  menuBtn.addEventListener("click", () => {
    aside.classList.add("active");
  });

  asideCloseBtn.addEventListener("click", () => {
    aside.classList.remove("active");
  });

  dashboardWrapper.addEventListener("click", (event) => {
    if (
      aside.classList.contains("active") &&
      event.target === dashboardWrapper
    ) {
      aside.classList.remove("active");
    }
  });

  notificationBtn.addEventListener("click", function (event) {
    notificationDropdown.classList.toggle("active");
  });
  document.addEventListener("click", function (event) {
    if (!notificationBlock.contains(event.target)) {
      notificationDropdown.classList.remove("active");
    }
  });
}


// Investment Performance Chart -----
const investmentChart = document.getElementById("investmentChart");
let investmentChartInstance = null;
if (investmentChart) {
  const investmentChartInstance = new Chart(investmentChart, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jan", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "Current Value",
          data: [2, 12, 9, 16, 8, 10, 12, 16, 12, 20, 10, 12],
          borderWidth: 1,
          backgroundColor: ["#415a75"],
        },
        {
          label: "Initial Investment",
          data: [2, 12, 9, 16, 10, 6, 4, 20, 18, 20, 22, 16],
          borderWidth: 1,
          backgroundColor: ["#c7d5e3"],
        },
      ],
    },
    options: {
      responsive: true,
      // maintainAspectRatio: true,
      aspectRatio: 1.4,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

const assetAllocationChart = document.getElementById("assetAllocationChart");
let assetAllocationChartInstance = null;
if (assetAllocationChart) {
  const assetAllocationChartInstance = new Chart(assetAllocationChart, {
    type: "pie",
    data: {
      labels: ["Stocks", "Gold", "Cash"],
      datasets: [
        {
          label: "Current Value",
          data: [40, 40, 20],
          borderWidth: 1,
          backgroundColor: ["#163b63", "#415a75", "#243b53"],
        },
      ],
    },
    options: {
      responsive: true,
      aspectRatio: 1.4,
    },
  });
}

const portfolioValue = document.getElementById("portfolioValue");
let portfolioValueInstance = null;
if (portfolioValue) {
  const portfolioValueInstance = new Chart(portfolioValue, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jan", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "Current Value",
          data: [700000, 725000, 710000, 760000, 745000, 790000, 810000, 800000, 825000, 840000, 830000, 850000],
          borderWidth: 1,
          backgroundColor: ["#415a75"],
        },
      ],
    },
    options: {
      responsive: true,
      aspectRatio: 1.4,
    },
  });
}

const portfolioAssetAllocation = document.getElementById("portfolioAssetAllocation");
let portfolioAssetAllocationInstance = null;
if (portfolioAssetAllocation) {
  const portfolioAssetAllocationInstance = new Chart(portfolioAssetAllocation, {
    type: "doughnut",
    data: {
      labels: ["Stocks", "Mutual Funds", "Gold", "Cash"],
      datasets: [
        {
          label: "Current Value",
          data: [50, 25, 15, 10],
          borderWidth: 1,
          backgroundColor: ["#456282", "#456282", "#7389a1", "#a2b1c1"],
        },
      ],
    },
    options: {
      responsive: true,
      aspectRatio: 1.4,
    },
  });
}

function updateChartAspectRatio() {
  let aspectRatio;
  if (window.innerWidth <= 575) {
    aspectRatio = 1.2;
  } else if (window.innerWidth <= 767) {
    aspectRatio = 1.8;
  } else {
    aspectRatio = 1.4;
  }
  if (investmentChartInstance) {
    investmentChartInstance.options.aspectRatio = aspectRatio;
    investmentChartInstance.resize();
  }
  if (assetAllocationChartInstance) {
    assetAllocationChartInstance.options.aspectRatio = aspectRatio;
    assetAllocationChartInstance.resize();
  }
  if (portfolioValueInstance) {
    portfolioValueInstance.options.aspectRatio = aspectRatio;
    portfolioValueInstance.resize();
  }
  if (portfolioAssetAllocationInstance) {
    portfolioAssetAllocationInstance.options.aspectRatio = aspectRatio;
    portfolioAssetAllocationInstance.resize();
  }
}
if (investmentChartInstance || assetAllocationChartInstance || portfolioValueInstance || portfolioAssetAllocationInstance) {
  updateChartAspectRatio();
  window.addEventListener("resize", updateChartAspectRatio);
}

const investmentDetailChart = document.getElementById("investmentDetailChart");
let investmentDetailChartInstance = null;
if (investmentDetailChart) {
  investmentDetailChartInstance = new Chart(investmentDetailChart, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jan", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "Current Value",
          data: [2, 12, 9, 16, 8, 10, 12, 16, 12, 20, 10, 12],
          borderWidth: 1,
          backgroundColor: ["#415a75"],
        },
        {
          label: "Initial Investment",
          data: [2, 12, 9, 16, 10, 6, 4, 20, 18, 20, 22, 16],
          borderWidth: 1,
          backgroundColor: ["#c7d5e3"],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 3.2,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

function updateInvestmentDetailChartAspectRatio() {
  if (!investmentDetailChartInstance) return;
  let aspectRatio;
  if (window.innerWidth <= 575) {
    aspectRatio = 1.2;
  } else if (window.innerWidth <= 767) {
    aspectRatio = 2.2;
  } else {
    aspectRatio = 3.2;
  }
  investmentDetailChartInstance.options.aspectRatio = aspectRatio;
  investmentDetailChartInstance.resize();
}
if (investmentDetailChartInstance) {
  updateInvestmentDetailChartAspectRatio();
  window.addEventListener(
    "resize",
    updateInvestmentDetailChartAspectRatio
  );
}

// ================================
// AUTHENTICATION FUNCTIONALITY
// ================================
// const signUpForm = document.querySelector(".sign-up-form");
// if (signUpForm) {
//   signUpForm.addEventListener("submit", function (event) {
//     event.preventDefault();

//     const name = document.querySelector("#sign-up-name").value.trim();
//     const email = document.querySelector("#sign-up-email").value.trim();
//     const password = document.querySelector("#sign-up-Password").value;
//     const confirmPassword = document.querySelector("#sign-up-confirm-password").value;

//     if (name === "") {
//       showError("#sign-up-name", "Please enter your full name.");
//       return;
//     }
//     if (email === "") {
//       showError("#sign-up-email", "Please enter your email address.");
//       return;
//     }
//     if (password === "") {
//       showError("#sign-up-Password", "Please enter a password.");
//       return;
//     }
//     if (password.length < 8) {
//       showError("#sign-up-Password", "Password must be at least 8 characters.");
//       return;
//     }
//     if (confirmPassword === "") {
//       showError("#sign-up-confirm-password", "Please confirm your password.");
//       return;
//     }
//     if (password !== confirmPassword) {
//       showError("#sign-up-confirm-password", "Passwords do not match.");
//       return;
//     }
//     const user = {
//       name: name,
//       email: email,
//       password: password
//     };

//     sessionStorage.setItem("financialUser", JSON.stringify(user));
//     window.location.href = "sign-in.html";
//   });
// }

// const signInForm = document.querySelector(".sign-in-form");
// if (signInForm) {
//   signInForm.addEventListener("submit", function (event) {
//     event.preventDefault();
//     const email = document.querySelector("#sign-in-email").value.trim();
//     const password = document.querySelector("#sign-in-Password").value;
//     const storedUser = sessionStorage.getItem("financialUser");

//     if (!storedUser) {
//       showError("#sign-in-email", "No account found. Please create an account first.");
//       return;
//     }

//     const user = JSON.parse(storedUser);
//     if (email === "") {
//       showError("#sign-in-email", "Please enter your email address.");
//       return;
//     }
//     if (password === "") {
//       showError("#sign-in-Password", "Please enter your password.");
//       return;
//     }
//     if (email !== user.email || password !== user.password) {
//       showError("#sign-in-Password", "Email or password is incorrect.");
//       return;
//     }

//     sessionStorage.setItem("isLoggedIn", "true");
//     window.location.href = "index.html";
//   });
// }

// const logoutButtons = document.querySelectorAll(".log-out-btn");
// logoutButtons.forEach(function (button) {
//   button.addEventListener("click", function () {
//     sessionStorage.removeItem("isLoggedIn");
//     window.location.href = "sign-in.html";
//   });
// });

// const isSignUpPage = document.querySelector(".sign-up-form");
// const isSignInPage = document.querySelector(".sign-in-form");
// const isLoggedIn = sessionStorage.getItem("isLoggedIn");

// if (!isSignUpPage && !isSignInPage) {
//   if (isLoggedIn !== "true") {
//     window.location.href = "sign-in.html";
//   }
// }

// function showError(inputSelector, message) {
//   const input = document.querySelector(inputSelector);
//   const inputStack = input.closest(".input-stack");
//   const oldError = inputStack.querySelector(".input-error");

//   if (oldError) {
//     oldError.remove();
//   }

//   const error = document.createElement("p");
//   error.className = "input-error";
//   error.textContent = message;
//   inputStack.appendChild(error);
// }

// const passwordToggles = document.querySelectorAll("[data-password-toggle]");
// passwordToggles.forEach(function (toggle) {
//   const passwordInput = toggle.parentElement.querySelector("input");
//   const eyeOpenIcon = toggle.querySelector(".eye-open-icon");
//   const eyeCloseIcon = toggle.querySelector(".eye-close-icon");

//   passwordInput.addEventListener("input", function () {
//     if (passwordInput.value === "") {
//       toggle.classList.add("disabled");
//       eyeCloseIcon.classList.add("icon-visibility");
//       eyeOpenIcon.classList.remove("icon-visibility");
//       passwordInput.type = "password";
//     } else {
//       toggle.classList.remove("disabled");
//     }
//   });

//   toggle.addEventListener("click", function () {
//     if (passwordInput.value === "") {
//       return;
//     }
//     if (passwordInput.type === "password") {
//       passwordInput.type = "text";
//       eyeCloseIcon.classList.remove("icon-visibility");
//       eyeOpenIcon.classList.add("icon-visibility");
//     } else {
//       passwordInput.type = "password";
//       eyeOpenIcon.classList.remove("icon-visibility");
//       eyeCloseIcon.classList.add("icon-visibility");
//     }
//   });
// });

// ================================
// GLOBAL MODAL JS
// ================================
const modal = document.querySelectorAll(".modal");
if (modal) {
  const modalBtns = document.querySelectorAll("[data-modal]");
  const modalCloseBtns = document.querySelectorAll(".modal-close-btn");
  const modal = document.querySelectorAll(".modal");

  modalBtns.forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.modal;
      modalOpen(id);
    });
  });
  console.log("modalBtns");


  modalCloseBtns.forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.closest(".modal").id;
      modalClose(id);
    });
  });

  modal.forEach((modal) => {
    modal.addEventListener("click", (event) => {
      if (event.target.classList.contains("modal")) {
        const id = modal.id;
        modalClose(id);
      }
    });
  });

  const modalOpen = (id) => {
    const modal = document.querySelector(`#${id}`);
    if (modal) modal.classList.add("active");
    document.body.classList.add("body-hidden");
  };

  const modalClose = (id) => {
    const modal = document.querySelector(`#${id}`);
    if (modal) modal.classList.remove("active");
    document.body.classList.remove("body-hidden");
  };
}

// ================================
// NICE SELECT
// ================================
$(document).ready(function () {
  $("select").niceSelect();
});