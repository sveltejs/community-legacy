<script context="module">
  export async function preload() {
    return this.redirect(301, 'https://sveltesociety.dev/components');
//    const data = await this.ssgData({ key: "code" });
//    return { data };

  }
</script>

<script>
  import { Hero } from "@sveltejs/site-kit";
  import Box from "components/Box.svelte";
  import Resource from "components/Resource.svelte";
  import TwoColumns from "components/TwoColumns.svelte";
  import Tag from "components/Tag.svelte";
  import ClearTagsButton from "components/ClearTagsButton.svelte";
  import { transformResourceData } from "resources/transformResourceData.js";
  import { filterResourcesByTags } from "resources/helpers.js";
  import { createQueryParamSet } from "location/queryParams.js";

  export let data;
  $: transformedData = transformResourceData(data);
  $: resources = transformedData.resources;
  $: tags = transformedData.tags;
  // for debugging
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
      const options = {
        keys: ["name", "url", "tags", "description"]
      };
      scrollToTop();
      const fuse = new Fuse(selectedResources, options);
      searchResults = fuse.search(searchterm);
    } else {
      searchResults = null;
    }
  }

  $: results = searchResults || selectedResources;

  const scroll = (ev) => {
    const wrapper = ev.currentTarget;
    const sidebar = wrapper.closest('.stickySidebar');
    const sidebarStyle = document.defaultView.getComputedStyle(sidebar);
    const isSticky = sidebarStyle.position === 'sticky';
    const getsStuckAt = parseInt(sidebarStyle.top);
    const isStuck = isSticky && sidebar.getBoundingClientRect().top === getsStuckAt;
    if (!isStuck) return;
    const currentPosition = parseInt(wrapper.style.top || 0);
    const newPosition = Math.min(0, currentPosition + ev.wheelDeltaY / 2);
    if (currentPosition === newPosition) return;
    const lastTagRect = wrapper.querySelector('code:last-of-type').getBoundingClientRect();
    if (window.innerHeight > lastTagRect.bottom && currentPosition > newPosition) return;
    ev.preventDefault();
    wrapper.style.top = `${newPosition}px`;
  };
</script>

<style>
  h2 {
    margin-bottom: 1em;
    display: flex;
    max-width: 40rem;
  }
  .selected-count {
    flex: 1;
    text-align: right;
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

  .tags-container,
  .tags-wrapper {
    position: relative;
  }
  .tags-container {
    overflow: hidden;
  }

  .tags-wrapper {
    max-width: 430px;
    display: flex;
    flex-wrap: wrap;
    transition: all .3s ease-out;
  }
</style>

<Hero
  title="Community Code"
  tagline="Code"
  outline="svelte-logo-outline.svg"
  logotype="community-logotype.svg" />

<TwoColumns stickySidebar>
  <div class="text" slot="content">
    <h2>
      Code
      <div class="selected-count">{selectedResources.length}</div>
    </h2>
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
  <div class="boxes search" slot="sidebar">
    <Box color="#ededed">
      <div>
        <h3>Add A Library or Boilerplate!</h3>
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
    <div class="tags-container">
      <div class="tags-wrapper" on:mousewheel={scroll}>
        {#each tags as tag}
          <Tag
            name={tag}
            selected={$selectedTags.has(tag)}
            toggle={selectedTags.toggle} />
        {/each}
        {#if $selectedTags.size}
          <ClearTagsButton clear={selectedTags.clear} />
        {/if}
      </div>
    </div>
  </div>
</TwoColumns>
