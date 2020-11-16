---
layout: page
title: Parents Corner
---
<section class="page-section" id="{{ site.data.sitetext.parents.section | default: "parents" }}">
  <div class="container">

    {% capture title %}{{ site.data.sitetext.parents.title }}{% endcapture %}
    {% include page_title.html title=title %}

    <div class="row justify-content-center">
      <div class="col-2">
        <figure>
          <img src="{{ site.data.sitetext.parents.img }}" alt="{{ site.data.sitetext.parents.img_alt }}"/>
        </figure>
      </div>
      <div class="col-10">    
        {% if site.data.sitetext.parents.text %}
        <h3 class="section-subheading text-muted">{{ site.data.sitetext.parents.text }}</h3>
        {% endif %}
        </div>
    </div>

    <hr/>

    <div class="row">
      <div class="col-lg-12 text-center">
        <h2 class="section-heading text-uppercase">{{ site.data.sitetext.parents.conduct.title | default: "Parent's Conduct" }}</h2>
      </div>
    </div>
    <div class="row justify-content-center">
        <div class="col-12">
          <p class="text-muted left">{{ site.data.sitetext.parents.conduct.text }}</p>
          {% include parents/code_of_conduct.html %}
          <p class="text-muted left">{{ site.data.sitetext.parents.conduct.contact }}</p>
        </div>
    </div>

    <hr/>

    <div class="row">
      <div class="col-lg-12 text-center">
        <h2 class="section-heading text-uppercase">{{ site.data.sitetext.parents.faq.title | default: "Parents' FAQ" }}</h2>
      </div>
    </div>
    <div class="row justify-content-center">
        <div class="col-12">
          {% include parents/faq.html %}
        </div>
    </div>
    
  </div>
</section>
