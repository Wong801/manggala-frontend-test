<template>
  <div
    class="
      w-full
      lg:w-1/3
      transition
      hover:ease-in-out
      transform
      hover:scale-105
    "
  >
    <div class="px-5 py-3 relative">
      <div
        v-if="isNew"
        class="
          absolute
          -right-2
          -top-0.5
          z-20
          text-xs
          px-4
          py-2
          bg-yellow-300
          font-bold
          shadow-lg
          text-gray-50
          rounded-full
        "
      >
        Layanan Baru
      </div>
      <div
        class="
          md:mx-2 md:my-2
          flex flex-col
          items-center
          justify-center
          px-8
          py-6
          w-full
          h-80
          bg-white
          rounded-md
          shadow-lg
          cursor-pointer
          hover:shadow-2xl
        "
      >
        <div
          class="
            inline-flex
            items-center
            justify-center
            flex-shrink-0
            w-28
            h-24
            mb-5
            rounded-md
            bg-primary
          "
        >
          <img
            :src="require(`@/static/services/${icon}.png`)"
            :alt="icon"
            class="w-12 h-11"
          />
        </div>
        <h4
          class="mb-3 text-lg text-center font-medium text-gray-700 title-font"
        >
          {{ title }}
        </h4>
        <div class="h-24 w-full overflow-hidden">
          <p class="text-sm leading-relaxed text-center w-full line-clamp-4">
            {{ desc }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isNew: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: 'default',
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
}
</script>