import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: './', // 關鍵：讓生成的 index.html 使用相對路徑，避免在子目錄下找不到資源
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
    }
});
