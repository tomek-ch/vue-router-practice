<template>
  <div>
    <div v-for="post in posts" :key="post.id" class="item">
      <router-link :to="`/post/${post.id}`" class="title">
        {{ post.title }}
      </router-link>
      <div class="btns">
        <router-link :to="`/post/${post.id}/edit`" class="btn">
          Edit
        </router-link>
        <button @click="$emit('delete-post', post.id)">
          Delete
        </button>
      </div>
    </div>
    <div v-if="!posts.length">No posts yet.</div>
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
  align-items: center;
  margin: 1em 0;
  gap: 1em;
}

.title {
  font-size: 1.2em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.btns {
  display: flex;
  gap: 0.5em;
}
</style>
