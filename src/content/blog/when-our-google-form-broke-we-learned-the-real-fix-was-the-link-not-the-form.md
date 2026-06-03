---
title: "When Our Google Form Broke, We Learned the Real Fix Was the Link -Not the Form"
date: "2026-05-03"
description: "We were preparing for an event registration and did what most people do: we made a Google Form, put the link on the flyer, and shared it everywhere."
author: "Sadeepa N Herath"
authorImage: "https://github.com/SadeepaNHerath.png"
image: "/images/blog/when-our-google-form-broke-we-learned-the-real-fix-was-the-link-not-the-form.png"
tags:
  - google-forms
  - google-form-flagged
  - form-broken
  - redirect-links
sourceUrl: "https://medium.com/@sadeepanithushika/when-our-google-form-broke-we-learned-the-real-fix-was-the-link-not-the-form-05a93d6f835b"
readTime: "4 min read"
---

We were preparing for an event registration and did what most people do: we made a Google Form, put the link on the flyer, and shared it everywhere.

For about six hours, everything looked fine. Then the form got flagged. Suddenly, people started messaging us saying the link was not working. Since the flyer had already been shared widely, the problem spread fast. We needed a quick fix, not a long recovery process.

At first, the obvious answer was to remake the form and share a new link. But that did not feel safe enough. What if the new form also got flagged? That would leave us back at the same problem.

We also looked at other ideas. One suggestion was to add the registration link to the button on an old website we had made last year. That was not useful because the website had not been updated for this year’s event. Another suggestion was to build a custom form, but that also takes time, and we needed something fast.

So we started looking for a system that would give us control over the link itself.

### The idea: keep one stable link and change the destination later

Instead of sharing the Google Form directly, we wanted one fixed link that we could place on the flyer, in WhatsApp, and in QR codes. That fixed link would send users to the current registration form. If the form changed later, we would only update the destination behind that link.

That is where using a domain helped. Since we had access to a domain, we used it to create a stable link and redirect users to the form. This kind of redirect setup can be done using different tools or hosting providers. In our case, we used Cloudflare because it was quick and easy. Cloudflare’s redirect system allows sending users from one URL to another using a redirect status code, and it also supports 302 temporary redirects, which are useful when the destination may change later. ([Cloudflare Docs](https://developers.cloudflare.com/rules/url-forwarding/))

So we created a subdomain such as:

register.example.com

Then we set up a redirect rule (using Cloudflare in our case) so that this subdomain points to the Google Form. We used an A record with a placeholder IP and kept the proxy on, then configured a redirect rule to send users to the form. The important part is that the flyer now only contains the subdomain, not the raw Google Form link.

If the form gets flagged again, we do not need to update the flyer. We only change the redirect target inside Cloudflare.

### Why this worked better?

This gave us a simple but powerful structure:

Flyer or WhatsApp message → register.example.com → current Google Form

That means the public link stays the same, even if the form changes behind the scenes.

For us, that was the main win. We had already shared the flyer, and people kept asking why the registration page was broken. With the redirect setup, we had one stable front door and one replaceable backend.

### What if you do not have a domain?

That is where things get harder.

Without a domain, you lose the cleanest option. You can still use third party short link tools, and some of them do allow editing the destination later. For example, TLDR Link says it is free, and includes short links, QR codes, UTM tracking, and click analytics. LinkSplit says it is a free URL shortener with editable destinations, and it says you can change the underlying destination at any time without creating a new link. ([TLDR](https://tldrlink.com/))

That sounds useful, and it is. But there is still a tradeoff: those are third party platforms. If their service changes, goes down, or puts limits on free usage, you do not fully control the link. That is the risk with any free outside tool. The method works, but it is not as solid as owning your own domain and using a redirect layer you control.

### What we learned

The biggest lesson was simple: do not put all your trust in a form link that you cannot control.

If you have a domain, use it as a stable layer in front of the form. A redirect setup lets you control where users are sent, and a temporary redirect is a practical choice when you may need to swap the destination later. In our case, we used Cloudflare to implement this. ([Cloudflare Docs](https://developers.cloudflare.com/rules/url-forwarding/single-redirects/settings/))

If you do not have a domain, a free link shortener with editable destinations can still help, but it should be treated as a backup, not a perfect long term system. Tools like TLDR Link and LinkSplit can be useful, but they are still external services. ([TLDR](https://tldrlink.com/))

In our case, the redirect layer saved time, reduced confusion, and gave us a way to recover fast when the form broke.

That was the real solution: not just making another form, but building a link we could control.
