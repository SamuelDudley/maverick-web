<template lang='pug'>
div#fullscreen
  v-app(:class="{'theme--dark': themeType}")
    v-fade-transition(mode="out-in")
      keep-alive(include="PlannerModule") // cache the planner module to prevent from being destroyed on component change
        router-view
    top-nav(v-if="navState" :key="activeApi")
    // bottom-nav(v-if="navState && $vuetify.breakpoint.smAndDown")
  action-button(v-if="this.moduleName !== 'home'" :class="{'theme--dark': themeType}")
</template>

<script>
import BottomNav from './components/common/BottomNav'
import TopNav from './components/common/TopNav'
import ActionButton from './components/common/ActionButton'
export default {
  components: { BottomNav, TopNav, ActionButton },
  data () {
    return {
      themeType: true
    }
  },
  computed: {
    activeApi () { return this.$store.state.activeApi },
    moduleName () {
      switch (true) {
        case /^\/cockpit/.test(this.$store.state.route.path): this.$store.commit('setModuleName', 'cockpit'); break
        case /^\/planner/.test(this.$store.state.route.path): this.$store.commit('setModuleName', 'planner'); break
        case /^\/config/.test(this.$store.state.route.path): this.$store.commit('setModuleName', 'config'); break
        case /^\/analysis/.test(this.$store.state.route.path): this.$store.commit('setModuleName', 'analysis'); break
        default: this.$store.commit('setModuleName', 'home')
      }
      switch (this.$store.state.moduleName) {
        case 'cockpit': this.$store.commit('setNavColor', 'mavblue'); this.$store.commit('setNavIcon', false); break
        case 'planner': this.$store.commit('setNavColor', 'mavorange'); this.$store.commit('setNavIcon', false); break
        case 'config': this.$store.commit('setNavColor', 'mavpurple'); this.$store.commit('setNavIcon', true); break
        case 'analysis': this.$store.commit('setNavColor', 'mavgreen'); this.$store.commit('setNavIcon', false); break
        default: this.$store.commit('setNavColor', null); this.$store.commit('setNavIcon', false)
      }
      return this.$store.state.moduleName
    },
    navState () {
      return (this.moduleName === 'home') ? false : this.$store.state.navState // Return false if home screen, otherwise from vuex state
    }
  },
  name: 'App'
}
</script>
