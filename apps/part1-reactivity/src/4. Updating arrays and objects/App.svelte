<script lang="ts">
  import { concat, range, reduce } from 'lodash';

  let numbers = range(1, 4);

  const addNumber = () => {
    numbers = concat(numbers, numbers.length + 1);
  };

  $: sum = reduce(numbers, (total, currentNumber) => total + currentNumber, 0);
</script>

<p>{numbers.join(' + ')} = {sum}</p>

<button on:click="{addNumber}"> Add a number </button>
