<script>
  import Thing from './Thing.svelte';

  let things = [
    { id: 1, name: 'apple' },
    { id: 2, name: 'banana' },
    { id: 3, name: 'carrot' },
    { id: 4, name: 'doughnut' },
    { id: 5, name: 'egg' },
  ];

  function handleClick() {
    things = things.slice(1);
  }
</script>

<button on:click="{handleClick}"> Remove first thing </button>

<!--
  thing.id를 사용하지 않는 경우
  1. handleClick을 누르면 things 배열의 첫번째 요소가 제거된다.
  2. 제거한 things를 토대로 Thing 컴포넌트들을 렌더링한다.
  3. Thing 컴포넌트들이 처음에 렌더링 되었을 때 각 name에 맞는 emoji가 const로 선언되어
     해당 Thing 컴포넌트의 emoji는 변경되지 않는다.
  4. things 배열의 첫번째 요소가 제거되면 Thing 컴포넌트들의 name이 변경되지만, 이미 const로 선언된 emoji는 변경되지 않는다.

  thing.id를 사용하는 경우
  1. handleClick을 누르면 things 배열의 첫번째 요소가 제거된다.
  2. 제거한 things를 토대로 Thing 컴포넌트들을 렌더링한다.
  3. Thing 컴포넌트들이 처음에 렌더링 되었을 때 각 name에 맞는 emoji가 const로 선언되어
     해당 Thing 컴포넌트의 emoji는 변경되지 않는다.
  4. things 배열의 첫번째 요소가 제거되더라도 thing.id로 name에 따라 emoji가 변경되어
     Thing 컴포넌트들의 emoji가 변경된다.
-->
{#each things as thing (thing.id)}
  <Thing name="{thing.name}" />
{/each}
