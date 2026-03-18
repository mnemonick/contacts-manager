import path from 'path';
import {fileURLToPath} from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function (env, argv) {
  if (argv.mode === undefined) argv.mode = 'development';

  return {
    mode: argv.mode,
    watch: argv.mode === 'development',
    entry: path.resolve(__dirname, 'src', '_entry.tsx'),
    output: {
      path: path.resolve(__dirname, '..', 'sender', 'public'),
      filename: 'bundle.[fullhash].js',
      clean: true
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'index.html'),
        inject: 'head'
      }),
      {
        apply: (compiler) => {
          compiler.hooks.watchRun.tap('ClearConsolePlugin', () => console.log('--------------------------------------------------------------------------'));
        }
      }
    ],
    // In dev bundle libraries, in prod use CDN
    externals: argv.mode === 'production' ? {
      'react': 'React',
      'react-dom': 'ReactDOM',
      'react-router-dom': 'ReactRouter',
      'react-router': 'ReactRouter'
    } : undefined,
    stats: {
      all: false,
      hash: true,
      colors: true,
      modules: true,
      errors: true,
      timings: true,
      builtAt: true,
      assets: true
    }
  };
}