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
  .event-name {
  }

  .date {
    font-size: 0.8em;
  }
  ul {
    list-style: none;
  }

  li {
    margin: 0.1em 0;
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
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore officiis
      incidunt necessitatibus magni quia quas voluptatibus iure similique
      cumque, soluta quis nam qui mollitia? Laudantium perferendis dignissimos
      corrupti eaque in?
    </p>
    <h3>Organize</h3>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore officiis
      incidunt necessitatibus magni quia quas voluptatibus iure similique
      cumque, soluta quis nam qui mollitia? Laudantium perferendis dignissimos
      corrupti eaque in?
    </p>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore officiis
      incidunt necessitatibus magni quia quas voluptatibus iure similique
      cumque, soluta quis nam qui mollitia? Laudantium perferendis dignissimos
      corrupti eaque in?
    </p>
  </div>
  <div class="boxes">
    <Box color="#ededed">
      <h2>Meetups</h2>
      <ul>
        {#each events as event, i}
          <li>
            <a href={event.url} class="event-name">{event.name}</a>
            <span class="date">, November 4th</span>
          </li>
        {/each}
      </ul>
    </Box>
  </div>
</div>
