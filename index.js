const fp = require('fastify-plugin');
const style = require('ansi-styles');
const momment = require('moment');

const defaultOptions = {
  allInOne: false,
  time: true,
  timeFormat: 'HH:mm:ss',
  info: '#ffffff',
  warn: '#ffa500',
  error: '#dc143c'
};

function plugin (fastify, opts, next) {

  const options = Object.assign(defaultOptions, opts);

  function info () {
    log('info', arguments);
  }

  function warn () {
    log('warn', arguments);
  }

  function error () {
    log('error', arguments);
  }

  function log (type, text) {
    const time = options.time ? momment().format(options.timeFormat) + ' ': '';
    console.log(style.color.ansi16m.hex(options[type]) + time + concat(text), style.color.close);
  }

  function concat(args) {
    return Array.from(args).join(' ');
  }

  const logger = {
    info,
    warn,
    error
  };

  if (options.allInOne) {
    fastify.decorate('logger', logger);
  } else {
    Object.keys(logger).forEach(k => {
      fastify.decorate(k, logger[k]);
    });
  }

  next();
}

module.exports = fp(plugin, {
  name: 'fastify-logger'
});
