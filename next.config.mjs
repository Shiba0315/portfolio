<<<<<<< HEAD
// get env variable
import dotenv from 'dotenv';

dotenv.config();

const env = process.env.NODE_ENV || 'development';

/** @type {import('next').NextConfig} */
const nextConfigProd = {
  output: 'export',
  basePath: '/portfolio',
  images: {
    loader: 'custom',
    loaderFile: './src/lib/image.loader.js',
  },
};

/** @type {import('next').NextConfig} */
const nextConfigDev = {};

const nextConfig = env === 'development' ? nextConfigDev : nextConfigProd;
=======
/** @type {import('next').NextConfig} */
// Next.js configuration file for customizing build and runtime behavior
const nextConfig = {};
>>>>>>> 5c1bc5c3271d7d77add359320b4b5421ad3ce358

export default nextConfig;
