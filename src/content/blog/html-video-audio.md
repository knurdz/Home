---
title: "HTML Video & Audio"
date: "2025-04-19"
description: "ආයුබෝවන්! ඔයාලා අපේ Web Development For Beginner article series එකේ හයවෙනි පියවරට ආවා. මේ series එකේ පළමු ලිපියේදී අපි HTML ගැන ඉගෙන ගත්තා, දෙවෙනි ලිපියේදී Header සහ Footer tags ගැන, තුන්වෙනි ලිපිය..."
author: "Sadeepa N Herath"
authorImage: "https://github.com/SadeepaNHerath.png"
tags:
  - vidéo
  - html
  - audio
  - html5
  - web-development
sourceUrl: "https://medium.com/@sadeepanithushika/html-video-audio-963050690660"
readTime: "3 min read"
---

ආයුබෝවන්! ඔයාලා අපේ Web Development For Beginner article series එකේ හයවෙනි පියවරට ආවා. මේ series එකේ [පළමු ලිපියේදී](https://medium.com/@sadeepanithushika/html-basics-%E0%B6%94%E0%B6%B6%E0%B7%9A-%E0%B6%B4%E0%B7%85%E0%B6%B8%E0%B7%94-%E0%B7%80%E0%B7%99%E0%B6%B6%E0%B7%8A-%E0%B6%B4%E0%B7%92%E0%B6%A7%E0%B7%94%E0%B7%80-%E0%B7%83%E0%B7%8F%E0%B6%AF%E0%B6%B8%E0%B7%94-72a3df022b29) අපි HTML ගැන ඉගෙන ගත්තා, [දෙවෙනි ලිපියේදී](https://medium.com/@sadeepanithushika/header-සහ-footer-tags-6158a9216dae) Header සහ Footer tags ගැන, [තුන්වෙනි ලිපියේදී](https://medium.com/@sadeepanithushika/html-text-formatting-5e1de60fc3b1) HTML text formatting ගැන, [සිව්වෙනි ලිපියේදී](https://medium.com/@sadeepanithushika/html-lists-e25b79c49a7c) HTML Lists ගැන, [පස්වෙනි ලිපියෙන්](https://medium.com/@sadeepanithushika/html-images-7f3e2a1e90ee) HTML Images ගැන ඉගෙන ගත්තා. අද අපි කතා කරමු Audio & Video ගැන. HTML5 එක්ක වෙබ් පිටුවලට audio සහ video එකතු කරන්න පුළුවන්. මේවා යොදාගෙන ඔයාගේ වෙබ් පිටුව තවත් ලස්සන කරගන්න ලේසි වෙනවා. එන්න, අපි බලමු මේවා කොහොමද යොදාගන්නේ කියලා!

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

### Best Practices

Multimedia යොදාගන්නකොට මේ ටික මතක තියාගන්න:

-   Video සහ audio වලට multiple formats යොදන්න: Browser compatibility හොඳ වෙනවා (mp4, ogg වගේ).
-   Bandwidth ගැන හිතන්න: Large files use කළොත් page load වෙන්න time ගති වෙනවා.
-   File formats optimize කරන්න: Compress කරලා file size එක අඩු කරන්න performance වැඩි කරගන්න.

### 📌 පොදුවේ HTML Video & Audio ගැන ඇසෙන ප්රශ්න

1\. Video එක play වෙන්නේ නැත්තේ ඇයි?

-   Browser එක file format එක support කරන්නේ නැති වෙන්න පුළුවන්. <source> tag එකෙන් mp4, ogg වගේ formats දෙකක් දාන්න.

2\. Audio එක auto play වෙන්නේ නැහැ, ඇයි?

-   Browser settings වල autoplay block කරලා තියෙන්න පුළුවන්. muted attribute එක එක්ක autoplay try කරන්න.

3\. Lazy loading කියන්නේ මොකක්ද, කොහොමද යොදාගන්නේ?

-   Lazy loading කියන්නේ page එකේ ඕනෑ වෙනකොට විතරයි media load කරන්නේ. <img> tag එකට loading=”lazy” attribute එක දාන්න.

4\. Background music එකක් දාන්න පුළුවන්ද?

-   ඔව්, <audio> tag එකට autoplay සහ loop attributes දාලා background music එකක් දාන්න පුළුවන්. ඒත් users ලට disturb වෙනවද කියලා හිතන්න.

ඔයාට තව ප්රශ්න තියෙනවා නම්, comment එකක් දාන්න. මම උදව් කරන්නම්!

HTML multimedia තමයි වෙබ් පිටුවකට ජීවය එකතු කරන්නේ. Images, audio, video හරියට යොදාගත්තොත්, බලන අයට ලස්සන experience එකක් ලැබෙනවා වගේම තොරතුරු ලේසියෙන් තේරෙනවා. ඊළඟ ලිපියෙන් Tables ගැන කතා කරමු. ඒ වෙනකන් multimedia එක්ක ටිකක් play කරලා, ඔයාගේ webpage එක ලස්සන කරන්න පටන් ගන්න!
