<script lang="ts">
  import { SubLinks } from '@nx-svelte-study/atoms';
  import Self from './1. <svelte:self>/App.svelte';
  import Component from './2. <svelte:component>/App.svelte';
  import Element from './3. <svelte:element>/App.svelte';
  import Window from './4. <svelte:window>/App.svelte';
  import WindowBindings from './5. <svelte:window> bindings/App.svelte';
  import Body from './6. <svelte:body>/App.svelte';
  import Document from './7. <svelte:document>/App.svelte';
  import Head from './8. <svelte:head>/App.svelte';
  import Options from './9. <svelte:options>/App.svelte';
  import Fragment from './10. <svelte:fragment>/App.svelte';

  export let params = { subPage: 'self' };
</script>

<SubLinks
  {params}
  prefixTitle="Special elements"
  subTitles="{{
    self: '<svelte:self>',
    component: '<svelte:component>',
    element: '<svelte:element>',
    window: '<svelte:window>',
    'window-bindings': '<svelte:window> bindings',
    body: '<svelte:body>',
    document: '<svelte:document>',
    head: '<svelte:head>',
    options: '<svelte:options>',
    fragment: '<svelte:fragment>',
  }}"
  subPages="{{
    self: Self,
    component: Component,
    element: Element,
    window: Window,
    'window-bindings': WindowBindings,
    body: Body,
    document: Document,
    head: Head,
    options: Options,
    fragment: Fragment,
  }}"
/>
