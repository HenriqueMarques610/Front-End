<template>
  <div class="produto">
    <h2>{{ produto }}</h2>
    <p>{{ valor }} Euros</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    produto: {
      type: String,
      required: true,
    },
    valor: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.produto {
  background-color: white;
  padding: 3rem;
  margin: 10px;
  width: 400px;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.3);
}
</style>