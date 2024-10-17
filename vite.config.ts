import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.resolve(__dirname, '.env') });

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@atoms': path.resolve(__dirname, 'src/components/atoms'),
        '@molecules': path.resolve(__dirname, 'src/components/molecules'),
        '@organisms': path.resolve(__dirname, 'src/components/organisms'),
        '@templates': path.resolve(__dirname, 'src/components/templates'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@constants': path.resolve(__dirname, 'src/constants'),
        '@contexts': path.resolve(__dirname, 'src/contexts'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@routes': path.resolve(__dirname, 'src/routes'),
        '@services': path.resolve(__dirname, 'src/services'),
        '@facades': path.resolve(__dirname, 'src/facades'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@enums': path.resolve(__dirname, 'src/enums'),
        '@types': path.resolve(__dirname, 'src/@types'),
        '@images': path.resolve(__dirname, 'src/assets/images'),
    }
}
})
