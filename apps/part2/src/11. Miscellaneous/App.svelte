<script lang="ts">
  import { SubLinks } from '@nx-svelte-study/atoms';
  import TheDebugTag from './1. The @debug tag/App.svelte';

  export let params = { subPage: 'the-debug-tag' };
</script>

<SubLinks
  {params}
  prefixTitle="Miscellaneous"
  subTitles="{{
    'the-debug-tag': 'The @debug tag',
  }}"
  subPages="{{
    'the-debug-tag': TheDebugTag,
  }}"
/>
