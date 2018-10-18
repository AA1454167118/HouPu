import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import getters from './getters'
import permission from './modules/permission'
import $publicService from './modules/publicService'
import $demo from './modules/demo'
import $todos from './modules/todos'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    permission,
    $publicService,
    $demo,
    $todos
  },
  getters
})

export default store
