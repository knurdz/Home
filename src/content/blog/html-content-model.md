---
title: "HTML Content Model"
date: "2025-04-23"
description: "ආයුබෝවන්! ඔයාලා අපේ Web Development for Beginners article series එකේ අටවෙනි ලිපියට ආවා. මේ series එකේ පළමු ලිපියෙන් අපි HTML ගැන ඉගෙන ගත්තා, දෙවෙනි ලිපියෙන් Header සහ Footer tags ගැන, තුන්වෙනි ලිපි..."
author: "Sadeepa N Herath"
authorImage: "https://github.com/SadeepaNHerath.png"
image: "/images/blog/html-content-model.jpg"
tags:
  - sinhala-articles
  - content-model
  - html
  - web-development
  - web
sourceUrl: "https://medium.com/@sadeepanithushika/html-content-model-1807e80e4885"
readTime: "3 min read"
---

ආයුබෝවන්! ඔයාලා අපේ Web Development for Beginners article series එකේ අටවෙනි ලිපියට ආවා. මේ series එකේ [පළමු ලිපියෙන්](https://medium.com/@sadeepanithushika/html-basics-%E0%B6%94%E0%B6%B6%E0%B7%9A-%E0%B6%B4%E0%B7%85%E0%B6%B8%E0%B7%94-%E0%B7%80%E0%B7%99%E0%B6%B6%E0%B7%8A-%E0%B6%B4%E0%B7%92%E0%B6%A7%E0%B7%94%E0%B7%80-%E0%B7%83%E0%B7%8F%E0%B6%AF%E0%B6%B8%E0%B7%94-72a3df022b29) අපි HTML ගැන ඉගෙන ගත්තා, [දෙවෙනි ලිපියෙන්](https://medium.com/@sadeepanithushika/header-%E0%B7%83%E0%B7%84-footer-tags-6158a9216dae) Header සහ Footer tags ගැන, [තුන්වෙනි ලිපියෙන්](https://medium.com/@sadeepanithushika/html-text-formatting-5e1de60fc3b1) HTML text formatting ගැන, [සිව්වෙනි ලිපියෙන්](https://medium.com/@sadeepanithushika/html-lists-e25b79c49a7c) HTML Lists ගැන, [පස්වෙනි ලිපියෙන්](https://medium.com/@sadeepanithushika/html-images-7f3e2a1e90ee) HTML Images ගැන ඉගෙන ගත්තා, [හයවෙනි ලිපියෙන්](https://medium.com/@sadeepanithushika/html-video-audio-963050690660) අපි Video & Audio tags ගැන, [හත්වෙනි ලිපියෙන්](https://medium.com/@sadeepanithushika/html-tables-7ef61d95a3c6) HTML Tables ගැන, [අටවෙනි ලිපියෙන්](https://medium.com/@sadeepanithushika/html-forms-5926e781b88e) HTML Forms ගැන කතා කළා. අද අපි ඉගෙන ගන්නේ HTML Content Model ගැන. මේක ටිකක් technical වගේ පේන්න පුළුවන්, ඒත් මම ඒක ලේසි කරලා, රසවත් විදිහට ඉදිරිපත් කරන්නම්!

#### HTML Content Model කියන්නේ මොකක්ද?

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

### 💡 Pro Tip

Content Models හොඳින් තේරුම් ගත්තම ඔබේ වෙබ් පිටු හොඳින් organize වෙනවා, පවත්වාගෙන යන්න ලේසියි, සහ සෑම දෙනාටම access කරන්න පුළුවන් විදිහට හදන්න පුළුවන්. Element ගැන සැකයක් ඇති වුණොත් HTML specifications බලන්න!

### 📌 පොදුවේ HTML Content Model ගැන ඇසෙන ප්රශ්න

1.  Content Models වෙන්න ඕනේ ඇයි?

-   Element එකක behavior එක තේරුම් ගන්නත්, HTML වඩා හොඳින් organize කරන්නත් උදව් වෙනවා.

2\. එක එලිමන්ට් එකකට කැටගරි කිහිපයකට අයිති වෙන්න පුළුවන්ද?

-   ඔව්! උදාහරණයක් විදිහට <a> කියන්නේ flow සහ interactive දෙකටම අයිතියි.

3\. Flow Content සහ Phrasing Content අතර වෙනස මොකක්ද?

-   Flow කියන්නේ body එකේ තියෙන ගොඩක් element ඇතුළත් වෙන පුළුල් category එකක්. Phrasing කියන්නේ text සහ text level element විතරයි.

4\. Content Models Accessibility වලට බලපාන්නේ කොහොමද?

-   නිවැරදි එලිමන්ට් (උදා: <section>) යොදනකොට screen readers වලට පිටුවේ structure එක තේරෙනවා. ඒකෙන් වෙබ් පිටුව සෑම දෙනාටම access කරන්න ලේසි වෙනවා. ඔයාට තව ප්රශ්න තියෙනවා නම්, comment එකක් දාන්න. මම උදව් කරන්නම්!

ඊළඟ ලිපියෙන් අපි hyperlink ගැන ටිකක් ඉගෙන ගමු. ඒ වෙනකන් Content Model එක්ක play කරලා බලන්න.
