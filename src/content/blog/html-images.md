---
title: "HTML Images"
date: "2025-04-17"
description: "ආයුබෝවන්! ඔයාලා අපේ Web Development For Beginner article series එකේ පස්වෙනි පියවරට ආවා. මේ series එකේ පළමු ලිපියේදී අපි HTML ගැන ඉගෙන ගත්තා, දෙවෙනි ලිපියේදී Header සහ Footer tags ගැන, තුන්වෙනි ලිපි..."
author: "Sadeepa N Herath"
authorImage: "https://github.com/SadeepaNHerath.png"
image: "/images/blog/html-images.jpg"
tags:
  - web3
  - image
  - html-image
  - web-development
  - html
sourceUrl: "https://medium.com/@sadeepanithushika/html-images-7f3e2a1e90ee"
readTime: "5 min read"
---

ආයුබෝවන්! ඔයාලා අපේ Web Development For Beginner article series එකේ පස්වෙනි පියවරට ආවා. මේ series එකේ [පළමු ලිපියේදී](https://medium.com/@sadeepanithushika/html-basics-%E0%B6%94%E0%B6%B6%E0%B7%9A-%E0%B6%B4%E0%B7%85%E0%B6%B8%E0%B7%94-%E0%B7%80%E0%B7%99%E0%B6%B6%E0%B7%8A-%E0%B6%B4%E0%B7%92%E0%B6%A7%E0%B7%94%E0%B7%80-%E0%B7%83%E0%B7%8F%E0%B6%AF%E0%B6%B8%E0%B7%94-72a3df022b29) අපි HTML ගැන ඉගෙන ගත්තා, [දෙවෙනි ලිපියේදී](https://medium.com/@sadeepanithushika/header-%E0%B7%83%E0%B7%84-footer-tags-6158a9216dae) Header සහ Footer tags ගැන, [තුන්වෙනි ලිපියේදී](https://medium.com/@sadeepanithushika/html-text-formatting-5e1de60fc3b1) HTML text formatting ගැන, [සිව්වෙනි ලිපියේදී](https://medium.com/@sadeepanithushika/html-lists-e25b79c49a7c) HTML Lists ගැන කතා කළා. අද අපි බලමු HTML Images ගැන. වෙබ් පිටුවකට images එකතු කළාම ඒක ලස්සන වෙනවා වගේම, බලන අයට තොරතුරු ලේසියෙන් තේරෙනවා. HTML එකේ images දාන්නේ <img> tag එකෙන්, ඒකට closing tag එකක් නැහැ. Images හරියට යොදාගත්තොත්, user experience එකත්, accessibility එකත් වැඩි වෙනවා. එන්න, අපි බලමු මේක කොහොමද කරන්නේ කියලා!

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

### Images යොදාගන්නේ කොහොමද?

දැන් ඔයාට HTML images ගැන හොඳ අවබෝධයක් තියෙනවා. මේවා යොදාගෙන ලස්සන webpage එකක් හදන්න ටිකක් බලමු:

-   Local images එක්ක gallery එකක් හදන්න.
-   External images එක්ක online content link කරන්න.
-   Clickable images එක්ක navigation buttons හදන්න.
-   Background images එක්ක webpage එකේ look එක වෙනස් කරන්න.

ඔයාත් අත්හදා බලන්න. ඔයාගේ webpage එක pro විදිහට පෙනෙයි!

### 📌 පොදුවේ HTML Images ගැන ඇසෙන ප්රශ්න

1\. Alt text එක ඇයි වැදගත්?

-   Image එක load වෙන්නේ නැත්තම් alt text එක පෙන්වනවා. Screen readers යොදාගන්න අයට image එක ගැන තේරෙන්න උදව් වෙනවා.

2\. Image එකේ size එක වෙනස් කරන්නේ කොහොමද?

-   width සහ height attributes වලින්. උදා: <img src=”image.jpg” width=”300">. CSS එකෙන් responsive කරන්නත් පුළුවන්.

3\. Responsive images කියන්නේ මොකක්ද?

-   Screen size එකට match වෙන්න image එක adjust වෙන එක. CSS එකෙන් max-width: 100%; height: auto; යොදනවා.

4\. Lazy loading එක ඇයි යොදන්නේ?

-   Page load speed වැඩි කරන්න. Images load වෙන්නේ screen එකේ පෙනෙන විට විතරයි.

5\. Background image එකක් දාන්නේ කොහොමද?

-   CSS එකෙන්. උදා: body { background-image: url(“background.jpg”); }.

ඔයාට තව ප්රශ්න තියෙනවා නම්, comment එකක් දාන්න. මම උදව් කරන්නම්!

HTML images තමයි webpage එකක visual appeal එක වැඩි කරන්නේ. මේවා හරියට යොදාගත්තොත්, බලන අයට තොරතුරු ලේසියෙන් තේරෙනවා වගේම, performance එකත් හොඳ වෙනවා. ඊළඟ ලිපියෙන් video & audio tag ගැන කතා කරමු ඒ වෙනකන් images එක්ක ටිකක් play කරලා, ලස්සන webpage හදන්න පටන් ගන්න!
