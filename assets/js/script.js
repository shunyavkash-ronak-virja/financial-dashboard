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

// ==========================================
// SIGN UP
// ==========================================
const signUpForm = document.querySelector(".sign-up-form");
if (signUpForm) {
  signUpForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.querySelector("#sign-up-name").value.trim();
    const email = document.querySelector("#sign-up-email").value.trim();
    const password = document.querySelector("#sign-up-Password").value;
    const confirmPassword = document.querySelector("#sign-up-confirm-password").value;

    // Check name
    if (name === "") {
      showError("#sign-up-name", "Please enter your full name.");
      return;
    }
    // Check email
    if (email === "") {
      showError("#sign-up-email", "Please enter your email address.");
      return;
    }
    // Check password
    if (password === "") {
      showError("#sign-up-Password", "Please enter a password.");
      return;
    }
    if (password.length < 8) {
      showError("#sign-up-Password", "Password must be at least 8 characters.");
      return;
    }
    // Check confirm password
    if (confirmPassword === "") {
      showError("#sign-up-confirm-password", "Please confirm your password.");
      return;
    }
    if (password !== confirmPassword) {
      showError("#sign-up-confirm-password", "Passwords do not match.");
      return;
    }
    // Create user object
    const user = {
      name: name,
      email: email,
      password: password
    };

    // Store user details
    sessionStorage.setItem("financialUser", JSON.stringify(user));
    // Go to sign in page
    window.location.href = "sign-in.html";
  });
}

// ==========================================
// SIGN IN
// ==========================================
const signInForm = document.querySelector(".sign-in-form");
if (signInForm) {
  signInForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.querySelector("#sign-in-email").value.trim();
    const password = document.querySelector("#sign-in-Password").value;
    // Get stored user
    const storedUser = sessionStorage.getItem("financialUser");
    // Check if user exists
    if (!storedUser) {
      showError("#sign-in-email", "No account found. Please create an account first.");
      return;
    }
    // Convert stored string back to object
    const user = JSON.parse(storedUser);
    // Check email
    if (email === "") {
      showError("#sign-in-email", "Please enter your email address.");
      return;
    }
    // Check password
    if (password === "") {
      showError("#sign-in-Password", "Please enter your password.");
      return;
    }
    // Match email and password
    if (email !== user.email || password !== user.password) {
      showError("#sign-in-Password", "Email or password is incorrect.");
      return;
    }
    // User successfully logged in
    sessionStorage.setItem("isLoggedIn", "true");
    // Go to dashboard
    window.location.href = "index.html";
  });
}

// ==========================================
// LOGOUT
// ==========================================
const logoutButtons = document.querySelectorAll(".log-out-btn");
logoutButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    // Remove login status
    sessionStorage.removeItem("isLoggedIn");
    // Go to sign in page
    window.location.href = "sign-in.html";
  });
});

// ==========================================
// PROTECTED PAGES
// ==========================================
const isSignUpPage = document.querySelector(".sign-up-form");
const isSignInPage = document.querySelector(".sign-in-form");
const isLoggedIn = sessionStorage.getItem("isLoggedIn");

if (!isSignUpPage && !isSignInPage) {
  if (isLoggedIn !== "true") {
    window.location.href = "sign-in.html";
  }
}

// ==========================================
// ERROR MESSAGE
// ==========================================
function showError(inputSelector, message) {
  const input = document.querySelector(inputSelector);
  // Find the input-stack
  const inputStack = input.closest(".input-stack");
  // Remove old error
  const oldError = inputStack.querySelector(".input-error");
  if (oldError) {
    oldError.remove();
  }
  // Create error message
  const error = document.createElement("p");
  error.className = "input-error";
  error.textContent = message;
  // Add error inside input-stack
  inputStack.appendChild(error);
}

// ==========================================
// PASSWORD SHOW / HIDE
// ==========================================
const passwordToggles = document.querySelectorAll("[data-password-toggle]");

passwordToggles.forEach(function (toggle) {
  const passwordInput = toggle.parentElement.querySelector("input");
  const eyeOpenIcon = toggle.querySelector(".eye-open-icon");
  const eyeCloseIcon = toggle.querySelector(".eye-close-icon");

  // Check password input
  passwordInput.addEventListener("input", function () {
    if (passwordInput.value === "") {
      toggle.classList.add("disabled");
      // Show close icon
      eyeCloseIcon.classList.add("icon-visibility");
      // Hide open icon
      eyeOpenIcon.classList.remove("icon-visibility");
      // Make password hidden
      passwordInput.type = "password";

    } else {
      toggle.classList.remove("disabled");
    }
  });

  // Show / hide password
  toggle.addEventListener("click", function () {
    if (passwordInput.value === "") {
      return;
    }
    if (passwordInput.type === "password") {
      // Show password
      passwordInput.type = "text";
      // Hide close icon
      eyeCloseIcon.classList.remove("icon-visibility");
      // Show open icon
      eyeOpenIcon.classList.add("icon-visibility");
    } else {
      // Hide password
      passwordInput.type = "password";
      // Hide open icon
      eyeOpenIcon.classList.remove("icon-visibility");
      // Show close icon
      eyeCloseIcon.classList.add("icon-visibility");
    }
  });
});