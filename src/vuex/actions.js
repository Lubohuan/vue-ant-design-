
import {
  SET_NAME,
  SET_LOGINMSG,
  SET_COLOR,
  SET_ROUTE,
  SET_OPENKEYS
} from './mutationTypes'
export default {
  ColorAsyn ({ commit }, color) {
    commit('SET_COLOR', color)
  },
  RouteAsyn ({ commit }, route) {
    commit('SET_ROUTE', route)
  },
  OpenKeysAsyn ({ commit }, open_keys) {
    commit('SET_OPENKEYS', open_keys)
  },
}
