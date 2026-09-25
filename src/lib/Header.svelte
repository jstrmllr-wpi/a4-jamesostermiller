<script>
  import HeaderLink from './HeaderLink.svelte'
  let {loggedin=false, path} = $props()
</script>

<header class='pure-menu pure-menu-horizontal'>
  <h1 class='pure-menu-heading'>Recipe Wiki</h1>
  <ul class='pure-menu-list'>
    {#if loggedin}
      <HeaderLink path='/index.html' text='Browse recipes' />
      <HeaderLink path='/profile.html' text='My recipes' />
      <li class='pure-menu-item'>
        <form action='/logout' method='POST'>
          <button type='submit' class='pure-menu-link'>Log out</button>
        </form>
      </li>
    {:else}
      <HeaderLink path='/login.html' text='Log in' />
      <HeaderLink path='/createaccount.html' text='Create account' />
    {/if}
  </ul>
</header>