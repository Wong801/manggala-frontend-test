<template>
  <div class="pr-4 cursor-pointer hover:opacity-70">
    <img
      :src="require(`@/static/social-media/${platform}.svg`)"
      :alt="platform"
    />
  </div>
</template>

<script>
export default {
  props: {
    platform: {
      type: String,
      required: true,
    },
  },
}
</script>