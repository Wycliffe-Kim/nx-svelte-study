<script lang="ts">
  import { Links } from '@nx-svelte-study/atoms';
  import Introduction from './1. Introduction/App.svelte';
  import Reactivity from './2. Reactivity/App.svelte';
</script>

<Links
  headTitle="Part 1"
  titles="{{
    '/introduction': 'Introduction',
    '/reactivity': 'Reactivity',
  }}"
  routes="{{
    '/': Introduction,
    '/introduction': Introduction,
    '/introduction/:subPage': Introduction,
    '/reactivity': Reactivity,
    '/reactivity/:subPage': Reactivity,
  }}"
/>
