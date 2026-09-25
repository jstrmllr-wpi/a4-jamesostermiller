<script>
    let {action} = $props()
</script>

<form {action} method='POST' class='pure-form pure-form-aligned centered'>
    <div class='pure-control-group'>
        <label for='username'>*Username:</label>
        <input type='text' id='username' name='username' required>
    </div>

    <div class='pure-control-group'>
        <label for='password'>*Password:</label>
        <input type='password' id='password' name='password' required>
    </div>

    <div class='pure-controls'>
        <input type='submit' value='Submit' class='pure-button pure-button-primary'>
    </div>
</form>