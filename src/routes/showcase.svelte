<script context="module">
  export async function preload() {
    const data = await this.ssgData({ key: "showcase" });
    return { sites: data.sites };
  }
</script>

<script>
  import { Hero, Blurb } from "@sveltejs/site-kit";
  import Event from "components/Event.svelte";
  import Box from "components/Box.svelte";
  import Resource from "components/Resource.svelte";
  import Tag from "components/Tag.svelte";
  import { transformResourceData } from "resources/transformResourceData.js";
  import { filterResourcesByTags } from "resources/helpers.js";

  export let sites;
  // $: console.log({ sites });
</script>

<style>
  .container {
    /* display: flex;
    align-items: start; */
    max-width: 120rem;
    margin: 10rem auto;
    padding: 0 var(--side-nav);
  }
  .SiteCardList {
    display: grid;
    grid-template-columns: 25vw 25vw 25vw;
    gap: 1rem;
  }
  .SiteCard {
    flex-direction: column;
    margin: 1.5rem;
    position: relative;
    display: flex;
    flex: 1 0 0;
  }
  .SiteCard-Image {
    width: 100%;
  }
  .SiteCard-Image img {
    width: 25vw;
    height: 16vw;
    object-fit: cover;
  }
  .SiteCard-Image .Placeholder {
    width: 25vw;
    height: 16vw;
    background-color: gray;
  }
  .SiteCard-Metadata-Labels span {
    background-color: lightgray;
    border-radius: 5px;
    padding: 2px;
  }
</style>

<Hero
  title="Site Showcase"
  tagline="Showcase"
  outline="svelte-logo-outline.svg"
  logotype="community-logotype.svg" />

<div class="container">
  <p>
    This is a placeholder for the upcoming Site Showcase. Right now we just need
    to accumulate a list of high quality sites and categories we'd like to
    showcase.
  </p>

  <div class="SiteCardList">
    {#each sites as site}
      <div class="SiteCard">
        <div class="SiteCard-Image">
          {#if site.imageUrl}
            <a href={site.source || site.url}>
              <img
                loading="lazy"
                alt="Screenshot of {site.name}"
                src={site.imageUrl} />
            </a>
          {:else}
            <div class="Placeholder">No screenshot available</div>
          {/if}
        </div>
        <a href={site.source || site.url}>
          <strong class="title">{site.name}</strong>
        </a>

        <div class="SiteCard-Metadata">
          <div class="SiteCard-Metadata-Desc">{site.description}</div>
          <div class="SiteCard-Metadata-Labels">
            {#each site.tags as tag}
              <span>{tag}</span>
            {/each}
          </div>
          <div class="SiteCard-Metadata-Links">
            {#if site.source}
              <a href={site.source} target="_blank" rel="noopener noreferrer">
                <svg
                  fill="currentColor"
                  preserveAspectRatio="xMidYMid meet"
                  height="1em"
                  width="1em"
                  viewBox="0 0 40 40"
                  style="vertical-align:text-top">
                  <g>
                    <path
                      d="m20 0c-11 0-20 9-20 20 0 8.8 5.7 16.3 13.7 19 1 0.2
                      1.3-0.5 1.3-1 0-0.5 0-2 0-3.7-5.5
                      1.2-6.7-2.4-6.7-2.4-0.9-2.3-2.2-2.9-2.2-2.9-1.9-1.2
                      0.1-1.2 0.1-1.2 2 0.1 3.1 2.1 3.1 2.1 1.7 3 4.6 2.1 5.8
                      1.6 0.2-1.3 0.7-2.2 1.3-2.7-4.5-0.5-9.2-2.2-9.2-9.8 0-2.2
                      0.8-4 2.1-5.4-0.2-0.5-0.9-2.6 0.2-5.3 0 0 1.7-0.5 5.5 2
                      1.6-0.4 3.3-0.6 5-0.6 1.7 0 3.4 0.2 5 0.7 3.8-2.6 5.5-2.1
                      5.5-2.1 1.1 2.8 0.4 4.8 0.2 5.3 1.3 1.4 2.1 3.2 2.1 5.4 0
                      7.6-4.7 9.3-9.2 9.8 0.7 0.6 1.4 1.9 1.4 3.7 0 2.7 0 4.9 0
                      5.5 0 0.6 0.3 1.2 1.3 1 8-2.7 13.7-10.2 13.7-19
                      0-11-9-20-20-20z" />
                  </g>
                </svg>
              </a>
            {/if}
            {#if site.url}
              <a href={site.url} target="_blank" rel="noopener noreferrer">
                <svg
                  fill="currentColor"
                  preserveAspectRatio="xMidYMid meet"
                  height="1em"
                  width="1em"
                  viewBox="0 0 40 40"
                  style="vertical-align:text-top">
                  <g>
                    <path
                      d="m23.4 5h11.6v11.6h-3.4v-5.9l-16.3 16.3-2.3-2.3
                      16.3-16.3h-5.9v-3.4z m8.2 26.6v-11.6h3.4v11.6q0 1.4-1
                      2.4t-2.4 1h-23.2q-1.4 0-2.4-1t-1-2.4v-23.2q0-1.4
                      1-2.4t2.4-1h11.6v3.4h-11.6v23.2h23.2z" />
                  </g>
                </svg>
              </a>
            {/if}
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
