// // requires and returns all modules that match
// const requireAll = requireContext => requireContext.keys().map(requireContext);
//
// // import all svg
// const req = require.context('./svg', true, /\.svg$/);
// requireAll(req);

import Vue from 'vue'
import SvgIcon from '../components/SvgIcon'

Vue.component('svg-icon', SvgIcon)
const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)

requireAll(req)
