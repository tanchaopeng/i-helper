/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  productionSourceMap: false,
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'development') {
      config.devtool = 'eval-source-map';
    } else {
      config.optimization.minimizer[0].options.terserOptions.warnings = false;
    }
  },
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        productName: 'IHelper',
        appId: 'com.onaug6th.app',
        copyright: 'onaug6th',
        compression: 'store',
        win: {
          target: ['nsis', 'zip']
        },
        nsis: {
          // 一键安装
          oneClick: false,
          // 注册表名
          // guid: 'xxxx',
          // 是否开启安装时权限限制（此电脑或当前用户）
          perMachine: true,
          // 允许请求提升。 如果为false，则用户必须使用提升的权限重新启动安装程序。
          allowElevation: true,
          // 允许修改安装目录
          allowToChangeInstallationDirectory: true,
          // 安装图标
          // installerIcon: './build/icons/aaa.ico',
          // 卸载图标
          // uninstallerIcon: './build/icons/bbb.ico',
          // 安装时头部图标
          // installerHeaderIcon: './build/icons/aaa.ico',
          // 创建桌面图标
          createDesktopShortcut: true,
          // 创建开始菜单图标
          createStartMenuShortcut: true,
          // 图标名称
          shortcutName: 'iHelper'
        }
      }
    },
    'style-resources-loader': {
      preProcessor: 'less',
      // 引入全局样式变量
      patterns: [path.resolve(__dirname, 'src/less/index.less')]
    }
  },
  devServer: {
    port: 9527,
    overlay: {
      warnings: true,
      errors: true
    }
  }
};
