import { format } from 'date-fns';

class Logger {

  constructor(mode = 'development', prefix = '') {
    this.mode = mode;
    this.prefix = prefix;
    // https://en.wikipedia.org/wiki/ISO_8601
    this.format = 'yyyy/MM/DD\THH:mm:ssZ'
  }

  _date() {
    return format(new Date(), this.format);
  }

  setVerbose() {
    this.mode = 'verbose';
  }

  setProduction() {
    this.mode = 'production';
  }

  setDevelopment() {
    this.mode = 'development';
  }

  setFormat(format) {
    this.format = format;
  }

  verbose(...args) {
    if (this.mode === 'verbose') {
      console.log('\x1b[47mVERBOSE\x1b[0m', this.prefix, ...args)
    };
  }

  debug(...args) {
    if (this.mode !== 'production') console.log('\x1b[42mDEBUG\x1b[0m', this.prefix, ...args);
  }

  info(...args) {
    console.log(this.mode === 'production' ? `${this._date()} INFO` : '\x1b[44mINFO\x1b[0m', this.prefix, ...args);
  }

  error(...args) {
    console.error(this.mode === 'production' ? `${this._date()} ERROR` : '\x1b[41mERROR\x1b[0m', this.prefix, ...args);
  }
}

export default Logger;
