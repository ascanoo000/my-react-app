import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>歡迎來到王鼎元的網站</h1>
      <p>先來自我介紹</p>

      <h2>個人資訊</h2>
      <table>
        <tr>
          <th>名稱</th>
          <th>年齡</th>
        </tr>
        <tr>
          <td>王鼎元</td>
          <td>20</td>
        </tr>
      </table>

      <p>目前就讀 淡江大學資訊管理系3年C班</p>

      <strong>這是我。</strong>
      <img src="me.jpg" alt="五專時的我" />

      <p>我從台北商業技術學院五專財金畢業才轉來這的，第一次接觸程式，對程式非常陌生</p>

      <div id="選擇資管系的原因" />
      <p className="title">
        選擇資管系的原因
      </p>

      <div className="選擇資管系的原因" />
      <p className="title">
        一
      </p>
      想學財金以外的科系

      <div className="選擇資管系的原因">
        <p className="title">
          二
        </p>
        哥哥讀資工的，我多少對程式有興趣
      </div>

      <div>
        <h2>我最喜歡的直播主</h2>
        <p>他也是我朋友 <em>@mobiibii</em></p>
        <a href="https://www.twitch.tv/mobiibii">點擊了解更多</a>

        <h2>我最喜歡的水果</h2>
        <ul>
          <li>芒果</li>
          <li>葡萄</li>
        </ul>
      </div>
    </>
  )

}

export default App
