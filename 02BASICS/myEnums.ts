// const AISLE = 0;
// const MIDDLE = 1;
// const WINDOW = 2;

// if (seat === AISLE) {
// } // bad code

const enum SeatChoice { // so u can assign string or number with auto increment
  AISLE = "aisle", // =1
  MIDDLE = 2, // 2
  WINDOW, // 3
  FOURTH, // 4 AUTO INCREMENT
}

const hcSeat = SeatChoice.WINDOW;
