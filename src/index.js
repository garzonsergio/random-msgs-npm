const messages = [
  "Doctor Who",
  "Tony Stark",
  "Bruce Wayne",
  "Barbara Gordon",
  "Alfonsina Storni",
  "Serena Williams",
  "Mark Twain",
];

const randMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
};

randMsg();

module.exports = { randMsg };
