<template>
  <Header class="container"/>
  <router-view
    :posts="posts"
    class="container"
    @add-post="addPost"
    @delete-post="remove"
    @edit-post="edit"
  />
</template>

<script>
import Header from "./components/Header";

export default {
  name: 'App',
  components: {
    Header,
  },
  data() {
    return {
      posts: JSON.parse(localStorage.getItem("posts")) || [],
    }
  },
  methods: {
    addPost(data) {
      const id = Date.now();
      this.posts = [...this.posts, { ...data, id, }];
      this.$router.push(`/post/${id}`);
    },
    remove(id) {
      this.posts = this.posts.filter(post => post.id !== id);
    },
    edit(id, data) {
      this.posts = this.posts.map(post => post.id === id ? {
        ...post,
        ...data,
      } : post);

      this.$router.push(`/post/${id}`);
    },
  },
  watch: {
    posts(posts) {
      localStorage.setItem("posts", JSON.stringify(posts));
    },
  },
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.5;
  padding: 2em;
}

.container {
  max-width: 500px;
  margin: auto;
}

button, .btn {
  padding: 0.5em 1em;
  border-radius: 5px;
  border: none;
  background-color: #ddd;
  outline: none;
  font-size: inherit;
}

button:hover:not(:disabled), .btn:hover:not(:disabled) {
  background-color: #ccc;
}

input:hover, textarea:hover {
  background-color: #ccc;
}

input, textarea {
  outline: none;
  font-size: inherit;
}

textarea {
  resize: none;
}

input, textarea {
  flex-grow: 1;
  padding: 0.5em;
  border: none;
  background-color: lightgray;
  border-radius: 5px;
  font-size: inherit;
  outline: none;
  flex-shrink: 1;
  width: 100%;
  font-family: inherit;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1em;
}

input:focus-visible {
  box-shadow: 0 0 0 2px dodgerblue;
}

button:focus-visible {
  box-shadow: 0 0 0 2px dodgerblue;
}
</style>
