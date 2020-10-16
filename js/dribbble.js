/**
 *
 * Use Dribbble's API to fetch the newest shots from a random Dribbble user
 *
 */

 var dribbbleUsername = 'ghulaam-rasool';

// Variable to hold the HTML
 var html = '';

// Load the shots via Dribbble's API
$.getJSON("http://api.dribbble.com/players/"+ dribbbleUsername +"/shots?callback=?", function(data) {
  // how many shots we're displaying on the page
  var numberOfShots = 10;

  // Loop over results, generating HTML for each item
  for (i = 0; i < numberOfShots; i++) {
    html += '<li>';
    html += '<a href="' + data.shots[i].url + '">';
    html += '<img src="' + data.shots[i].image_url + '" alt="'+ data.shots[i].title + '">';
    html += '</a>';
    html += '</li>';
  }

  // Insert generated HTML to the dom
  $('.shots').html(html);
});
