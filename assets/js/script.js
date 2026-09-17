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
const investmentChart = document.getElementById('investmentChart');
const investmentChartInstance = new Chart(investmentChart, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jan', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Current Value',
            data: [2, 12, 9, 16, 8, 10, 12, 16, 12, 20, 10, 12],
            borderWidth: 1,
            backgroundColor: ["#415a75"],
        },
        {
            label: 'Initial Investment',
            data: [2, 12, 9, 16, 10, 6, 4, 20, 18, 20, 22, 16],
            borderWidth: 1,
            backgroundColor: ["#c7d5e3"],
        }]
    },
    options: {
        responsive: true,
        aspectRatio: 1.4,
        scales: {
            y: {
                beginAtZero: true
            }
        },
    }
});

const assetAllocationChart = document.getElementById('assetAllocationChart');
const assetAllocationChartInstance = new Chart(assetAllocationChart, {
    type: 'pie',
    data: {
        labels: ['Stocks', 'Gold', 'Cash'],
        datasets: [{
            label: 'Current Value',
            data: [40, 40, 20],
            borderWidth: 1,
            backgroundColor: ["#163b63", "#415a75", "#243b53"],
        },
        ]
    },
    options: {
        responsive: true,
        aspectRatio: 1.4,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


window.addEventListener('resize', () => {
    investmentChartInstance.resize();
    assetAllocationChartInstance.resize();
});