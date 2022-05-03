<template>
  <div class="flex flex-wrap px-2">
    <div
      :class="
        list.length || news.length
          ? 'w-full h-full pt-14 md:px-6'
          : 'w-full h-full'
      "
    >
      <div class="carousel-wrapper">
        <client-only>
          <carousel
            v-if="sliders.length"
            v-bind="options"
            :per-page="perPage"
            :navigation-enabled="navigationEnabled"
          >
            <slide
              v-for="(item, index) in sliders"
              :key="index"
              class="w-full h-full"
            >
              <img
                class="object-cover object-center w-full rounded-2xl"
                :src="require(`@/static/sliders/${item}`)"
                :alt="item.split('.')[0]"
              />
            </slide>
          </carousel>
          <carousel
            v-else-if="list.length"
            v-bind="options"
            :per-page="perPage"
            :navigation-enabled="navigationEnabled"
          >
            <slide
              v-for="(item, index) in list"
              :key="index"
              class="w-full h-full pt-14 md:px-6"
            >
              <img
                class="object-cover object-center w-full rounded-2xl"
                :src="require(`@/static/banners/${item}`)"
                :alt="item.split('.')[0]"
              />
            </slide>
          </carousel>
          <carousel
            v-else-if="news.length"
            v-bind="options"
            :per-page="perPage"
            :navigation-enabled="navigationEnabled"
          >
            <slide
              v-for="(item, index) in news"
              :key="index"
              class="w-full md:w-1/3 md:px-2"
            >
              <div class="px-2 my-2 h-80 w-full cursor-pointer">
                <div
                  class="
                    w-full
                    h-full
                    rounded-xl
                    bg-white
                    shadow-lg
                    hover:shadow-xl
                    overflow-hidden
                  "
                >
                  <div class="h-1/2 w-full rounded-b-xl overflow-hidden">
                    <img
                      v-if="item.img"
                      class="w-full h-full object-cover object-center"
                      :src="require(`@/static/news/${item.img}`)"
                      :alt="item.title"
                    />
                    <img
                      v-else
                      class="w-full h-full object-cover object-center"
                      src="@/static/news/default.png"
                      :alt="item.title"
                    />
                  </div>
                  <div class="h-1/2 w-full px-4">
                    <div class="h-full w-full flex justify-center flex-col">
                      <h4 class="font-semibold text-neutral-darkness">
                        {{ item.title }}
                      </h4>
                      <p class="text-neutral-dark mt-1 text-sm">
                        {{ item.desc }}
                      </p>
                      <div
                        class="mt-2 w-full flex justify-between items-center"
                      >
                        <span class="text-primary text-xs">{{
                          item.date
                        }}</span>
                        <Nuxt-Link
                          class="
                            text-primary text-sm
                            hover:opacity-80
                            cursor-pointer
                            font-semibold
                          "
                          :to="item.link"
                          >Read More</Nuxt-Link
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </slide>
          </carousel>
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sliders: {
      type: Array,
      default: () => [],
    },
    list: {
      type: Array,
      default: () => [],
    },
    news: {
      type: Array,
      default: () => [],
    },
    perPage: {
      type: Number,
      default: 1,
    },
    navigationEnabled: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      options: {
        loop: true,
        autoplay: true,
        navigationClickTargetSize: 20,
        paginationActiveColor: '#2953A1',
        paginationColor: '#BDBDBD',
        paginationSize: 20,
        autoplayHoverPause: true,
      },
    }
  },
  mounted() {
    if (this.news.length) {
      this.news.map((item) => {
        if (item.title && item.title.length > 50) {
          item.title = item.title.substring(0, 50) + '...'
        }
        if (item.desc && item.desc.length > 100) {
          item.desc = item.desc.substring(0, 100) + '...'
        }
        return item
      })
    }
  },
}
</script>

<style>
.VueCarousel-dot .VueCarousel-dot--active {
  background-color: '#1E88E5';
}
.VueCarousel-navigation-next,
.VueCarousel-navigation-prev {
  background-color: #1e88e5 !important;
  color: #fff !important;
  /* height: 2.5rem;
  width: 2.5rem; */
  border-radius: 0.5rem;
}
</style>