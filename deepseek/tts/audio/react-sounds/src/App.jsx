import { useState, useRef } from 'react'
import './App.css'

function App() {
  // 火山引擎tts 配置文件
  const TOKEN = 'PlWGFwzqO3WW6uB-BCQOauoZAHHkCmRL';
  const APP_ID = '6281051617';
  const CLUSTER_ID = 'volcano_tts';

  //代码的可读性高于一切
  const [prompt, setPrompt] = useState('大家好我是智能语音助手，我可以为您提供帮助')
  // react use 开头 ref hook 可以获取 DOM 元素
  const audioPlayer = useRef(null)
  console.log(audioPlayer, '////');
  const playMusic = () => {
    console.log(audioPlayer, '+++');
    console.log('play music');
    audioPlayer.current.play();
  }

  const generateAudio = () => {
    // 女性
    const voiceName = 'zh_female_shuangkuaisisi_moon_bigtts'
    const endpoint = '/tts/api/v1/tts'

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    }
  }
  return (
    <div className='container'>
      <div>
        <label>Promot</label>
        <buttun onClick={generateAudio}>生成并播放</buttun>
        <textarea
          className='input'
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        >

        </textarea>
      </div>
      <audio ref={audioPlayer} src="/sounds/snare.wav"></audio>
      {/* <button onClick={playMusic}>播放</button> */}
    </div>
  )
}

export default App