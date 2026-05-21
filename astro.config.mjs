import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://vantagemobilemechanic.com.au',

  base: '/', 
  // 3. Optional: Keeps output structure clean for standard Apache servers
  output: 'static',

  //site: 'https://dlf91.github.io',
  //base: '/my-astro-site/', // This tells Astro to add /my-astro-site/ to all your links
});