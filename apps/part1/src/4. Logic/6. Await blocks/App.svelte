<script lang="ts">
  import { getRandomNumber } from './utils';

  let promise: Promise<number>;

  function handleClick() {
    promise = getRandomNumber();
  }
</script>

<button on:click="{handleClick}"> generate random number </button>

{#await promise}
  <p>...waiting</p>
{:then number}
  <p>The number is {number}</p>
{:catch error}
  <p style="color: red">{error}</p>
{/await}
