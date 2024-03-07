const spareChairs = require("./spare_chairs");

// Example usage:
const meetingRooms = [['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX', 2]];
const neededChairs = 6;
const result = spareChairs.ValidateFindSpareChairs(meetingRooms, neededChairs);
console.log(result);