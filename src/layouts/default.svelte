<script>
  // import {routes} from '../metadata'
  import "simpledotcss/simple.min.css";

  export let title;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<header>
  <h1>{title}</h1>
  <!-- <nav>
    <ul>
      {#each routes as route}
        <li>
          <a href={route.path}>{route.label}</a>
        </li>
      {/each}
    </ul>
  </nav> -->
</header>

<main>
  <slot />
</main>

<footer>
  <!-- <p></p> -->
</footer>
