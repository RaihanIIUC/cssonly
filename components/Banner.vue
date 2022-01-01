<template>
  <div>
    <!-- title div part  -->
    <div class="flex flex-col py-5">
      <div class="basis-full bg-red-300">
        <h1>Find your perfect match at HM Weedings</h1>
        <p>Trusted Matrimony & Matchmaking Services</p>
      </div>
    </div>

    <!-- register box with picture div  -->

    <Form />
  </div>
</template>
<script>
import Form from '../components/Form'
export default {
  components: {
    Form,
  },
}
</script>