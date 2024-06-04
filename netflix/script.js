document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".question");

  questions.forEach((question) => {
    question.addEventListener("click", function () {
      const answer = this.nextElementSibling;
      const icon = this.querySelector("i");

      answer.classList.toggle("closed");

      if (answer.classList.contains("closed")) {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-plus");
      } else {
        icon.classList.remove("fa-plus");
        icon.classList.add("fa-xmark");
      }
    });
  });
});
