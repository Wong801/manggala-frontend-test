<template>
  <div>
    <section :class="className">
      <slot></slot>
    </section>
    <img
      v-if="decoration"
      :src="require(`@/static/decoration/${decoration}.svg`)"
      class="relative z-0 w-full -mb-10 md:-mb-14 -top-20 md:-top-48"
    />
  </div>
</template>

<script>
export default {
  props: {
    className: {
      type: String,
      default: '',
    },
    decoration: {
      type: String,
      default: '',
    },
  },
}
</script>