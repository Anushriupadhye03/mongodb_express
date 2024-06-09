const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
.then(() => {
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
};

let allChats = [
    {
    from: "neha",
    to: "priya",
    msg: "send me the exam notes",
    created_at: new Date(),
   },
   {
    from: "riya",
    to: "priya",
    msg: "All the best for exam!",
    created_at: new Date(),
   },
   {
    from: "rohith",
    to: "rahul",
    msg: "All the best for match!",
    created_at: new Date(),
   },
   {
    from: "pinky",
    to: "tony",
    msg: "Lets go party!",
    created_at: new Date(),
   }
];

Chat.insertMany(allChats);

