<script>
  // import {routes} from '../metadata'
  import "simpledotcss/simple.min.css";
  import SvelteSeo from "svelte-seo";
  import { page } from "$app/stores";
  let bg = encodeURI(
    "https://southeastvictoria.netlify.app/uploads/autumn-forest.png"
  );
  let url = encodeURI(`https://${page.host + page.path}`);
  console.log(url);
  let defaultImage = `https://motif.imgix.com/i?url=${url}&image_url=${bg}&color=000000&text_alignment=middle%2Ccenter&font_family=Charter&text_color=ffffff`;
  export let title,
    image = defaultImage;
</script>

<SvelteSeo
  {title}
  openGraph={{ images: [{ url: image }] }}
  twitter={{ image }}
/>

<main>
  <section><slot /></section>
</main>

<style>
  :global(body) {
    /* padding: 5em; */
    background-image: url(/uploads/blob-scene-haikei.svg);
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
  :global(:root) {
    --bg: #e5efe5;
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

  @media (prefers-color-scheme: dark) {
    :global(:root) {
      --bg: rgb(31, 31, 31);
    }
    section {
      background-color: rgba(51, 51, 51, 0.777);
    }
  }
</style>
