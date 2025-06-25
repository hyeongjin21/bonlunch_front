import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // 1.
  base : '/',
  plugins: [react()],
  // 2. server의 proxy 설정
  // react : 5173 port  -> spring : 8088 port
  // Cross-origin으로 간주하고 이를 차단 : CORS 오류
  server : {
    proxy:{
      '/api' : 'http://localhost:8088'
    }
  }
})
