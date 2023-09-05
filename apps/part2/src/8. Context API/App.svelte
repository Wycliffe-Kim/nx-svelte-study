<script lang="ts">
  import { SubLinks } from '@nx-svelte-study/atoms';
  import SetContextAndGetContext from './1. setContext and getContext/App.svelte';

  export let params = { subPage: 'set-context-and-get-context' };
</script>

<SubLinks
  {params}
  prefixTitle="Context API"
  subTitles="{{
    'set-context-and-get-context': 'setContext and getContext',
  }}"
  subPages="{{
    'set-context-and-get-context': SetContextAndGetContext,
  }}"
/>
