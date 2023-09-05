<script lang="ts">
  import { Links } from '@nx-svelte-study/atoms';
  import Introduction from './1. Introduction/App.svelte';
  import Reactivity from './2. Reactivity/App.svelte';
  import Props from './3. Props/App.svelte';
  import Logic from './4. Logic/App.svelte';
  import Events from './5. Events/App.svelte';
  import Bindings from './6. Bindings/App.svelte';
</script>

<Links
  headTitle="Part 1"
  titles="{{
    '/introduction': 'Introduction',
    '/reactivity': 'Reactivity',
    '/props': 'Props',
    '/logic': 'Logic',
    '/events': 'Events',
    '/bindings': 'Bindings',
  }}"
  routes="{{
    '/': Introduction,
    '/introduction': Introduction,
    '/introduction/:subPage': Introduction,
    '/reactivity': Reactivity,
    '/reactivity/:subPage': Reactivity,
    '/props': Props,
    '/props/:subPage': Props,
    '/logic': Logic,
    '/logic/:subPage': Logic,
    '/events': Events,
    '/events/:subPage': Events,
    '/bindings': Bindings,
    '/bindings/:subPage': Bindings,
  }}"
/>
