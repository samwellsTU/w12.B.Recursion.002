//1. Make a function that computes a factorial recursively

const fact = function (num) {
  if (num === 0) {
    //Base Case
    return 1;
  } else {
    //Recursive Case
    return num * fact(num - 1);
  }
};

//2. Make a function that recursively transposes a MIDI pitch down until it is in C Major

const cMajor = [0, 2, 4, 5, 7, 9, 11];

const scaleMap = function (midiIn) {
  /*
    ok i want to take a midi pitch in and if it is not in C major t
    transpose it so it is in cmajor
    */

  //test to see if in cmajor
  if (cMajor.includes(midiIn % 12)) {
    //if it is, just pass it through
    return midiIn;
  } else {
    return scaleMap(midiIn - 1);
    //if it isnt' change so it is in c major
  }
};
