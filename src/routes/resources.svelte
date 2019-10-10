<script context="module">
  export async function preload() {
    const res = await this.fetch(`data/resources___ssg___index.json`);
    const data = await res.json();
    return { data };
  }
</script>

<script>
  import { Hero, Blurb } from "@sveltejs/site-kit";
  import Event from "components/Event.svelte";
  import Box from "components/Box.svelte";
  export let data;
  let resources = data.resources;
  let results = resources;
  // $: console.log({ data });
  import Fuse from "fuse.js";
  let searchterm = "";
  $: {
    if (searchterm) {
      var options = {
        keys: ["name", "url", "tags", "description"]
      };
      window.scrollTo({
        top: 466, // top of Resources
        left: 0,
        behavior: "smooth"
      });
      var fuse = new Fuse(resources, options);
      results = fuse.search(searchterm);
    } else {
      results = resources;
    }
  }
</script>

<style>
  .container {
    display: flex;

    align-items: start;
    max-width: 120rem;
    margin: 10rem auto;
    padding: 0 var(--side-nav);
  }
  .text {
    width: 90rem;
  }
  .resourcetags {
    background-color: antiquewhite;
  }
  :global(.resourcetags + .resourcetags):before {
    content: ", ";
  }
  input {
    font-family: inherit;
    font-size: inherit;
    padding: 0.4em;
    margin: 0 0 0.5em 0;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 2px;
  }
  .search {
    position: sticky;
    top: 40px;
  }
</style>

<svelte:head>
  <title>Resources • Sapper Community</title>
</svelte:head>

<Hero
  title="Community Resources"
  tagline="Resources"
  outline="svelte-logo-outline.svg"
  logotype="community-logotype.svg" />

<div class="container">
  <div class="text">
    <h2>Resources</h2>
    <ul>
      {#each results as resource, i}
        <li>
          {#each resource.tags as tag}
            <code class="resourcetags">{tag}</code>
          {/each}
          <a href={resource.url} target="_blank">{resource.name}</a>
          {#if resource.description}
            <div>{resource.description}</div>
          {/if}
        </li>
      {/each}
      <!-- <li>
          ➕
          <a href="https://svelte-community.netlify.com/admin">
            Add/Request your event here!
          </a>
        </li> -->
    </ul>
  </div>
  <div class="boxes search">
    <Box color="#ededed">
      <div>
        <h3>Add A Resource!</h3>
        <p>
          We'll have a better process for this in future, but for now,
          <a href="https://github.com/sveltejs/community/tree/master/data">
            make a PR!
          </a>
        </p>
      </div>
      <label>
        <h3>Filter</h3>
        <input bind:value={searchterm} placeholder="fuzzy filter resources" />
      </label>
    </Box>
  </div>
</div>
