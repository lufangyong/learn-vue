// 高德 map https://webapi.amap.com/maps?v=1.4.11&key=你的高德地图的key
export default function MapLoader() {
  return new Promise((resolve, reject) => {
    if (window.AMap) {
      resolve(window.AMap)
    } else {
      const script = document.createElement('script')
      const key = ''
      script.type = 'text/javascript'
      script.async = true
      script.src = `http://webapi.amap.com/maps?v=1.4.11&callback=initAMap&key=${key}`
      script.onerror = reject
      document.head.appendChild(script)
    }
    window.initAMap = () => {
      resolve(window.AMap)
    }
  })
}
