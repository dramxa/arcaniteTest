import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    _glb_currentSection : 'all',
    _glb_address        : null,
    _glb_authorize      : false,
  },
  getters: {
    glb_currentSection : state => state._glb_currentSection,
    glb_address        : state => state._glb_address,
    glb_authorize      : state => state._glb_authorize,
  },
  actions: {
    glb_setCurrentSection({commit}, value){
      commit("GLB_SET_CURRENT_SECTIONS", value);
    },
    glb_setAddress({commit}, value){
      commit("GLB_SET_ADDRESS", value);
    },
    glb_setAuthorize({commit}, value){
      commit("GLB_SET_AUTHORIZE", value);
    },
  },
  mutations: {
    GLB_SET_CURRENT_SECTIONS(state, value){
      state._glb_currentSection = value;
    },
    GLB_SET_ADDRESS(state, value){
      state._glb_address = value;
    },
    GLB_SET_AUTHORIZE(state, value){
      state._glb_authorize = value;
    },
  }
})
