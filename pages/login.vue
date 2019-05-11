<template>
  <section class="full-screen">
    <header class="description-wrapper">
      <h1 class="description">Easy to Manage Your Event</h1>
    </header>
    <section class="form-wrapper">
      <h2>Login</h2>
      <v-text-field color="white" dark label="ID"/>
      <v-text-field color="white" dark label="Password"/>
      <v-btn color="#707070" dark depressed large>Login</v-btn>
      <nuxt-link class="forgot-pw-text" to="forgot">Forgot your password</nuxt-link>
    </section>
    <nav>
      <div class="link-wrapper">
        <a class="link" href>Facebook</a>
        <a class="link" href>Instagram</a>
        <a class="link" href>Contact</a>
      </div>
    </nav>
  </section>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style scoped>
.full-screen {
  width: 100%;
  height: 100%;
  background: url(/img_backgorund.png) no-repeat bottom;
  background-size: cover;
}

.full-screen::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.5;
}

.description-wrapper {
  position: absolute;
  top: 84px;
  left: 84px;
  width: 360px;
  z-index: 1;
}

.description {
  color: white;
  font-size: 80px;
  line-height: 90px;
}

.form-wrapper {
  position: absolute;
  right: 168px;
  bottom: 168px;
  width: 360px;
  z-index: 1;
}

h2 {
  color: white;
  font-size: 28px;
}

.forgot-pw-text {
  margin: 0 16px;
  color: #bcbcbc;
  font-size: 20px;
}

nav {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 80px;
  background-color: #fff;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.link-wrapper {
  display: flex;
  transform: rotate(90deg);
}

.link {
  margin: 0 24px;
  color: #292929;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
}
</style>
