<script lang="ts">
  import { Links } from '@nx-svelte-study/atoms';
  import DomEvents from './1. DOM events/DomEvents.svelte';
  import InlineHandlers from './2. Inline handlers/InlineHandlers.svelte';
  import EventModifiers from './3. Event modifiers/EventModifiers.svelte';
  import ComponentEvents from './4. Component events/ComponentEvents.svelte';
  import EventForwarding from './5. Event forwarding/EventForwarding.svelte';
  import DomEventForwarding from './6. DOM event forwarding/DomEventForwarding.svelte';
</script>

<Links
  headTitle="Part 1: Events"
  titles="{{
    '/': 'Home',
    '/dom-events': 'DOM events',
    '/inline-handlers': 'Inline handlers',
    '/event-modifiers': 'Event modifiers',
    '/component-events': 'Component events',
    '/event-forwarding': 'Event forwarding',
    '/dom-event-forwarding': 'DOM event forwarding',
  }}"
  routes="{{
    '/': DomEvents,
    '/dom-events': DomEvents,
    '/inline-handlers': InlineHandlers,
    '/event-modifiers': EventModifiers,
    '/component-events': ComponentEvents,
    '/event-forwarding': EventForwarding,
    '/dom-event-forwarding': DomEventForwarding,
  }}"
/>
