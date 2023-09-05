<script lang="ts">
  import { EventData } from './EventData';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher<{ message: EventData }>();

  const sayHello = () => {
    dispatch('message', {
      text: 'test',
    });
  };
</script>

<button on:click="{sayHello}">Click to say hello</button>
