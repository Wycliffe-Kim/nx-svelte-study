<script lang="ts">
  import { count } from './stores';

  const reset = () => {
    count.set(0);
  };
</script>

<button on:click="{reset}"> reset </button>
