---
title: "CSS For Beginner"
date: "2025-05-13"
description: "CSS for Beginner"
author: "Sadeepa N Herath"
authorImage: "https://github.com/SadeepaNHerath.png"
image: "/images/blog/css-for-beginner.jpg"
tags:
  - beginner
  - sinhala
  - css
  - css3
  - web
sourceUrl: "https://medium.com/@sadeepanithushika/css-for-beginner-3ed12d6400ef"
readTime: "18 min read"
---

CSS for Beginner

### 1\. CSS හැඳින්වීම

ආයුබෝවන්! අපි බලමු **CSS** ගැන, වෙබ් පිටු හදනකොට ඒවා ලස්සන කරන්න උදව් වෙන තාක්ෂණයක්.

CSS (Cascading Style Sheets) කියන්නේ HTML එකේ elements (අංග) කොහොමද පෙනෙන්න ඕනේ කියලා අපිට decide කරන්න ඉඩ දෙන එකක්. උදාහරණයක් විදිහට, වර්ණ (colors), ෆොන්ට් (fonts), layouts (පිරිසැලසුම්), සහ animations (සජීවිකරණ) එකතු කරන්න පුළුවන්. HTML එකෙන් වෙබ් පිටුවේ structure එක හදනවා නම්, CSS එකෙන් ඒකට style එකක් දෙනවා. එන්න, මේක ගැන ඉගෙන ගමු!

### CSS Syntax Structure

CSS rule එකක් හදන්න ඕන basic කොටස් තුනක් තියෙනවා:

-   **Selector :** ස්ටයිල් කරන්න ඕන HTML element එක තෝරනවා.

උදාහරණයක් විදිහට, h1, .class, #id.

-   **Property :** Style කරන්න ඕන දේ මොකක්ද කියනවා.

උදාහරණයක් විදිහට, color, font-size, margin.

-   **Value (:** ඒ property එකට දෙන specific අගය.

උදාහරණයක් විදිහට, red, 24px.

selector {  
    property: value;  
}

CSS Syntax Structure

### CSS යොදාගන්න පුළුවන් විදි

CSS එක HTML එකට apply කරන්න 3 තියෙනවා

-   **External CSS**
-   **Internal CSS**
-   **Inline CSS**

#### 1\. External CSS

**External CSS** කියන්නේ වෙනම .css file එකක් හදලා, ඒක HTML එකට link කරන එක. large scale web site හදනකොට මේක recommend කරනවා, මොකද maintain කරන්න ලේසියි.

මෙන්න code එක:

<!-- In HTML file -->  
<head>  
    <link rel="stylesheet" href="styles.css">  
</head>

/\* In styles.css file \*/  
body {  
    background-color: #f0f0f0;  
    font-family: Arial, sans-serif;  
}

මෙතන, <link> tag එකෙන් styles.css file එක HTML එකට connect කරනවා. CSS file එකේ ලියපු styles සියලුම HTML pages වලට යෙදෙනවා.

උදාහරණයක් විදිහට, body එකට light gray background එකක් එනවා, font එක Arial වෙනවා.

#### 2\. Internal CSS

**Internal CSS** කියන්නේ එක HTML page එකකට විතරක් style කරන්න ඕන වුණොත් යොදාගන්න එක. මේක HTML එකේ <head> එක ඇතුළේ <style> tag එකක ලියනවා.

<head>  
    <style>  
        body {  
            background-color: #f0f0f0;  
            font-family: Arial, sans-serif;  
        }  
    </style>  
</head>

මේකෙන් ඒ page එකේ විතරක් body එකට style එක යෙදෙනවා. Small scale projects වලට මේක OK.

#### 3\. Inline CSS

**Inline CSS** කියන්නේ HTML element එකකට direct විදිහට style එක දෙන එක. මෙතනදි style attribute එක යොදාගෙන කරනවා.

<p style="color: blue; font-size: 16px;">This is a paragraph with inline styling.</p>

With and without inline CSS

මෙතන, ඒ <p> tag එකට විතරක් text එක blue වෙලා 16px size එකෙන් පෙනෙනවා. Quick changes වලට මේක හොඳයි, ඒත් large scale project එකකට recommend කරන්නෙ නෑ. මොකද style එක HTML එක ඇතුළේම තියෙන නිසා update කරන්න අමාරුයි.

#### Beginners සඳහා Best Practices

CSS එක්ක වැඩ කරනකොට beginners ලාට මේ tips ටික follow කරන්න.

-   **External CSS තෝරන්න:** Maintenance සහ code organization වලට හොඳයි.
-   **Meaningful Names දෙන්න:** Class/ID names දානකොට purpose එක තේරෙන විදිහට දෙන්න.

උදා: header වෙනුවට site-header.

-   **Comments යොදන්න:** CSS එක තේරෙන්න comments ලියන්න.

උදාහරණය:

/\* Style for the header\*/  
.site-header {  
    background-color: #333;  
    color: white;  
}

-   **Consistent Naming:** Project එක පුරාම එකම naming style එක යොදන්න.
-   **Basics එක්ක Start කරන්න:** Complex layouts වලට යන්න කලින් basic properties (color, font-size) practice කරන්න.

### 2\. CSS Basic properties

දැන් අපි බලමු **CSS හි මූලික ගුණාංග** වන **Text Properties**, **Color Properties**, සහ **Spacing Properties** ගැන. මේවා තේරුම් ගත්තොත්, ඔයාට CSS එක්ක වැඩ කරන්න ලේසි වෙයි.

### Text Properties

Text properties මගින් වෙබ් පිටුවේ text එක කොහොමද පෙනෙන්නේ කියලා control කරනවා. අත්යවශ්ය text properties තුනක් තියෙනවා:

#### 1\. Font Family

Font-family කියන්නේ text එකට යොදන අකුරු වර්ගය තෝරන එක. උදාහරණයක් විදිහට, Arial, Times New Roman, හෝ Courier New වගේ ෆොන්ට් තෝරන්න පුළුවන්. මේක ලියනකොට ඔයා handwriting style එකක් තෝරනවා වගේ.

p {  
    font-family: "Times New Roman", serif;  
}

**Try This:** <p> tag එකකට Arial font එක දාලා browser එකේ බලන්න. Font-family change කරලා වෙනස බලන්න!

#### 2\. Font Size

Font-size මගින් text එකේ size එක decide කරනවා. මේක pixels (px), em, හෝ rem වලින් දෙන්න පුළුවන්.

p {  
    font-size: 16px;    /\* pixels භාවිතා කරමින් \*/  
    font-size: 1.2em;   /\* parent element එකට සාපේක්ෂව \*/  
    font-size: 1.2rem;  /\* root element එකට සාපේක්ෂව \*/  
}

-   **px** — fixed size එකක්, screen size එක වෙනස් වුණත් ඒකම තියෙනවා.
-   **em** — parent element එකේ size එකට සාපේක්ෂව change වෙනවා.
-   **rem** — root element (සාමාන්යයෙන් <html>) size එකට සාපේක්ෂව, responsive designs වලට හොඳයි.

**Try This:** <p> tag එකක font-size 20px කරලා බලන්න. ඊට පස්සේ 1.5em කරලා වෙනස බලන්න!

#### 3\. Font Weight

Font-weight මගින් text එක bold (බර) හෝ light (සිහින්) කරනවා.

p {  
    font-weight: normal;  
    font-weight: bold;  
    font-weight: 600;       /\*custom\*/  
}

-   **normal** — සාමාන්ය (400).
-   **bold** — bold text (700).
-   **100 සිට 900** — විවිධ weight levels තෝරාගන්න පුළුවන්.

**Try This:** <p> tag එකකට bold font-weight දාලා බලන්න. text එක බර වෙනවා!

### Color Properties

Color properties මගින් elements වල visual appearance එක color හරහා control කරනවා.

#### 1\. Text Color

color property එකෙන් text එකේ වර්ණය change කරන්න පුළුවන්.

p {  
    color: red;  
    color: #FF0000;  
    color: rgb(255, 0, 0);  
    color: rgba(255, 0, 0, 0.5);  
}

-   By name — red, blue වගේ.
-   By Hex Code — #FF0000 (රතු).
-   **RGB** — numbers වලින් (255, 0, 0).
-   **RGBA** — opacity එක්ක (0–1).

**Try This:** <p> tag එකකට color: blue දාලා බලන්න. RGB වලින් රතු කරලත් බලන්න!

#### 2\. Background Color

background-color එකෙන් element එකක පසුබිමට වර්ණයක් දෙනවා.

div {  
    background-color: lightblue;  
    background-color: #ADD8E6;  
    background-color: rgb(173, 216, 230);  
}

**Try This:** <div> එකකට background-color: yellow දාලා browser එකේ බලන්න!

### Spacing Properties

Spacing properties මගින් elements අතර ඉඩ සහ layout එක control කරනවා.

#### 1\. Padding

Padding එකෙන් element එකක content එක සහ border එක අතර ඉඩ හදනවා. මේක content එකට breathing space එකක් දෙනවා වගේ.

div {  
    padding: 20px;                /\* සියලු පැතිවලට \*/  
    padding: 10px 20px;          /\* උඩ/පහළ, වම/දකුණ \*/  
    padding: 10px 20px 15px 25px; /\* උඩ, දකුණ, පහළ, වම \*/  
}

-   **value එකක්** — සියලු පැතිවලට same padding එක.
-   **Value දෙකක්** — උඩ/පහළ, වම/දකුණ.
-   **Value හතරක්** — උඩ, දකුණ, පහළ, වම.

#### 2\. Margin

Margin එකෙන් වෙනත් elements වලින් වෙන් කරන්න element එකේ border එකෙන් පිටත ඉඩ හදනවා,.

div {  
    margin: 20px;                /\* සියලු පැතිවලට \*/  
    margin: 10px auto;          /\* උඩ/පහළ, මැදට \*/  
    margin: 10px 20px 15px 25px; /\* උඩ, දකුණ, පහළ, වම \*/  
}

-   margin: 10px auto; — element එක horizontally center කරනවා.

#### 3\. Border

Border එකෙන් element එක වටේට රේඛාවක් එකතු කරනවා.

div {  
    border: 1px solid black;     /\* පළල, ස්ටයිල්, වර්ණය \*/  
    border-radius: 5px;  
    border-style: dashed;        /\* වෙනස් බෝඩර් ස්ටයිල් \*/  
}

-   border — width, style, color එකතු කරනවා.
-   border-radius — corners වටකුරු කරනවා.

**Try This:** <div> එකකට padding: 20px, margin: 20px, border: 2px solid red දාලා browser එකේ open කරලා බලන්න. Values change කරලා වෙනස බලන්න!

### 3\. CSS Background Styling

Background properties මගින් ඔයාට elements වල background එකට වර්ණ, රූප, සහ වෙනත් effects එකතු කරන්න පුළුවන්. එන්න, අපි මේ properties එකින් එක ගැන ඉගෙන ගමු!

### 1\. Background Color

background-color property එකෙන් element එකක පසුබිමට වර්ණයක් දෙනවා. මේක තමයි basic සහ ගොඩක් යොදාගන්න property එක.

.div1 {  
    background-color: red;                  /\* වර්ණයේ නම භාවිතා කරමින් \*/  
}  
.div2 {  
    background-color: #00ff00;              /\* හෙක්ස් අගය භාවිතා කරමින් \*/  
}  
.div3 {  
    background-color: rgb(0, 0, 255);       /\* RGB අගය භාවිතා කරමින් \*/  
}  
.div4 {  
    background-color: rgba(255, 0, 0, 0.5); /\* Transparency සහිත RGBA \*/  
}

Background Color

### 2\. Background Image

background-image property එකෙන් element එකක පසුබිමට රූපයක් දාන්න පුළුවන්.

.div1 {  
    background-image: url('image.jpg');  
}  
.div2 {  
    /\* Multiple background imagesත් දාන්න පුළුවන් \*/  
    background-image: url('first.jpg'), url('second.jpg');  
}

-   url(‘image.jpg’) මගින් රූපයේ path එක දෙනවා.
-   Multiple images එකතු කරන්නත් පුළුවන්, comma එකකින් වෙන් කරලා.

Multiple Background Images

### 3\. Background Repeat

background-repeat property එකෙන් background image එක repeat වෙන විදිහ control කරනවා.

.div1 {  
    background-image: url('images/sigiriya.JPG');  
    background-repeat: repeat; /\* Default - repeats both horizontally and vertically \*/  
}  
.div2 {  
    background-image: url('images/sigiriya.JPG');  
    background-repeat: no-repeat; /\* Image appears only once \*/  
}  
.div3 {  
    background-image: url('images/sigiriya.JPG'); /\* Background image \*/  
    background-repeat: repeat-x; /\* Repeats only horizontally \*/  
}  
.div4 {  
    background-image: url('images/sigiriya.JPG'); /\* Background image \*/  
    background-repeat: repeat-y; /\* Repeats only vertically \*/  
}

-   **repeat:** රූපය දෙපැත්තටම repeat වෙනවා.
-   **no-repeat:** රූපය එක පාරයි පෙනෙන්නේ.
-   **repeat-x:** Horizontally (වම-දකුණ) repeat වෙනවා.
-   **repeat-y:** Vertically (උඩ-පහළ) repeat වෙනවා.

Background Repeat

### 4\. Background Position

background-position property එකෙන් background image එකේ starting position එක තීරණය කරනවා.

.div1 {  
    background-image: url('image.jpg');  
    background-position: center;    /\* මැදට \*/  
}  
.div2 {  
    background-image: url('image.jpg');  
    background-position: top right; /\* උඩ-දකුණු කෙළවරට \*/  
}  
.div3 {  
    background-image: url('image.jpg');  
    background-position: 50% 50%;   /\* Percentage values භාවිතා කරමින් \*/

}  
.div4 {  
    background-image: url('image.jpg');  
    background-position: 20px 30px; /\* Pixel values භාවිතා කරමින් \*/  
}

-   **center:** රූපය මැදට ගන්නවා.
-   **top right:** උඩ-දකුණු කෙළවරට ගන්නවා.
-   **Percentage:** 50% 50% මැදට ගන්නවා.
-   **Pixels:** 20px 30px කියන්නේ left ඉඳලා 20px, top ඉඳලා 30px.

### 5\. Background Attachment

background-attachment property එකෙන් background image එක scroll වෙන විදිහ control කරනවා.

.div1 {  
    background-image: url('image.jpg');  
    background-attachment: scroll;  /\* Content එක්ක scroll වෙනවා (default) \*/  
}  
.div2 {  
    background-image: url('image.jpg');  
    background-attachment: fixed;   /\* Scroll කරනකොට fixed තියෙනවා \*/  
}  
.div3 {  
    background-image: url('image.jpg');  
    background-attachment: local;   /\* Element එකේ content එක්ක scroll වෙනවා \*/  
}

-   **scroll:** Content එක්ක scroll වෙනවා.
-   **fixed:** Scroll කරනකොට රූපය fixed තියෙනවා.
-   **local:** Element එකේ content එක්ක scroll වෙනවා.

### Shorthand Background Property

ඔයාට ඕනනම් shorthand property එක භාවිතා කරලා background properties ඔක්කොම එක line එකකින් දෙන්න පුළුවන්.

div {  
    /\* Order: color image repeat attachment position \*/  
    background: #f0f0f0 url('image.jpg') no-repeat fixed center;  
}

Background-color, image, repeat, attachment, position ඔක්කොම එකවර set කරනවා. ලේසියි, efficient!

### 4\. CSS Navigation Bar

Navigation bar එකක් කියන්නෙ වෙබ් අඩවියක විවිධ කොටස් අතර ගමන් කිරීමට ඔයාට උපකාර වන ලේසි UI අංගයක්. CSS භාවිතයෙන් navigation bars හදන හැටි අපි ඉගෙන ගමු.

### Navigation Bar types

Navigation bars ප්රධාන වර්ග දෙකක් තියෙනවා: Horizontal (තිරස්) සහ Vertical (සිරස්). එකින් එක බලමු.

#### 1\. Horizontal Navigation Bar

ගොඩක් වෙලාවට වෙබ් පිටුවක උඩින් තමයි Horizontal navigation bars තියෙන්නෙ. ඒක හදන හැටි මෙන්න:

<!-- HTML Structure -->  
<nav>  
    <ul>  
        <li><a href="#home">Home</a></li>  
        <li><a href="#about">About</a></li>  
        <li><a href="#services">Services</a></li>  
        <li><a href="#contact">Contact</a></li>  
    </ul>  
</nav>

/\* CSS Styling \*/  
nav {  
    background-color: #333;  
}

nav ul {  
    list-style-type: none;  
    margin: 0;  
    padding: 0;  
    overflow: hidden;  
}

nav li {  
    float: left;  
}

nav li a {  
    display: block;  
    color: white;  
    text-align: center;  
    padding: 14px 16px;  
    text-decoration: none;  
}

nav li a:hover {  
    background-color: #111;  
}

Horizontal Nav Bar

මේක ලේසියෙන් තේරුම් ගමු:

-   <nav> එක තමයි navigation bar එකේ container එක.
-   <ul> එක ඇතුළේ <li> items තියෙනවා. මේවා තමයි links (Home, About වගේ).
-   CSS එකෙන්: background-color: #333; එකෙන් nav එකට අඳුරු පාටක් දෙනවා. float: left; එකෙන් <li> items එක පේළියට එනවා (horizontal විදිහට). a:hover එකෙන් mouse එක උඩින් ගියාම background එක change වෙනවා.

**Try This:** මේ code එක copy කරලා HTML file එකක දාලා browser එකේ බලන්න. Links උඩ hover කරලා color change වෙනවද බලන්න!

#### 2\. Vertical Navigation Bar

Vertical navigation bars ගොඩක් වෙලාවට වෙබ් පිටුවක side එකක තියෙනවා. හදන හැටි මෙන්න:

<!-- HTML Structure -->  
<nav>  
    <ul>  
        <li><a href="#home">Home</a></li>  
        <li><a href="#about">About</a></li>  
        <li><a href="#services">Services</a></li>  
        <li><a href="#contact">Contact</a></li>  
    </ul>  
</nav>

/\* CSS for Vertical Navigation \*/  
nav ul {  
    list-style-type: none;  
    margin: 0;  
    padding: 0;  
    width: 200px;  
    background-color: #f1f1f1;  
}

nav li a {  
    display: block;  
    color: #000;  
    padding: 8px 16px;  
    text-decoration: none;  
}

nav li a:hover {  
    background-color: #555;  
    color: white;  
}

Vertical Navigation Bar

මේකත් ලේසියි:

-   <ul> එකට width: 200px; දීලා fixed width එකක් දෙනවා.
-   float: left; නැති නිසා items එකින් එක පහළට එනවා (vertical).
-   Hover කරනකොට background එක dark වෙලා text එක white වෙනවා.

**Try This:** Horizontal nav එකේ CSS එක change කරලා vertical එකක් හදලා බලන්න. float: left; එක අයින් කරලා try කරන්න!

### Navigation Bars වලට එකතු කළ යුතු Cool Features

Navigation bar එකට තවත් ලස්සන features එකතු කරමු:

-   **Responsive Design :** Screen size එක අනුව navigation bar එක change වෙන්න ඕන. Media queries භාවිතා කරනවා.
-   **Dropdown Menus :** Sub-menus එකතු කරන්න nested <ul> යොදාගන්නවා.
-   **Active State :** Current page එක highlight කරන්න. වෙනස් color එකකින්.
-   **Transitions :** Hover effects smooth කරන්න. CSS transitions එක්ක.

### Responsive Navigation Bar එකක උදාහරණය

Responsive design එකෙන් screen size එක change වුණාම navigation bar එකත් change වෙනවා. මෙන්න උදාහරණයක්:

/\* Responsive Navigation \*/  
@media screen and (max-width: 600px) {  
    nav li {  
        float: none;  
    }

    nav li a {  
        text-align: left;  
    }  
}

මෙතන:

-   max-width: 600px; කියන්නේ screen එක 600px ට අඩු වුණොත් මේ CSS එක work වෙනවා.
-   float: none; එකෙන් horizontal items vertical වෙනවා.
-   Text එක left align වෙනවා.

**Try This:** Browser window එක resize කරලා nav එක vertical වෙනවද බලන්න.

### 5\. Handling Multimedia with CSS

CSS කියන්නේ වෙබ් පිටුවල images, videos, animations වගේ multimedia elements හසුරවන්න ගොඩක් වැදගත් tool එකක්. අපි බලමු කොහොමද ඒවා CSS එක්ක handle කරන්නේ කියලා.

### Handling Images සහ Videos

වෙබ් පිටුවක images සහ videos responsive විදිහට තියෙන්න ඕන. ඒ කියන්නේ screen size එක වෙනස් උනාම ඒවාත් ඒකට ගැළපෙන්න ඕන. ඔයා phone එකකින් බැලුවත්, laptop එකකින් බැලුවත්, image එක හරියට පේන්න ඕන නේ? මේකට basic CSS code එක මෙන්න:

img {  
    max-width: 100%;  
    height: auto;  
    display: block;  
}

-   **max-width: 100%;** — Image එක container එකෙන් එළියට යන්නේ නැහැ. Screen එකට ගැළපෙනවා.
-   **height: auto;** — Image එකේ height එක aspect ratio එක රැකගෙන adjust වෙනවා.
-   **display: block;** — Image එක block element එකක් විදිහට පෙන්වනවා.

### CSS Transformations

Transformations කියන්නේ multimedia elements වල look එක change කරන එක. ඒ කියන්නේ image එකක් slant කරනවා (skew), scale කරනවා, rotate කරනවා වගේ දේවල් කරන්න පුළුවන්. ඒක ටිකක් fun වැඩක්.

#### 1\. Skew Transformations

Skew කියන්නේ element එකක් X සහ Y axes වලට slant කරන එක. මේකෙන් image එකට වෙනස් look එකක් දෙන්න පුළුවන්.

.element1 {  
    transform: skew(30deg, 30deg);    /\* X සහ Y axis දෙකම \*/  
}  
.element2 {  
   transform: skewX(30deg);          /\* X axis විතරක් \*/  
}  
.element3 {  
    transform: skewY(30deg);          /\* Y axis විතරක් \*/  
}

-   **skew(30deg, 30deg):** X සහ Y දෙකටම 30 degrees slant කරනවා.
-   **skewX(30deg):** X axis එකට විතරක් slant කරනවා.
-   **skewY(30deg):** Y axis එකට විතරක් slant කරනවා.

Skew Transformation

#### 2\. CSS Animations with Keyframes

Animations එක්ක ඔයාට images වලට ජීවයක් දෙන්න පුළුවන්. Keyframes කියන්නේ animation එකේ steps define කරන එක. Smooth විදිහට වෙනස්කම් කරන්න මේක use කරනවා.

/\* From-to syntax එක \*/  
@keyframes skewAnimation {  
    from {  
        transform: skew(0deg);  
    }  
    to {  
        transform: skew(30deg);  
    }  
}

/\* Percentage syntax එක \*/  
@keyframes complexAnimation {  
    0% { transform: scale(1); }  
    50% { transform: scale(1.2); }  
    100% { transform: scale(1); }  
}

Animation එක apply කරන්න මෙහෙම:

.animated-element {  
    animation: skewAnimation 2s ease infinite;  
}

-   **@keyframes:** Animation එකේ steps define කරනවා.
-   **animation:** Element එකට animation එක දෙනවා (name, duration, timing function, iteration count).

**Tryout:** <div> එකකට animation apply කරලා browser එකේ බලන්න. 2s වෙනුවට 1s දාලා speed එක වෙනස් කරලත් බලන්න!

Skew Animation

#### Media Queries එක්ක Responsive Multimedia

Media queries කියන්නේ screen size එක අනුව styles change කරන එක. Phone එකකදි video එක එක විදිහට, laptop එකකදි තව විදිහකට adjust කරන්න පුළුවන්.

.video-container {  
    position: relative;  
    padding-bottom: 56.25%; /\* 16:9 aspect ratio \*/  
    height: 0;  
    overflow: hidden;  
}

@media screen and (max-width: 768px) {  
    .video-container {  
        padding-bottom: 75%; /\* Small screens වලට adjust \*/  
    }  
}

-   **.video-container:** Video එක responsive විදිහට embed කරනවා.
-   **@media:** Screen size එක 768px ට අඩු උනොත් padding-bottom වෙනස් වෙනවා.

**උත්සාහ කරමු:** YouTube video එකක් embed කරලා, screen size change කරලා responsive ද කියලා බලන්න!

### 6\. Pseudo Elements

Pseudo-elements කියන්නේ element එකක specific කොටස් style කරන්න උදවු වෙන එකක්. උදාහරණයක් විදිහට, paragraph එකක first line එක වෙනස් විදිහට style කරන්න, හෝ element එකකට content එකතු කරන්න pseudo-elements use කරනවා.

### Pseudo-Elements කියන්නේ මොකක්ද?

Pseudo-elements කියන්නේ CSS වලින් element එකක specific කොටස් style කරන එකට use කරන tool එකක්. උදාහරණ කිහිපයක් බලමු:

-   Text එකක **first line** එක.
-   Text එකක **first letter** එක.
-   Element එකකට **content** එකතු කරන එක (before හෝ after).
-   **Selected text** එක style කරන එක.

ඒ කියන්නේ, HTML එකේ extra tags දාන්නේ නැතුව CSS එකෙන්ම මේවා කරන්න පුළුවන්. ගොඩක් clean සහ smart විදිහක්!

### Syntax

Pseudo-elements use කරන විදිහ ගොඩක් simple:

selector::pseudo-element {  
    property: value;  
}

**Note:** Pseudo-elements වලට double colon (::) use කරනවා. Pseudo-classes වලට single colon (:) use කරනවා. මේක මතක තියාගන්න!

### Common Pseudo-Elements

#### 1. ::first-line

::first-line මගින් text block එකක first line එක style කරනවා.

p::first-line {  
    color: blue;  
    font-variant: small-caps;  
    font-weight: bold;  
}

මේකෙන් paragraph එකක first line එක blue වෙනවා, small caps වෙනවා, ටිකක් bold වෙනවා.

#### 2. ::first-letter

::first-letter මගින් text එකක first letter එක style කරනවා. Articles වල drop caps (විශාල first letter) හදන්න මේක use කරනවා.

p::first-letter {  
    font-size: 2em;  
    font-weight: bold;  
    color: red;  
}

මේකෙන් first letter එක large වෙනවා, bold වෙනවා, red වෙනවා.

#### 3. ::before සහ ::after

::before සහ ::after මගින් element එකකට **පෙර** හෝ **පසු** content එකතු කරන්න පුළුවන්.

/\* Quotation marks එකතු කිරීම \*/  
blockquote::before {  
    content: "❝";  
    color: #666;  
    font-size: 2em;  
}  
blockquote::after {  
    content: "❞";  
    color: #666;  
    font-size: 2em;  
}

මේකෙන් <blockquote> එකකට quotation marks එකතු වෙනවා.

#### 4. ::selection

::selection මගින් selected text එක style කරන්න පුළුවන්.

p::selection {  
    background-color: yellow;  
    color: black;  
}

### Practical Example

Pseudo-elements use කරලා decorative heading එකක් හදමු. මේකෙන් heading එකට දෙපැත්තෙන් lines එකතු කරනවා.

<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <meta name="viewport" content="width=device-width, initial-scale=1.0">  
    <title>Styled Heading Example</title>  
    <style>  
        body {  
            font-family: Arial, sans-serif;  
            background-color: #f4f4f4;  
            margin: 0;  
            padding: 20px;  
        }

        h2 {  
            position: relative;  
            text-align: center;  
            font-size: 24px;  
            color: #333;  
        }

        h2::before, h2::after {  
            content: "";  
            display: inline-block;  
            width: 50px; /\* Line එකේ පළල \*/  
            height: 2px; /\* Line එකේ උස \*/  
            background: #333; /\* Line එකේ වර්ණය \*/  
            margin: 0 10px; /\* Line සහ text අතර ඉඩ \*/  
            vertical-align: middle; /\* Text එක්ක align කිරීම \*/  
        }  
    </style>  
</head>  
<body>

    <h2>Section Title</h2>  
    <p>This is an example paragraph below the heading. The heading has decorative lines on either side.</p>

</body>  
</html>

### Browser Support

Pseudo-elements ගොඩක් modern browsers වල support කරනවා. ඒත් මේවා මතක තියාගන්න:

-   Pseudo-elements වලට double colon (::) use කරන්න.
-   Some old browsers single colon (:) විතරක් support කරනවා.
-   විවිධ browsers වල test කරලා බලන්න.

### 7\. CSS Box Model

ආයුබෝවන්! අපේ **Web Development for Beginners** series එකේ දෙවෙනි කොටසේ හත්වෙනි ලිපියට ඔයාව සාදරයෙන් පිළිගන්නවා. මේ series එකේ පළවෙනි කොටසෙන් අපි HTML ගැන ලිපි 10ක් ලිව්වා. දෙවෙනි series එකේ එකේ පළවෙනි series එකේ අපි HTML ගැන ලිපි 10ක් ලිව්වා, දෙවෙනි series එකේ පළවෙනි ලිපියෙන් CSS හැඳින්වීමක් කළා, දෙවෙනි ලිපියෙන් **CSS Basic properties** ගැන, **CSS Background Styling** ගැන, සිව්වෙනි ලිපියෙන් **CSS Navigation Bar** ගැන, පස්වෙනි ලිපියෙන් **Handling Multimedia with CSS** ගැන, හයවෙනි එකෙන් “Pseudo Elements” ගැන කතා කළා. දැන් අපි බලමු වෙබ් පිටුවක elements වල structure එක සහ spacing එක තේරුම් ගන්න ගොඩක් වැදගත් concept එකක් වන **CSS Box Model** ගැන.

CSS Box Model එකෙන් ඔයාට HTML element එකක් box එකක් විදිහට හිතන්න උදවු වෙන එක. ඒ box එකේ content, padding, border, margin කියලා layers ගොඩක් තියෙනවා. එන්න, මේක ගැන ඉගෙන ගමු.

### Box Model එකේ Components

CSS Box Model එක main components හතරකින් සමන්විතයි.

-   **Content :** Element එකේ actual content එක. text, images වගේ දේවල්.
-   **Padding :** Content එක වටේ තියෙන clear space එක, border එක ඇතුළේ.
-   **Border :** Padding එක වටේ තියෙන රේඛාව.
-   **Margin :** Border එකෙන් පිටත තියෙන clear space එක.

මේක ටිකක් උදාහරණයකින් බලමු:

div {  
    width: 300px;             /\* Content එකේ width \*/  
    padding: 20px;            /\* Border එක ඇතුළේ space \*/  
    border: 2px solid black;  /\* Border එකේ thickness සහ style \*/  
    margin: 10px;             /\* Border එකෙන් පිටත space \*/  
}

**Try this:** HTML එකට <div> එකක් දාලා, මේ CSS එක apply කරලා browser එකෙන් Inspect කරලා box model එකේ content, padding, border, margin වෙනසවන හැටි බලන්න.

### Total Element Width Calculation

Element එකක total width එක හදන්නේ මෙහෙම:

Total width = width + left padding + right padding + left border + right border + left margin + right margin

උදාහරණයක් විදිහට, උඩ <div> එකේ: Total width = 300 + 40 + 4 + 20 = 364px

ඒ කියන්නේ <div> එක screen එකේ 364px space එකක් ගන්නවා.

### Box-Sizing Property

box-sizing property එකෙන් element එකේ width සහ height calculate වෙන විදිහ change කරන්න පුළුවන්. Default වශයෙන් content-box use කරනවා. ඒකෙදි width වලට padding සහ border include වෙන්නේ නැහැ. ඒත් border-box use කරනකොට width වලට padding සහ border include වෙනවා.

/\* Default box sizing \*/  
.content-box {  
    box-sizing: content-box;  /\* Width/height content වලට විතරයි \*/  
}

/\* Modern box sizing \*/  
.border-box {  
    box-sizing: border-box;   /\* Width/height padding සහ border include \*/  
}

**උදාහරණයක්:** box-sizing: border-box; use කරනකොට, width 300px කියලා දුන්නම padding සහ border එකත් ඒ 300px ඇතුළේ තියෙනවා. Total width එක 300px විතරයි.

### Margin Collapse

Box Model එකේ තව වැදගත් concept එකක් තමයි margin collapse. මේකෙදි vertical margins overlap වෙනවා.

-   Element දෙකක vertical margins meet උනාම, ඒ දෙකෙන් ලොකු margin එක විතරක් යෙදෙනවා.
-   උදාහරණයක් විදිහට, එක paragraph එකක margin-bottom: 20px; සහ ඊළඟ paragraph එකක margin-top: 15px; තියෙනවා නම්, අතර ඉඩ 20px විතරයි (35px නෙවෙයි).

.first-paragraph {  
    margin-bottom: 20px;  
}

.second-paragraph {  
    margin-top: 15px;  
    /\* අතර ඉඩ 20px විතරයි \*/  
}

**Try This:** Paragraph දෙකක් හදලා margins දාලා inspect කරලා බලන්න. Margin collapse වෙනවද කියලා check කරන්න!

### Practice Exercise

මේ code එකේ values change කරලා layout එක කොහොමද change වෙන්නේ කියලා බලන්න:

<!DOCTYPE html>  
<html lang="en">  
<head>  
  <meta charset="UTF-8" />  
  <meta name="viewport" content="width=device-width, initial-scale=1" />  
  <title>Box Styling Example</title>  
  <style>  
    .box {  
      width: 200px;  
      padding: 20px;  
      border: 5px solid blue;  
      margin: 15px;  
      background-color: lightgray;  
    }  
  </style>  
</head>  
<body>  
  <h1>Box Style Example</h1>  
  <div class="box">  
    This is a box with a fixed width of 200px, 20px padding, a blue 5px solid border, 15px margin, and a light gray background.  
  </div>  
</body>  
</html>

මේක fun වැඩක්. Browser එකේ inspect කරලා box model එක බලන්න!

### Best Practices

Box Model එක්ක වැඩ කරනකොට මේවා මතක තියාගන්න:

-   **box-sizing: border-box;** use කරන්න. layouts predictable වෙනවා.
-   vertical spacing කරනකොට **Margin collapse** ගැන දැනුවත් වෙන්න.
-   **Padding** එක inner spacing වලට, **margin** එක outer spacing වලට use කරන්න.
-   pixels වෙනුවට **Relative units** (em, rem, %) use කරන්න responsive designs වලට.

ඔබට CSS ගැන තව දුරටත් ඉගෙන ගන්න ප්රයෝජනවත් resources ටිකක් දෙන්නම්:

1.  [https://web.dev/learn/css](https://web.dev/learn/css/**)
2.  [https://www.w3schools.com/css](https://www.w3schools.com/css/**)
3.  [https://www.codecademy.com/learn/learn-css](https://www.codecademy.com/learn/learn-css**)
4.  [https://www.freecodecamp.org/news/tag/css](https://www.freecodecamp.org/news/tag/css/**)

**Happy coding, Sri Lanka!**
