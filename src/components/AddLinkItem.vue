<template>
<div class="container">
    <h3>Add item</h3>
  <form>
  <div class="form-group row">
    <label class="col-4 col-form-label" for="description">Description</label> 
    <div class="col-8">
      <input id="description" name="description" placeholder="description of the video" type="text" class="form-control"
      v-model="data.description"
      >
    </div>
  </div>
  <div class="form-group row">
    <label for="link" class="col-4 col-form-label">Link</label> 
    <div class="col-8">
      <input id="link" name="link" placeholder="link to the video" type="text" class="form-control" required="required"
      v-model="data.source"
      >
    </div>
  </div> 
  <div class="form-group row">
    <div class="offset-4 col-8">
      <button name="submit" type="submit" class="btn btn-primary" @click="addItem()">Submit</button>
    </div>
  </div>
</form>
</div>
</template>

<script>
export default {
    name: "add-link-item",
    data() {
        return {
            data: {
                description: undefined,
                source: ''
            }
        }
    },
    methods: {
        addItem() {
            console.log(`${this.data.description} ${this.data.source}`);
        }
    },
}
</script>

<style scoped>

</style>