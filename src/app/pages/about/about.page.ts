import { NgFor } from '@angular/common';
import { Component, ViewEncapsulation, effect, inject } from '@angular/core';
import { MetaService } from '@core/services/meta.service';
import { TraktTvService } from '@core/services/trakt-tv.service';
import profileData from '@data/profile.data';
import { Music } from '@shared/components/music/music'
import { Watch } from '@shared/components/watch/watch'
@Component({
  selector: 'about',
  template: `
  <section class="max-w-screen-lg mx-auto dark:text-gray-200 overflow-y-hidden">
  <div class="container">
    <div class="flex container">
    <br>
    <div class="flex col flex-row">
    <div class="col col-5">
    <img class="img-responsive product-image-large" src="/assets/image/biography.jpg" alt="biography">
    </div>
    <div class="col col-2">
        <h2><span style="color:#004ac5;">Daniel T Nowinski</span></h2>
        <br>
        <h4>Entrepreneur, Volunteer, and Political Wonk</h4>
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
  </div>
  </div>
  <div class="container">
  <div class="row align-items-start">
    <div class="container col-4">
              <a href="https://www.vulpelab.net/" target="_blank"><img src="/assets/image/biography/Vulpe.png" alt="Vulpe Lab" class="img-responsive"></a>
            </div>
            <div class="container col-6">
            <div class="col-2">
                  <h3>Vulpe Lab</h3>
            </div>
            <div class="col-2">
            <h4><span style="color:#004ac5;">August 2010 - July 2012</span></h4>
            </div>
            <div class="row align-items-end">
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
  traktTvService = inject(TraktTvService)
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
