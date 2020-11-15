---
layout: page
title: Kid's Corner
---
<section class="page-section" id="{{ site.data.sitetext.kids.section | default: "kids" }}">
  <div class="container">

    <div class="row">
      <div class="col-lg-12 text-center">
        <h1 class="page-header text-uppercase">{{ site.data.sitetext.kids.title | default: "Kid's Corner" }}</h1>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-2">
        <figure>
          <img src="{{ site.data.sitetext.kids.img }}" alt="{{ site.data.sitetext.kids.img_alt }}"/>
        </figure>
      </div>
      <div class="col-6">    
        {% if site.data.sitetext.kids.text %}
        <h3 class="section-subheading text-muted">{{ site.data.sitetext.kids.text }}</h3>
        {% endif %}
        </div>
    </div>

    <hr/>

    <div class="row">
      <div class="col-lg-12 text-center">
        <h2 class="section-heading text-uppercase">{{ site.data.sitetext.kids.conduct.title | default: "Player's Code of Conduct" }}</h2>
      </div>
    </div>
    <div class="row justify-content-center">
        <div class="col-2">
          <figure>
            <img src="{{ site.data.sitetext.kids.conduct.img }}" alt="{{ site.data.sitetext.kids.conduct.img_alt }}"/>
          </figure>
        </div>
        <div class="col-4">
          <p class="text-muted left">{{ site.data.sitetext.kids.conduct.pledge | default: "I promise to:" }}</p>
          <ul class="left">
          {% for promise in site.data.sitetext.kids.conduct.promises %}
            <li>{{ promise.text }}</li>
          {% endfor %}
          </ul>
        </div>
    </div>

    <hr/>

    <div class="row">
      <div class="col-lg-12 text-center">
        <h2 class="section-heading text-uppercase">{{ site.data.sitetext.kids.videos.title | default: "Videos" }}</h2>
      </div>
    </div>
    <div class="row text-center">
    {% for video in site.data.sitetext.kids.videos %}
      <div class="col-md-12">
        <h4 class="part-heading highlightshadow">{{ video.title | markdownify }}</h4>
        {% if video.url %}<iframe width="560" height="315" src="{{ video.url }}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>{% endif %}
        {% if video.desc %}<div class="text-muted">{{ video.desc | markdownify }}</div>{% endif %}
      </div>
    {% endfor %}
    </div>

    <hr/> 

    <div class="row">
      <div class="col-lg-12 text-center">
        <h2 class="section-heading text-uppercase">{{ site.data.sitetext.kids.colour.title | default: "Colour me in!" }}</h2>
        <a href="{{ site.data.sitetext.kids.colour.url }}" target="_blank"><img src="{{ site.data.sitetext.kids.colour.img }}" alt="{{ site.data.sitetext.kids.colour.img_alt }}"/></a>
        {% if site.data.sitetext.kids.colour.text %}
        <h3 class="section-subheading text-muted">{{ site.data.sitetext.kids.colour.text }}</h3>
        {% endif %}
      </div>
    </div>

    <hr/>

    <div class="row">
      <div class="col-lg-12 text-center">
        <h2 class="section-heading text-uppercase">{{ site.data.sitetext.kids.links.title | default: "Useful links" }}</h2>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-4">
        <ul class="left">
        {% for link in site.data.sitetext.kids.links %}
          <li><a href="{{ link.url }}" target="_blank">{{ link.title }}</a></li>
        {% endfor %}
        </ul>
      </div>
    </div>

  </div>
</section>