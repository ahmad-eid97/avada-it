<template>
    <div class="home">
        <app-faq-heading></app-faq-heading>
        <app-faq-faqs></app-faq-faqs>
    </div>
</template>

<script>
import AppFaqFaqs from '../../components/faq/AppFaqFaqs.vue'
import AppFaqHeading from '../../components/faq/AppFaqHeading.vue'
export default {
  name: 'Faq',
  components: { AppFaqHeading, AppFaqFaqs },
  async asyncData({ $axios }) {
    const events = {}
    const EVENTS_RES = await $axios.get('/faqs');

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