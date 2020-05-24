<template>
  <div class="hero-view">
    <base-loading
      :show="isLoading"
      variant="transparent"
      spinnerVariant="light"
      :no-wrap="false"
      class="py-5"
      v-if="isLoading"
    ></base-loading>

    <hero-detail-header v-if="hero" :detail="detailHeader"></hero-detail-header>

    <b-row>
      <!-- 12 columnas de 'xs' -> 'md', 8 columnas desde 'lg' hacia arriba  -->
      <!-- En 'lg' orden 2 -->
      <b-col md="12" lg="8" order-lg="2">
        <base-loading
          :show="isLoading"
          variant="transparent"
          spinnerVariant="light"
          :no-wrap="false"
          class="py-5"
          v-if="isLoading"
        ></base-loading>
        <hero-items v-if="items" :items="items" />
      </b-col>

      <!-- 12 columnas de 'xs' -> 'md', 4 columnas desde 'lg' hacia arriba -->
      <!-- En 'lg' orden 1 -->
      <b-col md="12" lg="4" order-lg="1">
        <template v-if="hero">
          <hero-attributes :attributes="detailStats" />
          <hero-skills :skills="hero.skills" />
        </template>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import setError from '@/mixins/setError'
import { getApiHero, getApiDetailedHeroItems } from '../../api/search'
import HeroDetailHeader from './HeroDetailHeader'
import HeroSkills from './HeroSkills/Index'
import HeroAttributes from './HeroAttributes/Index'
import HeroItems from './HeroItems/Index'

export default {
  name: 'HeroView',

  mixins: [setError],

  components: {
    HeroDetailHeader,
    HeroSkills,
    HeroAttributes,
    HeroItems
  },

  data () {
    return {
      isLoading: false,
      hero: null,
      items: null
    }
  },

  computed: {
    detailHeader () {
      const {
        name,
        // valor: alias
        class: classSlug,
        gender,
        level,
        hardcore,
        seasonal,
        paragonLevel,
        alive,
        seasonCreated
      } = this.hero

      return {
        name,
        classSlug,
        gender,
        level,
        hardcore,
        seasonal,
        paragonLevel,
        alive,
        seasonCreated
      }
    },

    detailStats () {
      return {
        ...this.hero.stats,
        classSlug: this.hero.class
      }
    }
  },

  async created () {
    const { region, battleTag: account, heroId } = this.$route.params
    this.isLoading = true

    try {
      const [{ data: hero }, { data: items }] = await Promise.all([
        getApiHero({ region, account, heroId }),
        getApiDetailedHeroItems({ region, account, heroId })
      ])
      this.hero = hero
      this.items = items
    } catch (error) {
      this.hero = null
      this.items = null

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
</script>
