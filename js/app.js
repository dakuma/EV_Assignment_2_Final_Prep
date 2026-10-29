
let menuOpen = false; // boolen, string, number - that's is JS is simple
let numOfBeans = 33;

function toggleMenu() {
  if(!menuOpen) { // open the nav
    $('nav').animate({
        right: 0
      }, 300, 'swing');
  }
  else { // close the nav
    $('nav').animate({
        right: -300
      }, 360, 'swing');
  }
  // toggle the menuOpen variable
  menuOpen = !menuOpen;
} // toggleMenu()

function closeMenu() {
  $('nav').animate({
    right: -300
  }, 440, 'swing'); // end of line comments
  menuOpen = false;
} // closeMenu()

// single-line comment are most used!
/*
  hi mom,
  I just wanted to say
  thank you
  you are the best
  p.s. can I have $100 dollars ;)
*/