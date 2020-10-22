document.addEventListener("DOMContentLoaded", function () {

  // see more-less 1
  const seeMoreLessBtn1 = document.querySelector(".see-more-less-btn1");
  const additionalPictures1 = document.querySelector(".additional-pictures1");

  seeMoreLessBtn1.addEventListener("click", function() {
      if (additionalPictures1.style.display === "none" || additionalPictures1.style.display === "") {
          additionalPictures1.style.display = "block";
          seeMoreLessBtn1.textContent = "Zobacz mniej";
      } else {
          additionalPictures1.style.display = "none";
          seeMoreLessBtn1.textContent = "Zobacz więcej";
      }
  });
  // see more-less 2
  const seeMoreLessBtn2 = document.querySelector(".see-more-less-btn2");
  const additionalPictures2 = document.querySelector(".additional-pictures2");

  seeMoreLessBtn2.addEventListener("click", function() {
      if (additionalPictures2.style.display === "none" || additionalPictures2.style.display === "") {
          additionalPictures2.style.display = "block";
          seeMoreLessBtn2.textContent = "Zobacz mniej";
      } else {
          additionalPictures2.style.display = "none";
          seeMoreLessBtn2.textContent = "Zobacz więcej";
      }
  });
  // see more-less 3
  const seeMoreLessBtn3 = document.querySelector(".see-more-less-btn3");
  const additionalPictures3 = document.querySelector(".additional-pictures3");

  seeMoreLessBtn3.addEventListener("click", function() {
      if (additionalPictures3.style.display === "none" || additionalPictures3.style.display === "") {
          additionalPictures3.style.display = "block";
          seeMoreLessBtn3.textContent = "Zobacz mniej";
      } else {
          additionalPictures3.style.display = "none";
          seeMoreLessBtn3.textContent = "Zobacz więcej";
      }
  });
  // see more-less 4
  const seeMoreLessBtn4 = document.querySelector(".see-more-less-btn4");
  const additionalPictures4 = document.querySelector(".additional-pictures4");

  seeMoreLessBtn4.addEventListener("click", function() {
      if (additionalPictures4.style.display === "none" || additionalPictures4.style.display === "") {
          additionalPictures4.style.display = "block";
          seeMoreLessBtn4.textContent = "Zobacz mniej";
      } else {
          additionalPictures4.style.display = "none";
          seeMoreLessBtn4.textContent = "Zobacz więcej";
      }
  });
  // see more-less 5
  const seeMoreLessBtn5 = document.querySelector(".see-more-less-btn5");
  const additionalPictures5 = document.querySelector(".additional-pictures5");

  seeMoreLessBtn5.addEventListener("click", function() {
      if (additionalPictures5.style.display === "none" || additionalPictures5.style.display === "") {
          additionalPictures5.style.display = "block";
          seeMoreLessBtn5.textContent = "Zobacz mniej";
      } else {
          additionalPictures5.style.display = "none";
          seeMoreLessBtn5.textContent = "Zobacz więcej";
      }
  });

  // go-up button //

  const goUpBtn = document.querySelector(".go-up");

  goUpBtn.addEventListener("click", function () {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  });
});