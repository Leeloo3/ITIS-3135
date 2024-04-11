"use strict";

const userCollection = [
  {
    id: 3113,
    Username: "JohnJohn",
    Name: "John Smith",
    Password: ["Tree Among Shrubs", "Serenade of Water"],
  },

  {
    id: 2214,
    Username: "Kelly.S",
    Name: "Kelly Seung",
    Password: ["No One Knows", "Poison"],
  },

  {
    id: 2125,
    Username: "Viola",
    Name: "Violet Evergarden",
    Password: ["November Rain", "Don't Cry"],
  },

  {
    id: 1678,
    Username: "BigBrainByron",
    Name: "Byron Simmons",
    Password: [],
  },
];

/**
 * Returns an array of Usernames of all the users in userCollection
 * @returns {array} - an array of Usernames of all the users in userCollection
 */
function getAllUsernames() {
  return userCollection
    .map((user) => user.Username)
    .filter((Username) => Username);
}
//uncomment following test code after implementing the function
console.log(getAllUsernames());
