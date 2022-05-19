<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed:{
    iconName () {
      return `#${this.name}`
    }
  },
  setup(){
    return{

    }
  }
}
</script>
<style scoped>
.icon {
  width: 18px;
  height: 18px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
