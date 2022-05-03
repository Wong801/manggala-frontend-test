<template>
  <div class="flex items-center pt-4">
    <div class="pr-3 w-12">
      <img :src="require(`@/static/${type}.svg`)" />
    </div>
    <div class="text-neutral-dark">
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
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