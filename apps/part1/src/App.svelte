<script lang="ts">
  import { Links } from '@nx-svelte-study/atoms';
  import Introduction from './1. Introduction/App.svelte';
  import Reactivity from './2. Reactivity/App.svelte';
  import Props from './3. Props/App.svelte';
</script>

<Links
  headTitle="Part 1"
  titles="{{
    '/introduction': 'Introduction',
    '/reactivity': 'Reactivity',
    '/props': 'Props',
  }}"
  routes="{{
    '/': Introduction,
    '/introduction': Introduction,
    '/introduction/:subPage': Introduction,
    '/reactivity': Reactivity,
    '/reactivity/:subPage': Reactivity,
    '/props': Props,
    '/props/:subPage': Props,
  }}"
/>
