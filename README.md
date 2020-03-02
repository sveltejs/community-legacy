# Svelte community

[svelte-community.netlify.com](https://svelte-community.netlify.com/)

This repo contains data for Svelte
meetups, packages, resources, recipes, and showcase websites.
In time this may become the home for a meetup site
and other community information.

## Add an event

To add an event simple make a PR adding your event to the `data/events.json` file.

The JSON file is an array of events matching the following structure:

```ts
interface EventLocation {
  venue?: string;
  address: string;
  city: string;
  state_region: string;
  country: string;
}

interface EventOrganiser {
  name: string;
  link: string;
}

interface SvelteEvent {
  name: string;
  url: string;
  time_start: number;
  time_end: number;
  location: EventLocation;
  organisers: EventOrganiser[];
  details?: string;
}
```

An example entry might look this:

```json
{
  "name": "Svelte Meetup - Kazakhstan",
  "url": "https://www.meetup.com/svelte-kazakhstan",
  "time_start": "2019-11-04-1930",
  "time_end": "2019-11-04-2200",
  "location": {
    "venue": "Wonderous Conference Centre",
    "address": "34 Some Street",
    "city": "Almaty",
    "state_region": "Almaty",
    "country": "Kazakhstan"
  },
  "organisers": [
    {
      "name": "Human Person with name",
      "link": "https://twitter.com/person"
    }
  ],
  "details": "Come join us and talk about Svelte. Many exciting things will happen."
}
```

All events need a time, location, url and at least one contactable organiser. If the venue is not yet confirmed then enter 'To be confirmed' in the relevant Location fields and enter in as much information as you currently know. Dates should be provided in local time as `YYYY-MM-DD-TTTT` (24-hour time).

## Add a package

To add libraries and other packages,
make a PR to [data/code.yml](data/code.yml) and copy the format.
Please try to use existing tags.

## Add a resource

For resources like tools and media content,
make a PR to [data/resources.yml](data/resources.yml),
using the existing tags if possible.

## Updating stats

We run two scripts - `updateGithubStats` and `updateNpmStats`. You dont need credentials for `updateNpmStats` but you will need to add env vars for the github stats in a `.env` file. Pull this from an [OAuth App](https://github.com/settings/developers) (NOT GitHub App):

```bash
GH_CLIENT_ID= # e.g. 1234c7cce43a8bfd6e5e
GH_CLIENT_SECRET= # e.g. abcd0bf9fb26048089874dae9ff09f91a0ef6528
```
