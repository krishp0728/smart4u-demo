document.querySelectorAll('form[data-lead]').forEach(function (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.hidden = true;
    form.parentElement.querySelector('.thanks').style.display = 'block';
  });
});

var toggle = document.querySelector('.notes-toggle');
function setNotes(hidden) {
  document.body.classList.toggle('hide-notes', hidden);
  toggle.textContent = hidden ? 'Show demo notes' : 'Hide demo notes';
}
toggle.addEventListener('click', function () {
  setNotes(!document.body.classList.contains('hide-notes'));
});
document.addEventListener('keydown', function (e) {
  if (e.key.toLowerCase() === 'n' && !/INPUT|SELECT|TEXTAREA/.test(e.target.tagName)) toggle.click();
});
