<template>
  <div class="flex items-center p-5 justify-center">
    <div class="logo">
      <img src="~/assets/logo.png" alt="logo" width="125" />
    </div>

    <nav class="flex-1 text-left bg-red-400">
      <ul class="inline-block list-none">
        <li class>
          <a href>Home</a>
        </li>
        <li>
          <a href>Produts</a>
        </li>

        <li>
          <a href>About</a>
        </li>

        <li>
          <a href>Contact</a>
        </li>

        <li>
          <a href>Account</a>
        </li>
      </ul>
    </nav>

    <img src="~/assets/cart.png" alt width="30px" />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
nav ul li {
  display: inline-block;
  margin-right: 20px;
}
a {
  text-decoration: none;
  color: #555;
}
p {
  color: #555;
}
</style>