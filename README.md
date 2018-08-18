# react-native-image-assets
### Script root folder: image-list-gen.js

<hr>


Script class generator to require local images by static methods in react-native project.


<h2>Generate a class that import all images from a folder.</h2>

<p>You can use: $ node image-list-gen  [ --folder=folder name ] [ --class=class name file (without ".js") ]</p>
<p>Eg. <code>$ node image-list-gen --folder=assets --class=MyImages</code></p>
<hr>

<p>You can insert a shortcut in package.json to ensure that your local images are linked in the class before start the app.</p>

<pre>
"scripts": {
    "start": "node node_modules/react-native/local-cli/cli.js start",
    "ios": "node image-list-gen --folder=assets --class=MyImages && react-native run-ios",
    "droid": "node image-list-gen --folder=assets --class=MyImages && react-native run-android",
    "test": "jest"
  },
</pre>

And run the command:<br>

<table border="0" style="text-align='left'">
<tr>
<td align="right">iOS:</td>
<td align="left"><code>$ npm run ios</code><br></td>
</tr>

<tr>
<td align="right">Android:</td>
<td align="left"><code>$ npm run droid</code></td>
</tr>
</table>


<hr>

 Icon made by Freepik from www.flaticon.com 

I started learning react-native a few days ago and have not yet <del>accepted</del> adapted how lib loads local images, probably there is a better way available on web I dont know yet, than "require (../../../../../images/my-struggle-image.png). For now, it will be my way hahaha
<br><br>Feel free to change as you wish, if you wish :)
