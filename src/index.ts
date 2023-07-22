import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'John Doe';
  greetUser(name);
});
$(document).ready(function () {
  $('.menu_btn').click(function () {
    $('body').toggleClass('overflow_hidden');
  });
});
let menu_btn;
menu_btn.addEventListener('click', function () {
  if (menu_btn.classList.contains('open_icon')) {
    menu_btn.classList.add('close_icon');
    menu_btn.classList.remove('open_icon');
  } else {
    menu_btn.classList.remove('close_icon');
    menu_btn.classList.add('open_icon');
  }
});
