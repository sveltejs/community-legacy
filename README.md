# svelte-community

This repo currently contains data relating to Svelte meetups. In time this may become the home for a meetup site and a place to store other community related information.

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
  "details": "Come join us and talk about Svelte. Many exciting thigs will happen."
}
```

All events need a time, location, url and at least one contactable organiser. If the venue is not yet confirmed then enter 'To be confirmed' in the relavent Location fields and enter in as much information as you currently know. Dates should be provided as `YYYY-MM-DD-TTTT` (24-hour time).
