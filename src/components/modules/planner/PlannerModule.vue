<template lang='pug'>
v-content
  // div.plannerContent
  planner2d(v-if="!plannerViewState" :key="activeApi")
  planner3d(v-if="plannerViewState" :key="activeApi")
</template>

<script>
import Planner2d from './Planner2d'
import Planner3d from './Planner3d'

export default {
  name: 'PlannerModule',
  data () {
    return {
    }
  },

  computed: {
    activeApi () { return this.$store.state.activeApi },
    plannerViewState () { return this.$store.state.planner.viewState }
  },

  components: {
    Planner2d,
    Planner3d
  }
}
</script>

<style scoped>
.plannerContent {
  position:fixed !important;
  position:absolute;
  top:0;
  right:0;
  bottom:0;
  left:0;
}
</style>
