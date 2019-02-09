# condit

[![Build Status](https://travis-ci.org/indatawetrust/condit.svg?branch=master)](https://travis-ci.org/indatawetrust/condit)

condit is a package that allows you to write conditional expressions for jsx-like syntax.

### Installation

```sh
npm i -S condit
```

### Usage

```js
const condit = require('condit')

condit(1)
.when(1, 'one')
.when(2, 'two')
.do()

// return 'one'

condit(3)
.when(1, 'one')
.when(2, 'two')
.otherwise('not found')
.do()

// return 'not found'

condit(3, 'default variable')
.when(1, 'one')
.when(2, 'two')
.do()

// return 'default variable'
```

License
----

MIT
