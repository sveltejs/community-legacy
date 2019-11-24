// Fetches and updates the number of monthly npm downloads on each resource.
// api docs: https://github.com/npm/registry/blob/master/docs/download-counts.md

const fs = require("fs");
const yaml = require("js-yaml");
const fetch = require("node-fetch");

const filePath = "data/code.yml";
const period = "point/last-month";
const extractNpmPackage = resource => {
  const matches = resource.name.match(/^`(.+)`$/);
  return matches && matches[1];
};

async function updateDownloads() {
  const data = yaml.safeLoad(fs.readFileSync(filePath, "utf8"));

  const updatedResources = [];
  for (const resource of data.resources) {
    const npmPackage = extractNpmPackage(resource);
    if (!npmPackage) {
      updatedResources.push(resource);
      continue;
    }

    let result = await fetch(
      `https://api.npmjs.org/downloads/${period}/${npmPackage}`
    );
    result = await result.json();

    if (result.error) {
      if (result.error.includes("not found")) {
        throw Error(
          `npm package "${npmPackage}" not found.` +
            " If the resource is not supposed to be an npm package," +
            " remove the backticks from its name."
        );
      } else {
        throw Error(`npm error: ${JSON.stringify(result)}`);
      }
    }

    updatedResources.push({
      ...resource,
      downloads: result.downloads
    });
    console.log(`updated ${npmPackage}`);
  }

  const finishedYaml = {
    ...data,
    resources: updatedResources
  };

  fs.writeFile(filePath, yaml.safeDump(finishedYaml), err => {
    if (err) {
      console.log(err);
    }
  });
}

updateDownloads()
  .then(() => console.log("done!"))
  .catch(err => console.error(err));
