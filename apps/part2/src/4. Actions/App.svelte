<script lang="ts">
  import { SubLinks } from '@nx-svelte-study/atoms';
  import TheUseDirective from './1. The use directive/App.svelte';
  import AddingParameters from './2. Adding parameters/App.svelte';

  export let params = { subPage: 'the-use-directive' };
</script>

<SubLinks
  {params}
  prefixTitle="Actions"
  subTitles="{{
    'the-use-directive': 'The use directive',
    'adding-parameters': 'Adding parameters',
  }}"
  subPages="{{
    'the-use-directive': TheUseDirective,
    'adding-parameters': AddingParameters,
  }}"
/>
