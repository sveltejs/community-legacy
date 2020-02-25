// Used to fetch and update number of stars on each resource.
require('dotenv').config();
const fs = require('fs');
const yaml = require('js-yaml');
const fetch = require('node-fetch');

// edit this to update files
const pathToFileToUpdate = 'data/code.yml';
// end edit this

function hasGitHubUrl(url) {
  return url.includes('github.com');
}

async function getStars() {
  try {
    const resources = yaml.safeLoad(
      fs.readFileSync(pathToFileToUpdate, 'utf8')
    );

    const updatedResources = await Promise.all(
      resources.resources.map(async (res) => {
        if (hasGitHubUrl(res.url)) {
          const url = res.url;
          const [org, repo] = url.split('/').splice(-2);

          let result = await fetch(
            `https://api.github.com/repos/${org}/${repo}?client_id=${process.env.GH_CLIENT_ID}&client_secret=${process.env.GH_CLIENT_SECRET}`
          );

          result = await result.json();

          if (result.message == 'Not Found') {
            return res;
          }
          if (result.watchers === undefined) {
            throw new Error(
              'note to developer - watchers is undefined, you are likely exceeding API rate limit'
            );
          }
          return {
            ...res,
            stars: result.watchers,
            last_updated: result.updated_at
          };
        } else {
          return res;
        }
      })
    );

    const finishedYaml = {
      ...resources,
      resources: updatedResources
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

getStars();
