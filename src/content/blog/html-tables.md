---
title: "HTML Tables"
date: "2025-04-20"
description: "ආයුබෝවන්! ඔයාලා අපේ Web Development For Beginner article series එකේ හයවෙනි පියවරට ආවා. මේ series එකේ පළමු ලිපියේදී අපි HTML ගැන ඉගෙන ගත්තා, දෙවෙනි ලිපියේදී Header සහ Footer tags ගැන, තුන්වෙනි ලිපිය..."
author: "Sadeepa N Herath"
authorImage: "https://github.com/SadeepaNHerath.png"
image: "/images/blog/html-tables.jpg"
tags:
  - web-development
  - table
  - css
  - html
  - html5
sourceUrl: "https://medium.com/@sadeepanithushika/html-tables-7ef61d95a3c6"
readTime: "5 min read"
---

ආයුබෝවන්! ඔයාලා අපේ Web Development For Beginner article series එකේ හයවෙනි පියවරට ආවා. මේ series එකේ [පළමු ලිපියේදී](https://medium.com/@sadeepanithushika/html-basics-%E0%B6%94%E0%B6%B6%E0%B7%9A-%E0%B6%B4%E0%B7%85%E0%B6%B8%E0%B7%94-%E0%B7%80%E0%B7%99%E0%B6%B6%E0%B7%8A-%E0%B6%B4%E0%B7%92%E0%B6%A7%E0%B7%94%E0%B7%80-%E0%B7%83%E0%B7%8F%E0%B6%AF%E0%B6%B8%E0%B7%94-72a3df022b29) අපි HTML ගැන ඉගෙන ගත්තා, [දෙවෙනි ලිපියේදී](https://medium.com/@sadeepanithushika/header-සහ-footer-tags-6158a9216dae) Header සහ Footer tags ගැන, [තුන්වෙනි ලිපියේදී](https://medium.com/@sadeepanithushika/html-text-formatting-5e1de60fc3b1) HTML text formatting ගැන, [සිව්වෙනි ලිපියේදී](https://medium.com/@sadeepanithushika/html-lists-e25b79c49a7c) HTML Lists ගැන, [පස්වෙනි ලිපියෙන්](https://medium.com/@sadeepanithushika/html-images-7f3e2a1e90ee) HTML Images ගැන ඉගෙන ගත්තා, හයවෙනි ලිපියේදී අපි Video & Audio tags ගැන ඉගෙන ගත්තා. අද අපි කතා කරමු HTML Tables ගැන. HTML Table භාවිතා වෙන්නේ දත්ත ලස්සනට arrange කරලා පෙන්නන්න. උදාහරණයක් විදිහට, ඔයාට timetable එකක්, මිල ලැයිස්තුවක්, හෝ report එකක් webpage එකක පෙන්නන්න ඕන නම්, tables තමයි best. ඒවා බලන අයට ලේසියෙන් තේරෙන විදිහට data organize කරනවා.

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

without CSS

With CSS

width: 50%; — Table එකේ පළල 50% කරනවා.

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

### ඔයාත් Try කරලා බලන්න!

දැන් ඔයාට HTML tables ගැන හොඳ idea එකක් තියෙනවා. අපි ටිකක් fun විදිහට ඉගෙන ගමු:

-   Exercise 1: ඔයාගේ favorite movies ලැයිස්තුව table එකක දාන්න. තීරු 3ක් යෝදාගන්න:

| Movie Name | Director | Year Released |

Code එක HTML file එකක දාලා browser එකේ open කරලා බලන්න.

1.  Exercise 2: CSS එක්ක table එක style කරන්න: Headers වලට blue color එකක් දෙන්න. Cells වලට padding එකතු කරන්න. Borders solid කරන්න.

Tip එක: Browser එකේ right-click කරලා “Inspect” ගහලා බලන්න table එකේ structure එක. ලේසියෙන් තේරෙයි!

### 📌 පොදුවේ HTML Tables ගැන ඇසෙන ප්රශ්න

1\. වගුවේ borders පෙන්නන්නේ කොහොමද?

-   HTML වල border attribute එක යෝදාගන්නවා, උදා: <table border=”1">. CSS වලදී border: 1px solid black; යෝදාගන්නවා.

2\. Cells merge කරන්නේ කොහොමද?

-   තිරස් අතට colspan, සිරස් අතට rowspan. උදා: <td colspan=”2">.

3\. Table එකේ size එක වෙනස් කරන්නේ කොහොමද?

-   width attribute එකෙන්, උදා: <table width=”50%”>. CSS වල table { width: 50%; }.

4\. Table එක මැදට ගන්නේ කොහොමද?

-   HTML වල align=”center”. CSS වල table { margin: 0 auto; }.

5\. Headers bold සහ center වෙන්නේ ඇයි?

-   <th> tag එක default වශයෙන් bold සහ center කරනවා. Change කරන්න ඕන නම් CSS යෝදාගන්න.

ඔයාට තව ප්රශ්න තියෙනවා නම්, comment එකක් දාන්න. මම උදව් කරන්නම්!

Pro Tip: Table හදන්න විතරක් නෙමෙයි page layout වලටත් table tag එක use කරනවා. හැමදේම කියල දුන්නම තේරුමකුත් නෑනෙ. ඉගෙනගන්න කැමති අය විතරක් හොයලා try කරලා බලන්න.

HTML tables ගැන දැන් ඔයාට හොඳ තේරුමක් ඇති. මේවා යෝදාගෙන ලස්සන web pages හදන්න පටන් ගන්න! ඊළඟ ලිපියෙන් HTML Form ගැන තව ටිකක් ඉගෙන ගමු. ඒ වෙනකන් tables එක්ක play කරලා බලන්න.
