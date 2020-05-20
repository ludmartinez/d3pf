<template>
  <div>
    <h1>Heroes List</h1>
    <b-table
      dark
      :items="heroes"
      :fields="fields"
      hover
      small
      striped
      stacked="sm"
    >
      <template v-slot:cell(name)="data">
        <hero-ico :hero="data.item"></hero-ico>
      </template>

      <template v-slot:cell(class)="data">
        <hero-class-level
          :hero="{ class: data.item.class, level: data.item.level }"
        />
      </template>
      <template v-slot:cell(kills)="data">
        <span>{{ data.item.kills.elites | formatNumber }}</span>
      </template>
    </b-table>
  </div>
</template>

<script>
import HeroIco from './HeroIco'
import HeroClassLevel from './HeroClassLevel'
import { formatNumber } from '@/filters/numeral'

export default {
  name: 'HeroesList',

  props: {
    heroes: {
      type: Array,
      required: true
    }
  },

  components: {
    HeroIco,
    HeroClassLevel
  },

  filters: { formatNumber },

  data () {
    return {
      fields: [
        { key: 'name', label: 'Name' },
        { key: 'class', label: 'Class', sortable: true },
        { key: 'kills', label: 'Elite Kills', sortable: true }
      ]
    }
  }
}
</script>
