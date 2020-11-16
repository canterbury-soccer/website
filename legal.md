---
layout: page
title: Privacy Policy
---
<section class="page-section" id="{{ site.data.sitetext.coaches.section | default: "coaches" }}">
  <div class="container">

    {% include page_title.html title="Privacy Policy" %}

    <div class="row justify-content-center">
      <div class="col-2">
        <h3 class="section-subheading text-muted">This Privacy Policy describes how your personal information is collected, used, and shared when you visit {{ site.title }} (the “Site”).</h3>
      </div>
    </div>

    <hr/>

    <div class="row">
      <div class="col-lg-12 text-center">
        <h2 class="section-heading text-uppercase">Personal information we collect</h2>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-lg-12 left">
{% if site.analytics.google %}

Automatically Collected (Google Analytics):

When you visit the Site, we automatically receive information about your device from your browser, such as your IP address. As you browse the Site, we also collect information about how you interact with the Site. We refer to this automatically-collected information as “Device Information”.

We collect Device Information using cookies. “Cookies” are data files that are placed on your device. For more information about cookies and how to disable them, visit http://www.allaboutcookies.org.

We do this using Google Analytics: <https://www.google.com/intl/en/policies/privacy/>.

You can opt-out of Google Analytics here: <https://tools.google.com/dlpage/gaoptout>.

{% else %}

We do not collect any data about you or use any cookies.

{% endif %}
      </div>
    </div>

    <hr/>

    <div class="row">
      <div class="col-lg-12 text-center">
        <h2 class="section-heading text-uppercase">Changes</h2>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-lg-12 left">
We may update this privacy policy from time to time for personal, operational, legal, or regulatory reasons.
      </div>
    </div>

    <hr/>

    <div class="row">
      <div class="col-lg-12 text-center">
        <h2 class="section-heading text-uppercase">Contact us</h2>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-lg-12 left">
For more information about our privacy practices or if you have questions, please contact us by email at <a href="mailto:{{ site.email }}">{{ site.email }}</a>.
      </div>
    </div>
