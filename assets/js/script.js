const userAvatarWrapper = document.querySelector(".user-avatar-wrapper");
const userProfileStack = document.querySelector(".user-profile-stack");
const menuBtn = document.querySelector(".menu-btn");
const asideCloseBtn = document.querySelector(".aside-close-btn");
const aside = document.querySelector("aside");

userAvatarWrapper.addEventListener("click", () => {
    userAvatarWrapper.classList.toggle("active");
    userProfileStack.classList.toggle("active");
});

menuBtn.addEventListener("click", () => {
    aside.classList.add("active");
});

asideCloseBtn.addEventListener("click", () => {
    aside.classList.remove("active");
});

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
}
if (investmentChartInstance || assetAllocationChartInstance) {
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