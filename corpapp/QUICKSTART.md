# Step1: install ionic

```bash
npm install -g ionic
```

# Step2: create a project

```bash
ionic start handycorp com.rjfun.handycorp HandyCorp
```

Some quick tips:

 * cd into your project: $ cd handycorp

 * Setup this project to use Sass: ionic setup sass

 * Develop in the browser with live reload: ionic serve

 * Add a platform (ios or Android): ionic platform add ios [android]
   Note: iOS development requires OS X currently
   See the Android Platform Guide for full Android installation instructions:
   https://cordova.apache.org/docs/en/edge/guide_platforms_android_index.md.html

 * Build your app: ionic build <PLATFORM>

 * Simulate your app: ionic emulate <PLATFORM>

 * Run your app on a device: ionic run <PLATFORM>

 * Package an app using Ionic package service: ionic package <MODE> <PLATFORM>

For more help use ionic --help or visit the Ionic docs: http://ionicframework.com/docs

+---------------------------------------------------------+
+ New Ionic Updates for April 2015
+
+ The View App just landed. Preview your apps on any device
+ http://view.ionic.io
+
+ Invite anyone to preview and test your app
+ ionic share EMAIL
+
+ Generate splash screens and icons with ionic resource
+ http://ionicframework.com/blog/automating-icons-and-splash-screens/
+
+---------------------------------------------------------+

# Step3: call server API

index.html:
```html
<script src="http://0.0.0.0:3000/js/corpbase.js"></script>
```

