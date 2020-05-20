<template>
  <div>
    <base-loading
      v-if="isLoading"
      :show="isLoading"
      spinnerVariant="dark"
      :no-wrap="false"
    ></base-loading>
    <h1>Profile View</h1>
    <template v-if="!isLoading">
      <main-block :profile-data="profileData"></main-block>
    </template>
  </div>
</template>

<script>
import { getApiAccount } from '@/api/search'
import setError from '@/mixins/setError'
import MainBlock from '@/views/Profile/MainBlock/Index'

export default {
  name: 'ProfileView',

  mixins: [setError],

  components: {
    MainBlock
  },

  data () {
    return {
      isLoading: false,
      profileData: null
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
