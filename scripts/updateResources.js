// Used to fetch and update number of stars on each resource.
require("dotenv").config();
const fs = require("fs");
const yaml = require("js-yaml");
const fetch = require("node-fetch");

async function getStars() {
  try {
    const resources = yaml.safeLoad(
      fs.readFileSync("data/resources.yml", "utf8")
    );

    const updatedResources = await Promise.all(
      resources.resources.map(async res => {
        // if (hasGitHubUrl) {
        let result = await fetch(
          `https://api.github.com/repos/jasonrudolph/keyboard?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`
        );

        result = await result.json();

        return {
          ...res,
          stars: result.watchers,
          last_updated: result.updated_at
        };
        // } else {
        //   return res;
        // }
      })
    );

    const finishedYaml = {
      ...resources,
      resources: updatedResources
    };

    fs.writeFile("data/resources.yml", yaml.safeDump(finishedYaml), err => {
      if (err) {
        console.log(err);
      }
    });
  } catch (e) {
    console.log(e);
  }
}

getStars();

// const url = "https://api.github.com/repos/";

// async function main() {
//   const starships = [];

//   const res = await fetch(base, opts);
//   const list = await res.json();

//   fs.writeFileSync(
//     `../src/routes/_starships.js`,
//     `export default ${JSON.stringify(list)};`
//   );
// }

// main();
