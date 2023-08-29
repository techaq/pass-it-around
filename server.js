const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(
    "<h1> 99 bottles of perfume on the wall </h1> <br> <a href='/98'>Take one down, pass it around</a>"
  );
});

app.get("/:number_of_bottles", (req, res) => {
  const numberOfBottles = parseInt(req.params.number_of_bottles);

  if (numberOfBottles > 0) {
    res.send(
      `${numberOfBottles} bottles of perfume on the wall <br/> <a href='/${
        numberOfBottles - 1
      }'> take one down, pass it around </a>`
    );
  } else {
    res.send(
      "<h1> 0 bottles of perfume on the wall </h1> <br/> <a href='/'> Start over </a>"
    );
  }
});

app.listen(PORT, () => {
  console.log(`Gettin busy with it on ${PORT}`);
});
