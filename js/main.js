var $newHeadingBelow = $('<h1>');
var $newUl = $('<ul>');
var $newHeadingAbove = $('<h1>');
var $newUl2 = $('<ul>');

$newHeadingBelow.html('Below ground veggies');
$('body').append($newHeadingBelow);
$('body').append($newUl);

$newHeadingAbove.html('Above ground veggies');
$('body').append($newHeadingAbove);
$('body').append($newUl2);

$('ul li').each(function () {
  if ($(this).hasClass('below')) {
    $newUl.append($(this));
  } else {
    $newUl2.append($(this));
  }
});
