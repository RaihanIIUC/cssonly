<template>
  <header>
    <div class="m-auto px-6 max-w-screen-xl bg-gray-400">
      <!-- navbar -->
      <Navbar />
      <!-- banner -->
      <Banner />
    </div>
  </header>
</template>

<script>
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'

export default {
  components: {
    Navbar,
    Banner,
  },
}
</script>