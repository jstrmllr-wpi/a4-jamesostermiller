<script>
  let {path, text, selected=""} = $props()
</script>

<li class='pure-menu-item {selected}'>
  <a href='{path}' class='pure-menu-link'>{text}</a>
</li>