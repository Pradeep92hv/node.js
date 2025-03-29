const fs = require("fs");
const path = require("path");

fs.writeFile(
  path.join(__dirname, "files", "reply.txt"),"\n \n nice to meet you!! ",(err) => {
    if (err) throw err;
    console.log("write completeed");

    fs.appendFile(path.join(__dirname, "files", "reply.txt"),"\n \n nice to meet you!! ",(err) => {
        if (err) throw err;
        console.log("appenf completeed");

        fs.rename(
          path.join(__dirname, "files", "reply.txt"),
          path.join(__dirname, "files", "newreply.txt"),(err) => {
            if (err) throw err;
            console.log("rename completeed");
            
            fs.readFile(
              path.join(__dirname, "files", "stater.txt"),
              (err, data) => {
                if (err) throw err;
                console.log(data.toString());
              }
            );
          }
        );
      }
    );
  }
);
