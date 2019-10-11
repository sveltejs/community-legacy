<script>
  export let name;
  export let selected;
  export let toggle;
</script>

<style>
  /* TODO style this properly, particularly the colors */
  .tag {
    padding: 0.2em 0.4em;
    margin-right: 0.8em;
    margin-bottom: 0.4em;
    background-color: rgba(250, 235, 215, 0.4);
    border: 1px solid transparent;
    cursor: pointer;
    line-height: 1.2;
  }
  .tag:hover {
    border-color: rgb(218, 197, 169);
  }
  .tag:active {
    border-color: rgb(173, 158, 138);
  }
  .selected {
    background-color: rgb(250, 235, 215);
  }
</style>

<code class="tag" class:selected on:click={() => toggle(name)}>{name}</code>
