<template>
    <DeskNav />
    <LapNav />
    <TabNav />
</template>

<script>

    import DeskNav from '../components/navigation/DeskNav.vue'
    import LapNav from '../components/navigation/LapNav.vue'
    import TabNav from '../components/navigation/TabNav.vue'

    export default {
        name: 'NavBar',
        components: {
            DeskNav,
            LapNav,
            TabNav
        }
    }

</script>