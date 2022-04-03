<template>

  <h2 class="logo">IT CHERT</h2>

  <div id="nav">

    <router-link :to="page.path"
    v-for="(page, index) in allPages" :key="index"
    @click="currentPages = index"
    >
      <span class="navSpan" :class="{ 'active': currentPages === index }"> <a href="#">{{ page.title }}</a> </span>
    </router-link>

  </div>
  <router-view :currentPages="currentPages" />

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data(){
    return{
      currentPages: 0
    }
  },

  computed:{
    ...mapGetters([
      'allPages'
    ])
  },

  methods:{
    
  },

  mounted(){
    this.$router.push('/')
  }
}
</script>

<style>
*,*::before,*::after{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

:root{
  --bgColor: #fff;
  --bgColorCanvas: #fff;
  --navColor: #777;
  --navDotColor: #333;
  --navDotActiveColor: rgba(90, 0, 157, 1);
  --navDotTextColor: #fff;
}

body{
  max-width: 100vw; height: auto;
}

.logo{
  position: absolute;
  font-size: 20px;
  z-index: 1000;
  margin: 10px;
  left: 0;
  top: 0;
  color: rgba(90, 0, 157, 1);
}

section.home{
  background: var(--bgColor);
  width: 100%; height: 100vh;
}

section.home canvas{
  background: var(--bgColorCanvas);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  position: absolute;
  width: 2px; height: 40vh;
  background: var(--navColor);
  margin: 30vh 3vw;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50rem;
  z-index: 1;
}

#nav .navSpan{
  display: block;
  width: 26px; height: 26px;
  background: var(--navDotColor);
  border-radius: 50%;
  margin: 13px 0;
  cursor: pointer;
  border: 5px ridge rgba(255, 255, 255, 1);
}

#nav .navSpan.active{
  background: var(--navDotActiveColor);
}

#nav .navSpan a{
  position: absolute;
  transform: translate(70%, -7px) scale(0);
  transition: 0.25s;
  font-weight: bold;
  background: var(--navDotColor);
  color: var(--navDotTextColor);
  padding: 7px 10px;
  border-radius: 10rem;
  text-decoration: none;
}

#nav .navSpan.active a{
  background: var(--navDotActiveColor);
}

#nav .navSpan:hover a{
  transform: translate(70%, -7px) scale(1);
}

#nav .navSpan.active a{
  transform: translate(70%, -7px) scale(1.17);
}
</style>
