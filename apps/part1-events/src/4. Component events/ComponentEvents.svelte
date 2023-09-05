<script lang="ts">
  import { EventData } from './EventData';
  import Inner from './Inner.svelte';

  const handleMessage = (event: CustomEvent<EventData>) => {
    alert(event.detail.text);
  };
</script>

<Inner on:message="{handleMessage}" />
