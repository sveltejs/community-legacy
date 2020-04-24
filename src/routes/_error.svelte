<script>
  export let error;
  export let status;
</script>

<style>
  .container {
    width: 100%;
    text-align: center;
    padding: 10%;
  }
  pre {
    text-align: left;
  }
</style>

<div class="container">
  <h1>{status}</h1>

  <p>{error.message}</p>

  {#if process.env.NODE_ENV === 'development'}
    <pre>{error.stack}</pre>
  {/if}
</div>
