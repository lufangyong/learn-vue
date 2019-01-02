import Vue from 'vue'
import SvgIcon from '../components/SvgIcon'

Vue.component('svg-icon', SvgIcon)
const files = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)

requireAll(files)
