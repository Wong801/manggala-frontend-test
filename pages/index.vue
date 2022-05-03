<template>
  <div>
    <Content-Container
      decoration="start"
      class-name="relative z-10 h-screen text-gray-700"
    >
      <div class="h-screen">
        <Content-Carousel :sliders="sliders" :navigation-enabled="false" />
      </div>
    </Content-Container>
    <Content-Container
      decoration="full"
      class-name="relative z-10 text-gray-700 mt-20 md:-mt-10"
    >
      <Content-Title
        title="Layanan Kami"
        desc="Kami memiliki layanan yang siap memenuhi kebutuhan anda"
      />
      <div class="container px-4 mx-auto md:px-20">
        <div class="flex flex-wrap w-full">
          <Content-Card
            v-for="(item, index) in services"
            :key="index"
            :icon="item.icon"
            :title="item.title"
            :desc="item.desc"
            :is-new="item.isNew"
          />
        </div>
      </div>
    </Content-Container>
    <Content-Container class-name="mb-12 overflow-hidden text-gray-700">
      <div class="container px-5 mx-auto md:px-16">
        <Content-Carousel :list="list" />
      </div>
    </Content-Container>
    <Content-Container
      decoration="end"
      class-name="relative z-10 text-gray-700"
    >
      <Content-Title
        title="Blog"
        desc="Kami menyediakan beberapa informasi yang mungkin kalian sukai dan butuhkan"
        :custom-element="true"
      >
        <Nuxt-Link
          to="blog"
          class="text-primary cursor-pointer hover:opacity-80 font-semibold"
        >
          Lihat Semua
        </Nuxt-Link>
      </Content-Title>
      <div class="container px-4 mx-auto w-full md:px-16">
        <Content-Carousel :news="news" :per-page="3" />
      </div>
    </Content-Container>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      list: ['banner-1.png', 'banner-2.jpeg', 'banner-3.jpeg'],
      sliders: [
        'slider-1.png',
        'slider-2.jpeg',
        'slider-3.jpeg',
        'slider-4.png',
        'slider-5.png',
        'slider-6.jpeg',
      ],
    }
  },
  computed: {
    services() {
      return this.$store.state.api.services.services
    },
    news() {
      return this.$store.state.api.news.news
    },
  },
  created() {
    this.$store.dispatch('api/services/fetchServices')
    this.$store.dispatch('api/news/fetchNews')
  },
}
</script>
