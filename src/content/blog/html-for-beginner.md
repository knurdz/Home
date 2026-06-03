---
title: "HTML For Beginner"
date: "2025-04-25"
description: "HTML For Beginner"
author: "Sadeepa N Herath"
authorImage: "https://github.com/SadeepaNHerath.png"
image: "/images/blog/html-for-beginner.jpg"
tags:
  - html5-development
  - beginners-guide
  - web-development
  - sinhala
  - html
sourceUrl: "https://medium.com/@sadeepanithushika/html-for-beginner-ae6910f2dc44"
readTime: "24 min read"
---

HTML For Beginner

### HTML කියන්නේ මොකක්ද?

HTML, එහෙමත් නැත්නම් HyperText Markup Language, තමයි web page එකක මූලික ගොඩනැඟිල්ල. සරලව කිව්වොත්, HTML තමයි web page එකක අන්තර්ගතය (content) ව්යුහගත කරලා තේරුමක් දෙන්නේ. උදාහරණයක් විදිහට, ඔයා පත්තරයක ලිපියක් කියවනකොට, මාතෘකාව, උපමාතෘකා, පරිච්ඡේද එහෙම තියෙනවා නේද? HTMLත් එහෙම තමයි, web page එකක තොරතුරු නිසි ලෙස සකස් කරනවා.

HyperText කියන්නේ මොකක්ද? ඒක තමයි එකිනෙකට සම්බන්ධ වෙබ් පිටු. උදාහරණයක් විදිහට, ඔයා “ලංකාදීප” වෙබ් අඩවියේ ලින්ක් එකක් ක්ලික් කරලා පුවත් ලිපියකට යනවා නේද? ඒ සම්බන්ධතාවය තමයි HyperText.

(Hypertext ගැන idea එකක් ගන්න. රූපයේ වෙබ් පිටු කිහිපයක් එකිනෙකට ලින්ක් වෙලා තියෙන හැටි පෙන්වනවා.)

### HTML වැඩ කරන්නේ කොහොමද?

HTML භාවිතා කරන්නේ tags කියන විශේෂ ලකුණු. මේ tags තමයි අන්තර්ගතය ව්යුහගත කරන්නේ. උදාහරණයක් දෙන්නම්: ඔයාට වෙබ් පිටුවක මාතෘකාවක්(heading) දාන්න ඕන නම්, <h1> tag එක යොදාගන්නවා. පරිච්ඡේදයක් (paragraph) ලියන්න ඕන නම් <p> tag එක යොදාගන්නවා. මේ tags ලියන්න රීති ටිකක් තියෙනවා, ඒවාට කියන්නේ syntax සහ semantic rules. ඒවා ගැන ගොඩක් හිතන්න එපා, අපි ටික ටික ඉගෙන ගමු.

### HTML ඉතිහාසය

HTML ගැන කතා කරද්දී, එයාගේ ඉතිහාසයත් ටිකක් බලමු:

1.  HTML 1.0 (1993) — මුල්ම වෙබ් පිටු හැදුවේ මේකෙන්. ඉතාම සරලයි, තොරතුරු බෙදාගන්න විතරයි.
2.  HTML 2.0 (1995) — නව විශේෂාංග එකතු වුණා, මූලික ඒවා වැඩිදියුණු කළා.
3.  HTML 3.0 (1995)– තවත් බලවත් වුණා, නමුත් බ්රව්සර්වල වේගය අඩු වුණා.
4.  HTML 4.01 (1999) — HTML5 එන්න කලින් ගොඩක් ජනප්රිය වුණ සංස්කරණය.
5.  HTML 5 (2012) — HTML 4.01 වැඩිදියුණු කරපු, නවීන වෙබ් අඩවි හදන්න භාවිතා වෙන එක.

HTML කියන්නේ අපේ ගෙදර හදන කෑම වගේ. කාලයත් එක්ක රස වැඩි කරලා, වඩා හොඳ ඒවා හැදුවා වගේ තමයි HTMLත් වැඩිදියුණු වුණේ.

### HTML Tags

HTML tags කියන්නේ angle brackets (< සහ >) ඇතුළේ ලියන විශේෂ වචන. බොහෝ tags වල ආරම්භයක් (opening tag) සහ අවසානයක් (closing tag) තියෙනවා. උදාහරණයක් විදිහට:

-   <html> සහ </html> — මුළු ලේඛනයම ඇතුළත් වෙනවා.
-   <body> සහ </body> — වෙබ් පිටුවේ දිස්වන අන්තර්ගතය ලියන තැන.

නමුත්, සමහර tags වල අවසානයක් නැහැ. ඒවාට කියන්නේ self-closing tags. උදාහරණ:

-   <br> — text බිඳීමක් (line break) දානවා.
-   <img> — රූපයක් එකතු කරනවා.

මේ tags ලියනවා කියන්නේ වාක්යකට විරාම ලකුණු දානවා වගේ. ඒකෙන් තමයි වෙබ් පිටුවට හැඩයක් එන්නේ.

### HTML Attributes

Attributes කියන්නේ tags වලට ටිකක් වැඩිපුර තොරතුරු දෙන එක. මේවා ලියන්නේ opening tag එක ඇතුළේ, name=”value” ආකාරයට. උදාහරණයක් බලමු:

<a href="<https://www.uom.lk>">University of Moratuwa</a>

මෙතන <a> tag එකෙන් සබැඳියක් (link) හදනවා. href කියන්නේ attribute එකේ නම, “<https://www.uom.lk>" කියන්නේ ඒකේ අගය (value). මේක ක්ලික් කළාම ඔයාව මොරටුව විශ්වවිද්යාලයේ වෙබ් අඩවියට ගෙනියනවා. Attributes කියන්නේ ටිකක් විස්තර එකතු කරන ලේබල් වගේ දෙයක්.

### HTML5 document එකක ව්යුහය

දැන් අපි බලමු HTML5 ලේඛනයක් හදන්නේ කොහොමද කියලා. ඒකට මේ ටික ඕන:

1.  <!DOCTYPE html> — මේකෙන් කියනවා “මේක HTML5 document එකක්” කියලා.
2.  <html> tag — මුළු ලේඛනයම ඇතුළත් වෙන මූලික tag එක.
3.  <head> කොටස — වෙබ් පිටුව ගැන තොරතුරු (metadata), මාතෘකාව (title), styles, scripts එහෙම ලියන තැන.
4.  <body> කොටස — වෙබ් පිටුවේ දිස්වන දේවල් (මාතෘකා, text, රූප) ලියන තැන.

මේක ටිකක් විස්තර කරන්නම්:

-   <!DOCTYPE html> ලියලා ලේඛනය ආරම්භ කරනවා.
-   <html> ඇතුළේ සියල්ල ලියනවා.
-   <head> ඇතුළේ <title> වගේ tags යොදලා පිටුවේ නම, තොරතුරු එකතු කරනවා.
-   <body> ඇතුළේ තමයි ඔයාට display වෙන දේවල් ලියන්නේ.

### සරල HTML5 document එකකට උදාහරණයක්

<!DOCTYPE html>  
<html>  
<head>  
    <title>My First Webpage</title>  
</head>  
<body>  
    <h1>Welcome to HTML5</h1>  
    <p>This is a simple HTML5 document.</p>  
</body>  
</html>

මෙතන බලන්න:

-   <!DOCTYPE html> එකෙන් HTML5 කියලා ප්රකාශ කරනවා.
-   <title> එකෙන් පිටුවේ නම “My First Webpage” කියලා දීලා.
-   <body> එකේ <h1> එකෙන් “Welcome to HTML5” කියලා මාතෘකාවක්, <p> එකෙන් පොඩි වාක්යයක් ලියලා.

මේක තමයි ඔයාගේ පළමු වෙබ් පිටුව. ලේසියි නේද?

### අමතර සටහන්

-   HTML තමයි වෙබ් පිටුවේ අන්තර්ගතය ව්යුහගත කරන්නේ.
-   CSS තමයි වෙබ් අඩවියේ පෙනුම (වර්ණ, හැඩ) හදන්නේ. ඉදිරියේදී ඒ ගැන කතා කරමු. දැනට මේ photo දෙකෙන් idea එකක් ගන්න

HTML සහ CSS භාවිතය අතර වෙනස

-   JavaScript තමයි වෙබ් අඩවියට ක්රියාකාරකම් (functions) එකතු කරන්නේ. ඉදිරියේදී ඒ ගැන කතා කරමු.
-   HTML ලේඛනයක් හදද්දී <html> tag එකෙන් ආරම්භ කරන්න recommend කරනවා.
-   web site එකක් කියන්නේ වෙබ් බ්රව්සරයකින් බලන්න පුළුවන් document එකතුවක්. එකේ frontend (පෙනෙන කොටස) සහ backend (සර්වර් පැත්ත) කියලා කොටස් දෙකක් තියෙනවා.

### HTML Header (<header>)

දැන් අපි බලමු <header> tag එක ගැන. මේක තමයි වෙබ් පිටුවක ආරම්භක කොටස (introductory content) හෝ navigation links තියෙන තැන. සරලව කිව්වොත්, ඔයාගේ වෙබ් පිටුවට එන කෙනෙක් මුලින්ම දකින කොටස මෙතන තමයි.

සාමාන්යයෙන් <header> එකේ තියෙන්නේ:

-   මාතෘකා (<h1> — <h6>)
-   ලාංඡනය (logo) හෝ ලස්සන icon එකක්
-   කර්තෘ තොරතුරු (authorship info)

උදාහරණයක් බලමු:

<header>  
    <h1>My Website</h1>  
    <img src="logo.png" alt="Website Logo">  
    <p>Welcome to my website</p>  
</header>

මෙතන <header> එක ඇතුළේ <h1> එකෙන් වෙබ් අඩවියේ නම දාලා, <img> එකෙන් ලාංඡනයක් එකතු කරලා, <p> එකෙන් “ආයුබෝවන්” වගේ පණිවිඩයක් දාලා තියෙනවා. මේක අඩවියේ “මුහුණ” වගේ!

Example Headers

### HTML Footers (<footer>)

දැන් අපි යමු <footer> tag එකට. මේක තමයි වෙබ් පිටුවේ පාදක කොටස (footer section). එහෙමත් නැත්නම්, පිටුවේ බොහොම පහළම තියෙන කොටස. මෙතන තමයි අඩවිය ගැන අවසාන තොරතුරු දෙන්නේ.

සාමාන්යයෙන් <footer> එකේ තියෙන්නේ:

-   කර්තෘ තොරතුරු (author information)
-   ප්රකාශන හිමිකම් තොරතුරු (copyright details)
-   ඇමතුම් තොරතුරු (contact info)
-   අඩවි සිතියම (sitemap)
-   ඉහළට යන සබැඳි (back to top links)
-   ආශ්රිත ලේඛන (related documents)

උදාහරණයක් බලමු:

<footer>  
    <p>© 2025 My Website. All Rights Reserved.</p>  
    <p>Contact: info@mywebsite.com</p>  
    <a href="#">Back to Top</a>  
</footer>

මෙතන <footer> එකේ ප්රකාශන හිමිකම් ගැන තොරතුරු, ඇමතුම් තොරතුරු, සහ “ඉහළට” යන ලින්ක් එකක් දාලා තියෙනවා. වෙබ් පිටුව බලලා ඉවර වෙන කොට මේකෙන් අඩවිය ගැන අවසාන තොරතුරු ලැබෙනවා.

Example Footers

### HTML Headings (<h1> — <h6>)

වෙබ් පිටුවක මාතෘකා (titles) සහ උපමාතෘකා (subtitles) දාන්න තමයි HTML headings භාවිතා කරන්නේ. මේවා ලියන්නේ <h1> සිට <h6> දක්වා tags වලින්. ඒ කියන්නේ <h1> තමයි වැදගත්ම, ලොකුම මාතෘකාව. <h6> තමයි ඒ තරම් වැදගත් නැති, පොඩිම එක.

අපි උදාහරණයක් බලමු:

<h1>Heading 1</h1>  
<h2>Heading 2</h2>  
<h3>Heading 3</h3>

Heading Tags

මෙතන <h1> කියන්නේ ප්රධාන මාතෘකාව ලොකු අකුරෙන්, කැපිලා පෙනෙනවා. ඊළඟට <h2>, <h3> ටික ක්රමක් ක්රමයෙන් පොඩි වෙනවා. ඔයා පොතක ලොකු මාතෘකාවකට යටින් තව උපමාතෘකා ලියනවා වගේ තමයි මේකත්. ලේසි නේද?

ඔයාත් try කරලා බලන්න! <h1> එකකින් “My Web Page” කියලා ලියලා, <h2> එකකින් “Welcome” කියලා එකතු කරලා බලන්න.

### Common HTML Formatting Tags සහ උදාහරණ

දැන් අපි බලමු text හැඩ ගන්වන්න යොදාගන්න ප්රධාන tags ටිකක්. මේවා ගොඩක් වැදගත්, ඒ නිසා හොඳට තේරුම් ගන්න.

### 1\. Bold සහ important text

-   <b> — text bold කරනවා, ඒත් වැඩි වැදගත්කමක් නැති විදිහට.
-   <strong> — text bold කරනවා වගේම වැදගත්කමත් එකතු කරනවා (SEO සහ screen readers මේක හඳුනාගන්නවා).

උදාහරණය:

<p>This is a <b>bold</b> text.</p>  
<p>This is a <strong>very important</strong> text.</p>

Output:

Bold & Strong

<b> එක bold විතරක් කරනවා. <strong> එක bold කරලා “මේක වැදගත්” කියලත් කියනවා. ඔයාට වෙනස පැහැදිලිද? Try කරලා බලන්න!

### 2\. Italic සහ emphasized text

-   <i> — text _italic_ කරනවා (හැඩයට විතරයි).
-   <em> — text _italic_ කරනවා සහ අවධාරණයත් එකතු කරනවා (SEO වලටත් හොඳයි).

උදාහරණය:

<p>This is <i>italic</i> text.</p>  
<p>This is <em>emphasized</em> text.</p>

Output:

Italic & Emphasized

Italic කියන්නේ text ටිකක් ඇඹුල් වෙලා පෙනෙන විදිහ. <i> එක හැඩයට විතරයි, <em> එක රසයකුත් එකතු කරනවා. ඔයාත් ලියලා බලන්න!

### 3\. Highlight කළ text

-   <mark> — text highlight කරනවා (සාමාන්යයෙන් කහ පාටින්).

උදාහරණය:

<p>This is <mark>highlighted</mark> text.</p>

Output:

highlight

වැදගත් කොටසක් පෙන්නන්න ඕන වුණොත් <mark> එක යොදාගන්න. ඔයාටත් ටිකක් highlight කරලා බලන්න!

### 4\. පොඩි text

-   <small> — text පොඩි අකුරෙන් පෙන්වනවා.

උදාහරණය:

<p>This is <small>smaller</small> text.</p>

Output:

small text

Copyright වගේ ටිකක් පොඩි දෙයක් ලියන්න ඕන වුණොත් <small> එක පාවිච්චි කරන්න.

### 5\. මකා දැමූ සහ එකතු කළ text

-   <del> — මකා දැමූ text පෙන්වනවා (ඉරක් ඇඳලා).
-   <ins> — එකතු කළ text පෙන්වනවා (යටින් ඉරක් ඇඳලා).

උදාහරණය:

<p>This is <del>deleted</del> text.</p>  
<p>This is <ins>inserted</ins> text.</p>

Output:

Deleted & Inserted

පරණ එක මකලා, අලුත් එක දැම්මා කියලා පෙන්නන්න මේවා යොදාගන්නවා. ඔයාටත් මේ විදිහට ටිකක් try කරලා බලන්න පුළුවන්.

### 6\. Superscript සහ Subscript text

-   <sup> — Superscript (උඩු අකුරු, උදා: ගණිත exponent).
-   <sub> — Subscript (යටි අකුරු, උදා: රසායනික සූත්ර).

උදාහරණය:

<p>This is an exponent: 2<sup>3</sup> = 8</p>  
<p>This is a chemical formula: H<sub>2</sub>O</p>

Output:

Superscript & Subscript

ගණිතයේ exponent හෝ රසායන විද්යාවේ සූත්ර ලියන්න මේවා perfect! ඔයාත් ලියලා බලන්න.

### HTML Lists

Html lists වෙබ් පිටුවක තොරතුරු පිළිවෙලකට, ලස්සනට පෙන්වන්න lists ගොඩක් වැදගත් වෙනවා. HTML එකේ තියෙනවා lists වර්ග තුනක්: ordered lists, unordered lists, සහ description lists. මේවා යොදාගෙන ඔයාට ඕන විදිහකට තොරතුරු arrange කරන්න පුළුවන්.

### 1\. Ordered Lists (<ol>)

Ordered lists කියන්නේ අනුපිළිවෙල වැදගත් වෙන වෙලාවට යොදාගන්න list එකක්. උදාහරණයක් විදිහට, ඔයා ගෙදර වැඩ ලිස්ට් එකක් හදනවා කියමු. මුලින් මොනවා කරන්න ඕන, ඊළඟට මොනවා කරන්න ඕන කියලා පිළිවෙලක් තියෙනවා නේද? ඒ වගේ තැන්වල ordered lists භාවිතා වෙනවා. මේ lists වල items ඉදිරියේ අංක එනවා. ඒ අංක කරන විදිහ type attribute එකෙන් වෙනස් කරන්න පුළුවන්.

Type Value අංක කරන ආකාරය උදාහරණ 1 (Default) සංඛ්යා 1, 2, 3, 4 A Capital අකුරු A, B, C, D a Simple අකුරු a, b, c, d I Capital රෝමානු අංක I, II, III, IV i Simple රෝමානු අංක i, ii, iii, iv

### උදාහරණය:

<ol type="A">  
  <li>Requirement Analysis</li>  
  <li>Design</li>  
  <li>Development</li>  
  <li>Testing</li>  
</ol>

<ol type="i">  
  <li>Login Setup</li>  
  <li>Dashboard Implementation</li>  
  <li>Database Integration</li>  
</ol>

Ordered Lists

ඔයාත් try කරලා බලන්න! <ol> tag එක යොදාගෙන list එකක් හදලා, type attribute එක වෙනස් කරලා අංක වෙනස් වෙන හැටි බලන්න.

### 2\. Unordered Lists (<ul>)

Unordered lists යොදාගන්නේ අනුපිළිවෙල වැදගත් නැති වෙලාවට. උදාහරණයක් විදිහට, ඔයා supermarket එකට ගන්න දේවල් ලිස්ට් එකක් හදනවා කියමු. මුලින් මොනවා ගත්තත් කමක් නැහැනේ? ඒ වගේ තැන්වල unordered lists හොඳයි. මේ lists වල items ඉදිරියේ bullet points (චූටි ලකුණු) එනවා. ඒ bullet style එක CSS එකේ list-style-type property එකෙන් වෙනස් කරන්න පුළුවන්.

list-style-type Bullet Style උදාහරණ disc (Default) ● Filled රවුම ● Item 1, Item 2 circle ○ හිස් රවුම ○ Item 1, Item 2 square ■ Filled චතුරස්රය ■ Item 1, Item 2 none Bullet නැත (markers නැත)

### උදාහරණය:

<ul style="list-style-type: square;">  
  <li>Project Planning</li>  
  <li>Task Allocation</li>  
  <li>Progress Monitoring</li>  
</ul>

<ul style="list-style-type: circle;">  
  <li>Frontend Development</li>  
  <li>Backend Development</li>  
  <li>Quality Assurance</li>  
</ul>

Unordered Lists

ඔයාත් ගෙදරට ගන්න දේවල් ලිස්ට් එකක් <ul> එකකින් හදලා, list-style-type වෙනස් කරලා බලන්න. Bullet style එක වෙනස් වෙනවා බලන්න ලස්සනයි!

### 3\. Description Lists (<dl>)

Description lists යොදාගන්නේ වචනයක් හෝ යෙදුමක් (term) එකක් සහ ඒකේ විස්තරය (description) පෙන්වන්න. උදාහරණයක් විදිහට, වචනාර්ථ දෙන glossary එකක් හදනවා වගේ. මේකේ tags දෙකක් තියෙනවා:

-   <dt> — Term එක (වචනය)
-   <dd> — Description එක (විස්තරය)

### උදාහරණය:

<dl style="border: 1px solid #ccc; padding: 10px;">  
  <dt><strong>Frontend Development</strong></dt>  
  <dd style="margin-left: 20px;">Focuses on the user interface and user experience of a website.</dd>

  <dt><strong>Backend Development</strong></dt>  
  <dd style="margin-left: 20px;">Handles server-side logic, database management, and application functionality.</dd>  
</dl>

Description Lists

මේකෙන් ඔයාට terms ටිකක් define කරන්න පුළුවන්. උදාහරණයක් විදිහට, ඔයාගේ වෙබ් අඩවියේ FAQ section එකක් description list එකකින් හදන්න try කරන්න.

### Nested Lists (Hierarchical Structure)

Nested lists කියන්නේ list එකක් ඇතුළේ තව list එකක් දාන එක. මේකෙන් ඔයාට උපකාණ්ඩ (subcategories) හෝ ධූරාවලි වගේ දේවල් පෙන්වන්න පුළුවන්. උදාහරණයක් විදිහට, ඔයාගේ පාඩම් විෂයන් ලිස්ට් එකක් හදලා, ඒ යටතේ උපවිෂයන් දාන්න පුළුවන්.

### උදාහරණය:

<ul>  
  <li>Web Development  
    <ul>  
      <li>HTML</li>  
      <li>CSS</li>  
      <li>JavaScript</li>  
    </ul>  
  </li>  
  <li>Software Development  
    <ul style="list-style-type: square;">  
      <li>Python</li>  
      <li>Java</li>  
      <li>C++</li>  
    </ul>  
  </li>  
</ul>

Nested Lists

මේක try කරලා බලන්න! ඔයාගේ ප්රියතම subjects ලිස්ට් එකක් හදලා, ඒ යටතේ subtopics ටිකක් nested list එකක් විදිහට දාන්න.

TIP: Type එක assign නොකර list mix කර කර nested loops හදලා බලන්න bullet, numbering වෙනස් වෙන විදිහ. හැමෝම කරන්න ඕන නෑ ඉගෙනගන්න උවමනාවක් තියන අය විතරක් කරලා බලන්න!

### HTML Images

වෙබ් පිටුවකට images එකතු කළාම ඒක ලස්සන වෙනවා වගේම, බලන අයට තොරතුරු ලේසියෙන් තේරෙනවා. HTML එකේ images දාන්නේ <img> tag එකෙන්, ඒකට closing tag එකක් නැහැ. Images හරියට යොදාගත්තොත්, user experience එකත්, accessibility එකත් වැඩි වෙනවා.

### 1\. HTML හි Image එකක් එකතු කිරීම

වෙබ් පිටුවකට image එකක් දාන්න <img> tag එක යොදාගන්නවා. මේකට අවශ්ය attributes දෙකක් තියෙනවා.

-   src (Source): Image එක තියෙන තැන (URL හෝ file path එක).
-   alt (Alternative Text): Image එක ගැන විස්තරයක්, image එක load වෙන්නේ නැත්තම් හෝ screen readers භාවිතා කරන අයට පෙන්වන්න.

### උදාහරණය:

<img src="image.jpg" alt="A beautiful sunset over the ocean">

මෙතන:

-   src වලින් “image.jpg” කියන image එක point කරනවා.
-   alt වලින් image එක ගැන කියනවා: “A beautiful sunset over the ocean”.

Image එක load වෙන්නේ නැත්තම්, browser එක මෙහෙම පෙන්වනවා:

alt image

ත් try කරලා බලන්න! ඔයාගේ computer එකේ තියෙන image එකක් <img> tag එකෙන් දාලා, alt text එකත් එකතු කරලා බලන්න.

### 2\. Image එකක ප්රමාණය වෙනස් කිරීම

Image එකක size එක adjust කරන්න width සහ height attributes යොදාගන්නවා. මේවට values දෙන්නේ pixels (px) හෝ percentages (%) වලින්.

### උදාහරණය:

<img src="landscape.jpg" alt="Mountain landscape" width="300" height="200">  
<img src="landscape.jpg" alt="Mountain landscape" width="500" height="200">  
<img src="landscape.jpg" alt="Mountain landscape" width="300" height="300">

Different sizes of image

### Best Practice:

Image එකේ aspect ratio (ප්රමාණ අනුපාතය) රැකගන්න, width හෝ height එකක් විතරක් දෙන්න. එතකොට browser එක අනිත් එක auto adjust කරගන්නවා.

<img src="landscape.jpg" alt="Mountain landscape" width="300">

මෙතන width 300px විතරයි දීලා තියෙන්නේ, height එක auto adjust වෙනවා.

ඔයාත් ටිකක් අත්හදා බලන්න. Image එකක width විතරක් දීලා, height එක කොහොමද වෙනස් වෙන්නේ කියලා check කරන්න.

### 3\. Responsive Images (CSS එක්ක)

Images responsive කරන්න, එහෙමත් නැත්නම් screen size එකට match වෙන්න, CSS යොදාගන්නවා.

### උදාහරණය:

<img src="responsive.jpg" alt="Responsive design example" style="max-width: 100%; height: auto;">

-   max-width: 100% මගින් image එක container එකට හරියන්න scale වෙනවා.
-   height: auto මගින් aspect ratio එක රැකගන්නවා.

මේක mobile-friendly වෙබ් පිටු හදනකොට ගොඩක් වැදගත්.

responsive image

ඔයාගේ webpage එක phone එකකින් බලලා, image එක හොඳට පේනවද කියලා බලන්න. CSS එක යොදලා responsive කරලා බලන්න!

### 4\. Local සහ External Images

Images එකතු කරන්න පුළුවන් දෙවිදිහකින්:

-   Local Files: ඔයාගේ project folder එකේ තියෙන images.
-   External URLs: Internet එකේ වෙන server එකක තියෙන images.

### උදාහරණය (Local File):

<img src="images/logo.png" alt="Company Logo">

### උදාහරණය (External URL):

<img src="<https://example.com/image.jpg>" alt="Online Image">

Local images යොදාගන්න එක හොඳයි, මොකද ඒවා ඉක්මනට load වෙනවා. External images යොදාගන්නකොට server එකේ issue එකක් ආවොත් image එක පෙන්නන්නේ නැහැ.

### 5\. Clickable Image එකක් හදමු

Image එකකින් link එකකට යන්න පුළුවන් <a> tag එක යොදාගෙන.

### උදාහරණය:

<a href="<https://www.example.com>">  
  <img src="button.jpg" alt="Click here" width="150">  
</a>

මෙතන image එක click කළාම “<https://www.example.com>" වෙත යනවා.

Hyperlink images

ඔයාත් try කරන්න! Image එකක් link එකක් විදිහට දාලා, උදාහරණයක් විදිහට Facebook profile එකට link කරන්න.

### 6\. Image Formats සහ Optimization

වෙබ් පිටුවක images යොදාගන්නකොට format එක තෝරන එක වැදගත්. ඒකෙන් page load speed සහ quality එක තීරණය වෙනවා.

Image types

Page load speed වැඩි කරන්න, images compress කරන්න. [TinyPNG](https://tinypng.com/) හෝ [Squoosh](https://squoosh.app/) වගේ tools යොදාගන්න.

ඔයාත් එකම image එක JPEG සහ PNG විදිහට save කරලා, file size එක බලන්න.

### 7\. Background Images (CSS එක්ක)

Image එකක් webpage එකේ background එක විදිහට දාන්න CSS යොදාගන්නවා.

### උදාහරණය:

body {  
  background-image: url("background.jpg");  
  background-size: cover;  
  background-position: center;  
}

මෙතන “background.jpg” webpage එකේ background එක වෙනවා, full screen එක cover වෙන්න.

ඔයාත් background image එකක් දාලා, CSS එක change කරලා position, size එහෙම adjust කරලා බලන්න.

### 8\. Lazy Loading Images

Image ගොඩක් තියෙන webpage එකක performance වැඩි කරන්න lazy loading යොදාගන්නවා. ඒකෙන් images load වෙන්නේ screen එකේ පෙනෙන විට විතරයි.

### උදාහරණය:

<img src="large-image.jpg" alt="High-resolution image" loading="lazy">

-   loading=”lazy” මගින් image එක load වෙන්නේ අවශ්ය වෙලාවට විතරයි, page load time අඩු වෙනවා.

Images ගොඩක් තියෙන page එකක lazy loading try කරලා, speed එක වැඩි වෙනවද බලන්න.

### HTML Video & Audio

HTML5 එක්ක වෙබ් පිටුවලට audio සහ video එකතු කරන්න පුළුවන්. මේවා යොදාගෙන ඔයාගේ වෙබ් පිටුව තවත් ලස්සන කරගන්න ලේසි වෙනවා

### HTML හි Video

HTML5 එක්ක <video> tag එක ආවා. ඒකෙන් වෙබ් පිටුවකට video එකක් directly එකතු කරන්න පුළුවන්.

<video width="320" height="240" controls>  
  <source src="movie.mp4" type="video/mp4">  
  <source src="movie.ogg" type="video/ogg">  
  Your browser does not support the video tag.  
</video>

මෙම code එකෙන් වීඩියෝ format දෙකක් play කරන්න allow කරලා තියනවා. එක වීඩියෝ format එකක්වත් support නැත්තන් “Your browser does not support the video tag” එක පෙන්නවා නැතිනම් දීලා තියන අනුපිලිවෙලින් මුලින්ම support කරන වීඩියෝ එක play කරනවා.

### Video Attributes

-   controls: Play, pause, volume වගේ buttons පෙන්වනවා.
-   autoplay: Page එක load වෙනකොටම video එක play වෙනවා.
-   loop: Video එක ඉවර වුණාම ආයෙත් play වෙනවා.
-   muted: Video එකේ sound එක mute කරලා තියෙනවා.

ඔයාත් <video> tag එක try කරන්න! ඔයාගේ computer එකේ තියෙන short video එකක් දාලා, controls එක්ක play කරලා බලන්න. autoplay attribute එක එකතු කරලා, page එක load වෙනකොටම video එක play වෙනවද බලන්න. Sound එක නැතුව ඕනෑ නම් muted දාලා try කරන්න.

### HTML හි Audio

Audio files (songs, sounds) එකතු කරන්න <audio> tag එක යොදාගන්නවා.

<audio controls>  
  <source src="audio.mp3" type="audio/mpeg">  
  <source src="audio.ogg" type="audio/ogg">  
  Your browser does not support the audio element.  
</audio>

video tag එක වගේම තමයි මෙතනත් කෝඩ් එක වැඩ කරන්නෙ. audio format දෙකක් play කරන්න allow කරලා තියනවා. එක audio format එකක්වත් support නැත්තන් “Your browser does not support the audio element” එක පෙන්නවා නැතිනම් දීලා තියන අනුපිලිවෙලින් මුලින්ම support කරන audio එක play කරනවා.

### Audio Attributes

-   controls: Play, stop, volume වගේ audio control buttons පෙන්වනවා.
-   autoplay: Page load වෙනකොටම audio එක play වෙනවා.
-   loop: Audio එක ඉවර වුණාම ආයෙත් play වෙනවා.
-   preload: Page එක load වෙනකොට audio එකත් load කරන්නද කියලා control කරනවා (auto, metadata, none).

ඔයාත් <audio> tag එකෙන් song එකක් දාලා බලන්න! controls එක එක්ක play කරලා, loop attribute එක දාලා song එක repeat වෙනවද බලන්න. autoplay එකත් try කරලා බලන්න. page එක open වෙනකොටම song එක start වෙනවද කියලා.

### HTML Tables

HTML Table භාවිතා වෙන්නේ දත්ත ලස්සනට arrange කරලා පෙන්නන්න. උදාහරණයක් විදිහට, ඔයාට timetable එකක්, මිල ලැයිස්තුවක්, හෝ report එකක් webpage එකක පෙන්නන්න ඕන නම්, tables තමයි best. ඒවා බලන අයට ලේසියෙන් තේරෙන විදිහට data organize කරනවා.

### 1\. HTML වගු තේරුම් ගනිමු

HTML table එකක main parts තුනක් තියෙනවා:

1.  වගු පේළි (<tr>) — එක row එකක් හදනවා.
2.  වගු දත්ත (<td>) — එක එක cells වල data තියෙනවා.
3.  වගු ශීර්ෂ (<th>) — තීරුවල headings දෙනවා (bold සහ center වෙනවා).

අපි බලමු basic table එකක් කොහොමද හදන්නේ කියලා.

<table border="1">  
  <tr>  
    <th>Name</th>  
    <th>Age</th>  
    <th>Country</th>  
  </tr>  
  <tr>  
    <td>Alice</td>  
    <td>25</td>  
    <td>USA</td>  
  </tr>  
  <tr>  
    <td>Bob</td>  
    <td>30</td>  
    <td>UK</td>  
  </tr>  
</table>

Table with border = 1

-   <table> tag එකෙන් table එක start කරනවා.
-   <tr> එකෙන් row එකක් හදනවා.
-   <th> එකෙන් column headings දෙනවා (bold සහ center වෙනවා automatically).
-   <td> එකෙන් data cells හදනවා.
-   border=”1" දැම්මම table එකේ borders පේනවා.

Try it: ඔයා මේ code එක copy කරලා HTML file එකක දාලා browser එකක open කරලා බලන්න. Table එක හරියට පේනවද කියලා check කරන්න!

### 2\. Table එකට Caption එකක් දාමු

Table එකට title එකක් දෙන්න ඕන නම් <caption> tag එක යෝදාගන්නවා. ඒකෙන් data ගැන ලේසියෙන් තේරුම් ගන්න පුළුවන්.

<table border="1">  
  <caption>Student Information</caption>  
  <tr>  
    <th>Name</th>  
    <th>Grade</th>  
  </tr>  
  <tr>  
    <td>John</td>  
    <td>A</td>  
  </tr>  
</table>

Table with Caption

Caption එක table එකට උඩින් එනවා. ලස්සනයි, ලේසියි!

### 3\. Cells එකතු කිරීම (colspan සහ rowspan)

අපිට table එකේ cells තිරස් අතට (horizontally) සහ සිරස් අතට (vertically) එකතු කරන්න පුළුවන්. ඒකට යෝදාගන්නේ:

-   colspan — තීරු එකතු කරනවා.
-   rowspan — පේළි එකතු කරනවා.

<table border="1">  
  <tr>  
    <th colspan="2">Srudent Information</th>  
  </tr>  
  <tr>  
    <td>Name</td>  
    <td>Grade</td>  
  </tr>  
  <tr>  
    <td rowspan="2">Emily</td>  
    <td>A</td>  
  </tr>  
  <tr>  
    <td>B</td>  
  </tr>  
</table>

Rowspan & Colspan

-   colspan=”2" දැම්මම “සිසු විස්තර” heading එක තීරු 2කට යනවා.
-   rowspan=”2" දැම්මම “Emily” cell එක පේළි 2කට යනවා.

Try This: colspan හෝ rowspan value එක 3 කරලා run කරලා බලන්න. Table එක වෙනස් වෙන හැටි බලන්න

### 4\. CSS එක්ක Table එක Style කරමු

Table එකට ලස්සන look එකක් දෙන්න CSS යෝදාගන්නවා. ඒකෙන් borders, colors, spacing වගේ දේවල් වෙනස් කරන්න පුළුවන්.

<style>  
  table {  
    width: 50%;  
    border-collapse: collapse;  
  }  
  th, td {  
    border: 1px solid black;  
    padding: 8px;  
    text-align: center;  
  }  
  th {  
    background-color: #f2f2f2;  
  }  
</style>

<table>  
  <tr>  
    <th>Name</th>  
    <th>Score</th>  
  </tr>  
  <tr>  
    <td>David</td>  
    <td>85</td>  
  </tr>  
  <tr>  
    <td>Anna</td>  
    <td>90</td>  
  </tr>  
</table>

Without CSS

With CSS

-   width: 50%; — Table එකේ පළල 50% කරනවා.
-   border-collapse: collapse; — Borders අතර ඉඩ ඉවත් කරනවා.
-   padding: 8px; — Cells ඇතුළේ ඉඩ දෙනවා (ලේසියෙන් කියවන්න).
-   text-align: center; — Text මැදට ගන්නවා.
-   background-color: #f2f2f2; — Headers වලට light gray color එකක් දෙනවා.

දැනට CSS ගැන දන්නැත්තම් ලොකුවට හිතන්න එපා ඉස්සරහට ඒ ගැන ඉගෙනගමු.

### 5\. Table එකේ Alignment සහ Width Control කරමු

Table එකේ පළල සහ පිහිටීම වෙනස් කරන්නත් පුළුවන්.

<table border="1" width="80%" align="center">  
  <tr>  
    <th>Name</th>  
    <th>Job</th>  
  </tr>  
  <tr>  
    <td>Mark</td>  
    <td>Engineer</td>  
  </tr>  
</table>

Table Alignment

-   width=”80%” — Table එක 80% පළලට ගන්නවා. (page size එකෙන් 80%)
-   align=”center” — Table එක page එකේ මැදට ගන්නවා.

Note: මේ attributes work වුණත්, modern web design වලදී CSS යෝදාගන්නවා තමයි best (උදා: margin: 0 auto;).

### 6\. Advanced Table Features

### A. Striped Rows

Table එක කියවන්න ලේසි වෙන්න alternate rows වලට colors දෙන්න පුළුවන්.

<style>  
      tr:nth-child(even) {  
        background-color: #b13838;  
      }  
    </style>

මේකෙන් even rows වලට gray color එකක් එනවා.

Row background color

### B. Hover Effect

Mouse එක row එකක් උඩ තියනකොට color එක change වෙන්නත් පුළුවන්.

<style>  
  tr:hover {  
    background-color: yellow;  
  }  
</style>

මේක run කරලා mouse එක table එක උඩ ගෙනියල බලන්න, කහ පාටට වෙනස් වෙනවා!

### 7\. Nested Tables (Table එකක ඇතුළේ Table එකක්)

<td> cell එකක ඇතුළේ තව table එකක් දාන්න පුළුවන්.

<table border="1">  
  <tr>  
    <th>Employee</th>  
    <th>Details</th>  
  </tr>  
  <tr>  
    <td>John</td>  
    <td>  
      <table border="1">  
        <tr>  
          <th>Department</th>  
          <td>IT</td>  
        </tr>  
        <tr>  
          <th>Salary</th>  
          <td>$5000</td>  
        </tr>  
      </table>  
    </td>  
  </tr>  
</table>

මේකෙන් “Details” cell එක ඇතුළේ mini table එකක් හදනවා.

Nested Tables

### HTML Table Tags Summary

Summary

### HTML Forms

HTML form එකක් කියන්නේ webpage එකක users ලට data input කරන්න ඉඩ දෙන කොටසක්. ඒ data server එකකට යවලා process කරන්න පුළුවන්. Forms තමයි interactive webpages හදන්න උදව් වෙන්නේ.

### Basic Form Structure

HTML form එකක් හදන්න <form> tag එක යොදාගන්නවා. ඒකට action සහ method කියන attributes දෙකක් තියනවා.

<form action="/submit-form" method="post">  
    <!-- Form elements go here -->  
</form>

-   action: Form එක submit කරනකොට data යවන්න ඕන URL එක (උදා: “/submit-form”).
-   method: Data යවන ආකාරය (GET හෝ POST).

Tip: ඔයා beginner කෙනෙක් නිසා, දැනට action සහ method ගැන වැඩිපුර හිතන්න එපා. අපි ඉස්සෙල්ලා form එක හදන elements ගැන බලමු.

### Common Form Elements

Form එකක තියෙන වැදගත් කොටස් ටිකක් බලමු. මේවා තමයි users ලට data input කරන්න උදව් වෙන්නේ.

### 1\. Text Input Fields

-   Single-line text input: <input type=”text” name=”username”> එක line එකක ලියන Username, email, phone number වගේ දේවල් enter කරන්න යොදාගන්නවා.
-   Password field: <input type=”password” name=”password”> Password type කරනකොට characters hide වෙනවා (උදා: \*\*\*\*).
-   Multi-line text area: <textarea name=”message” rows=”4" cols=”50"></textarea> Comments, messages වගේ ටිකක් වැඩිපුර ලියන්න ඕන තැන්වල යොදාගන්නවා.

### 2\. Selection Elements

-   Radio buttons: <input type=”radio” name=”gender” value=”male”> එක option එකක් විතරක් select කරන්න පුළුවන් (උදා: Gender — Male/Female).
-   Checkboxes: <input type=”checkbox” name=”vehicle” value=”bike”> Multiple options select කරන්න යොදාගන්නවා (උදා: Hobbies — Coding, Reading).
-   Dropdown lists: <select> සහ <option> tags යොදාගෙන. උදාහරණයක්:

<select name="country">  
    <option value="sl">Sri Lanka</option>  
    <option value="in">India</option>  
    <option value="uk">UK</option>  
</select>

selection element

### 3\. Buttons

-   Submit button: <input type=”submit” value=”Submit”> Form එක submit කරන්න යොදාගන්නවා.
-   Reset button: <input type=”reset” value=”Reset”> Form එකේ ලියපු data ඔක්කොම clear කරන්න.

Try This: HTML file එකක් හදලා text input එකක්, radio button එකක්, checkbox එකක්, සහ submit button එකක් දාලා browser එකේ open කරලා බලන්න. Form එක fill කරලා submit එක ඔබලා බලන්න මොකද වෙන්නේ කියලා!

### Example of a Complete Form

full form එකක් කොහොමද හදන්නේ කියලා අපි බලමු . මේකෙන් ඔයාට හොඳ අදහසක් ගන්න පුළුවන්.

<form action="/submit" method="post">  
    <label for="fname">First Name:</label>  
    <input type="text" id="fname" name="fname"><br>

    <label for="email">Email:</label>  
    <input type="email" id="email" name="email"><br>

    <label>Gender:</label>  
    <input type="radio" name="gender" value="male"> Male  
    <input type="radio" name="gender" value="female"> Female<br>

    <label>Interests:</label>  
    <input type="checkbox" name="interest" value="coding"> Coding  
    <input type="checkbox" name="interest" value="reading"> Reading<br>

    <input type="submit" value="Submit">  
</form>

Example Form

මේ form එකේ:

-   First name සහ email එක text inputs වලින් ගන්නවා.
-   Gender එක radio buttons වලින් select කරනවා.
-   Interests ටික checkboxes වලින් තෝරනවා.
-   Submit button එකෙන් form එක යවනවා.

### Important Form Attributes

Form එකක තියෙන elements වල name attribute එක ගොඩක් වැදගත්. ඒකෙන් server එකට data යවනවා.

උදා: <input type=”text” name=”username”> — “username” කියන name එකෙන් තමයි data යවන්නෙ.

-   action: Form data යවන්න ඕන තැන (URL එක).
-   method: Data යවන විදිහ (GET හෝ POST).
-   required: Field එක fill කරන්නම ඕන කියලා දෙනවා. උදා: <input type=”text” required>.

### Form Validation

HTML5 එක්ක built-in validation තියෙනවා.

-   required attribute එකෙන් field එක mandatory කරනවා.
-   type=”email”, type=”number”, type=”url” වගේ inputs automatically check වෙනවා (උදා: email format එක හරිද කියලා).

Form එක submit කරනකොට required fields fill කරලා නැත්තම්, browser එක “Please fill out this field” වගේ message එකක් පෙන්නනවා.

### Best Practices

Forms හදනකොට මේ ටික මතක තියාගන්න:

-   Labels යොදාගන්න: <label for=”id”> — Accessibility වැඩි වෙනවා, users ලට ලේසි වෙනවා.
-   Fieldsets යොදාගන්න: Related fields group කරන්න <fieldset> tag එක යොදාගන්න. උදා:

<fieldset>  
    <legend>Personal Info</legend>  
    <label for="fname">First Name:</label>  
    <input type="text" id="fname" name="fname">  
</fieldset>

Field set

-   Validation හරියට කරන්න: Required fields, correct formats (email, number) check කරන්න.
-   Clear instructions දෙන්න: Users ලට තේරෙන්න instructions සහ error messages දෙන්න.

### HTML Content Model කියන්නේ මොකක්ද?

ඔබ ගෙයක් හදනවා කියලා හිතන්න. ගෙදරක වහලය හදන්නේ බිත්ති හදලා ඉවර වුණාට පස්සේ නේද? ඒ වගේම HTML වලදීත්, එක එක elements එක එක තැන්වල යෙදෙන්නේ නිශ්චිත රීති ටිකක් අනුව. HTML Content Model කියන්නේ ඒ රීති ටික. මේකෙන් තමයි අපිට තේරෙන්නේ මොන element එකක් කොහේ පාවිච්චි කරන්න ඕනේද, ඒවා එකිනෙකට ගැලපෙන්නේ කොහොමද කියලා.

HTML Content Model

### Traditional Content Models

අපි මුලින්ම බලමු HTML වල තිබුණු පැරණි රීති ටික. elements දෙවිදියකට බෙදුණා:

### 1\. Block Elements

-   අලුත් line එකකින් පටන් ගන්නවා.
-   තියෙන ඉඩ පුළුල්ව පුරවනවා.
-   උදාහරණ: <div> , <p> , <h1>

### 2\. Inline Elements

-   ටෙක්ස්ට් එක්ක එකට ගලාගෙන යනවා.
-   අවශ්ය තරම් විතරක් ඉඩ ගන්නවා.
-   උදාහරණ: <span> , <a> , <strong>

Block elements and Inline elements

### New HTML5 Content Models

HTML5 ආවට පස්සේ මේ රීති ටික වඩාත් නිශ්චිත වුණා. දැන් තියෙන්නේ කැටගරි හතක් (7). මේ එක එක එක ගැන ලේසියෙන් බලමු:

### 1\. Metadata Content

-   ගෙදර blueprint එකක් වගේ. ගෙදර ගැන තොරතුරු දෙනවා, ඒත් බලන්න බෑ.
-   උදාහරණ: <title> , <link> , <meta>, <style>

### 2\. Flow Content

-   ගෙදර මුළු බඩුම ටික වගේ. බොඩි එකේ තියෙන ගොඩක් එලිමන්ට් මේකට ඇතුළත් වෙනවා.
-   උදාහරණ: Text elements, Structural elements, Interactive elements

### 3\. Sectioning Content

-   ගෙදර වෙන වෙනම කාමර වගේ. වෙබ් පිටුව කොටස් කරනවා.
-   උදාහරණ: <article> , <section>, <nav> , <aside>

### 4\. Heading Content

-   කාමරවල දොරකඩේ තියෙන නම්පුවරු වගේ.
-   උදාහරණ: <h1> සිට <h6> , <hgroup>

### 5\. Phrasing Content

-   බිත්තියේ ලියලා තියෙන වචන වගේ. text සහ text level element.
-   උදාහරණ: Text, <span>, <img>, <input>.

### 6\. Embedded Content

-   ජනේල වගේ, එළියෙන් බඩු ගේනවා.
-   උදාහරණ: <img>, <video>, <audio>, <iframe>.

### 7\. Interactive Content

-   button සහ switch වගේ, ඔබට එක්ක ගනින්න පුළුවන්.
-   උදාහරණ: <button>, <a>, <select>, form alignment.

special: එක එලිමන්ට් එකකට category කිහිපයකටම අයිති වෙන්න පුළුවන්. උදාහරණයක් විදිහට <a> කියන්නේ flow සහ interactive දෙකටම අයිති එකක්.

### Best Practices

-   එලිමන්ට් ඒවායේ අරමුණටම භාවිතා කරන්න. උදා: <div> වෙනුවට <section> ඕනෑ තැන ඒක යොදන්න.
-   Content Model රීති අනුව නිවැරදිව nest කරන්න. උදා: inline එකකටblovk එකක් දාන්න එපා.
-   Accessibility ගැන හිතන්න. semantic elementsයොදලා screen readers වලට උදව් කරන්න.

### Hyperlinks කියන්නේ මොකක්ද?

Hyperlinks කියන්නේ clickable වචන හෝ රූප. ඒවා මත click කළාම, ඔබව වෙනත් වෙබ් පිටුවකට හෝ එකම පිටුවේ වෙනත් කොටසකට ගෙනියනවා. මේක වෙබ් redirect කරන මූලිකම ක්රමයක්!

### Basic Link Syntax

HTML වලදී, hyperlinks හදන්නේ <a> (anchor) ටැග් එකෙන්. ඒකට තියෙන්නේ ප්රධාන කොටස් දෙකයි:

-   href attribute: linkඑකෙන් යන්න ඕන තැන (URL හෝ ගොනුව).
-   Link text: බලන අයට පේන, click කරන්න පුළුවන් වචන.

<a href="<https://example.com>">Visit Example Website</a>

Text එක මත click කළාම,

### Target Attribute

target attribute එකෙන් linkඑක open වෙන විදිහ තෝරන්න පුළුවන්:

-   \_self: එකම window හෝ tab එකේ open වෙනවා (default).
-   \_blank: අලුත් window හෝ tab එකක open වෙනවා.
-   \_parent: Parent frame එකේ open වෙනවා (frame ගැන පසුව ඉගෙන ගමු).
-   \_top: Full window එකේ open වෙනවා.

<a href="<https://example.com>" target="\_blank">Open in New Tab</a>

Play

මෙතන click කළාම, linkඑක අලුත් ටැබ් එකක open වෙනවා. ඔබේ වෙබ් අඩවියත් ඒ විදිහට විවෘතව තියෙනවා!

### Link Types

### 1\. Absolute URLs

මේවා protocol (http:// හෝ [https://)](https://\)) එක්ක එන සම්පූර්ණ ලිපිනයන්. වෙනත් වෙබ් අඩවිවලට යන්න මේවා යොදාගන්නවා.

<a href="<https://www.example.com/page>">Full URL</a>

### 2\. Relative URLs

එකම වෙබ් අඩවියේ ඇතුළත තියෙන පිටුවලට යන්න. Protocol ඕන නෑ.

<a href="/about/contact.html">Contact Page</a>

### 3\. Email Links

මේවා click කළාම ඔබේ ඊමේල් app එක open වෙලා, recipient එකත් fill වෙලා එනවා.

<a href="mailto:example@email.com">Send Email</a>

Mailto

### Best Practices

-   Text එක විස්තරාත්මකව යොදන්න: “Click here” වෙනුවට “Go to the example website” වගේ ලියන්න.
-   External links අලුත් ටැබ් එකක open කරන්න: target=”\_blank” යොදන්න.
-   Security වෙනුවෙන් rel=”noopener” එකත් යොදන්න: \_blank එක්ක යොදනකොට මේකත් එකතු කරන්න.
-   link වැඩ කරනවද බලන්න: Broken links තියෙන්න එපා.
-   linkstyle එක සමානව තියන්න: වෙබ් අඩවිය පුරාම එකම look එක තියෙන්න ඕන.

### 💡 Pro Tip

linkඑකක් \_blank එක්ක open කරනකොට, බලන අයට ඒ ගැන කියන්න. උදාහරණයක් විදිහට, “අලුත් ටැබ් එකකින් විවෘත වෙනවා” කියලා ලියන්න හෝ icon එකක් යොදන්න. එතකොට users ලට surprise එකක් වෙන්නේ නෑ!

### Styling Links

CSS එක්ක linkවල විවිධ states වෙනස් කරන්න පුළුවන්:

-   a:link — සාමාන්ය link(බලලා නැති ඒවා).
-   a:visited — visited ලින්ක්.
-   a:hover — mouse එක උඩ තියනකොට.
-   a:active — click කරන මොහොතේ.

a:link {  
    color: blue;  
}  
a:visited {  
    color: purple;  
}  
a:hover {  
    color: red;  
}  
a:active {  
    color: yellow;  
}

එහෙනම් අපි HTML ගැන කතා කරලා ඉවරයි. ඊළග ලිපියේ ඉදන් අපි CSS ගැන කතා කරමු. තවදුරටත් ඉගෙනගන්න උවමනාවක් තියන අය මේ resources try කරලා බලන්න!.

1.  [W3Schools](https://www.w3schools.com/html/)
2.  [HTML.com](http://html.com/)
3.  [Khan Academy](https://www.khanacademy.org/computing/computer-programming/html-css)
4.  [Scrimba](https://scrimba.com/t0html)
5.  [freeCodeCamp](https://www.freecodecamp.org/news/html-crash-course/)

Happy Coding!
