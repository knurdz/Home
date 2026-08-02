---
title: "HTML Hyperlink"
date: "2025-04-24"
description: "ආයුබෝවන්! ඔයාලා අපේ Web Development for Beginners article series එකේ අටවෙනි ලිපියට ආවා. මේ series එකේ පළමු ලිපියෙන් අපි HTML ගැන ඉගෙන ගත්තා, දෙවෙනි ලිපියෙන් Header සහ Footer tags ගැන, තුන්වෙනි ලිපි..."
author: "Sadeepa N Herath"
authorImage: "https://github.com/SadeepaNHerath.png"
image: "/images/blog/html-hyperlink.jpg"
tags:
  - hyperlink
  - html
  - web
  - css
sourceUrl: "https://medium.com/@sadeepanithushika/html-hyperlink-0c52103e39a8"
readTime: "3 min read"
---

ආයුබෝවන්! ඔයාලා අපේ Web Development for Beginners article series එකේ අටවෙනි ලිපියට ආවා. මේ series එකේ [පළමු ලිපියෙන්](https://medium.com/@sadeepanithushika/html-basics-%E0%B6%94%E0%B6%B6%E0%B7%9A-%E0%B6%B4%E0%B7%85%E0%B6%B8%E0%B7%94-%E0%B7%80%E0%B7%99%E0%B6%B6%E0%B7%8A-%E0%B6%B4%E0%B7%92%E0%B6%A7%E0%B7%94%E0%B7%80-%E0%B7%83%E0%B7%8F%E0%B6%AF%E0%B6%B8%E0%B7%94-72a3df022b29) අපි HTML ගැන ඉගෙන ගත්තා, [දෙවෙනි ලිපියෙන්](https://medium.com/@sadeepanithushika/header-%E0%B7%83%E0%B7%84-footer-tags-6158a9216dae) Header සහ Footer tags ගැන, [තුන්වෙනි ලිපියෙන්](https://medium.com/@sadeepanithushika/html-text-formatting-5e1de60fc3b1) HTML text formatting ගැන, [සිව්වෙනි ලිපියෙන්](https://medium.com/@sadeepanithushika/html-lists-e25b79c49a7c) HTML Lists ගැන, [පස්වෙනි ලිපියෙන්](https://medium.com/@sadeepanithushika/html-images-7f3e2a1e90ee) HTML Images ගැන ඉගෙන ගත්තා, [හයවෙනි ලිපියෙන්](https://medium.com/@sadeepanithushika/html-video-audio-963050690660) අපි Video & Audio tags ගැන, [හත්වෙනි ලිපියෙන්](https://medium.com/@sadeepanithushika/html-tables-7ef61d95a3c6) HTML Tables ගැන, [අටවෙනි ලිපියෙන්](https://medium.com/@sadeepanithushika/html-forms-5926e781b88e) HTML Forms ගැන, [නවවන ලිපියෙන්](https://medium.com/@sadeepanithushika/html-content-model-1807e80e4885) content model ගැන කතා කළා. අද අපි බලමු HTML Hyperlinks ගැන. මේවා තමයි වෙබ් අඩවියක එක පිටුවක ඉඳලා තවත් පිටුවකට යන්න උදව් වෙන්නේ. එන්න, අපි ඒ ගැන ඉගෙන ගමු!

### Hyperlinks කියන්නේ මොකක්ද?

Hyperlinks කියන්නේ clickable වචන හෝ රූප. ඒවා මත click කළාම, ඔබව වෙනත් වෙබ් පිටුවකට හෝ එකම පිටුවේ වෙනත් කොටසකට ගෙනියනවා. මේක වෙබ් redirect කරන මූලිකම ක්රමයක්!

### Basic Link Syntax

HTML වලදී, hyperlinks හදන්නේ <a> (anchor) ටැග් එකෙන්. ඒකට තියෙන්නේ ප්රධාන කොටස් දෙකයි:

-   href attribute: linkඑකෙන් යන්න ඕන තැන (URL හෝ ගොනුව).
-   Link text: බලන අයට පේන, click කරන්න පුළුවන් වචන.

<a href="<https://example.com>">Visit Example Website</a>

### Target Attribute

target attribute එකෙන් linkඑක open වෙන විදිහ තෝරන්න පුළුවන්:

-   \_self: එකම window හෝ tab එකේ open වෙනවා (default).
-   \_blank: අලුත් window හෝ tab එකක open වෙනවා.
-   \_parent: Parent frame එකේ open වෙනවා (frame ගැන පසුව ඉගෙන ගමු).
-   \_top: Full window එකේ open වෙනවා.

<a href="<https://example.com>" target="\_blank">Open in New Tab</a>

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

-   a:link: සාමාන්ය link(බලලා නැති ඒවා).
-   a:visited: visited ලින්ක්.
-   a:hover: mouse එක උඩ තියනකොට.
-   a:active: click කරන මොහොතේ.

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

### 📌 පොදුවේ HTML Hyperlinks ගැන ඇසෙන ප්රශ්න

1.link එකක් click කළාම එකම ටැබ් එකේ open වෙන්නේ ඇයි?

-   Default වශයෙන් target=”\_self” විදිහට තමයි එන්නේ. අලුත් ටැබ් එකකට ඕන නම් \_blank යොදන්න.

2\. Absolute URLs සහ Relative URLs වෙනස මොකක්ද?

-   Absolute URLs එකේ protocol (https://) එක්ක full address එක එනවා. Relative URLs එකම වෙබ් අඩවියේ ඇතුළත පිටුවලට යොමු වෙනවා.

3\. Email links කොහොමද වැඩ කරන්නේ?

-   mailto: එක්ක linkඑක හදනකොට, ඔබේ ඊමේල් app එක open වෙලා recipient එක fill වෙලා එනවා.

4\. Link එකේ text එක වැදගත්ද?

-   ඔව්! “Click here” වගේ ලියනවට වඩා “See about us” වගේ විස්තරාත්මක text එකක් යොදන්න. එතකොට users ලට තේරෙනවා link එකෙන් යන්නේ කොහෙද කියලා.

ඔයාට තව ප්රශ්න තියෙනවා නම්, comment එකක් දාන්න. මම උදව් කරන්නම්!

එහෙනම් මේ series එකෙ අපි HTML ගැන කතා කරලා ඉවරයි. ඊළග ලිපියේ ඉදන් අපි CSS ගැන කතා කරමු. තවදුරටත් ඉගෙනගන්න උවමනාවක් තියන අය මේ resources try කරලා බලන්න!.

1.  [W3Schools](https://www.w3schools.com/html/)
2.  [HTML.com](http://html.com/)
3.  [Khan Academy](https://www.khanacademy.org/computing/computer-programming/html-css)
4.  [Scrimba](https://scrimba.com/t0html)
5.  [freeCodeCamp](https://www.freecodecamp.org/news/html-crash-course/)

Happy Coding!
