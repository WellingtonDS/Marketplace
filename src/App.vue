<template>
  <div id="app">
    <Header/>
    <main id="main">
      <router-view/>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/base/header/Header.vue';
import Footer from './components/base/footer/Footer.vue';

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

body, ul, h1, h2, li, p {
  padding: 0;
  margin: 0;
}

ul {
  list-style: none;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  color: #345;
  background: url('./assets/img/pattern.svg') repeat top;
}

a {
  color: #345;
  list-style: none;
  text-decoration: none;

}

img {
  max-width: 100%;
  display: block;
}

.btn {
  display: block;
  padding: 10px 30px;
  background: #87f;
  border-radius: 4px;
  color: white;
  text-align: center;
  font-size: 1ren;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
  transition: all 0.3s;
  border: none;
  cursor: pointer;

}

.btn:hover {
  background: #65d;
  transform: scale(1.1);
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

}

#main {
  flex: 1;
}
</style>