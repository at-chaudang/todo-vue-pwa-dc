<template>
  <div class="login-form">
    <div class="main-container">
      <h3>Sign in</h3>
      <div class="form-group">
        <input type="text" placeholder="Email" class="form-control">
      </div>
      <div class="form-group">
        <input type="password" placeholder="Password" class="form-control">
      </div>
      <button class="btn btn-primary">Login In</button>

      <p class="text-small text-center mt-1">You don't have a account? You can create one</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return{};
  }
}
</script>
