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

addMoneyPaymentMethod.on("change", function () {
  const selectedMethod = $(this).val();
  console.log("Add Money Payment Method:", selectedMethod);

  const paymentMethodOptions = addMoneyModal.find(
    ".payment-method-option"
  );

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

  if (!selectedMethod) {
    return;
  }

  const selectedOption = addMoneyModal.find(
    `.payment-method-option[data-payment-method="${selectedMethod}"]`
  );

  if (selectedOption.length) {
    selectedOption.addClass("active");

    selectedOption
      .find("input, select")
      .prop("required", true);
  }
});

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

    if (!confirmAccountNumber) {
      errorMessage
        .removeClass("active")
        .text("");
      return;
    }

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

$(document).on(
  "input",
  "#account-number, #confirm-account-number",
  function () {
    this.value = this.value.replace(/\D/g, "");
  }
);

$(document).on(
  "input",
  "#ifsc-code",
  function () {
    this.value = this.value.toUpperCase();
  }
);

$(".add-money-form").on("submit", function (event) {
  event.preventDefault();
  const form = this;

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

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

function resetAddMoneyPaymentMethod() {
  const paymentMethodOptions =
    addMoneyModal.find(".payment-method-option");

  addMoneyPaymentMethod
    .val("")
    .trigger("change");

  paymentMethodOptions
    .removeClass("active");

  paymentMethodOptions
    .find("input, select")
    .prop("required", false);

  paymentMethodOptions
    .find("input")
    .val("");

  paymentMethodOptions
    .find("select")
    .each(function () {
      $(this)
        .val("")
        .trigger("change");
    });

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

buyPaymentMethod.on("change", function () {
  const selectedMethod = $(this).val();
  console.log("Buy Payment Method:", selectedMethod);

  const paymentMethodOptions = buyModal.find(
    ".payment-method-option"
  );

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

  if (!selectedMethod) {
    return;
  }

  const selectedOption = buyModal.find(
    `.payment-method-option[data-payment-method="${selectedMethod}"]`
  );

  if (selectedOption.length) {
    selectedOption.addClass("active");

    selectedOption
      .find("input, select")
      .prop("required", true);
  }
});

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

    if (!confirmAccountNumber) {
      errorMessage
        .removeClass("active")
        .text("");
      return;
    }

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

$(document).on(
  "input",
  "#buy-account-number, #buy-confirm-account-number",
  function () {
    this.value = this.value.replace(/\D/g, "");
  }
);

$(document).on(
  "input",
  "#buy-ifsc-code",
  function () {
    this.value = this.value.toUpperCase();
  }
);

$(".quick-buy").on("submit", function (event) {
  event.preventDefault();
  const form = this;

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

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

function resetBuyPaymentMethod() {
  const paymentMethodOptions =
    buyModal.find(".payment-method-option");

  buyPaymentMethod
    .val("")
    .trigger("change");

  paymentMethodOptions
    .removeClass("active");

  paymentMethodOptions
    .find("input, select")
    .prop("required", false);

  paymentMethodOptions
    .find("input")
    .val("");

  paymentMethodOptions
    .find("select")
    .each(function () {
      $(this)
        .val("")
        .trigger("change");
    });

  paymentMethodOptions
    .find(".input-error")
    .removeClass("active")
    .text("");
}

/* =========================================================
   TRANSFER - PAYMENT METHOD
========================================================= */
const transferModal = $("#quick-transfer");
const transferFrom = $("#transfer-from");
const transferTo = $("#transfer-to");
const transferCategory = $("#transfer-category");
const transferAmount = $("#transfer-amount");
const transferFee = $("#transfer-fee");
const transferTotal = $("#transfer-total");

/* =========================================================
   TRANSFER - ACCOUNT OPTIONS
========================================================= */

const transferAccounts = [
  {
    value: "main-bank",
    text: "Main Bank Account"
  },
  {
    value: "investment-account",
    text: "Investment Account"
  }
];



/* =========================================================
   TRANSFER - UPDATE NICE SELECT
========================================================= */

function updateTransferSelect(select, hiddenValue) {

  const currentValue = select.val();


  /* -----------------------------------------
     Destroy existing Nice Select
  ----------------------------------------- */

  const niceSelect = select.next(".nice-select");

  if (niceSelect.length) {
    niceSelect.remove();
  }


  /* -----------------------------------------
     Show / hide options
  ----------------------------------------- */

  select.find("option").each(function () {

    const option = $(this);

    if (
      option.val() &&
      option.val() === hiddenValue
    ) {

      option.remove();
    }
  });


  /* -----------------------------------------
     Reset selected value
  ----------------------------------------- */

  select.val("");


  /* -----------------------------------------
     Re-create Nice Select
  ----------------------------------------- */

  select.niceSelect();


  /* -----------------------------------------
     Make sure previous value is not restored
  ----------------------------------------- */

  if (
    currentValue &&
    currentValue !== hiddenValue
  ) {

    select.val(currentValue);
    select.niceSelect("update");
  }
}



/* =========================================================
   TRANSFER - RESET SELECT OPTIONS
========================================================= */

function resetTransferSelect(select) {

  const niceSelect = select.next(".nice-select");

  if (niceSelect.length) {
    niceSelect.remove();
  }


  /* -----------------------------------------
     Restore all options
  ----------------------------------------- */

  select
    .empty()
    .append(
      '<option value="" selected disabled>Select account</option>'
    );


  transferAccounts.forEach(function (account) {

    select.append(
      `< option value = "${account.value}" >
  ${account.text}
      </ > `
    );
  });


  /* -----------------------------------------
     Create Nice Select
  ----------------------------------------- */

  select.niceSelect();
}



/* =========================================================
   TRANSFER - FROM CHANGE
========================================================= */

transferFrom.on("change", function () {

  const selectedFrom = $(this).val();


  /* -----------------------------------------
     Main Bank selected
     → Hide Main Bank from To
  ----------------------------------------- */

  if (selectedFrom === "main-bank") {

    updateTransferSelect(
      transferTo,
      "main-bank"
    );
  }


  /* -----------------------------------------
     Investment selected
     → Hide Investment from To
  ----------------------------------------- */

  else if (selectedFrom === "investment-account") {

    updateTransferSelect(
      transferTo,
      "investment-account"
    );
  }


  /* -----------------------------------------
     Update category
  ----------------------------------------- */

  updateTransferCategory();
});



/* =========================================================
   TRANSFER - TO CHANGE
========================================================= */

transferTo.on("change", function () {

  const selectedTo = $(this).val();


  /* -----------------------------------------
     Main Bank selected
     → Hide Main Bank from From
  ----------------------------------------- */

  if (selectedTo === "main-bank") {

    updateTransferSelect(
      transferFrom,
      "main-bank"
    );
  }


  /* -----------------------------------------
     Investment selected
     → Hide Investment from From
  ----------------------------------------- */

  else if (selectedTo === "investment-account") {

    updateTransferSelect(
      transferFrom,
      "investment-account"
    );
  }


  /* -----------------------------------------
     Update category
  ----------------------------------------- */

  updateTransferCategory();
});



/* =========================================================
   TRANSFER - CATEGORY
========================================================= */

function updateTransferCategory() {

  const fromAccount = transferFrom.val();
  const toAccount = transferTo.val();


  /* -----------------------------------------
     Main Bank → Investment
  ----------------------------------------- */

  if (
    fromAccount === "main-bank" &&
    toAccount === "investment-account"
  ) {

    transferCategory.text(
      "Investment Transfer"
    );

    return;
  }


  /* -----------------------------------------
     Investment → Main Bank
  ----------------------------------------- */

  if (
    fromAccount === "investment-account" &&
    toAccount === "main-bank"
  ) {

    transferCategory.text(
      "Withdrawal / Return Transfer"
    );

    return;
  }


  /* -----------------------------------------
     No complete selection
  ----------------------------------------- */

  transferCategory.text(
    "Select accounts"
  );
}



/* =========================================================
   TRANSFER - AMOUNT
========================================================= */

transferAmount.on("input", function () {

  const amount =
    parseFloat($(this).val()) || 0;

  const fee = 0;

  const total = amount + fee;


  /* -----------------------------------------
     Transfer Fee
  ----------------------------------------- */

  transferFee.text(
    `₹${fee} `
  );


  /* -----------------------------------------
     Total
     
     12345     → ₹12345
     12345.50  → ₹12345.50
  ----------------------------------------- */

  if (Number.isInteger(total)) {

    transferTotal.text(
      `₹${total} `
    );

  } else {

    transferTotal.text(
      `₹${total.toFixed(2)} `
    );
  }
});



/* =========================================================
   TRANSFER - FORM SUBMIT
========================================================= */

transferModal.find("form").on("submit", function (event) {

  event.preventDefault();

  const form = this;

  const fromAccount = transferFrom.val();
  const toAccount = transferTo.val();

  const amount =
    parseFloat(transferAmount.val()) || 0;


  /* -----------------------------------------
     HTML validation
  ----------------------------------------- */

  if (!form.checkValidity()) {

    form.reportValidity();

    return;
  }


  /* -----------------------------------------
     Same account protection
  ----------------------------------------- */

  if (fromAccount === toAccount) {

    alert(
      "You cannot transfer money to the same account."
    );

    return;
  }


  /* -----------------------------------------
     Amount validation
  ----------------------------------------- */

  if (amount <= 0) {

    alert(
      "Please enter a valid transfer amount."
    );

    return;
  }


  /* -----------------------------------------
     Transfer submitted
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

  resetTransferSelect(transferFrom);


  /* -----------------------------------------
     Reset To
  ----------------------------------------- */

  resetTransferSelect(transferTo);


  /* -----------------------------------------
     Reset Category
  ----------------------------------------- */

  transferCategory.text(
    "Select accounts"
  );


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

  modalBody.innerHTML = "";

  if (modalTitle && modalButton.dataset.modalTitle) {
    modalTitle.textContent = modalButton.dataset.modalTitle;
  }

  const data = modalButton.dataset;

  Object.entries(data).forEach(([key, value]) => {

    if (
      key === "modal" ||
      key === "modalTitle"
    ) {
      return;
    }

    const row = document.createElement("tr");
    const labelCell = document.createElement("td");
    const valueCell = document.createElement("td");

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

  modal.classList.add("active");
});