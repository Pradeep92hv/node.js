// promise

const fsPromise = require("fs").promises;
const { readFile } = require("fs");
const path = require("path");

const fileops = async () => {
  try {
    const data = await fsPromise.readFile(path.join(__dirname, "files", "stater.txt"),"utf8");
    console.log(data);
    await fsPromise.writeFile(path.join(__dirname, "files", "promiseWriter.txt"),data);
    await fsPromise.appendFile(path.join(__dirname, "files", "promiseWriter.txt"),"\n\n nice to meet you");
   // await fsPromise.writeFile(path.join(__dirname, "files", "promiseWriter.txt"),data);
    await fsPromise.rename(path.join(__dirname, "files", "promiseWriter.txt"),path.join(__dirname, "files", "promisecomplete.txt"));

    const newdata = await fsPromise.readFile(path.join(__dirname, "files", "promisecomplete.txt"),"utf8");
    console.log(newdata);
  } catch (err) {
    console.log(err);
  }
};


fileops();