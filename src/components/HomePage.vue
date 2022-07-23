<template>
  <div class="container">
    <MainHeader />
    <LapHeader />
    <TabHeader />
    <PhoneHeader />
    <DeskAcc />
    <LapAcc />
    <TabAcc />
    <PhoneAcc />
    <DeskBirthday />
    <LapBirthday />
    <TabBirthday />
    <PhoneBirthday />
  </div>
</template>

<script>

import MainHeader from './headers/MainHeader.vue'
import LapHeader from './headers/LapHeader.vue'
import TabHeader from './headers/TabHeader.vue'
import PhoneHeader from './headers/PhoneHeader.vue'

import DeskBirthday from './birthday/DeskBirthday.vue'
import LapBirthday from './birthday/LapBirthday.vue'
import TabBirthday from './birthday/TabBirthday.vue'
import PhoneBirthday from './birthday/PhoneBirthday.vue'

import DeskAcc from './account/DeskAcc.vue'
import LapAcc from './account/LapAcc.vue'
import TabAcc from './account/TabAcc.vue'
import PhoneAcc from './account/PhoneAcc.vue'

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
    TabBirthday,
    PhoneHeader,
    PhoneAcc,
    PhoneBirthday
}
}
</script>

<style scoped>

.container {
  margin-top: 12vh;
}

</style>