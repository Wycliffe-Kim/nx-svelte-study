<script lang="ts">
  import { SubLinks } from '@nx-svelte-study/atoms';
  import WelcomeToSvelte from './1. Welcome to Svelte/App.svelte';
  import YourFirstComponent from './2. Your first component/App.svelte';
  import DynamicAttributes from './3. Dynamic attributes/App.svelte';
  import Styling from './4. Styling/App.svelte';
  import NestedComponents from './5. Nested components/App.svelte';
  import HtmlTags from './6. HTML tags/App.svelte';

  export let params = { subPage: 'welcome-to-svelte' };
</script>

<SubLinks
  {params}
  prefixTitle="introduction"
  subTitles="{{
    'welcome-to-svelte': 'Welcome to Svelte',
    'your-first-component': 'Your first component',
    'dynamic-attributes': 'Dynamic attributes',
    styling: 'Styling',
    'nested-components': 'Nested components',
    'html-tags': 'HTML tags',
  }}"
  subPages="{{
    'welcome-to-svelte': WelcomeToSvelte,
    'your-first-component': YourFirstComponent,
    'dynamic-attributes': DynamicAttributes,
    styling: Styling,
    'nested-components': NestedComponents,
    'html-tags': HtmlTags,
  }}"
/>
