<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <IncreView/>
    <!-- <BlogPost/>
    <BlogPost title="blog" cnt="15"/>
    <BlogPost :blog="blog"/> -->
    <div :style="{ fontSize: postFontSize + 'em'}">
      <BlogPost v-for="post in posts" :key="post.id" v-bind="post" @enlarge-text="postFontSize += 0.1" @small-text="(postFontSize -= 0.1)"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import IncreView from '@/components/IncreView.vue'
import BlogPost from '@/components/BlogPost.vue'

export default {
  name: 'HomeView',
  components: {
    IncreView,
    BlogPost
  },
  data(){
    return { 
      postFontSize: 1,
      blog:{title:'spring', cnt:20 },
      posts:[
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
      ]
    }
  }
}
</script>
