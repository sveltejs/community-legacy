<script>
	import { Section } from "@sveltejs/site-kit";
	export let events
</script>

<style>
	.blurb {
		display: grid;
		grid-row-gap: 1em;
	}

	.box {
		padding: 1em;
		display: flex;
		flex-direction: column;
		border-bottom: none;
	}

	.box :global(a) {
		color: white;
		padding: 0;
		border: none;
	}

	.box :global(h2) {
		padding: 0;
		margin: 0 0 0.5em 0;
		font-size: var(--h2);
		color: white;
		text-align: left;
	}

	.blurb :global(p) {
		font-size: var(--h5);
	}

	.box :global(.learn-more) {
		display: block;
		position: relative;
		text-align: right;
		margin-top: auto;
		padding: 0 1.2em 0 0;
	}

	.box:hover :global(.learn-more) {
		color: white;
		text-decoration: underline;
	}

	.box :global(.learn-more)::after, .box :global(.cta) :global(a)::after {
		content: '';
		position: absolute;
		display: block;
		right: 0;
		top: 0.35em;
		width: 1em;
		height: 1em;
		background: url(/icons/arrow-right.svg);
	}


	@media (min-width: 900px) {
		.blurb {
			grid-column-gap: 1em;
			grid-row-gap: 1em;
			grid-template-columns: repeat(2, 1fr);
			grid-template-areas:
				"one two"
				"three how"
				"what what";
		}

		.box {
			padding: 2em;
		}

		.box :global(.cta) {
			text-align: right;
		}
	}

	@media (min-width: 1200px) {
		.blurb {
			grid-column-gap: 1em;
			grid-row-gap: 5em;
			grid-template-columns: repeat(3, 1fr);
			/* grid-template-areas:
				"one one two two three three"
				"what what what how how how"; */
		}
		.box :global(.cta) {
			text-align: left;
		}
	}
</style>

<Section>
	<div class="blurb">
	{#each events as event }
		<div class="box" style="background: var(--prime)">
			<details>
			<summary>
			<a href={event.url}><h2 style="display: inline-block">{event.name}</h2></a>
			</summary>
			<pre style="background: white">{JSON.stringify(event, null, 2)}</pre>
			</details>
		</div>
	{/each}
	</div>
</Section>