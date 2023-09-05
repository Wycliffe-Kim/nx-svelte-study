<script lang="ts">
  import { SubLinks } from '@nx-svelte-study/atoms';
  import DeclaringProps from './1. Declaring props/App.svelte';
  import DefaultValues from './2. Default values/App.svelte';
  import SpreadProps from './3. Spread props/App.svelte';

  export let params = { subPage: 'declaring-props' };
</script>

<SubLinks
  {params}
  prefixTitle="props"
  subTitles="{{
    'declaring-props': 'Declaring props',
    'default-values': 'Default values',
    'spread-props': 'Spread props',
  }}"
  subPages="{{
    'declaring-props': DeclaringProps,
    'default-values': DefaultValues,
    'spread-props': SpreadProps,
  }}"
/>
