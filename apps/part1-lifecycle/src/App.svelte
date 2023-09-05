<script lang="ts">
  import { Links } from '@nx-svelte-study/atoms';
  import OnMount from './1. onMount/OnMount.svelte';
  import BeforeUpdateAndAfterUpdate from './2. beforeUpdate and afterUpdate/BeforeUpdateAndAfterUpdate.svelte';
  import Tick from './3. tick/Tick.svelte';
</script>

<Links
  headTitle="Part 1: Lifecyclle"
  titles="{{
    '/': 'Home',
    '/on-mount': 'onMount',
    '/before-update-and-after-update': 'beforeUpdate and afterUpdate',
    '/tick': 'tick',
  }}"
  routes="{{
    '/': OnMount,
    '/on-mount': OnMount,
    '/before-update-and-after-update': BeforeUpdateAndAfterUpdate,
    '/tick': Tick,
  }}"
/>
