<template>
    <DeskNav />
    <LapNav />
    <TabNav />
    <PhoneNav />
</template>

<script>

    import DeskNav from '../components/navigation/DeskNav.vue'
    import LapNav from '../components/navigation/LapNav.vue'
    import TabNav from '../components/navigation/TabNav.vue'
    import PhoneNav from './navigation/PhoneNav.vue'

    export default {
        name: 'NavBar',
        components: {
            DeskNav,
            LapNav,
            TabNav,
            PhoneNav
        }
    }

</script>