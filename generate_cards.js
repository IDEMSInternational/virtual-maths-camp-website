let fs = require("fs");
let path = require("path");

let cardIds = [];
for (let suit of ["C", "S", "H", "D"]) {
  for (let i = 1; i < 14; i++) {
    let value = "" + i;
    if (i === 1) {
      value = "A";
    }
    if (i === 11) {
      value = "J";
    }
    if (i === 12) {
      value = "Q";
    }
    if (i === 13) {
      value = "K";
    }
    cardIds.push(value + suit);
  }
}

if (!fs.existsSync("card")) {
    fs.mkdirSync("./card");
}

for (let cardId of cardIds) {
    let url = "https://cards.virtualmathscamp.com/en/card/" + cardId;
    const html = `<html>
    <head>
        <meta http-equiv="refresh" content="0; url=${url}" />
    </head>
    <body>
        <a href="${url}">Click here to go to card</a>
    </body>
</html>`;
    fs.writeFileSync(path.join("card", cardId + ".html"), html);
}
