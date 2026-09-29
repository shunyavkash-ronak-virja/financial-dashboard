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
  investmentChartInstance = new Chart(investmentChart, {
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
  assetAllocationChartInstance = new Chart(assetAllocationChart, {
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
  portfolioValueInstance = new Chart(portfolioValue, {
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
  portfolioAssetAllocationInstance = new Chart(portfolioAssetAllocation, {
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
const signUpForm = document.querySelector(".sign-up-form");
if (signUpForm) {
  signUpForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.querySelector("#sign-up-name").value.trim();
    const email = document.querySelector("#sign-up-email").value.trim();
    const password = document.querySelector("#sign-up-Password").value;
    const confirmPassword = document.querySelector("#sign-up-confirm-password").value;

    if (name === "") {
      showError("#sign-up-name", "Please enter your full name.");
      return;
    }
    if (email === "") {
      showError("#sign-up-email", "Please enter your email address.");
      return;
    }
    if (password === "") {
      showError("#sign-up-Password", "Please enter a password.");
      return;
    }
    if (password.length < 8) {
      showError("#sign-up-Password", "Password must be at least 8 characters.");
      return;
    }
    if (confirmPassword === "") {
      showError("#sign-up-confirm-password", "Please confirm your password.");
      return;
    }
    if (password !== confirmPassword) {
      showError("#sign-up-confirm-password", "Passwords do not match.");
      return;
    }
    const user = {
      name: name,
      email: email,
      password: password
    };

    sessionStorage.setItem("financialUser", JSON.stringify(user));
    window.location.href = "sign-in.html";
  });
}

const signInForm = document.querySelector(".sign-in-form");
if (signInForm) {
  signInForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.querySelector("#sign-in-email").value.trim();
    const password = document.querySelector("#sign-in-Password").value;
    const storedUser = sessionStorage.getItem("financialUser");

    if (!storedUser) {
      showError("#sign-in-email", "No account found. Please create an account first.");
      return;
    }

    const user = JSON.parse(storedUser);
    if (email === "") {
      showError("#sign-in-email", "Please enter your email address.");
      return;
    }
    if (password === "") {
      showError("#sign-in-Password", "Please enter your password.");
      return;
    }
    if (email !== user.email || password !== user.password) {
      showError("#sign-in-Password", "Email or password is incorrect.");
      return;
    }

    sessionStorage.setItem("isLoggedIn", "true");
    window.location.href = "index.html";
  });
}

const logoutButtons = document.querySelectorAll(".log-out-btn");
logoutButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    sessionStorage.removeItem("isLoggedIn");
    window.location.href = "sign-in.html";
  });
});

const isSignUpPage = document.querySelector(".sign-up-form");
const isSignInPage = document.querySelector(".sign-in-form");
const isLoggedIn = sessionStorage.getItem("isLoggedIn");

if (!isSignUpPage && !isSignInPage) {
  if (isLoggedIn !== "true") {
    window.location.href = "sign-in.html";
  }
}

function showError(inputSelector, message) {
  const input = document.querySelector(inputSelector);
  const inputStack = input.closest(".input-stack");
  const oldError = inputStack.querySelector(".input-error");

  if (oldError) {
    oldError.remove();
  }

  const error = document.createElement("p");
  error.className = "input-error";
  error.textContent = message;
  inputStack.appendChild(error);
}

const passwordToggles = document.querySelectorAll("[data-password-toggle]");
passwordToggles.forEach(function (toggle) {
  const passwordInput = toggle.parentElement.querySelector("input");
  const eyeOpenIcon = toggle.querySelector(".eye-open-icon");
  const eyeCloseIcon = toggle.querySelector(".eye-close-icon");

  passwordInput.addEventListener("input", function () {
    if (passwordInput.value === "") {
      toggle.classList.add("disabled");
      eyeCloseIcon.classList.add("icon-visibility");
      eyeOpenIcon.classList.remove("icon-visibility");
      passwordInput.type = "password";
    } else {
      toggle.classList.remove("disabled");
    }
  });

  toggle.addEventListener("click", function () {
    if (passwordInput.value === "") {
      return;
    }
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      eyeCloseIcon.classList.remove("icon-visibility");
      eyeOpenIcon.classList.add("icon-visibility");
    } else {
      passwordInput.type = "password";
      eyeOpenIcon.classList.remove("icon-visibility");
      eyeCloseIcon.classList.add("icon-visibility");
    }
  });
});

// ================================
// GLOBAL MODAL JS
// ================================
const modal = document.querySelectorAll(".modal");
if (modal) {
  const modalBtns = document.querySelectorAll("[data-modal]");
  const modalCloseBtns = document.querySelectorAll(".modal-close");
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

// ================================
// ADD MONEY PAYMENT METHOD
// ================================
const addMoneyPaymentMethod = $("#add-money-payment-method");
const addMoneyModal = $("#quick-add-money");

/* =========================================================
   ADD MONEY - PAYMENT METHOD CHANGE
========================================================= */
addMoneyPaymentMethod.on("change", function () {
  const selectedMethod = $(this).val();
  console.log("Add Money Payment Method:", selectedMethod);

  /* -----------------------------------------
     Find only Add Money payment sections
  ----------------------------------------- */
  const paymentMethodOptions = addMoneyModal.find(
    ".payment-method-option"
  );

  /* -----------------------------------------
     Hide all payment method sections
     Remove required
     Clear errors
  ----------------------------------------- */
  paymentMethodOptions.each(function () {
    const option = $(this);
    option.removeClass("active");
    option
      .find("input, select")
      .prop("required", false);
    option
      .find(".input-error")
      .removeClass("active")
      .text("");
  });

  /* -----------------------------------------
     Stop if no method selected
  ----------------------------------------- */
  if (!selectedMethod) {
    return;
  }

  /* -----------------------------------------
     Find selected payment method
  ----------------------------------------- */
  const selectedOption = addMoneyModal.find(
    `.payment-method-option[data-payment-method="${selectedMethod}"]`
  );


  /* -----------------------------------------
     Show selected payment method
  ----------------------------------------- */
  if (selectedOption.length) {
    selectedOption.addClass("active");

    /* -----------------------------------------
       Make selected fields required
    ----------------------------------------- */
    selectedOption
      .find("input, select")
      .prop("required", true);
  }
});

/* =========================================================
   ADD MONEY - ACCOUNT NUMBER CONFIRMATION
========================================================= */
$(document).on(
  "input",
  "#confirm-account-number",
  function () {
    const accountNumber =
      $("#account-number").val();
    const confirmAccountNumber =
      $(this).val();
    const errorMessage = $(this)
      .closest(".input-stack")
      .find(".input-error");

    /* -----------------------------------------
       Don't show error when empty
    ----------------------------------------- */
    if (!confirmAccountNumber) {
      errorMessage
        .removeClass("active")
        .text("");
      return;
    }

    /* -----------------------------------------
       Compare account numbers
    ----------------------------------------- */
    if (accountNumber !== confirmAccountNumber) {
      errorMessage
        .addClass("active")
        .text("Account numbers do not match.");
    } else {
      errorMessage
        .removeClass("active")
        .text("");
    }
  }
);

/* =========================================================
   ADD MONEY - ACCOUNT NUMBER ONLY NUMBERS
========================================================= */
$(document).on(
  "input",
  "#account-number, #confirm-account-number",
  function () {
    this.value = this.value.replace(/\D/g, "");
  }
);

/* =========================================================
   ADD MONEY - IFSC CODE
========================================================= */
$(document).on(
  "input",
  "#ifsc-code",
  function () {
    /* Convert IFSC to uppercase */
    this.value = this.value.toUpperCase();
  }
);

/* =========================================================
   ADD MONEY - FORM SUBMIT
========================================================= */
$(".add-money-form").on("submit", function (event) {
  event.preventDefault();
  const form = this;

  /* -----------------------------------------
     Check normal HTML validation
  ----------------------------------------- */
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  /* -----------------------------------------
     Check account numbers
  ----------------------------------------- */
  const accountNumber =
    $("#account-number").val();
  const confirmAccountNumber =
    $("#confirm-account-number").val();
  if (
    accountNumber &&
    confirmAccountNumber &&
    accountNumber !== confirmAccountNumber
  ) {

    const errorMessage = $("#confirm-account-number")
      .closest(".input-stack")
      .find(".input-error");

    errorMessage
      .addClass("active")
      .text("Account numbers do not match.");

    return;
  }
});



/* =========================================================
   RESET ADD MONEY PAYMENT METHOD
========================================================= */
function resetAddMoneyPaymentMethod() {
  const paymentMethodOptions =
    addMoneyModal.find(".payment-method-option");
  /* -----------------------------------------
     Reset payment method select
  ----------------------------------------- */
  addMoneyPaymentMethod
    .val("")
    .trigger("change");
  /* -----------------------------------------
     Remove active
  ----------------------------------------- */
  paymentMethodOptions
    .removeClass("active");
  /* -----------------------------------------
     Remove required
  ----------------------------------------- */
  paymentMethodOptions
    .find("input, select")
    .prop("required", false);
  /* -----------------------------------------
     Clear inputs
  ----------------------------------------- */
  paymentMethodOptions
    .find("input")
    .val("");
  /* -----------------------------------------
     Reset selects
  ----------------------------------------- */
  paymentMethodOptions
    .find("select")
    .each(function () {
      $(this)
        .val("")
        .trigger("change");
    });
  /* -----------------------------------------
     Clear errors
  ----------------------------------------- */
  paymentMethodOptions
    .find(".input-error")
    .removeClass("active")
    .text("");
}

/* =========================================================
   BUY - PAYMENT METHOD
========================================================= */
const buyModal = $("#quick-buy");
const buyPaymentMethod = $("#buy-payment-method");

/* =========================================================
   BUY - PAYMENT METHOD CHANGE
========================================================= */
buyPaymentMethod.on("change", function () {
  const selectedMethod = $(this).val();
  console.log("Buy Payment Method:", selectedMethod);
  /* -----------------------------------------
     Find only Buy payment sections
  ----------------------------------------- */
  const paymentMethodOptions = buyModal.find(
    ".payment-method-option"
  );
  /* -----------------------------------------
     Hide all payment sections
     Remove required
     Clear errors
  ----------------------------------------- */
  paymentMethodOptions.each(function () {
    const option = $(this);
    option.removeClass("active");
    option
      .find("input, select")
      .prop("required", false);
    option
      .find(".input-error")
      .removeClass("active")
      .text("");
  });

  /* -----------------------------------------
     Stop if no method selected
  ----------------------------------------- */
  if (!selectedMethod) {
    return;
  }

  /* -----------------------------------------
     Find selected payment method
  ----------------------------------------- */
  const selectedOption = buyModal.find(
    `.payment-method-option[data-payment-method="${selectedMethod}"]`
  );

  /* -----------------------------------------
     Show selected payment method
  ----------------------------------------- */
  if (selectedOption.length) {
    selectedOption.addClass("active");
    /* -----------------------------------------
       Make visible fields required
       Bank Account:
       All bank fields become required.
       Cash Balance:
       No input/select, so nothing changes.
    ----------------------------------------- */
    selectedOption
      .find("input, select")
      .prop("required", true);
  }
});

/* =========================================================
   BUY - ACCOUNT NUMBER CONFIRMATION
========================================================= */
$(document).on(
  "input",
  "#buy-confirm-account-number",
  function () {
    const accountNumber =
      $("#buy-account-number").val();
    const confirmAccountNumber =
      $(this).val();
    const errorMessage = $(this)
      .closest(".input-stack")
      .find(".input-error");
    /* -----------------------------------------
       Don't show error when empty
    ----------------------------------------- */
    if (!confirmAccountNumber) {
      errorMessage
        .removeClass("active")
        .text("");
      return;
    }
    /* -----------------------------------------
       Compare account numbers
    ----------------------------------------- */
    if (accountNumber !== confirmAccountNumber) {
      errorMessage
        .addClass("active")
        .text("Account numbers do not match.");
    } else {
      errorMessage
        .removeClass("active")
        .text("");
    }
  }
);

/* =========================================================
   BUY - ACCOUNT NUMBER ONLY NUMBERS
========================================================= */
$(document).on(
  "input",
  "#buy-account-number, #buy-confirm-account-number",
  function () {
    this.value = this.value.replace(/\D/g, "");
  }
);

/* =========================================================
   BUY - IFSC CODE
========================================================= */
$(document).on(
  "input",
  "#buy-ifsc-code",
  function () {
    /* Convert IFSC to uppercase */
    this.value = this.value.toUpperCase();
  }
);

/* =========================================================
   BUY - FORM SUBMIT
========================================================= */
$(".quick-buy").on("submit", function (event) {
  event.preventDefault();
  const form = this;
  /* -----------------------------------------
     Check normal HTML validation
  ----------------------------------------- */
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  /* -----------------------------------------
     Check account numbers
  ----------------------------------------- */
  const accountNumber =
    $("#buy-account-number").val();
  const confirmAccountNumber =
    $("#buy-confirm-account-number").val();
  if (
    accountNumber &&
    confirmAccountNumber &&
    accountNumber !== confirmAccountNumber
  ) {
    const errorMessage = $("#buy-confirm-account-number")
      .closest(".input-stack")
      .find(".input-error");
    errorMessage
      .addClass("active")
      .text("Account numbers do not match.");
    return;
  }
});

/* =========================================================
   RESET BUY PAYMENT METHOD
========================================================= */
function resetBuyPaymentMethod() {
  const paymentMethodOptions =
    buyModal.find(".payment-method-option");
  /* -----------------------------------------
     Reset payment method
  ----------------------------------------- */
  buyPaymentMethod
    .val("")
    .trigger("change");
  /* -----------------------------------------
     Remove active
  ----------------------------------------- */
  paymentMethodOptions
    .removeClass("active");
  /* -----------------------------------------
     Remove required
  ----------------------------------------- */
  paymentMethodOptions
    .find("input, select")
    .prop("required", false);
  /* -----------------------------------------
     Clear inputs
  ----------------------------------------- */
  paymentMethodOptions
    .find("input")
    .val("");
  /* -----------------------------------------
     Reset selects
  ----------------------------------------- */
  paymentMethodOptions
    .find("select")
    .each(function () {
      $(this)
        .val("")
        .trigger("change");
    });
  /* -----------------------------------------
     Clear errors
  ----------------------------------------- */
  paymentMethodOptions
    .find(".input-error")
    .removeClass("active")
    .text("");
}
/* =========================================================
   TRANSFER MODAL START
========================================================= */
const transferModal = $("#quick-transfer");
const transferFrom = $("#transfer-from");
const transferTo = $("#transfer-to");
const transferCategory = $("#transfer-category");
const transferAmount = $("#transfer-amount");
const transferFee = $("#transfer-fee");
const transferTotal = $("#transfer-total");
/* =========================================================
   TRANSFER - UPDATE NICE SELECT
========================================================= */
function updateTransferTo(options) {
  /* -----------------------------------------
     Update original select
  ----------------------------------------- */
  transferTo
    .empty()
    .append(
      '<option value="" selected disabled>Select account</option>'
    );
  options.forEach(function (option) {
    transferTo.append(
      `<option value="${option.value}">${option.text}</option>`
    );
  });

  /* -----------------------------------------
     Remove old Nice Select
  ----------------------------------------- */
  transferTo
    .next(".nice-select")
    .remove();

  /* -----------------------------------------
     Create new Nice Select
  ----------------------------------------- */
  transferTo.niceSelect();

  /* -----------------------------------------
     Reset value
  ----------------------------------------- */
  transferTo.val("");
}

/* =========================================================
   TRANSFER - FROM ACCOUNT CHANGE
========================================================= */
transferFrom.on("change", function () {
  const selectedAccount = $(this).val();

  /* -----------------------------------------
     Main Bank Account
  ----------------------------------------- */
  if (selectedAccount === "main-bank") {
    updateTransferTo([
      {
        value: "investment-account",
        text: "Investment Account"
      }
    ]);
    transferCategory.text("Investment Transfer");
  }

  /* -----------------------------------------
     Investment Account
  ----------------------------------------- */
  else if (selectedAccount === "investment-account") {
    updateTransferTo([
      {
        value: "main-bank",
        text: "Main Bank Account"
      }
    ]);
    transferCategory.text("Withdrawal / Return Transfer");
  }

  /* -----------------------------------------
     No account selected
  ----------------------------------------- */
  else {
    updateTransferTo([
      {
        value: "investment-account",
        text: "Investment Account"
      },
      {
        value: "main-bank",
        text: "Main Bank Account"
      }
    ]);
    transferCategory.text("Select accounts");
  }
});

/* =========================================================
   TRANSFER - AMOUNT / TOTAL
========================================================= */
transferAmount.on("input", function () {
  const amount = parseFloat($(this).val()) || 0;
  const fee = 0;
  const total = amount + fee;

  /* -----------------------------------------
     Transfer Fee
  ----------------------------------------- */
  transferFee.text(
    `₹${fee}`
  );


  /* -----------------------------------------
     Total No .00 when number is whole.
  ----------------------------------------- */
  transferTotal.text(
    `₹${Number.isInteger(total) ? total : total.toFixed(2)}`
  );
});

/* =========================================================
   TRANSFER - FORM SUBMIT
========================================================= */
transferModal.find("form").on("submit", function (event) {
  event.preventDefault();
  const form = this;
  const fromAccount = transferFrom.val();
  const toAccount = transferTo.val();
  const amount = parseFloat(transferAmount.val()) || 0;

  /* -----------------------------------------
     HTML validation
  ----------------------------------------- */
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  /* -----------------------------------------
     Same account check
  ----------------------------------------- */
  if (fromAccount === toAccount) {
    alert("You cannot transfer money to the same account.");
    return;
  }

  /* -----------------------------------------
     Amount check
  ----------------------------------------- */
  if (amount <= 0) {
    alert("Please enter a valid transfer amount.");
    return;
  }

  /* -----------------------------------------
     Transfer data
  ----------------------------------------- */
  console.log("Transfer submitted", {
    from: fromAccount,
    to: toAccount,
    category: transferCategory.text(),
    amount: amount,
    fee: 0,
    total: amount
  });

  // Add your Transfer functionality here.
});

/* =========================================================
   RESET TRANSFER
========================================================= */
function resetTransfer() {

  /* -----------------------------------------
     Reset From
  ----------------------------------------- */
  transferFrom
    .val("")
    .niceSelect("update");

  /* -----------------------------------------
     Reset To
  ----------------------------------------- */
  transferTo
    .empty()
    .append(
      '<option value="" selected disabled>Select account</option>'
    )
    .append(
      '<option value="investment-account">Investment Account</option>'
    )
    .append(
      '<option value="main-bank">Main Bank Account</option>'
    )
    .val("")
    .niceSelect("update");

  /* -----------------------------------------
     Reset Category
  ----------------------------------------- */
  transferCategory.text("Select accounts");

  /* -----------------------------------------
     Reset Amount
  ----------------------------------------- */
  transferAmount.val("");

  /* -----------------------------------------
     Reset Fee
  ----------------------------------------- */
  transferFee.text("₹0");

  /* -----------------------------------------
     Reset Total
  ----------------------------------------- */
  transferTotal.text("₹0");

  /* -----------------------------------------
     Reset Note
  ----------------------------------------- */
  $("#transfer-note").val("");
}

/* =========================================================
   TABLE MODAL FUNCTIONALITY
========================================================= */

document.addEventListener("click", function (event) {

  const modalButton = event.target.closest(".table-modal-btn");

  if (!modalButton) {
    return;
  }

  const modalId = modalButton.dataset.modal;
  const modal = document.getElementById(modalId);

  if (!modal) {
    return;
  }

  const modalBody = modal.querySelector(".modal-data-body");
  const modalTitle = modal.querySelector(".modal-head-title");

  if (!modalBody) {
    return;
  }

  // Clear previous data
  modalBody.innerHTML = "";

  // Update modal title if provided
  if (modalTitle && modalButton.dataset.modalTitle) {
    modalTitle.textContent = modalButton.dataset.modalTitle;
  }

  // Get all data-* attributes
  const data = modalButton.dataset;

  Object.entries(data).forEach(([key, value]) => {

    // Don't show these attributes as table rows
    if (
      key === "modal" ||
      key === "modalTitle"
    ) {
      return;
    }

    const row = document.createElement("tr");

    const labelCell = document.createElement("td");
    const valueCell = document.createElement("td");

    // Convert camelCase into readable text
    const label = key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, function (char) {
        return char.toUpperCase();
      });

    labelCell.textContent = label;
    valueCell.textContent = value;
    row.appendChild(labelCell);
    row.appendChild(valueCell);
    modalBody.appendChild(row);
  });

  // Open modal
  modal.classList.add("active");
});