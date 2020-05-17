<template>
  <b-overlay
    :show="show"
    :variant="variant"
    :bg-color="bgColor"
    :opacity="opacity"
    :blur="blur"
    :rounded="rounded"
    :no-wrap="noWrap"
    :z-index="zIndex"
    :spinner-type="spinnerType"
    :spinner-variant="spinnerVariant"
  >
    <template v-slot:overlay="props">
      <div class="text-center">
        <b-spinner :variant="props.spinnerVariant" :type="props.spinnerType" label="Loading" />
        <h3 :class="`text-${props.spinnerVariant}`">Loading</h3>
      </div>
    </template>
  </b-overlay>
</template>

<script>
export default {
  name: 'BaseLoading',

  props: {
    show: Boolean,
    variant: {
      type: String,
      validator: function (value) {
        return [
          'primary',
          'success',
          'secondary',
          'warning',
          'danger',
          'info',
          'light',
          'dark'
        ]
          .indexOf(value) !== -1
      }
    },
    bgColor: String,
    opacity: [Number, String],
    blur: String,
    rounded: [Boolean, String],
    noWrap: {
      type: Boolean,
      default: true
    },
    zIndex: [String, Number],
    spinnerType: {
      type: String,
      validator: function (value) {
        return ['border', 'grow'].indexOf(value) !== -1
      }
    },
    spinnerVariant: {
      type: String,
      validator: function (value) {
        return [
          'primary',
          'success',
          'secondary',
          'warning',
          'danger',
          'info',
          'light',
          'dark'
        ]
          .indexOf(value) !== -1
      }
    }
  }
}
</script>
