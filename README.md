# react-native-image-assets
### Script: image-list-gen.js

<hr>


Script class generator to require dynamically local images by static methods in react-native project.


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

<h2>Sample Code</h2>

First import the generated class by script.<br>
<code>import MyImages from './MyImages';</code>

<br>
<h3>Rendering all images from folder/Class Generated</h3>
<pre>
function renderAllImages() {
    let imgList = Object.keys(MyImages);
    return imgList.map((item) => {
        return (
            &lt;Image source={MyImages[item]} key={item} style={styles.image} /&gt;
        );
    });
}
</pre>
<strong>...</strong>
<pre>
&lt;ScrollView
    style={{marginTop:20}}
    contentContainerStyle={{
        flexDirection: 'row',
        flexWrap: 'wrap'            
    }}&gt;
{ renderAllImages() }
&lt;/ScrollView&gt;
</pre>

<img src="https://raw.githubusercontent.com/Nelinho/react-native-image-assets/master/screenshots/allImages.png" />
<br>

<h3>Rendering random image.</h3>

<pre>
function getRandomImage() {
  const randomImages = ['_facebook', '_linkedin', '_youtube'];
  const chosenImage = MyImages[randomImages[Math.round(Math.random() * 2)]];
  return &lt;Image source={chosenImage} style={styles.image} /&gt;
}
</pre>
...
<pre>
&lt;View&gt;
 { getRandomImage() }
&lt;/View&gt;
</pre>
<img src="https://raw.githubusercontent.com/Nelinho/react-native-image-assets/master/screenshots/randomImage.png" />
    


I started learning react-native a few days ago and have not yet <del>accepted</del> adapted how lib loads local images, probably there is a better way available on web I dont know yet, than "require (../../../../../images/my-struggle-image.png). For now, it will be my way :)
<br><br>Feel free to change as you wish.

<br>
<p>Icon made by Freepik from www.flaticon.com</p>

