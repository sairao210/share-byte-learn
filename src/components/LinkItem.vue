<template>
  <div id="my-link-item">
      <div v-if="description">
          <p >{{ description }}</p>
      </div>
    <div v-if="!description">
        <a :href="source"> {{source}} </a>
    </div>
    <div v-if="description">
        <a :href="source"> Open </a>
    </div>
    
  </div>
</template>

<script>

export default {
    name: "link-item",
    data() {
        return {
        }
    },
    props: {
        description: {
            type: String,
            default: undefined
        },
        source: {
            type: String,
            default: '#'
        },
    },
}
</script>
    
<style scoped>
    #my-link-item {
        display: flex;
        justify-content: space-around;        
        align-items: flex-start;
        outline-width: 1px;
        outline-color: slategray;
        outline-style: solid;
        margin: 10px;
    }

    p {
        margin: 0px;
    }

</style>