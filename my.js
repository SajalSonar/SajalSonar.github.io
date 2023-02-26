$(document).ready(function () {
  console.log("we are using jquery");
  //$('selector').action()

  //on hover effect in html using j query?
  $(function () {
    $('.a').hover(function () {
      $(this).css('background-color', '#F00');
    },
      function () {
        $(this).css('background-color', 'black');
      });
  });

  //Source: https://stackoverflow.com/questions/275891
})