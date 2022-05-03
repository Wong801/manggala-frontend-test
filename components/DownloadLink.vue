<template>
  <div class="w-full h-16 md:h-12">
    <img
      :src="require(`@/static/${kind}.png`)"
      :alt="kind"
      class="w-full h-full cursor-pointer hover:opacity-70 object-fill"
    />
  </div>
</template>

<script>
export default {
  props: {
    kind: {
      type: String,
      required: true,
    },
  },
}
</script>