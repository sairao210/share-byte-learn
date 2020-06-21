<template>
  <div id="app">
    <div id="main-links" class="ex-layout">
      <links />
    </div>
    <div id="main-link-add" class="ex-layout">
      <add-link-item />
    </div>
  </div>
</template>

<script>
import Links from "./components/Links.vue";
import AddLinkItem from './components/AddLinkItem.vue'

export default {
  name: 'App',
  components: {
    Links, AddLinkItem
  }
}
</script>

<style>
.ex-layout {
  margin: 2%;
  padding: 0%;
}
</style>
