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
  <h1>{title}</h1>
  <slot />
</main>

<!-- <footer>
  <p></p>
</footer> -->
