<template>
    <div class="home">
        <app-services-heading></app-services-heading>
        <app-services-items></app-services-items>
    </div>
</template>

<script>
import AppServicesHeading from '../../components/services/AppServicesHeading.vue'
import AppServicesItems from '../../components/services/AppServicesItems.vue'
export default {
  name: 'Services',
  components: { AppServicesHeading, AppServicesItems },
  async asyncData({ $axios }) {
    const events = {}
    const EVENTS_RES = await $axios.get('/services');

    console.log(EVENTS_RES.data.data.events)

    if (EVENTS_RES.success) events = EVENTS_RES.data

    return {
        events
    }
  },

}
</script>

<style>

</style>