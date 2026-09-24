<svelte:options runes={false} />

<script>
  const getTodos = function() {
    const p = fetch( 'http://localhost:5173/read', {
      method:'GET' 
    })
    .then( response => response.json() )
    .then( json => {
      console.log(json)
      return json 
    })
 
    return p
  }
  
  let promise = getTodos()
</script>
  
{#await promise then todos}
  <ul>

  {#each todos as todo}
    <li>{todo.name} : <input type='checkbox' todo={todo.name} checked={todo.completed}></li>
  {/each}

  </ul>
{/await}  