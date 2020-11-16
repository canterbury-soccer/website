---
layout: page
title: Join Us
---
<section class="page-section" id="{{ site.data.sitetext.join-us.section | default: "join-us" }}">
  <div class="container">

    <div class="row">
      <div class="col-lg-12 text-center">
        <h1 class="page-header text-uppercase">{{ site.data.sitetext.join-us.title | default: "Join Us" }}</h1>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-2">
        <figure>
          <img src="{{ site.data.sitetext.join-us.img }}" alt="{{ site.data.sitetext.join-us.img_alt }}"/>
        </figure>
      </div>
      <div class="col-6">    
        {% if site.data.sitetext.join-us.registration_slug %}
        <h3 class="highlightshadow">{{ site.data.sitetext.join-us.registration_slug }}</h3>
        <br/>
        {% endif %}
        {% if site.data.sitetext.join-us.text %}
        <h3 class="section-subheading text-muted">{{ site.data.sitetext.join-us.text }}</h3>
        {% endif %}
        </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-lg-12 text-center">
      {% include internal_links.html %} 
      </div>
    </div>

    <hr/>

    <div class="row">
      <div class="col-lg-12 text-center">
        <h2 class="section-heading text-uppercase">{{ site.data.sitetext.join-us.team.title }}</h2>
      </div>
    </div>
    {% for division in site.data.sitetext.divisions %}
    <div class="row justify-content-center">
        <div class="col-2 text-center">
          <figure>
            <img src="{{ division.img }}" alt="{{ division.img_alt }}"/>
          </figure>
          <span class="text-uppercase"><b>{{ division.title }}</b></span>
        </div>
        <div class="col-4 left">
        <p><b>{{ division.title }} ({{ division.years }})</b></p>
        <p>{{ division.tagline }}</p>
        <p>{{ division.schedule }}</p>
        </div>
        <div class="col-4">
          {% include register_external_link.html %}
        </div>
    </div>

    <hr/>

    {% endfor %}  
  </div>
</section>
