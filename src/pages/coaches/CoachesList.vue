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
            <li v-for="coach in filteredCoaches" :key="coach.id">
                {{ coach.firstName }}
            </li>
        </ul>
        <h3 v-else>We are sorry but there are no teachers available :(</h3>
    </section>
</template>

<script>
export default {
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