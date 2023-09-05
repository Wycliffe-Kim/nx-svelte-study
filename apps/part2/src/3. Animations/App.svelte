<script lang="ts">
  import { SubLinks } from '@nx-svelte-study/atoms';
  import TheAnimateDirective from './1. The animate directive/App.svelte';

  export let params = { subPage: 'the-animate-directive' };
</script>

<SubLinks
  {params}
  prefixTitle="Animations"
  subTitles="{{
    'the-animate-directive': 'The animate directive',
  }}"
  subPages="{{
    'the-animate-directive': TheAnimateDirective,
  }}"
/>
