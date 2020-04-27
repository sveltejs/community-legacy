# Svelte community

[svelte-community.netlify.com](https://svelte-community.netlify.com/)

This repo contains data for Svelte
meetups, packages, resources, recipes, and showcase websites.
In time this may become the home for a meetup site
and other community information.

## Maintenance mode

we are now working on a new site: https://github.com/svelte-society/site

this site will keep up to date for content, but as far as code and design goes, the new site is the future


## Add an event

To add an event make a PR to [`data/events.yml`](data/events.yml).

The YAML file is an array of events matching the following structure:

```ts
interface SvelteEvent {
  eventName: string;
  url?: string; // where people can learn more or contact organizers
  country: string;
  city: string;
  type: "Meetup" | "One-off" | "Workshop" | "Conference" | "Misc";
  twitter?: string; // e.g. @SvelteSociety
  date?: string; // YYYY-MM-DD-TTTT (24-hour time)
  organizer?: string; // your name, email, Twitter, etc
  thumbnail?: string;
  desc?: string; // short description
  description?: string; // full description - allows markdown
}
```

An example entry might look this:

```yml
- city: New York
  country: USA
  date: ""
  desc: Svelte meetup in NYC
  eventName: Svelte Society NYC
  organizer: |-
    swyx
    https://www.meetup.com/Svelte-Society/members/3963389/
  twitter: "@SvelteSociety"
  type: Meetup
  url: "https://www.downtomeet.com/Svelte-Society-NYC"
```

## Add a package

To add libraries and other packages,
make a PR to [`data/code.yml`](data/code.yml) and copy the format.
Please try to use existing tags.

## Add a resource

To add resources like tools and media content,
make a PR to [`data/resources.yml`](data/resources.yml),
using the existing tags if possible.

## Updating stats

We run two scripts - `updateGithubStats` and `updateNpmStats`. You dont need credentials for `updateNpmStats` but you will need to add env vars for the github stats in a `.env` file. Pull this from an [OAuth App](https://github.com/settings/developers) (NOT GitHub App):

```bash
GH_CLIENT_ID= # e.g. 1234c7cce43a8bfd6e5e
GH_CLIENT_SECRET= # e.g. abcd0bf9fb26048089874dae9ff09f91a0ef6528
```
