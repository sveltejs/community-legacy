// Used to fetch and update number of stars on each resource.
require('dotenv').config();
const fs = require('fs');
const yaml = require('js-yaml');
const fetch = require('node-fetch');

// edit this to update files
const pathToFileToUpdate = 'data/code.yml';
// end edit this

function hasGitLabUrl(url) {
  return url.includes('gitlab.com');
}

const query = /* GraphQL */ `
  query PROJECT_QUERY($fullPath: ID!) {
    project(fullPath: $fullPath) {
      starCount
      lastActivityAt
    }
  }
`
async function getStars() {
  try {
    const resources = yaml.safeLoad(
      fs.readFileSync(pathToFileToUpdate, 'utf8')
    );

    const updatedResources = await Promise.all(
      resources.resources.map(async (res) => {
        if (hasGitLabUrl(res.url)) {
          const url = res.url;
          const [org, repo] = url.split('/').splice(-2);
          const variables = { fullPath: `${org}/${repo}` }

          let result = await fetch(`https://gitlab.com/api/graphql`, {
            method: 'post',
            body: JSON.stringify({ query, variables }),
            headers: { 'Content-Type': 'application/json' }
          });

          result = await result.json();

          if (result.errors) {
            throw new Error(`Failed to update ${fullPath}`, errors)
          }

          const { data: { project } } = result;

          if (!project) { // not found
            return res;
          }
          return {
            ...res,
            stars: project.starCount,
            last_updated: project.lastActivityAt
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
