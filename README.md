
# Ionic Paper
An Ionic app demonstration the PaperJS integration.

* Project's Home: https://github.com/skounis/ionic-paperjs

## Preview / Test the app
* Ionic View ID: `e2cf0c89`
* [Android .APK](https://drive.google.com/file/d/0BznpIOFHXC-VUU9Xc21KbGh2N1E/view?usp=sharing)

## Dependecies, Run and Build

### Install NodeJS dependencies

Run `npm install` to install all needed dependencies.

### Install Plugins and Javascript dependencies
#### Linux/MacOX
Run `./install.sh` to install all needed plugins and dependencies

#### Windows Users
Similarly, Windows users should run `install.bat`.

### Run the app
Use `grunt serve -l` to run the app in browser and watch for changes in code

or

use `grunt serve` to just run the app for a browser preview

or

use `grunt serve --lab` to run the app in a browser on two platforms at the same time.

### Add a platform

```bash
$ grunt platform:add:<platform>
```

Supported Cordova platforms:

```bash
$ grunt platform:add:ios
$ grunt platform:add:android
```

### Build the app

```bash
$ grunt build
```

### Εmulate the app on simulator
iOS:

```bash
$ grunt emulate:ios
```

Android:

```bash
$ grunt emulate:android
```

For more information, see [Ionic Framework Generator's instructions](https://github.com/diegonetto/generator-ionic).

### Plugins installation

Use the following commands and install all the plugins required by the app:
```bash
$ cordova plugin add {plugin id or url}
```

eg:

```bash
cordova plugin add cordova-plugin-inappbrowser
```

#### Used Cordova plugins
In case that the required Cordova plugins are not installed while installing NodeJS dependencies, Cordova's command mentioned previously can be used to install the following plugins:

* **cordova-plugin-device** - This plugin defines a global device object, which describes the device's hardware and software.
* **cordova-plugin-console** - This plugin is meant to ensure that console.log() is as useful as it can be. It adds additional function for iOS, Ubuntu, Windows Phone 8, and Windows.
* **ionic-plugin-keyboard** - It provides functions to make interacting with the keyboard easier, and fires events to indicate that the keyboard will hide/show.
* **cordova-plugin-inappbrowser** - Provides a web browser view. It could be used to open images, access web pages, and open PDF files.
* **cordova-plugin-network-information** - This plugin provides an implementation of an old version of the Network Information API. It provides information about the device's cellular and wifi connection, and whether the device has an internet connection.
* **cordova-plugin-whitelist** - This plugin implements a whitelist policy for navigating the application webview on Cordova 4.0
* **cordova-plugin-transport-security** - Cordova / PhoneGap Plugin to allow 'Arbitrary Loads' by adding a declaration to the Info.plist file to bypass the iOS 9 App Transport Security

## Third Party Licences
* [Apache License](http://www.apache.org/licenses/)
* [MIT License](https://opensource.org/licenses/MIT)

## References and Resources
* PaperJS Sketch example:  http://sketch.paperjs.org/#S/dZDBDoIwDIZfpdlFSIgPgPGkVxMj8SQe5qxIgJaMCgfDu7uBiia6U7t//9e/uyvSFapYJQWKuapIGT77PqVWW7BoZAFj3Yi2suWcZDGJyVXX6PqULjcykjMB04ZvDa65owBbJAnh7h7I5IclDMK8ftL6nwCrs0+AQ+QXCN5Tw4EK7ryv5hYrbjEIfSLxVPGam0fYwc6VmrISgylK9JlktL1cA/FpHekTwOv+9ff0RiwXuOKSrfPNTqU2xezfevv6a7neff3Joi6GJI2KD8f+AQ==
* Select rectangle snippet https://gist.github.com/skounis/c924c77276f74fc81e2e60577fe88bc3#file-paper-select-js
* Ionic and PaperJS Discussion https://forum.ionicframework.com/t/use-paper-js-to-draw-on-canvas/19854
* PaperJS http://paperjs.org/
* PaperJS and AngularJS http://stackoverflow.com/questions/19133953/integrate-paper-js-into-angular-js
* Draw example with AngularJS: http://jsfiddle.net/tdhulster/yC627/4/
