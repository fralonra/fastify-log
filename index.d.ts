import { Server, IncomingMessage, ServerResponse } from 'http'

import fastify = require('fastify')

type levels = 1 | 2 | 3

declare const fastifyLog: fastify.Plugin<Server, IncomingMessage, ServerResponse, {
    /**
     * If true, you should use `fastify.logger.info/warn/error` instead of `fastify.info/warn/error`. Default: false.
     */
    allInOne?: boolean
    /**
     * If false, current time will not show. Default: true.
     */
    time?: boolean
    /**
     * Display format for the time. Default: 'HH:mm:ss'.
     */
    timeFormat?: string
    /**
     * Determine debug level. If level > 1, info hides. If level > 2, only error shows. If level > 3, all hide. Default: 1.
     */
    level?: levels
    /**
     * Color for info messages. Default: '#ffffff'.
     */
    info?: string
    /**
     * Color for warning messages. Default: '#ffa500'.
     */
    warn?: string
    /**
     * Color for error messages. Default: '#dc143c'.
     */
    error?: string
}>

export = fastifyLog