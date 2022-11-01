<template>
    <div class="home">
        <app-blogs-heading></app-blogs-heading>
        <app-blogs-items></app-blogs-items>
    </div>
</template>

<script>
import AppBlogsHeading from '../../components/blogs/AppBlogsHeading.vue'
import AppBlogsItems from '../../components/blogs/AppBlogsItems.vue'
export default {
  name: 'Blogs',
  components: { AppBlogsHeading, AppBlogsItems },
  async asyncData({ $axios }) {
    const events = {}
    const EVENTS_RES = await $axios.get('/blogs');

    console.log(EVENTS_RES.data.data.events)

    if (EVENTS_RES.success) events = EVENTS_RES.data

    return {
        events
    }
  },
  mounted() {
  }
}
</script>

<style>

</style>