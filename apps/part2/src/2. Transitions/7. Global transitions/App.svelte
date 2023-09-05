<script lang="ts">
  import { slide } from 'svelte/transition';

  let showItems = true;
  let i = 5;
  let items = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
  ];
</script>

<label>
  <input type="checkbox" bind:checked="{showItems}" />
  show list
</label>

<label>
  <input type="range" bind:value="{i}" max="10" />
</label>

<section class="list">
  <section class="content">
    <p>Global</p>
    {#if showItems}
      {#each items.slice(0, i) as item}
        <div transition:slide|global>
          {item}
        </div>
      {/each}
    {/if}
  </section>
  <section class="content">
    <p>Local</p>
    {#if showItems}
      {#each items.slice(0, i) as item}
        <div transition:slide>
          {item}
        </div>
      {/each}
    {/if}
  </section>
</section>

<style>
  div {
    padding: 0.5em 0;
    border-top: 1px solid #eee;
  }

  p {
    font-weight: bold;
    font-size: large;
  }

  .list {
    display: flex;
  }

  .content {
    width: 100px;
    margin: 0 10px;
  }
</style>
