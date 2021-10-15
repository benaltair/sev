const config = {
  "extensions": [".svelte.md", ".md", ".svx"],

  "smartypants": {
    "quotes": true,
    "ellipses": true,
    "dashes": "oldschool"
  },
  "layout": {
    _: "./src/layouts/default.svelte"
  },
  "remarkPlugins": [],
  "rehypePlugins": []
};

export default config;