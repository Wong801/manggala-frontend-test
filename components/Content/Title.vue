<template>
  <div class="container px-6 mx-auto lg:px-24">
    <div class="flex flex-col gap-y-4 mb-14">
      <h1 class="text-4xl font-bold">{{ title }}</h1>
      <div
        v-if="customElement"
        class="flex flex-col md:flex-row justify-between"
      >
        <p class="font-semibold text-gray-500">{{ desc }}</p>
        <slot></slot>
      </div>
      <p v-else class="font-semibold text-gray-500">{{ desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    customElement: {
      type: Boolean,
      default: false,
    },
  },
}
</script>