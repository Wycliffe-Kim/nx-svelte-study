<script lang="ts">
  import { Links } from '@nx-svelte-study/atoms';
  import WelcomeToSvelte from './1. Welcome to Svelte/WelcomeToSvelte.svelte';
  import YourFirstComponent from './2. Your first component/YourFirstComponent.svelte';
  import DynamicAttributes from './3. Dynamic attributes/DynamicAttributes.svelte';
  import Styling from './4. Styling/Styling.svelte';
  import NestedComponents from './5. Nested components/NestedComponents.svelte';
  import HtmlTags from './6. HTML tags/HtmlTags.svelte';
</script>

<Links
  headTitle="Part 1: Introduction"
  titles="{{
    '/': 'Home',
    '/welcome-to-svelte': 'Welcome to Svelte',
    '/your-first-component': 'Your first component',
    '/dynamic-attributes': 'Dynamic attributes',
    '/styling': 'Styling',
    '/nested-components': 'Nested components',
    '/html-tags': 'HTML tags',
  }}"
  routes="{{
    '/': WelcomeToSvelte,
    '/welcome-to-svelte': WelcomeToSvelte,
    '/your-first-component': YourFirstComponent,
    '/dynamic-attributes': DynamicAttributes,
    '/styling': Styling,
    '/nested-components': NestedComponents,
    '/html-tags': HtmlTags,
  }}"
/>
