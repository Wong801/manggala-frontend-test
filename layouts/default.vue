<template>
  <div>
    <Header-Base>
      <Header-Layout>
        <div class="inline-flex items-center w-full lg:w-auto">
          <img src="@/static/logo-bp-home.svg" alt="BP Batam" class="w-52" />
          <div class="block ml-auto justify-self-end lg:hidden">
            <button
              class="
                flex
                focus:outline-none
                items-center
                px-3
                py-2
                border
                rounded
                text-teal-lighter
                border-none
                hover:text-white hover:border-white
              "
              @click="showMenu = !showMenu"
            >
              <img src="@/static/menu.svg" width="30px" />
            </button>
          </div>
        </div>
        <nav
          class="
            hidden
            flex-col flex-wrap
            items-start
            justify-center
            gap-y-8
            text-base
            lg:ml-10 lg:flex
            md:items-center md:flex-row md:gap-y-0
          "
        >
          <Header-Link to="/" text="Beranda" />
          <Header-Link to="#" text="Layanan" />
          <Header-Link to="/about" text="Tentang Kami" />
        </nav>
        <nav
          v-if="showMenu"
          class="
            flex flex-col flex-wrap
            items-start
            justify-center
            gap-y-8
            text-base
            lg:ml-10 lg:hidden
            md:items-center md:flex-row md:gap-y-0
          "
        >
          <Header-Link to="/" text="Beranda" />
          <Header-Link to="#" text="Layanan" />
          <Header-Link to="/about" text="Tentang Kami" />
        </nav>
        <div
          v-if="showMenu"
          class="flex items-center ml-auto lg:hidden md:relative"
        >
          <p class="self-center cursor-pointer px-3 font-semibold">Login</p>
          <button
            class="
              px-8
              py-2
              ml-5
              font-semibold
              transition
              duration-500
              ease-in-out
              transform
              bg-white
              shadow-lg
              text-primary
              rounded-3xl
              md:mt-4
              lg:inline-flex lg:mt-px
              hover:border-black0 hover:bg-primary hover:text-white
              focus:ring focus:outline-none
            "
          >
            Daftar
          </button>
        </div>
        <div class="hidden ml-auto lg:flex md:relative">
          <p class="self-center cursor-pointer px-3 font-semibold">Login</p>
          <button
            class="
              items-center
              px-8
              py-2
              ml-5
              font-semibold
              transition
              duration-500
              ease-in-out
              transform
              bg-white
              shadow-lg
              text-primary
              rounded-3xl
              md:mt-4
              lg:inline-flex lg:mt-px
              hover:border-black0 hover:bg-primary hover:text-white
              focus:ring focus:outline-none
            "
          >
            Daftar
          </button>
        </div>
      </Header-Layout>
    </Header-Base>
    <main>
      <Nuxt />
    </main>
    <Footer-Base>
      <Footer-Layout-Main>
        <div class="md:w-1/4 w-full flex py-4 md:py-0 flex-col">
          <div>
            <img src="@/static/logo-bp-home.svg" alt="BP Batam" />
          </div>
          <div class="mt-4 text-neutral-darkness text-lg font-semibold">
            <p>Contact us</p>
          </div>
          <Footer-Layout-Contact type="mail" text="hello@bfast.com" />
          <Footer-Layout-Contact type="phone" text="(021) - 771122" />
          <Footer-Layout-Contact
            type="location"
            text="Batam, Kec. Batam, Batam, Batam 24182"
          />
        </div>
        <Footer-Layout-Secondary>
          <Footer-Link to="/service/hello" text="Hello" />
          <Footer-Link to="/service/asrama-haji" text="Asrama Haji" />
          <Footer-Link to="/service/rusun-baru" text="Rusun Baru" />
          <Footer-Link to="/service/wisata" text="Wisata" />
          <Footer-Link to="/service/fasilitas-umum" text="Fasilitas Umun" />
          <Footer-Link to="/service/rusun" text="Rusun" />
        </Footer-Layout-Secondary>
        <Footer-Layout-Secondary>
          <Footer-Link to="/service/pusat-bantuan" text="Pusat Bantuan" />
          <Footer-Link to="/service/blog" text="Blog" />
          <Footer-Link
            to="/service/kebijakan-privasi"
            text="Kebijakan Privasi"
          />
          <Footer-Link
            to="/service/syarat-ketentuan"
            text="Syarat & ketentuan"
          />
        </Footer-Layout-Secondary>
        <Footer-Layout-Secondary>
          <div class="text-neutral-darkness text-lg font-semibold">
            <p>Download</p>
          </div>
          <div class="flex justify-between gap-x-2">
            <Download-Link kind="playStore" />
            <Download-Link kind="appStore" />
          </div>
          <div class="mt-4">
            <div class="mt-4 text-neutral-darkness text-lg font-semibold">
              <p>Follow Us</p>
            </div>
            <div class="mt-2 flex">
              <Follow-Link platform="instagram" />
              <Follow-Link platform="facebook" />
              <Follow-Link platform="twitter" />
              <Follow-Link platform="youtube" />
            </div>
          </div>
        </Footer-Layout-Secondary>
      </Footer-Layout-Main>
    </Footer-Base>
    <div class="pt-8 text-center text-sm text-primary">
      <span> © 2021 BP Batam. All rights reserved </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    }
  },
}
</script>