const user = {
    id: 345,
    name: {
        firstName: "Mezbaul",
        middleName: "Abedin",
        lastName : "Persian"
    },
    contactNo: "01739182738912",
    address: "Uganda"
}

// const {contactNo , name: {middleName : } } = user;


//object destrcuturing
const {
    contactNo,
    name: {middleName}
} = user;


//array destructuring

const myFriends = ["chandler", "joey", "ross", "rachel", "monica ", "monica"]
const [a, b, bestFriend ]= myFriends // here ross is bestFriend
const [, , , Firend ]= myFriends // here rechel is my Friend
const [, , , rachel,...rest]= myFriends // here ...rest is  "monica ", "monica"
