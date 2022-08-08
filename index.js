const fp = require('fastify-plugin')
const style = require('ansi-styles')

const dateFormat = require('./datetime')

const defaultOptions = {
  allInOne: false,
  time: true,
  timeFormat: 'HH:mm:ss',
  level: 1,
  info: '#ffffff',
  warn: '#ffa500',
  error: '#dc143c'
}

function plugin (fastify, opts, next) {
  const options = Object.assign(defaultOptions, opts)

  function info (...args) {
    if (options.level > 1) return
    log('info', args)
  }

  function warn (...args) {
    if (options.level > 2) return
    log('warn', args)
  }

  function error (...args) {
    if (options.level > 3) return
    log('error', args)
  }

  function log (type, content) {
    const time = options.time ? dateFormat(Date.now(), options.timeFormat) + ' ' : ''
    const text = content.map(c => typeof c === 'object'
      ? JSON.stringify(c)
      : c).join(' ')

    console.log(`${style.color.ansi16m.hex(options[type])}${time}${text}${style.color.close}`)
  }

  const logger = {
    info,
    warn,
    error
  }

  if (options.allInOne) {
    fastify.decorate('logger', logger)
  } else {
    Object.keys(logger).forEach(k => {
      fastify.decorate(k, logger[k])
    })
  }

  next()
}

module.exports = fp(plugin, {
  name: 'fastify-logger'
})
