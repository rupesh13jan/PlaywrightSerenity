exports.config = {
    framework: 'custom',
    frameworkPath: require.resolve('@serenity-js/cucumber'),
    specs: [
      './features/**/*.feature',
    ],
    cucumberOpts: {
      require: [
        './step_definitions/**/*.js',
      ],
    },
  };
  