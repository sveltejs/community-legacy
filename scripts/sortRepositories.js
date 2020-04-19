// Used to sort repositories
require("dotenv").config();
const fs = require("fs");
const yaml = require("js-yaml");

// edit this to update files
const pathToFileToUpdate = "data/code.yml";
// end edit this

async function sortRepositories() {
  try {
    const resources = yaml.safeLoad(
      fs.readFileSync(pathToFileToUpdate, "utf8")
    );

    const sortedResources = await Promise.all(
      resources.resources.sort(function (a, b) {
        a = a.url.toLowerCase();
        b = b.url.toLowerCase();

        return a < b ? -1 : a > b ? 1 : 0;
      })
    );

    const finishedYaml = {
      ...resources,
      resources: sortedResources,
    };

    fs.writeFile(pathToFileToUpdate, yaml.safeDump(finishedYaml), (err) => {
      if (err) {
        console.log(err);
      }
    });
  } catch (e) {
    console.log(e);
  }
}

sortRepositories();
