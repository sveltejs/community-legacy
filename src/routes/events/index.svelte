<script context="module">
  export async function preload() {
    const res = await this.fetch(`data/events___ssg___index.json`);
    const events = await res.json();
    return { events };
  }
</script>

<script>
  import { Hero, Blurb } from "@sveltejs/site-kit";
  import Event from "components/Event.svelte";
  import Box from "components/Box.svelte";
  export let events;
</script>

<style>
  .container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: start;
    grid-column-gap: 2em;
    grid-row-gap: 2em;
    max-width: 120rem;
    margin: 10rem auto;
    padding: 0 var(--side-nav);
    grid-template-areas:
      "main main main main main"
      "side side side side side";
  }
  .text {
    grid-area: main;
  }

  .boxes {
    z-index: 1;
    grid-area: side;
  }
  @media (min-width: 900px) {
    .container {
      grid-template-areas: "main main main side side";
    }
  }

  ul {
    list-style: none;
  }

  li {
    margin: 0.3em 0;
  }
</style>

<svelte:head>
  <title>Events • Sapper Community</title>
</svelte:head>

<Hero
  title="Community Events"
  tagline="Events"
  outline="svelte-logo-outline.svg"
  logotype="community-logotype.svg" />

<div class="container">
  <div class="text">
    <h3>Community Support</h3>
    <p>
      On this page we're listing Svelte-related community events and conferences
      that you can go to. If you're interested in meeting others that are also
      interested in Svelte you'll find your closest meetup here.
    </p>
    <p>
      If you want to read more about the different events just follow the links
      and see where they lead.
    </p>
    <h3>Organize</h3>
    <p>
      Are you looking to organize your own event? Here are some things to think
      about:
    </p>
    <h4>Venue - where to host?</h4>
    <p>
      Finding a place to host your event can be hard. The easiest way is most
      likely to ask your employer if they can host. If that's not an option you
      can look at Libraries or co-working spaces.
    </p>
    <h4>Agenda - what's going to happen at the event?</h4>
    <p>
      The agenda is also important. Are you going to host a talk yourself? Will
      you do a workshop? A good idea is to ask if other attendees are interested
      in either showing off something they've made or if they want to speak.
    </p>
    <h3>Add your own event</h3>
    <p>
      In order to add your own event to the list 
      <a
        href="https://github.com/sveltejs/community/blob/master/data/events.yml"
        target="_blank">
        make a PR
      </a> or use <a href="https://svelte-community.netlify.com/admin">our CMS</a> to get the data entry right.
    </p>
  </div>
  <div class="boxes">
    <Box color="#ededed">
      <h2>Meetups</h2>
      <ul>
        {#each events as event, i}
          <li>
            <details>
            <summary>
              {event.city}, {event.country}
            </summary>
            <a href={event.url} target="_blank" class="event-name">{event.eventName}</a>

            <!-- <span class="date">, November 4th</span> -->
            </details>
          </li>
        {/each}
        <li>
        ➕<a href="https://svelte-community.netlify.com/admin">Add/Request your event here!</a>
        </li>
      </ul>
    </Box>
  </div>
</div>
