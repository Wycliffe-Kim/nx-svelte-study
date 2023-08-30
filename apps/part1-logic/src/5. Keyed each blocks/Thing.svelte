<script>
  const emojis = {
    apple: '🍎',
    banana: '🍌',
    carrot: '🥕',
    doughnut: '🍩',
    egg: '🥚',
  };

  // the name is updated whenever the prop value changes...
  export let name;

  // ...but the "emoji" variable is fixed upon initialisation
  // of the component because it uses `const` instead of `$:`
  // 만약에 thing.id를 사용하고 싶지 않다면 const 대신 $:를 사용하면 된다.
  const emoji = emojis[name];
</script>

<p>{emoji} = {name}</p>
