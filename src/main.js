import { mount } from 'svelte'
import RecipeList from './lib/RecipeList.svelte'
import Header from './lib/Header.svelte'
import LoginForm from './lib/LoginForm.svelte'
import Index from './Index.svelte'
import Profile from './Profile.svelte'

// Fetches the username from the server
const get_username = async function() {
  const response = await fetch( '/amiloggedin', {
    method:'GET'
  })

  const returnedtext = await response.text()

  const username = JSON.parse(returnedtext).username
  return username
}
const username = await get_username()
let loggedin = false
if(username){
  loggedin = true
}

// Handles page-specific javascript
if(window.location.pathname == '/index.html'){
  // if(!loggedin){
  //   window.location.replace('login.html')
  // }
  // else{
    const index = mount(Index, {
      target: document.querySelector('main')
    })
  // }
}
else if(window.location.pathname == '/profile.html'){
  if(!loggedin){
    window.location.replace('login.html')
  }
  const profile = mount(Profile, {
    target: document.querySelector('main')
  })
}
else if(window.location.pathname == '/login.html'){
  if(loggedin){
    window.location.replace('index.html')
  }
  else{
    mountLoginForm('/login')
  }
}
else if(window.location.pathname == '/createaccount.html'){
  if(loggedin){
    window.location.replace('index.html')
  }
  else{
    mountLoginForm('/createaccount')
  }
}

const header = mount(Header, {
  target: document.querySelector('header'),
  props: {loggedin, currentpath:window.location.pathname}
})


function mountRecipeList(onprofile){
  const recipelist = mount(RecipeList, {
    target: document.getElementById('recipe-list'),
    props: {onprofile}
  })
}

function mountLoginForm(action){
  const loginForm = mount(LoginForm, {
    target: document.getElementById('login-form'),
    props: {action}
  })
}