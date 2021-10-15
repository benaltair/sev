<script>
  import Default from "/src/layouts/default.svelte";
  export let status, error;
  let title = `${status}: ${error.message}`;
</script>

<Default {title}>
  <h1>{title}</h1>
  <p>{error.message}</p>
</Default>
