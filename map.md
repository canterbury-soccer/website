---
layout: page
title: Location & Field Map
---
<section class="page-section" id="{{ site.data.sitetext.map.section | default: "map" }}">
  <div class="container">

    <div class="row">
      <div class="col-lg-12 text-center">
        <h2 class="section-heading text-uppercase highlightshadow">{{ site.data.sitetext.map.title | default: "Map" }}</h2>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-2">
        <figure>
          <img src="{{ site.data.sitetext.map.img }}" alt="{{ site.data.sitetext.map.img_alt }}"/>
        </figure>
      </div>
      <div class="col-12">    
        {% if site.data.sitetext.map.text %}
        <h3 class="section-subheading text-muted">{{ site.data.sitetext.map.text }}</h3>
        {% endif %}
        </div>
    </div>

    <hr/>

    <div class="row">
      <div class="col-lg-12 text-center">
        <h2 class="section-heading text-uppercase">{{ site.data.sitetext.map.location.title | default: "Location" }}</h2>
      </div>
    </div>
    <div class="row justify-content-center">
        <div class="col-12">
          <p class="text-muted left">{{ site.data.sitetext.map.location.text }}</p>
          <div class="youtube-wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2802.121008608064!2d-75.64893438358742!3d45.38672974662917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0f4f82d288ad%3A0x2d602d5eef7102da!2sSt.%20Gemma%20School!5e0!3m2!1sen!2sca!4v1605469580100!5m2!1sen!2sca" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </div>
        </div>
    </div>

    <hr/>

    <div class="row">
      <div class="col-lg-12 text-center">
        <h2 class="section-heading text-uppercase">{{ site.data.sitetext.map.fieldmap.title | default: "Field Map" }}</h2>
      </div>
    </div>
    <div class="row justify-content-center">
        <div class="col-12">
          <figure>
            <img src="{{ site.data.sitetext.map.fieldmap.img }}" alt="site.data.sitetext.map.fieldmap.img_alt" />
          </figure>
          <p class="text-muted text-center">{{ site.data.sitetext.parents.conduct.contact }}</p>
        </div>
    </div>
    
  </div>
</section>
