<template>
  <Nuxt-Link :to="to" class="py-2 text-neutral-darkness hover:opacity-70">
    {{ text }}
  </Nuxt-Link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
}
</script>