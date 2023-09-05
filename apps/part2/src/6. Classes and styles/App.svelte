<script lang="ts">
  import { SubLinks } from '@nx-svelte-study/atoms';
  import TheClassDirective from './1. The class directive/App.svelte';
  import ShorthandClassDirective from './2. Shorthand class directive/App.svelte';
  import TheStyleDirective from './3. The style directive/App.svelte';
  import ComponentStyles from './4. Component styles/App.svelte';

  export let params = { subPage: 'the-class-directive' };
</script>

<SubLinks
  {params}
  prefixTitle="Classes and styles"
  subTitles="{{
    'the-class-directive': 'The class directive',
    'shorthand-class-directive': 'Shorthand class directive',
    'the-style-directive': 'The style directive',
    'component-styles': 'Component styles',
  }}"
  subPages="{{
    'the-class-directive': TheClassDirective,
    'shorthand-class-directive': ShorthandClassDirective,
    'the-style-directive': TheStyleDirective,
    'component-styles': ComponentStyles,
  }}"
/>
