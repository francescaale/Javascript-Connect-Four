
var redDiscImage = 'redDisc.jpg';
var greenDiscImage = 'greenDisc.jpg';


var images = [redDiscImage, greenDiscImage];// Array to hold disc images  


arrayTrackHorizontal = [
  ['03', '13', '23', '33'],
  ['02', '12', '22', '32'],
  ['01', '11', '21', '31'],
  ['00', '10', '20', '30']
];

arrayTrackVertical = [
  ['03', '02', '01', '00'],
  ['13', '12', '11', '10'],
  ['23', '22', '21', '20'],
  ['33', '32', '31', '30']
];

arrayTrackDiagonally = [
  ['00', '11', '22', '33'],
  ['30', '21', '12', '03']
];

function btnselect(position) {

  randomIndex = Math.floor(Math.random() * images.length);
  selectedImage = images[randomIndex]; // Get random image
  document.getElementById(position).src = selectedImage; // Set cell image to selected disc 
}



