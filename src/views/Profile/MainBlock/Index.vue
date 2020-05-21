<template>
  <div class="grid-container">
    <div class="grid-item item-left">
      <top-heroes v-if="hasHeroes" :heroes="topHeroes"></top-heroes>
      <heroes-list v-if="hasHeroes" :heroes="heroesList"></heroes-list>
      <progress-list :acts="profileData.progression"></progress-list>
    </div>
    <div class="grid-item item-right">
      <player-stats :stats="statsData"></player-stats>
    </div>
  </div>
</template>

<script>
import TopHeroes from '@/views/Profile/MainBlock/TopHeroes/Index'
import HeroesList from '@/views/Profile/MainBlock/HeroesList/Index'
import ProgressList from '@/views/Profile/MainBlock/ProgressList/Index'
import PlayerStats from '@/views/Profile/MainBlock/PlayerStats/Index'

export default {
  name: 'MainBlock',

  components: { TopHeroes, HeroesList, ProgressList, PlayerStats },

  props: {
    profileData: {
      type: Object,
      required: true
    }
  },

  computed: {
    // Comprobamos que hay héroes
    hasHeroes () {
      return this.profileData.heroes.length > 0
    },
    // Devolvemos los 3 primeros
    topHeroes () {
      return this.profileData.heroes.slice(0, 3)
    },
    hasHeroesList () {
      return this.profileData.heroes.length > 3
    },
    heroesList () {
      return this.profileData.heroes.slice(3,
        this.profileData.heroes.length)
    },
    statsData () {
      const { paragonLevel, kills, timePlayed } = this.profileData
      return { paragonLevel, kills, timePlayed }
    }
  }
}
</script>

<style lang="stylus">
.grid-container {
  display: grid;
  grid-template-columns: 1fr;

  .grid-item {
    &.item-left {
      grid-column: span 1;
    }

    &.item-right {
      grid-column: span 1;
    }
  }
}

@media (min-width: 992px) {
  .grid-container {
    display: grid;
    grid-template-columns: repeat(6, 1fr);

    .grid-item {
      &.item-left {
        grid-column: span 4;
      }

      &.item-right {
        grid-column: span 2;
      }
    }
  }
}
</style>
