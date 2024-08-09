import "../scss/app.scss";

const burgerBtn = document.querySelector(".header__burger-icon");
const img = document.querySelector(".header__burger-icon img");
const headerBurger = document.querySelector(".header__burger");

burgerBtn.addEventListener("click", () => {
  const isClosed = img.src.includes("burgerMenu");
  const imgUrl = img.src.includes("close.png")
    ? "/images/burgerMenu.svg"
    : "/images/close.png";
  img.src = imgUrl;
  if (isClosed) {
    headerBurger.classList.add("active");
    return;
  }
  headerBurger.classList.remove("active");
});
