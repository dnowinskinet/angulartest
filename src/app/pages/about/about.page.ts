import { NgFor } from '@angular/common';
import { Component, ViewEncapsulation, effect, inject } from '@angular/core';
import { MetaService } from '@core/services/meta.service';
import profileData from '@data/profile.data';
@Component({
  selector: 'about',
  template: `
  <section class="max-w-screen-lg mx-auto dark:text-gray-200 overflow-y-hidden">
  
<div class="container">
  <div class="grid grid-cols-10 align-items-start">
    <div class="col-span-4">
    <img class="img-responsive product-image-large" src="/assets/image/biography.jpg" alt="biography">
    </div>
    <div class="col-span-6">
        <h2><span class="text-primary">Daniel T Nowinski</span> <span> (He/Him)</span></h2>
        <br>
        <h4>Data Narrativist and Analytics Nerd</h4>
        <br>
        <p>
I grew up in Richmond, California at a time when it was listed among the most violent cities in the nation. I was in elementary school when my friend was kidnapped and brutally murdered at a local park. I realized that I shared a similar fate of poverty and violence if I didn’t carve out a new future for myself. My grit and fearlessness gave me the momentum I needed to reach my escape velocity.
<br><br>
I found solace in my science teachers that were brought to my school by NSF grants. They encouraged me to go to pursue science and go to college. Knowing what it feels like to have people making it their mission to support you has been the biggest motivator in my desire to give back and volunteer when opportunities arose.
<br><br>
As an extrovert, I always enjoy meeting new people, finding out what they’re passionate about, and comparing notes on what makes us happy. I firmly believe that I wouldn’t have gotten half as far as I have without peer mentoring and developing a small group of advisors to continue pushing myself.
        </p>

      </div>
  </div>
  </div><br> <br> <br>

<!-- Consulting -->
<div class="container">
  <div class="grid grid-cols-10 align-items-start">
    <div class="col-span-2">
            <a href="https://www.ecmc.org/"><img src="/assets/image/biography/ecmc.png" alt="ECMC" class="img-responsive"/></a>
        </div>
        <div class="col-span-8">
          <div class="flex flex-row" style="justify-content: space-between">
        <div class="">
          <h3>ECMC</h3>
        </div>
        <div class="col-sm-4">
          <h4><span class="text-primary">May 2021 - Present</span></h4>
        </div>
        </div>
        <div class="col-sm-7">
          <h4><strong>Senior Data Scientist</strong></h4>
          <p>Clients generally approach me to help guide them through federal policy issues. I also work on stakeholder outreach, preparing fundraising narratives, and incorporating best practices into their products.</p>        </div>
      </div>
    </div>
  </div>
    <Br>
    <Br>
    <Br>
<!-- CPP -->
<div class="container">
  <div class="grid grid-cols-10 align-items-start">
    <div class="col-span-2">
            <a href="https://www.themyersbriggs.com/" ><img  src="/assets/image/biography/MBTI.png" alt="Myers-Briggs" class="img-responsive" /></a>
        </div>
        <div class="col-span-8">
          <div class="flex flex-row" style="justify-content: space-between">
        <div class="">
          <h3>The Myers-Briggs Company</h3>
        </div>
        <div class="col-sm-4">
          <h4><span class="text-primary">August 2016 - April 2021</span></h4>
        </div>
        </div>
        <div class="col-sm-7">
          <h4><strong>Operations Manager</strong></h4>
          <p>Clients generally approach me to help guide them through federal policy issues. I also work on stakeholder outreach, preparing fundraising narratives, and incorporating best practices into their products.</p>        </div>
      </div>
    </div>
  </div>
    <Br>
    <Br>
    <Br>
<!-- Consulting -->
<div class="container">
  <div class="grid grid-cols-10 align-items-start">
    <div class="col-span-2">
            <a href="https://www.dnowinski.com"><img src="/assets/image/biography/Dhex.png" alt="Consulting" class="img-responsive"/></a>
        </div>
        <div class="col-span-8">
          <div class="flex flex-row" style="justify-content: space-between">
        <div class="">
          <h2>Daniel T Nowinski</h2>
        </div>
        <div class="col-sm-4">
          <h4><span class="text-primary">August 2014 - August 2016</span></h4>
        </div>
</div>
        <div class="row">
          <h4><strong>Executive Consultant</strong></h4>
          <p>Clients generally approach me to help guide them through federal policy issues. I also work on stakeholder outreach, preparing fundraising narratives, and incorporating best practices into their products.</p>        </div>
      </div>
    </div>
  </div>
    <Br>
    <Br>
    <Br>
<!-- U.S. Senate -->
<div class="container">
  <div class="grid grid-cols-10 align-items-start">
    <div class="col-span-2">
            <a href="https://www.senate.gov/" target="_blank"><img src="/assets/image/biography/Senate.png" alt="United States Senate" class="img-responsive" /></a>
        </div>
        <div class="col-span-8">
          <div class="flex flex-row" style="justify-content: space-between">
        <div class="">
          <h3>United States Senate - Office of Senator Barbara Boxer</h3>
        </div>
        <div class="col-sm-4">
          <h4><span class="text-primary">January 2015 - May 2015</span></h4>
          </div>
          </div>
        <div class="col-sm-7">
          <h4><strong>Legislative Intern</strong></h4>
          <p>
Serving in the United States Senate was an immense honor and privilege that will be tough to ever rival. As a proud California native, I enjoyed every second I spent working with my fellow constituents and Senator Boxer's staff.

          </p>
        </div>
      </div>
    </div>
  </div>
    <Br>
    <Br>
    <Br>

<!-- GoBeMe -->
<div class="container">
  <div class="grid grid-cols-10 align-items-start">
    <div class="col-span-2">
                <a href="https://www.crunchbase.com/organization/gobeme" target="_blank"><img src="/assets/image/biography/GoBeMe.png" alt="GoBeMe" class="img-responsive" /></a>
            </div>
        <div class="col-span-8">
          <div class="flex flex-row" style="justify-content: space-between">
        <div class="">
              <h3>GoBeMe</h3>
            </div>
            <div class="col-sm-4">
                <h4><span class="text-primary">August 2012 - May 2014</span></h4>
            </div>
</div>
            <div class="col-sm-7">
              <h4><strong>Co-Founder, Director of Government Affairs</strong></h4>
              <p>

                Mentored by the CEO, who was the national director of technology for the Howard Dean Presidential Campaign, I was in charge of government affairs. I was also in charge of building corporate ethos in the field of education, and cold-called dozens of thought leaders to get their advice and endorsements. I turned those meetings into a successful fundraising narrative, and we grew the company from the three of us, to a team of twenty-one.

                </p>
            </div>
          </div>
        </div>
      </div>
        <Br>
        <Br>
        <Br>

        <div class="container">
  <div class="grid grid-cols-10 align-items-start">
    <div class="col-span-2">
              <a href="http://www.vulpelab.net/" target="_blank"><img src="/assets/image/biography/Vulpe.png" alt="Vulpe Lab" class="img-responsive"></a>
            </div>
        <div class="col-span-8">
          <div class="flex flex-row" style="justify-content: space-between">
        <div class="">
                  <h3>Vulpe Lab</h3>
            </div>
            <div class="col">
            <h4><span class="text-primary">August 2010 - July 2012</span></h4>
            </div>
            </div>
            <div class="flex-row">
            <div class="col-4">
                  <h4><strong>Assistant Research Team Leader</strong></h4>
                  <p>

                  I was in the ecotoxicogenomics division of the lab, and worked on a very diverse set of chemicals during my tenure. When I became the most senior undergraduate researcher, I was approved to hire and train a team of new students. This bump in productivity led to several significant scientific <a href="https://www.researchgate.net/profile/Daniel_Nowinski" target="_blank">publications</a>. I am still incredibly proud of the work my team was able to accomplish.

                  </p>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>


                  <br> <br> <br>
<div class="flex flex-col gap-5">
<h1 class="text-2xl font-semibold dark:text-white">Contact Information:</h1>

  @for(c of contactInfo; track $index){
    <p>
      <b class="dark:text-white text-black ">{{c.title}}:</b><br />
      <a [href]="c.link" class="hover:underline" target="_blank">{{c.desc}}</a>
    </p>
  }
</div>
</section>
`,
  encapsulation: ViewEncapsulation.None,
  imports: [NgFor],
  standalone: true
})
export class AboutPage{
  metaService = inject(MetaService)
  constructor(){
    this.metaService.setMetaTags(
      `About - ${profileData.name}`,
      'Dive into a curated space to learn more about the person behind the name',
      ['bio', 'biography', 'information', 'about', 'contact', 'detail']
      )
  }
  public contactInfo = [
    {
      title: 'Address',
      desc: `Washington, D.C.`,
      link: 'https://maps.app.goo.gl/dT2aE2RxeQTEA7ne7'
    },
    {
      title: 'Email',
      desc: 'hello@dnowinski.com',
      link: 'mailto:hello@dnowinski.com'
    }
  ]
}
