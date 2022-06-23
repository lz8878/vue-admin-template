import SvgIcon from '@/components/SvgIcon'

const requireAll = requireContext => requireContext.keys().forEach(requireContext)
requireAll(require.context('@/icons/svg', false, /\.svg$/))

export function setupIcon(app) {
  app.component('svg-icon', SvgIcon)
}
