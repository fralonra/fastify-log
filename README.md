# fastify-log

[![Build Status](https://travis-ci.org/fralonra/fastify-log.svg?branch=master)](https://travis-ci.org/fralonra/fastify-log)

A terminal logger plugin for [Fastify](fastify.io).

## Features

* Displays time.
* Colorful outputs.
* Debug level support.

## Install

```bash
npm install fastify-log
```

## Usage

```javascript
const fastify = require('fastify')();
fastify.register(require('fastify-log')); // Or fastify.register(require('fastify-log'), { options } );

const port = 3000;
fastify.listen(port, (err) => {
  if (err) fastify.error(err);
  fastify.warn('this is a waring text');
  // Pass in multiple arguments
  fastify.info('server listening on', port);
});
```

The above code will output the following in your console, where the time is your system's current time:

![ScreenShot](/screenshot.png)

### API

#### options

| Option | Description | Type | Default |
| --- | --- | --- | --- |
| allInOne | If true, you should use `fastify.logger.info/warn/error` instead of `fastify.info/warn/error`. | Boolean | false |
| time | If false, current time will not show. | Boolean | true |
| timeFormat | Display format for the time. | String | 'HH:mm:ss' |
| level | Determine debug level. If level > 1, info hides. If level > 2, only error shows. If level > 3, all hide. | Number | 1 |
| info | Color for info messages. | String | '#ffffff' |
| warn | Color for warning messages. | String | '#ffa500' |
| error | Color for error messages. | String | '#dc143c' |

```javascript
const fastify = require('fastify')();
fastify.register(require('fastify-log'), { options } );
```

### License

[MIT](https://github.com/fralonra/fastify-log/blob/master/LICENSE)
