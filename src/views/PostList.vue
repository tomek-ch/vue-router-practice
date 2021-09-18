<template>
  <div>
    <div v-for="post in posts" :key="post.id" class="item">
      <router-link :to="`/post/${post.id}`">
        {{ post.title }}
      </router-link>
      <button @click="$emit('delete-post', post.id)">
        Delete
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostList',
  props: ['posts'],
  emits: ['delete-post'],
};
</script>

<style scoped>
.item {
  display: flex;
  justify-content: space-between;
  margin: 1em 0;
}

.item a {
  font-size: 1.2em;
}
</style>
