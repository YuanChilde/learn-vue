module.exports = {
  plugins: [
    // 加载组件样式
    [
      "import",
      { libraryName: "ant-design-vue", libraryDirectory: "es", style: true }
    ]
  ],
  presets: ["@vue/app"]
};
