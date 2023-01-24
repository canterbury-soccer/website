---
layout: page
title: Volunteer
---
<section class="page-section" id="{{ site.data.sitetext.volunteer.section | default: "volunteer" }}">
    <div class="container">

        {% capture title %}{{ site.data.sitetext.volunteer.title }}{% endcapture %}
        {% include page_title.html title=title %}

        <div class="row justify-content-center">
        <div class="col-2">
            <figure>
                <img src="{{ site.data.sitetext.volunteer .img }}" alt="{{ site.data.sitetext.volunteer.img_alt }}"/>
            </figure>
        </div>
        <div class="col-10">
            {% if site.data.sitetext.volunteer.text %}
            <h3 class="section-subheading text-muted">{{ site.data.sitetext.volunteer.text }}</h3>
            {% endif %}
            <div class="row justify-content-center">
                <div class="text-center">
                    {{ site.data.sitetext.volunteer.final-appeal }}
                </div>
            </div>
        </div>

        <hr/>

        <div class="row">
            <div class="col-lg-12 text-center">
                <h2 class="section-heading text-uppercase">{{ site.data.sitetext.volunteer.help.title }}</h2>
            </div>
        </div>

        <div class="row justify-content-center">
            <div class="col-12 left">
            {% include volunteer_positions.html %}
            </div>
        </div>

        <div class="row justify-content-center">
            <div class="col-12 text-center">
            {{ site.data.sitetext.volunteer.final-appeal }}
            </div>
        </div>
    </div>
</section>
