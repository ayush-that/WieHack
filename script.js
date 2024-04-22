// script.js
document.addEventListener('DOMContentLoaded', function() {
  const questions = document.querySelectorAll('.question');

  questions.forEach(function(question) {
    question.addEventListener('click', function() {
      const answer = this.nextElementSibling;
      answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
  });
});