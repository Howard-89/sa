<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand mr-5" href="#">舊愛贈</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active mr-5">
              <router-link  class="nav-link" to="/" @click.native="closeMenu()">首頁</router-link>
            </li>
            <li class="nav-item mr-5">
              <router-link class="nav-link" to="/about" @click.native="closeMenu()">我要捐贈</router-link>
            </li>
            <li class="nav-item mr-5">
              <router-link class="nav-link" to="/about" @click.native="closeMenu()">公益單位合作</router-link>
            </li>
            <li class="nav-item mr-5">
              <router-link class="nav-link" to="/about" @click.native="closeMenu()">我要捐款</router-link>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <li class="nav-item mr-3" >
              <router-link class="btn btn-outline-primary" role="button" v-show="!login" to="/login">登入</router-link>
              <a class="btn btn-outline-primary" role="button" v-show="login" @click="logout"><font color="green">登出</font></a>
            </li>
            <li class="nav-item">
              <router-link class="btn btn-outline-primary" role="button" v-show="!login" to="/signin">註冊</router-link>
            </li>
          </form>
        </div>
      </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
import {db} from './db'
import $ from 'jquery'
export default {
  created(){
    db.auth().onAuthStateChanged(user=>{
      if(user){
        this.login = true
      }
      else{
        this.login = false
      }
    })
  },
  data(){
    return{
      login: false
    }
  },
  methods: {
    closeMenu(){
      $('#navbarTogglerDemo02').collapse('hide')
    },
    logout(){
      db.auth().signOut()
      $('#navbarTogglerDemo02').collapse('hide')
      alert("您已成功登出!!")
    }
  }
}
</script>
