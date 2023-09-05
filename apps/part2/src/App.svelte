<script lang="ts">
  import { Links } from '@nx-svelte-study/atoms';
  import Motion from './1. Motion/App.svelte';
  import Transitions from './2. Transitions/App.svelte';
  import Animations from './3. Animations/App.svelte';
  import Actions from './4. Actions/App.svelte';
  import AdvancedBindings from './5. Advanced bindings/App.svelte';
  import ClassesAndStyles from './6. Classes and styles/App.svelte';
  import ComponentComposition from './7. Component composition/App.svelte';
  import ContextApi from './8. Context API/App.svelte';
  import SpecialElements from './9. Special elements/App.svelte';
  import ModuleContext from './10. Module context/App.svelte';
  import Miscellaneous from './11. Miscellaneous/App.svelte';
</script>

<Links
  headTitle="Part 2"
  titles="{{
    '/motion': 'Motion',
    '/transitions': 'Transitions',
    '/animations': 'Animations',
    '/actions': 'Actions',
    '/advanced-bindings': 'Advanced bindings',
    '/classes-and-styles': 'Classes and styles',
    '/component-composition': 'Component composition',
    '/context-api': 'Context API',
    '/special-elements': 'Special elements',
    '/module-context': 'Module context',
    '/miscellaneous': 'Miscellaneous',
  }}"
  routes="{{
    '/': Motion,
    '/motion': Motion,
    '/motion/:subPage': Motion,
    '/transitions': Transitions,
    '/transitions/:subPage': Transitions,
    '/animations': Animations,
    '/animations/:subPage': Animations,
    '/actions': Actions,
    '/actions/:subPage': Actions,
    '/advanced-bindings': AdvancedBindings,
    '/advanced-bindings/:subPage': AdvancedBindings,
    '/classes-and-styles': ClassesAndStyles,
    '/classes-and-styles/:subPage': ClassesAndStyles,
    '/component-composition': ComponentComposition,
    '/component-composition/:subPage': ComponentComposition,
    '/context-api': ContextApi,
    '/context-api/:subPage': ContextApi,
    '/special-elements': SpecialElements,
    '/special-elements/:subPage': SpecialElements,
    '/module-context': ModuleContext,
    '/module-context/:subPage': ModuleContext,
    '/miscellaneous': Miscellaneous,
    '/miscellaneous/:subPage': Miscellaneous,
  }}"
/>
