<script lang="ts">
  import { SubLinks } from '@nx-svelte-study/atoms';
  import Slots from './1. Slots/App.svelte';
  import NamedSlots from './2. Named slots/App.svelte';
  import SlotFallbacks from './3. Slot fallbacks/App.svelte';
  import SlotProps from './4. Slot props/App.svelte';
  import CheckingForSlotContent from './5. Checking for slot content/App.svelte';

  export let params = { subPage: 'slots' };
</script>

<SubLinks
  {params}
  prefixTitle="Component composition"
  subTitles="{{
    slots: 'Slots',
    'named-slots': 'Named slots',
    'slot-fallbacks': 'Slot fallbacks',
    'slot-props': 'Slot props',
    'checking-for-slot-content': 'Checking for slot content',
  }}"
  subPages="{{
    slots: Slots,
    'named-slots': NamedSlots,
    'slot-fallbacks': SlotFallbacks,
    'slot-props': SlotProps,
    'checking-for-slot-content': CheckingForSlotContent,
  }}"
/>
