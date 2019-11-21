class Logger {
  static debug(...args) {
    if (process.env.NODE_ENV === 'development') console.log('\x1b[42mDEBUG\x1b[0m', ...args);
  }

  static info(...args) {
    console.log(process.env.NODE_ENV === 'development' ? '\x1b[44mINFO\x1b[0m' : `${new Date()} INFO`, ...args);
  }

  static error(...args) {
    console.error(process.env.NODE_ENV === 'development' ? '\x1b[41mERROR\x1b[0m' : `${new Date()} ERROR`, ...args);
  }
}

// const logger = new Logger();

export default Logger;
