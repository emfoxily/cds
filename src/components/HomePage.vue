<template>
  <div class="container">
    <MainHeader />
    <LapHeader />
    <TabHeader />
    <DeskAcc />
    <LapAcc />
    <TabAcc />
    <DeskBirthday />
    <LapBirthday />
    <TabBirthday />
  </div>
</template>

<script>

import MainHeader from './headers/MainHeader.vue'
import LapHeader from './headers/LapHeader.vue'
import TabHeader from './headers/TabHeader.vue'

import DeskBirthday from './birthday/DeskBirthday.vue'
import LapBirthday from './birthday/LapBirthday.vue'
import TabBirthday from './birthday/TabBirthday.vue'

import DeskAcc from './account/DeskAcc.vue'
import LapAcc from './account/LapAcc.vue'
import TabAcc from './account/TabAcc.vue'

export default {
  name: 'HomePage',
  components: {
    MainHeader,
    LapHeader,
    TabHeader,
    DeskBirthday,
    DeskAcc,
    LapAcc,
    TabAcc,
    LapBirthday,
    TabBirthday
  }
}
</script>

<style scoped>

.container {
  margin-top: 12vh;
}

</style>