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
import App from './App';
export default App
</script>

<style lang="scss">
@import './App.scss'

</style>