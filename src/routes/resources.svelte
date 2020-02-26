<script context="module">
  export async function preload() {
    const res = await this.fetch(`data/resources___ssg___index.json`);
    const data = await res.json();
    return { data };
  }
</script>

<script>
  import { onMount } from "svelte";
  import { Hero, Blurb } from "@sveltejs/site-kit";
  import Event from "components/Event.svelte";
  import Box from "components/Box.svelte";
  import Resource from "components/Resource.svelte";
  import Tag from "components/Tag.svelte";
  import { transformResourceData } from "resources/transformResourceData.js";
  import { filterResourcesByTags } from "resources/helpers.js";
  import { createQueryParamSet } from "location/queryParams.js";

  export let data;
  $: transformedData = transformResourceData(data);
  $: resources = transformedData.resources;
  $: tags = transformedData.tags;
  // $: console.log({ data, transformedData });

  const scrollToTop = () => {
    window.scrollTo({
      top: 466, // top of Resources
      left: 0,
      behavior: "smooth"
    });
  };

  const selectedTags = createQueryParamSet("tag");
  $: selectedResources = filterResourcesByTags(resources, $selectedTags);
  $: $selectedTags, typeof window !== "undefined" && scrollToTop();

  import Fuse from "fuse.js";
  let searchterm = "";
  let searchResults = null;
  $: {
    if (searchterm) {
      var options = {
        keys: ["name", "url", "tags", "description"]
      };
      scrollToTop();
      var fuse = new Fuse(selectedResources, options);
      searchResults = fuse.search(searchterm);
    } else {
      searchResults = null;
    }
  }

  $: results = searchResults || selectedResources;
</script>

<style>
  h2 {
    margin-bottom: 1em;
  }
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
  .resource {
    margin-bottom: 1em;
    list-style: none;
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
  <title>Resources • Svelte Community</title>
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
      {#each results as resource}
        <li class="resource">
          <Resource
            {resource}
            selectedTags={$selectedTags}
            toggleTag={selectedTags.toggle} />
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
    <!-- TODO container needs proper styling -->
    <div style="max-width: 430px; display: flex; flex-wrap: wrap;">
      {#each tags as tag}
        <Tag
          name={tag}
          selected={$selectedTags.has(tag)}
          toggle={selectedTags.toggle} />
      {/each}
      {#if $selectedTags.size}
        <!-- TODO this should be styled distinctly, maybe just a different color, or removed if the UX changes -->
        <Tag name="🞩 clear selected tags" toggle={selectedTags.clear} />
      {/if}
    </div>
  </div>
</div>
