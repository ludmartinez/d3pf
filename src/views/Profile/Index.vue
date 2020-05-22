<template>
  <div>
    <base-loading
      v-if="isLoading"
      :show="isLoading"
      variant="transparent"
      spinnerVariant="light"
      :no-wrap="false"
      class="py-5"
    ></base-loading>
    <template v-if="!isLoading">
      <main-block :profile-data="profileData"></main-block>
      <artisan-block :artisans-data="artisansData"></artisan-block>
    </template>
  </div>
</template>

<script>
import { getApiAccount } from '@/api/search'
import setError from '@/mixins/setError'
import MainBlock from '@/views/Profile/MainBlock/Index'
import ArtisanBlock from './MainBlock/ArtisanBlock/Index'

export default {
  name: 'ProfileView',

  mixins: [setError],

  components: {
    MainBlock,
    ArtisanBlock
  },

  data () {
    return {
      isLoading: false,
      profileData: null
    }
  },

  computed: {
    artisansData () {
      return {
        blacksmith: this.profileData.blacksmith,
        blacksmithHardcore: this.profileData.blacksmithHardcore,
        jeweler: this.profileData.jeweler,
        jewelerHardcore: this.profileData.jewelerHardcore,
        mystic: this.profileData.mystic,
        mysticHardcore: this.profileData.mysticHardcore
      }
    }
  },

  created () {
    this.isLoading = true
    const { region, battleTag: account } = this.$route.params
    this.fetchData(region, account)
  },

  methods: {
    async fetchData (region, account) {
      try {
        const { data } = await getApiAccount({ region, account })
        this.profileData = data
      } catch (error) {
        this.profileData = null
        const errObj = {
          routeParams: this.$route.params,
          message: error.message
        }
        if (error.response) {
          errObj.data = error.response.data
          errObj.status = error.response.status
        }
        this.setApiErr(errObj)
        this.$router.push({ name: 'Error' })
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>
