<template>
    <section>
        Filter
    </section>
    <section>
        <div class="controls">
            <button>Refresh</button>
            <router-link to="/register">Register as Teacher</router-link>
        </div>
        <ul v-if="hasCoaches">
            <CoachItem v-for="coach in filteredCoaches" :key="coach.id" :id="coach.id" :first-name="coach.firstName" :last-name="coach.lastName" :rate="coach.hourlyRate" :areas="coach.areas"/>
        </ul>
        <h3 v-else>We are sorry but there are no teachers available :(</h3>
    </section>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';

export default {
    components:{
        CoachItem
    },
    computed: {
        filteredCoaches() {
            return this.$store.getters['coaches/coaches']; //namespace first --- getters name second
        },
        hasCoaches() {
            return this.$store.getters['coaches/hasCoaches']; //namespace first --- getters name second
        }
    }
}
</script>