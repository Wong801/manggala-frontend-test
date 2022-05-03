<template>
  <Nuxt-Link
    :to="to"
    class="
      mr-8
      cursor-pointer
      font-semibold
      text-gray-600 text-md
      hover:text-gray-800
    "
  >
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