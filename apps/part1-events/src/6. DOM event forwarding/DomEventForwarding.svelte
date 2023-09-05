<script lang="ts">
  import BigRedButton from './BigRedButton.svelte';

  const handleClick = () => {
    alert('Clicked!');
  };
</script>

<BigRedButton on:click="{handleClick}" />
