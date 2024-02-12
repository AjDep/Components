const DarkColor="#444444"; //Color of Screen Dark
const LightColor="#ffffff"; //Color of Screen Light
const sunImage = "Sun.svg"; //Pic of the Sun
const moonImage = "moon.svg"; //Pic of the moon
const checkbox = document.getElementById('Input');
const div = document.getElementById('myDiv');

document.documentElement.style.setProperty('--sun-image', `url(${sunImage})`);
document.documentElement.style.setProperty('--moon-image', `url(${moonImage})`);

checkbox.addEventListener('change', function() {
  if (checkbox.checked) {
    document.body.style.backgroundColor = `${DarkColor}`;
    checkbox.style.border="#ffffff";
  } else {
    document.body.style.backgroundColor = `${LightColor}`;
  }
});




