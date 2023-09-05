<script lang="ts">
  import { Links } from '@nx-svelte-study/atoms';
  import WritableStores from './1. Writable stores/App.svelte';
  import AutoSubscriptions from './2. Auto-subscriptions/App.svelte';
  import ReadableStores from './3. Readable stores/App.svelte';
  import DerivedStores from './4. Derived stores/App.svelte';
  import CustomStores from './5. Custom stores/App.svelte';
  import StoreBindings from './6. Store bindings/App.svelte';
</script>

<Links
  headTitle="Part 1: Stores"
  titles="{{
    '/': 'Home',
    '/writable-stores': 'Writable stores',
    '/auto-subscriptions': 'Auto-subscriptions',
    '/readable-stores': 'Readable stores',
    '/derived-stores': 'Derived stores',
    '/custom-stores': 'Custom stores',
    '/store-bindings': 'Store bindings',
  }}"
  routes="{{
    '/': WritableStores,
    '/writable-stores': WritableStores,
    '/auto-subscriptions': AutoSubscriptions,
    '/readable-stores': ReadableStores,
    '/derived-stores': DerivedStores,
    '/custom-stores': CustomStores,
    '/store-bindings': StoreBindings,
  }}"
/>
