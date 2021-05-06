<script context="module">
  export async function preload() {
    return this.redirect(301, 'https://sveltesociety.dev/recipes');
//    const data = await this.ssgData({ key: "code" });
//    return { data };

  }
</script>

<script>
  import { Hero, Blurb } from "@sveltejs/site-kit";
</script>

<Hero
  title="Svelte Community"
  tagline="Recipes"
  outline="sapper-logo-outline.svg"
  logotype="sapper-logotype.svg" />

<!-- <Blurb>

</Blurb> -->

<div class="description">
  <p>TODO: do Recipes page</p>
</div>
