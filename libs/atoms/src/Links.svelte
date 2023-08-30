<script lang="ts">
  import Router from 'svelte-spa-router';
  import { ComponentType } from 'svelte';

  export let headTitle: string;
  export let titles: Record<string, string>;
  export let routes: Record<string, ComponentType>;
</script>

<section>
  <section class="links">
    <h1>{headTitle}</h1>
    {#each Object.entries(titles) as [route, title]}
      <a href="#{route}">{title}</a>
    {/each}
  </section>
  <Router {routes} />
</section>

<style>
  a {
    display: block;
  }
  .links {
    display: flex;
    flex-direction: column;
    margin: 0 0 10px 0;
  }
</style>
