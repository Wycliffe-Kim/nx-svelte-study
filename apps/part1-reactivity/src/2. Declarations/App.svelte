<script lang="ts">
  let count = 0;

  // $로 선언된 것들은 렌더링 전에, 모든 스크립트 코드들이 수행된 후에 실행된다.
  $: console.log(`the count is ${count} and doubled is ${doubled}`);
  $: doubled = count * 2;

  const increment = () => {
    count += 1;
  };
</script>

<button on:click="{increment}">
  Clicked {count}
  {count === 1 ? 'time' : 'times'}
</button>
<p>{count} doubled is {doubled}</p>
