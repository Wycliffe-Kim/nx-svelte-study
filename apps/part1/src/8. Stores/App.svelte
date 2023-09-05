<script lang="ts">
  import { SubLinks } from '@nx-svelte-study/atoms';
  import WritableStores from './1. Writable stores/App.svelte';
  import AutoSubscriptions from './2. Auto-subscriptions/App.svelte';
  import ReadableStores from './3. Readable stores/App.svelte';
  import DerivedStores from './4. Derived stores/App.svelte';
  import CustomStores from './5. Custom stores/App.svelte';
  import StoreBindings from './6. Store bindings/App.svelte';

  export let params = { subPage: 'writable-stores' };
</script>

<SubLinks
  {params}
  prefixTitle="stores"
  subTitles="{{
    'writable-stores': 'Writable stores',
    'auto-subscriptions': 'Auto-subscriptions',
    'readable-stores': 'Readable stores',
    'derived-stores': 'Derived stores',
    'custom-stores': 'Custom stores',
    'store-bindings': 'Store bindings',
  }}"
  subPages="{{
    'writable-stores': WritableStores,
    'auto-subscriptions': AutoSubscriptions,
    'readable-stores': ReadableStores,
    'derived-stores': DerivedStores,
    'custom-stores': CustomStores,
    'store-bindings': StoreBindings,
  }}"
/>
