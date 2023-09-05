<script lang="ts">
  import { SubLinks } from '@nx-svelte-study/atoms';
  import SharingCode from './1. Sharing code/App.svelte';
  import Exports from './2. Exports/App.svelte';

  export let params = { subPage: 'sharing-code' };
</script>

<SubLinks
  {params}
  prefixTitle="Module context"
  subTitles="{{
    'sharing-code': 'Sharing code',
    exports: 'Exports',
  }}"
  subPages="{{
    'sharing-code': SharingCode,
    exports: Exports,
  }}"
/>
