let day = new Date().getDay(); // get current date
console.log(day); // display current hour in the web console
var findlink = document.getElementById("myLinkId");

let heading = document.querySelector('h2');
let title = document.querySelector('h1');
let background = document.querySelector('body');

const dayOfWeekName = new Date().toLocaleString(
  'default', {weekday: 'long'});

if (day > 0 && day < 5) { // weekday
  heading.textContent = dayOfWeekName;
  title.style.color = 'lightcoral';
  findlink.href = "https://open.spotify.com/playlist/43GK6zLlAKQeLsDFMnccrj?si=176595f9dbfc4c27";
  background.style.backgroundColor = 'ghostwhite';

} else {
  heading.textContent = dayOfWeekName;
  title.style.color = 'LightSeaGreen';
  //use js to change css
  background.style.backgroundColor = 'mintcream';
  findlink.href = "https://open.spotify.com/playlist/6vWA83Uk2dhUGjJbGzv4bO?si=815eaf8066374345";
  }
    