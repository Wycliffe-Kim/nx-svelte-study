<script lang="ts">
  let count = 0;

  $: {
    console.log(`the count is ${count}`);
  }

  $: if (count >= 10) {
    alert(`count is dangerously high!`);
    count = 0;
  }

  const increment = () => {
    count += 1;
  };
</script>

<button on:click="{increment}">
  Clicked {count}
  {count === 1 ? 'time' : 'times'}
</button>
