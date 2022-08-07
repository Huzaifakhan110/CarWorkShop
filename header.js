// let a = require("jquery");
// import fs from "./node_modules/fs";
// class header
// requirejs.config({
//   //Pass the top-level main.js/index.js require
//   //function to requirejs so that node modules
//   //are loaded relative to the top-level JS file.
//   nodeRequire: require,
// });
// const fs = import("./node_modules/fs-extra/lib/index.js");
// const fs = requirejs("fs");
const header = () => {
  //   import fs from "./node_modules/fs-extra/lib/index.js";
  const fs = require("fs");
  let filename = "contacts";
  let sno = 0;

  $("#save_d").on("click", function () {
    console.log("ahsan");
    fs.writeFileSync("include/contact.txt", "ahsan");
  });
};
