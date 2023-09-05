<script lang="ts">
  import { ComponentType } from 'svelte';

  export let params = { subPage: '' };

  export let prefixTitle: string;
  export let subTitles: Record<string, string>;
  export let subPages: Record<string, ComponentType>;
</script>

<section class="links">
  <h1>
    {prefixTitle
      .replace(/-/g, '')
      .replace(/(?:^|\s)\S/g, (a) => a.toUpperCase())}
  </h1>
  {#each Object.entries(subTitles) as [subPage, subTitle]}
    <a href="#/{prefixTitle}/{subPage}">{subTitle}</a>
  {/each}
  <br />
  {#each Object.entries(subPages) as [subPage, SubPage]}
    {#if params.subPage === subPage}
      <SubPage />
    {/if}
  {/each}
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
