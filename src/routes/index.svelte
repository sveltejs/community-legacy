<script>
  import { Hero, Blurb } from "@sveltejs/site-kit";
</script>

<style>

</style>

<svelte:head>
  <title>Sapper Community • Events, Resources, Recipes</title>
</svelte:head>

<Hero
  title="Svelte Community"
  tagline="Events, Resources, Recipes"
  outline="sapper-logo-outline.svg"
  logotype="sapper-logotype.svg" />

<Blurb>
  <a href="events" slot="one">
    <h2>Events</h2>
    <p>Svelte meetups and conferences</p>

    <span class="learn-more">learn more</span>
  </a>

  <a href="resources" slot="two">
    <h2>Resources</h2>
    <p>Svelte libraries and utilities</p>

    <span class="learn-more">learn more</span>
  </a>

  <a href="recipes" slot="three">
    <h2>Recipes</h2>
    <p>Svelte-y recipes for common usecases</p>

    <span class="learn-more">learn more</span>
  </a>

  <div class="description" slot="what">
    <p>
      This is a central gathering point for Svelte's community outside of
      Discord, GitHub, and StackOverflow.
    </p>

  </div>

</Blurb>
