<script>
	import { companies } from './WhosUsingSvelte.js';
</script>

<style>
	.logos {
		margin: 1em 0 0 0;
		display: flex;
		flex-wrap: wrap;
	}

	a {
		height: 40px;
		margin: 0 0.5em 0.5em 0;
		display: flex;
		align-items: center;
		border: 2px solid var(--second);
		padding: 5px 10px;
		border-radius: 20px;
		color: var(--text);
	}

	.add-yourself {
		color: var(--prime);
	}

	picture,
	img {
		height: 100%;
	}

	@media (min-width: 540px) {
		a {
			height: 60px;
			padding: 10px 20px;
			border-radius: 30px;
		}
	}
</style>

<div class="logos">
	{#each companies as {href, src, alt, style, picture, span}}
		<a
			target="_blank"
			rel="noopener"
			{href}
			style="{style || ''}">
			{#if picture}
				<picture>
					{#each picture as {type, srcset}}
						<source {type} {srcset}>
					{/each}
					<img {src} {alt} loading="lazy">
				</picture>
			{:else}
				<img {src} {alt} loading="lazy">
				{#if span}
					<span>{span}</span>
				{/if}
			{/if}
		</a>
	{/each}

	<a target="_blank" rel="noopener" href="https://github.com/sveltejs/community/blob/master/whos-using-svelte/WhosUsingSvelte.svelte" class="add-yourself"><span>+ your company?</span></a>
</div>
