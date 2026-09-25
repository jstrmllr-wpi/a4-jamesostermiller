<script>
    import RecipeCard from './lib/RecipeCard.svelte'
    let {onprofile = false} = $props()
    
    const getRecipes = function() {
        let path = 'http://localhost:5173/allrecipes'
        if(onprofile){
            path = 'http://localhost:5173/myrecipes'
        }
        const p = fetch(path, {
            method:'GET' 
        })
        .then( response => response.json() )
        .then( json => {
            console.log(json)
            return json
        })
        
        return p
    }
    
    let promise = getRecipes()
</script>

{#await promise then recipes}
    {#each recipes as recipe}
    <RecipeCard {recipe} {onprofile} />
    {/each}
{/await}  