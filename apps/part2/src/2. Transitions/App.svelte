<script lang="ts">
  import { SubLinks } from '@nx-svelte-study/atoms';
  import TheTransitionDirective from './1. The transition directive/App.svelte';
  import AddingParameters from './2. Adding parameters/App.svelte';
  import InAndOut from './3. In and out/App.svelte';
  import CustomCssTransitions from './4. Custom CSS transitions/App.svelte';
  import CustomJsTransitions from './5. Custom JS transitions/App.svelte';
  import TransitionEvents from './6. Transition events/App.svelte';
  import GlobalTransitions from './7. Global transitions/App.svelte';
  import KeyBlocks from './8. Key blocks/App.svelte';
  import DeferredTransitions from './9. Deferred transitions/App.svelte';

  export let params = { subPage: 'the-transition-directive' };
</script>

<SubLinks
  {params}
  prefixTitle="Transitions"
  subTitles="{{
    'the-transition-directive': 'The transition directive',
    'adding-parameters': 'Adding parameters',
    'in-and-out': 'In and out',
    'custom-css-transitions': 'Custom CSS transitions',
    'custom-js-transitions': 'Custom JS transitions',
    'transition-events': 'Transition events',
    'global-transitions': 'Global transitions',
    'key-blocks': 'Key blocks',
    'deferred-transitions': 'Deferred transitions',
  }}"
  subPages="{{
    'the-transition-directive': TheTransitionDirective,
    'adding-parameters': AddingParameters,
    'in-and-out': InAndOut,
    'custom-css-transitions': CustomCssTransitions,
    'custom-js-transitions': CustomJsTransitions,
    'transition-events': TransitionEvents,
    'global-transitions': GlobalTransitions,
    'key-blocks': KeyBlocks,
    'deferred-transitions': DeferredTransitions,
  }}"
/>
