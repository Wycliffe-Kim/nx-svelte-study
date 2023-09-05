<script lang="ts">
  import { Links } from '@nx-svelte-study/atoms';
  import Introduction from './1. Introduction/App.svelte';
</script>

<Links
  headTitle="Part 1"
  titles="{{
    '/introduction': 'Introduction',
  }}"
  routes="{{
    '/': Introduction,
    '/introduction': Introduction,
    '/introduction/:subPage': Introduction,
  }}"
/>
