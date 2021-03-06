"use strict";

const sliderImage = document.querySelectorAll(".slider_image");
const sliderQuote = document.querySelectorAll(".slider_q");
const sliderInfo = document.querySelectorAll(".slider-information");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".previous");

const imgLength = sliderImage.length - 1;

let sliderIndex = 0;

nextBtn.onclick = () => {
  sliderIndex++;

  sliderIndex = sliderIndex > imgLength ? 0 : sliderIndex++;

  updateSlider();
};

prevBtn.onclick = () => {
  sliderIndex--;

  sliderIndex = sliderIndex < 0 ? imgLength : sliderIndex--;

  updateSlider();
};

function updateSlider() {
  const activeElements = document.querySelectorAll(".active");

  activeElements.forEach((el) => el.classList.remove("active"));

  sliderImage[sliderIndex].classList.add("active");
  sliderQuote[sliderIndex].classList.add("active");
  sliderInfo[sliderIndex].classList.add("active");
}
