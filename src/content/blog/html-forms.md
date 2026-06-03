---
title: "HTML Forms"
date: "2025-04-22"
description: "ආයුබෝවන්! ඔයාලා අපේ Web Development for Beginners article series එකේ අටවෙනි ලිපියට ආවා. මේ series එකේ පළමු ලිපියෙන් අපි HTML ගැන ඉගෙන ගත්තා, දෙවෙනි ලිපියෙන් Header සහ Footer tags ගැන, තුන්වෙනි ලිපි..."
author: "Sadeepa N Herath"
authorImage: "https://github.com/SadeepaNHerath.png"
image: "/images/blog/html-forms.jpg"
tags:
  - web-development
  - html
  - forms
  - web
  - web-forms
sourceUrl: "https://medium.com/@sadeepanithushika/html-forms-5926e781b88e"
readTime: "4 min read"
---

ආයුබෝවන්! ඔයාලා අපේ Web Development for Beginners article series එකේ අටවෙනි ලිපියට ආවා. මේ series එකේ [පළමු ලිපියෙන්](https://medium.com/@sadeepanithushika/html-basics-%E0%B6%94%E0%B6%B6%E0%B7%9A-%E0%B6%B4%E0%B7%85%E0%B6%B8%E0%B7%94-%E0%B7%80%E0%B7%99%E0%B6%B6%E0%B7%8A-%E0%B6%B4%E0%B7%92%E0%B6%A7%E0%B7%94%E0%B7%80-%E0%B7%83%E0%B7%8F%E0%B6%AF%E0%B6%B8%E0%B7%94-72a3df022b29) අපි HTML ගැන ඉගෙන ගත්තා, [දෙවෙනි ලිපියෙන්](https://medium.com/@sadeepanithushika/header-සහ-footer-tags-6158a9216dae) Header සහ Footer tags ගැන, [තුන්වෙනි ලිපියෙන්](https://medium.com/@sadeepanithushika/html-text-formatting-5e1de60fc3b1) HTML text formatting ගැන, [සිව්වෙනි ලිපියෙන්](https://medium.com/@sadeepanithushika/html-lists-e25b79c49a7c) HTML Lists ගැන, [පස්වෙනි ලිපියෙන්](https://medium.com/@sadeepanithushika/html-images-7f3e2a1e90ee) HTML Images ගැන ඉගෙන ගත්තා, [හයවෙනි ලිපියෙන්](https://medium.com/@sadeepanithushika/html-video-audio-963050690660) අපි Video & Audio tags ගැන, [හත්වෙනි ලිපියෙන්](https://medium.com/@sadeepanithushika/html-tables-7ef61d95a3c6) HTML Tables ගැන කතා කළා. අද අපි බලමු HTML Forms ගැන. HTML form එකක් කියන්නේ webpage එකක users ලට data input කරන්න ඉඩ දෙන කොටසක්. ඒ data server එකකට යවලා process කරන්න පුළුවන්. Forms තමයි interactive webpages හදන්න උදව් වෙන්නේ. එන්න, අපි බලමු මේක කොහොමද හදන්නේ කියලා!

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

### ඔයාත් Try කරලා බලන්න!

දැන් ඔයාට HTML forms ගැන හොඳ idea එකක් තියෙනවා. අපි ටිකක් fun විදිහට ඉගෙන ගමු:

1.  Exercise 1: Simple registration form එකක් හදන්න: Fields: Name, Email, Password Submit button එක Name සහ Email required කරන්න.
2.  Exercise 2: Survey form එකක් හදන්න: Question: “Favorite Color” Options: Red, Blue, Green (radio buttons) Submit button එක.

Browser එකේ form එක fill කරලා submit කරලා බලන්න. Action URL එකක් නැති නිසා page එක refresh වෙයි, ඒත් ඔයාට practice කරන්න පුළුවන්.

### 📌 පොදුවේ HTML Forms ගැන ඇසෙන ප්රශ්න

1.  Form එක submit කරනකොට data යන්නේ කොහෙද? action attribute එකේ දීල තියෙන URL එකට (උදා: “/submit”).
2.  GET සහ POST methods වල වෙනස මොකක්ද? GET: Data URL එකට append වෙනවා (visible), search වගේ ඒවට හොඳයි. POST: Data body එකේ යවනවා, secure, passwords වගේ ඒවට හොඳයි.
3.  Required fields validate වෙන්නේ කොහොමද? Browser එක automatically check කරලා empty නම් message එකක් පෙන්නනවා.
4.  Labels වැදගත් ඇයි? Accessibility වැඩි වෙනවා. Screen readers වලට උදව් වෙනවා, users ලට ලේසි වෙනවා.
5.  Form එක reset කරන්නේ කොහොමද? <input type=”reset”> button එකෙන් form එක clear කරන්න පුළුවන්.

ඔයාට තව ප්රශ්න තියෙනවා නම්, comment එකක් දාන්න. මම උදව් කරන්නම්!

HTML forms තමයි webpage එකකට interactive vibe එක එන්නේ. මේවා හරියට යොදාගත්තොත්, ඔයාගේ website එක user-friendly වෙනවා. ඊළඟ ලිපියෙන් අපි Content Model ගැන ටිකක් ඉගෙන ගමු. ඒ වෙනකන් forms එක්ක play කරලා බලන්න.
