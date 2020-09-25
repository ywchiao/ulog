import babel from '@rollup/plugin-babel';

export default {
  input: 'js/index.js',
  output: {
    file: 'out/ulog.js',
    format: 'iife',
    sourcemap: 'true',
  },
  plugins: [
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      babelHelpers: 'external',
      presets: [
        [
          "@babel/preset-env",
          {
            targets: {
              browsers: [
                "last 2 versions"
              ]
            },
            modules: false
          }
        ]
      ],
      plugins: [
        "@babel/plugin-external-helpers"
      ]
    }),
  ],
};

// rollup.config.js
