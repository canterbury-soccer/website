---
layout: page
title: Schedule
---
<section class="page-section" id="{{ site.data.sitetext.schedule.section | default: "schedule" }}">
  <div class="container">

    <div class="row">
      <div class="col-lg-12 text-center">
        <h2 class="section-heading text-uppercase highlightshadow">{{ site.data.sitetext.schedule.title | default: "Schedule" }}</h2>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-2">
        <figure>
          <img src="{{ site.data.sitetext.schedule.img }}" alt="{{ site.data.sitetext.schedule.img_alt }}"/>
        </figure>
      </div>
      <div class="col-12">    
        {% if site.data.sitetext.schedule.text %}
        <h3 class="section-subheading text-muted">{{ site.data.sitetext.schedule.text }}</h3>
        {% endif %}
        <a href="{{ site.data.sitetext.twitter.url }}" target="_blank">{{ site.data.sitetext.twitter.text }}</a>
        </div>
    </div>

    <hr/>

    <div class="row">
      <div class="col-lg-12 text-center">
        <h2 class="section-heading text-uppercase">{{ site.data.sitetext.schedule.gametimes.title | default: "Game Times" }}</h2>
      </div>
    </div>
    <div class="row justify-content-center">
        <div class="col-12">
          <p class="text-muted left">{{ site.data.sitetext.schedule.gametimes.text }}</p>
          {% for division in site.data.sitetext.divisions %}
          <p><b>{{ division.title }}</b>: {{ division.schedule }}</p>
          {% endfor %}
        </div>
    </div>

    <hr/>

    <div class="row">
      <div class="col-lg-12 text-center">
        <h2 class="section-heading text-uppercase">{{ site.data.sitetext.schedule.schedules.title | default: "Schedules" }}</h2>
      </div>
    </div>
    <div class="row justify-content-center">
        <div class="col-12">
          <p class="text-muted left">{{ site.data.sitetext.schedule.schedules.text }}</p>
          <ul class="left">
          {% for division in site.data.sitetext.divisions %}
            <li><a href="{{ division.url }}" target="_blank">{{ division.title }} - {{ site.data.sitetext.schedule.schedules.year }}</a></li>
          {% endfor %}
          </ul>
        </div>
    </div>

    <hr/> 

    <div class="row">
      <div class="col-lg-12 text-center">
        <h2 class="section-heading text-uppercase">{{ site.data.sitetext.schedule.fieldmaps.title | default: "Field Maps" }}</h2>
        <a href="{{ site.data.sitetext.schedule.fieldmaps.link.url }}" target="_blank">{{ site.data.sitetext.schedule.fieldmaps.link.title }}</a>
      </div>
    </div>

    <hr/>

    <div class="row">
      <div class="col-lg-12 text-center">
        <h2 class="section-heading text-uppercase">{{ site.data.sitetext.schedule.upcoming.title | default: "Upcoming Events" }}</h2>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-12 text-center">
        {% if site.data.sitetext.schedule.upcoming.events > 0 %}
        <ul class="left">
        {% for event in site.data.sitetext.schedule.upcoming.events %}
          {% if event.url %}
          <li><a href="{{ event.url }}" target="_blank">{{ event.title }}</a></li>
          {% else %}
          <li>{{ event.title }}</li>
          {% endif %}
        {% endfor %}
        </ul>
        {% else %}
        No events scheduled
        {% endif %}
      </div>
    </div>

  </div>
</section>
