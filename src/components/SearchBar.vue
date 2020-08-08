<template>
  <!-- <div>
    <input @input="onInput" />
  </div>-->
  <div class="input-group flex-nowrap margin_custom">
    <div class="input-group-prepend">
      <span class="input-group-text" id="addon-wrapping">Youtube</span>
    </div>
    <input
      @input="onInput"
      type="text"
      class="form-control"
      placeholder="Search..."
      aria-label="Search..."
      aria-describedby="addon-wrapping"
    />
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  methods: {
    onInput: function (event) {
      this.$emit("termChange", event.target.value);
    },
  },
};
</script>

<style scoped>
input {
  width: 75%;
}

div {
  text-align: center;
  margin: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
}
.margin_custom {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>