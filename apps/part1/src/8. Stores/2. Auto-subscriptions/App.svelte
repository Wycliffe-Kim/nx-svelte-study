<script lang="ts">
  import { count } from './stores';
  import Incrementer from './Incrementer.svelte';
  import Decrementer from './Decrementer.svelte';
  import Resetter from './Resetter.svelte';
  // import { onDestroy } from 'svelte';

  // let countValue;

  // const unsubscribe = count.subscribe((value) => {
  //   countValue = value;
  // });

  // onDestroy(unsubscribe);
</script>

<h1>The count is {$count}</h1>
<!-- <h1>The count is {countValue}</h1> -->

<Incrementer />
<Decrementer />
<Resetter />
