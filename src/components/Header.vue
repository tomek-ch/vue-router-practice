<template>
  <header class="header">
    <router-link to="/">
      <h1>crud</h1>
    </router-link>
    <router-link to="/new" class="btn">
      Add post
    </router-link>
  </header>
</template>

<style>
  a {
    text-decoration: none;
    color: inherit;
    font-size: inherit;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1em;
  }
</style>