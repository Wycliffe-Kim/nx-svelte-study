<script lang="ts">
  import { SubLinks } from '@nx-svelte-study/atoms';
  import OnMount from './1. onMount/App.svelte';
  import BeforeUpdateAndAfterUpdate from './2. beforeUpdate and afterUpdate/App.svelte';
  import Tick from './3. tick/App.svelte';

  export let params = { subPage: 'on-mount' };
</script>

<SubLinks
  {params}
  prefixTitle="lifecycle"
  subTitles="{{
    'on-mount': 'onMount',
    'before-update-and-after-update': 'beforeUpdate and afterUpdate',
    tick: 'tick',
  }}"
  subPages="{{
    'on-mount': OnMount,
    'before-update-and-after-update': BeforeUpdateAndAfterUpdate,
    tick: Tick,
  }}"
/>
