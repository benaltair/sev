<script>
  // import {routes} from '../metadata'
  import "simpledotcss/simple.min.css";

  export let title;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<!-- <header>
  <nav>
    <ul>
      {#each routes as route}
        <li>
          <a href={route.path}>{route.label}</a>
        </li>
      {/each}
    </ul>
  </nav>
</header> -->

<main>
  <!-- <h1>{title}</h1> -->
  <section><slot /></section>
</main>

<!-- <footer>
  <p></p>
</footer> -->
<style>
  :global(body) {
    /* padding: 5em; */
    background-image: url(/uploads/blob-scene-haikei.svg);
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
  main {
    --spacing: 5vw;
    display: grid;
    place-content: center;
    min-height: calc(100vh - var(--spacing) * 2);
    padding: var(--spacing);
    height: 100%;
  }
  section {
    margin: auto;
    height: fit-content;
    background-color: rgba(240, 239, 239, 0.777);
    padding: 1em 1.8em;
    border-radius: 1.5em;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
    backdrop-filter: blur(2em);
  }
</style>
