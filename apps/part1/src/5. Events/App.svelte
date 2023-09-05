<script lang="ts">
  import { SubLinks } from '@nx-svelte-study/atoms';
  import DomEvents from './1. DOM events/App.svelte';
  import InlineHandlers from './2. Inline handlers/App.svelte';
  import EventModifiers from './3. Event modifiers/App.svelte';
  import ComponentEvents from './4. Component events/App.svelte';
  import EventForwarding from './5. Event forwarding/App.svelte';
  import DomEventForwarding from './6. DOM event forwarding/App.svelte';

  export let params = { subPage: 'dom-events' };
</script>

<SubLinks
  {params}
  prefixTitle="events"
  subTitles="{{
    'dom-events': 'DOM events',
    'inline-handlers': 'Inline handlers',
    'event-modifiers': 'Event modifiers',
    'component-events': 'Component events',
    'event-forwarding': 'Event forwarding',
    'dom-event-forwarding': 'DOM event forwarding',
  }}"
  subPages="{{
    'dom-events': DomEvents,
    'inline-handlers': InlineHandlers,
    'event-modifiers': EventModifiers,
    'component-events': ComponentEvents,
    'event-forwarding': EventForwarding,
    'dom-event-forwarding': DomEventForwarding,
  }}"
/>
