<script>
  export let color = "lightgrey";
</script>

<style>
  .box {
    padding: 2em;
    margin: 0 0 0.5em 0;
    background: #ededed;
    text-align: left;
  }
</style>

<div class="box" style="background: {color}">
  <slot />
</div>
