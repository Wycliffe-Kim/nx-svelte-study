<script lang="ts">
  import { EventData } from './EventData';
  import Outer from './Outer.svelte';

  const handleMessage = (event: CustomEvent<EventData>) => {
    alert(event.detail.text);
  };
</script>

<Outer on:message="{handleMessage}" />
