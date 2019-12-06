class Logger {

  constructor(mode = 'development', prefix = '') {
    this._mode = mode;
    this.prefix = prefix;
  }

  setVerbose() {
    thi.mode = 'verbose';
  }

  setProduction() {
    thi.mode = 'production';
  }

  setDevevelopment() {
    thi.mode = 'development';
  }

  verbose(...args) {
    if (this.mode === 'verbose') {
      console.log('\x1b[42mVERBOSE\x1b[0m', this.prefix, ...args)
    };
  }

  debug(...args) {
    if (this.mode !== 'production') console.log('\x1b[42mDEBUG\x1b[0m', this.prefix, ...args);
  }

  info(...args) {
    console.log(this.mode === 'production' ? `${new Date()} INFO` : '\x1b[44mINFO\x1b[0m', this.prefix, ...args);
  }

  error(...args) {
    console.error(this.mode === 'production' ? `${new Date()} ERROR` : '\x1b[41mERROR\x1b[0m', this.prefix, ...args);
  }
}

// const logger = new Logger();

export default Logger;
