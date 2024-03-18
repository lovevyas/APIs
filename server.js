const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Define a POST route for /bfhl
app.post("/bfhl", (req, res) => {
  const { data } = req.body;

  // Logic to separate even numbers, odd numbers, and alphabets
  const oddNumbers = data.filter(
    (num) => parseInt(num) % 2 !== 0 && !isNaN(parseInt(num)),
  );
  const evenNumbers = data.filter(
    (num) => parseInt(num) % 2 === 0 && !isNaN(parseInt(num)),
  );
  const alphabets = data
    .filter((char) => typeof char === "string" && char.match(/[a-zA-Z]/))
    .map((char) => char.toUpperCase());

  // Prepare the response
  const response = {
    is_success: true,
    user_id: "Love_2111981252",
    email: "love1252.be21@chitkarauniversity.edu.in",
    roll_number: "2111981252",
    odd_numbers: oddNumbers,
    even_numbers: evenNumbers,
    alphabets: alphabets,
  };

  res.json(response);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
