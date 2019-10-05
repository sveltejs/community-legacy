<script context="module">
	export async function preload() {
		const res = await this.fetch(`data/events___ssg___index.json`);
		const events = await res.json();
		return { events };
	}
</script>

<script>
  import { Hero, Blurb } from "@sveltejs/site-kit";
  import Event from 'components/Event.svelte'
  export let events
</script>

<style>

</style>

<svelte:head>
  <title>Events • Sapper Community</title>
</svelte:head>


<Hero
  title="Svelte Community"
  tagline="Events"
  outline="svelte-logo-outline.svg"
  logotype="svelte-logotype.svg" />


<div class="description">
  <Event {events} />
</div>
