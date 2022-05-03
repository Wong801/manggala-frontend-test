export const state = () => ({
  services: []
})

export const mutations = {
  setServices(state, services) {
    state.services = services
  }
}

export const actions = {
  fetchServices({ commit }) {
    const services = [
      {
        title: 'Hello',
        desc: 'xxx',
        isNew: true,
      },
      {
        title: 'Asrama Haji',
        desc: 'Butuh Hunian? Kami menyediakan beberapa layanan rekomendasi Rusun yang dapat anda nikmati bersama orang tersayang',
        icon: 'asrama-haji',
        isNew: true,
      },
      {
        title: 'Rusun Baru',
        desc: 'Rusun Baru',
        icon: 'rusun-baru',
        isNew: true,
      },
      {
        title: 'Wisata',
        desc: 'Kami menyediakan beberapa layanan rekomendasi wisata yang dapat anda nikmati bersama orang tersayang, seperti Taman Rusa dan Pulau Galang',
        icon: 'wisata',
        isNew: true,
      },
      {
        title: 'Fasilitas Umum',
        desc: 'Fasilitas Umum',
        icon: 'fasilitas-umum',
        isNew: true,
      },
      {
        title: 'Rusun',
        desc: 'Rusun',
        isNew: true,
      },
    ]
    commit('setServices', services)
  }
}