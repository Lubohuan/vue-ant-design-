/**
 * Created by pc on 2018/6/19.
 */
import Vue from 'vue'

import {
  SET_NAME,
  SET_LOGINMSG,
  SET_COLOR,
  SET_ROUTE,
  SET_OPENKEYS
} from './mutationTypes'
export default {
  [SET_NAME] (state, name) {
    state.name = name
  },
  [SET_LOGINMSG] (state, login_msg) {
    state.login_msg = login_msg
  },
  [SET_COLOR]: (state, color) => {
    state.color = color
  },
  [SET_ROUTE]: (state, route) => {
    state.route = route
  },
  [SET_OPENKEYS]: (state, open_keys) => {
    state.open_keys = open_keys
  },
}
