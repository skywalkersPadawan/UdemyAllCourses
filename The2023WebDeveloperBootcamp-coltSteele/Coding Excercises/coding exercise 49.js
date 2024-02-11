// const validUserNames = (usernames) =>
//     usernames.filter((username) => username.length < 10);

// in this case the same logic with the use of functions
function validUserNames(usernames) {
  return usernames.filter((username) => username.length < 10);
}

const usernames = [
  'mark',
  'staceysmom1978',
  'q29832128238983',
  'carrie98',
  'MoanaFan',
];
const validUsernames = validUserNames(usernames);
console.log(validUsernames); // Output: ["mark", "carrie98", "MoanaFan"]
