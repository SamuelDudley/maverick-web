import Vue from 'vue'
import Vuex from 'vuex'
import cockpit from './modules/cockpit'
import planner from './modules/planner'
import config from './modules/config'
import analysis from './modules/analysis'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    cockpit,
    planner,
    config,
    analysis
  },
  state: {
    navDrawer: true,
    navColor: null,
    navState: true,
    navIcon: false,
    fullScreen: false,
    moduleName: null,
    apis: {
      'fc': 'Local Flight Controller',
      'sitl': 'Local SITL Simulator'
    },
    activeApi: 'sitl',
    bingMapsKey: 'AgXa-GFmIi0y2SeDifLy5FsDF2V6cVINsnrAT9RtBLdsOGkStZSXL_MBwATgvyO6'
  },
  mutations: {
    setNavColor (state, color) {
      state.navColor = color
    },
    setNavIcon (state, value) {
      state.navIcon = value
    },
    setNavDrawer (state, value) {
      state.navDrawer = value
    },
    setApi (state, api) {
      state.activeApi = api
    },
    setNavState (state, value) {
      state.navState = value
    },
    setFullScreen (state, value) {
      state.fullScreen = value
    },
    setModuleName (state, value) {
      state.moduleName = value
    }
  }
})
