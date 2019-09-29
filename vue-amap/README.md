# vue-amap
学习使用 amap api

## vue 项目中使用高德地图总结
最近重构了公司的中后台管理系统，老系统中使用到了高德地图，本来想用 vue-amap 基于 Vue 2.x 与高德的地图组件，但是在实际使用中发现很不方便，要同时学习 amap 的文档和原生高德API文档，加大了复杂度，不如直接使用原生开发

## 引入高德地图 SDK
1. 传统的方式

```html
<head>
    <script type="text/javascript" src="https://webapi.amap.com/maps?v=1.4.15&key=你的高德地图的key"></script>
</head>
```
将高德地图通过 cdn 的形式引入到项目的 index.html 文件中，然后即可全局调用 AMap

项目中其实只有几处需要用到地图，并不需要全局引入，在index文件中引入js会明显拖慢首屏加载速度，虽然可以使用异步加载script的方式解决，但是始终觉得不够优雅。

2. 异步引入（推荐）

创建一个AMap.js，路径：'src/a-map.js' 路径可以根据自己的路径放

```js
// a-map.js
export default function MapLoader () {
  return new Promise((resolve, reject) => {
    if (window.AMap) {
      resolve(window.AMap)
    } else {
      var script = document.createElement('script')
      script.type = 'text/javascript'
      script.async = true
      script.src ='http://webapi.amap.com/maps?v=1.4.11&callback=initAMap&key=你的高德地图的key'
      script.onerror = reject
      document.head.appendChild(script)
    }
    window.initAMap = () => {
      resolve(window.AMap)
    }
  })
}
```