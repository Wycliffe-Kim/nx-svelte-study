<script lang="ts">
  import { count } from './stores';

  const increment = () => {
    count.update((n) => n + 1);
  };
</script>

<button on:click="{increment}"> + </button>
