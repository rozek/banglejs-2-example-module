# banglejs-2-example-module #

just an example for a remote Bangle.js 2 JavaScript module

This is just an example for a JavaScript module, that the [Espruino](https://www.espruino.com/) [Web IDE](https://www.espruino.com/ide) may directly load from GitHub.

Apart from being loaded this module does not do anything useful.

## Usage ##

In order to load this module (and evaluate the function it exports), enter the following code into the right-hand side(!) of the Web IDE and upload it to the emulator or a real device:

```
let loadedModule = require('https://raw.githubusercontent.com/rozek/banglejs-2-example-module/main/module.js');

let theAnswer = loadedModule.getAnswer();
print('the answer is',theAnswer);
```

## License ##

[MIT License](LICENSE.md)
