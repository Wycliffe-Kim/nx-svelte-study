<script lang="ts">
  import { SubLinks } from '@nx-svelte-study/atoms';
  import ContenteditableBindings from './1. Contenteditable bindings/App.svelte';
  import EachBlockBindings from './2. Each block bindings/App.svelte';
  import MediaElements from './3. Media elements/App.svelte';
  import Dimensions from './4. Dimensions/App.svelte';
  import This from './5. This/App.svelte';
  import ComponentBindings from './6. Component bindings/App.svelte';
  import BindingToComponentInstances from './7. Binding to component instances/App.svelte';

  export let params = { subPage: 'contenteditable-bindings' };
</script>

<SubLinks
  {params}
  prefixTitle="Advanced bindings"
  subTitles="{{
    'contenteditable-bindings': 'Contenteditable bindings',
    'each-block-bindings': 'Each block bindings',
    'media-elements': 'Media elements',
    dimensions: 'Dimensions',
    this: 'This',
    'component-bindings': 'Component bindings',
    'binding-to-component-instances': 'Binding to component instances',
  }}"
  subPages="{{
    'contenteditable-bindings': ContenteditableBindings,
    'each-block-bindings': EachBlockBindings,
    'media-elements': MediaElements,
    dimensions: Dimensions,
    this: This,
    'component-bindings': ComponentBindings,
    'binding-to-component-instances': BindingToComponentInstances,
  }}"
/>
