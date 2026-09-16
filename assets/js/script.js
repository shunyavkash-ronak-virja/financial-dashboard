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