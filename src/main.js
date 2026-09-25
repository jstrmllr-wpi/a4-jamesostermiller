import { mount } from 'svelte'
import RecipeList from './RecipeList.svelte'


const check_login = async function() {
  const response = await fetch( '/amiloggedin', {
    method:'GET'
  })

  const returnedtext = await response.text()

  const username = JSON.parse(returnedtext).username
  if(!username){
    window.location.replace('login.html')
  }
  return username
}

if(window.location.pathname == '/index.html'
  || window.location.pathname == '/profile.html'){
    const username = await check_login()
  }

// window.onload = function() {
  
// }


let onprofile = window.location.pathname == '/profile.html'
const recipelist = mount(RecipeList, {
  target: document.getElementById('recipe-list'),
  props: {onprofile}
})

export default recipelist
