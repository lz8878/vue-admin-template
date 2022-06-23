const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack(config) {
    // SVG 图标
    const svgIconPath = path.join(__dirname, 'src/icons/svg')

    config.module
      .rule('svg')
        .exclude
          .add(svgIconPath)
          .end()

    config.module
      .rule('svg-icons')
        .test(/\.svg$/)
        .include
          .add(svgIconPath)
          .end()
        .use('svg-sprite-loader')
          .loader('svg-sprite-loader')
          .options({
            symbolId: 'icon-[name]'
          })
          .end()
        .use('svgo-loader')
          .loader('svgo-loader')
          .options({
            plugins: [
              'preset-default',
              'removeXMLNS',
              {
                name: 'removeAttrs',
                params: {
                  attrs: [
                    'class',
                    'data-name',
                    'fill',
                  ],
                },
              },
            ]
          })
          .end()
  },
})
