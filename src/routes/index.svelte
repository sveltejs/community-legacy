<script>
  import { Hero, Blurb } from "@sveltejs/site-kit";

  // https://www.netlifycms.org/docs/add-to-your-site/#add-the-netlify-identity-widget
  if (typeof window !== "undefined" && window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }
</script>

<style>

</style>

<svelte:head>
  <title>
    Svelte Community • Events, Site Showcase, Packages, Resources, Recipes
  </title>
</svelte:head>

<Hero
  title="Svelte Community"
  tagline="Events, Site Showcase, Packages, Resources, Recipes"
  outline="svelte-logo-outline.svg"
  logotype="svelte-logotype.svg" />

<Blurb>
  <a href="events" slot="one">
    <h2>Events</h2>
    <p>Svelte meetups and other community events</p>

    <span class="learn-more">learn more</span>
  </a>

  <a href="resources" slot="two">
    <h2>Tools & Resources</h2>
    <p>
      Editor Tools and Places to learn more about Svelte e.g. newsletters,
      blogs, podcasts
    </p>

    <span class="learn-more">learn more</span>
  </a>

  <a href="code" slot="three">
    <h2>Code</h2>
    <p>Code you can use: Boilerplates, Libraries and Components</p>

    <span class="learn-more">learn more</span>
  </a>

  <a href="showcase" slot="what">
    <h2>Site Showcase</h2>
    <p>
      Showcase of sites and other demos built with Svelte (closed and open
      source)
    </p>

    <span class="learn-more">learn more</span>
  </a>
  <a href="recipes" slot="how">
    <h2>Recipes</h2>
    <p>Svelte-y recipes for common usecases</p>

    <span class="learn-more">learn more</span>
  </a>

</Blurb>
