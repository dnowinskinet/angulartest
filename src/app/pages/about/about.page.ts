import { NgFor } from '@angular/common';
import { Component, ViewEncapsulation, effect, inject } from '@angular/core';
import { MetaService } from '@core/services/meta.service';
import profileData from '@data/profile.data';
import { NgbAccordionButton } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'about',
  template: `
  <section class="max-w-screen-lg mx-auto dark:text-gray-200 overflow-y-hidden">
  
<div class="container">
  <div class="grid grid-cols-10 align-items-start">
    <div class="col-span-4 px-3 my-auto px-auto">
    <img class="img-responsive product-image-large" src="/assets/image/biography.jpg" alt="biography">
    </div>
    <div class="col-span-6">
        <h2><span class="text-primary text-xl font-semibold">Daniel T Nowinski</span> <span> (He/Him)</span></h2>
        
        <h3 class="font-semibold dark">Data Narrativist and Analytics Nerd</h3>
     
        <p>
I grew up in Richmond, California at a time when it was listed among the most violent cities in the nation. I was in elementary school when my friend was kidnapped and brutally murdered at a local park. I realized that I shared a similar fate of poverty and violence if I didn’t carve out a new future for myself. My grit and fearlessness gave me the momentum I needed to reach my escape velocity.
<br>
I found solace in my science teachers that were brought to my school by NSF grants. They encouraged me to go to pursue science and go to college. Knowing what it feels like to have people making it their mission to support you has been the biggest motivator in my desire to give back and volunteer when opportunities arose.
<br>
As an extrovert, I always enjoy meeting new people, finding out what they’re passionate about, and comparing notes on what makes us happy. I firmly believe that I wouldn’t have gotten half as far as I have without peer mentoring and developing a small group of advisors to continue pushing myself.
        </p>

      </div>
  </div>
  </div><br> <br> <br>

<!-- Consulting -->
<div class="container">
  <div class="grid grid-cols-10 align-items-start">
    <div class="col-span-2 px-3 my-auto px-auto">
            <a href="https://www.ecmc.org/" target="_blank"><img src="/assets/image/biography/ecmc.png" alt="ECMC" class="img-responsive"/></a>
        </div>
        <div class="col-span-8">
          <div class="flex flex-row" style="justify-content: space-between">
        <div class="">
          <h1 class="text-lg dark">ECMC</h1>
        </div>
        <div class="col-sm-4">
          <h1 class="text-lg dark"><span class="text-primary">May 2021 - Present</span></h1>
        </div>
        </div>
        <div class="col-sm-7">
          <h1 class="text-lg dark"><strong>Senior Data Scientist</strong></h1>
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
    <div class="col-span-2 px-3 my-auto px-auto">
            <a href="https://www.themyersbriggs.com/" target="_blank" ><img  src="/assets/image/biography/MBTI.png" alt="Myers-Briggs" class="img-responsive" /></a>
        </div>
        <div class="col-span-8">
          <div class="flex flex-row" style="justify-content: space-between">
        <div class="">
          <h1 class="text-lg dark">The Myers-Briggs Company</h1>
        </div>
        <div class="col-sm-4">
          <h1 class="text-lg dark"><span class="text-primary">August 2016 - April 2021</span></h1>
        </div>
        </div>
        <div class="col-sm-7">
          <h1 class="text-lg dark"><strong>Operations Manager</strong></h1>
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
    <div class="col-span-2 px-3 my-auto px-auto">
            <a href="https://www.dnowinski.com"><img src="/assets/image/biography/Dhex.png" alt="Consulting" class="img-responsive"/></a>
        </div>
        <div class="col-span-8">
          <div class="flex flex-row" style="justify-content: space-between">
        <div class="">
          <h1 class="text-lg dark">Daniel T Nowinski</h1>
        </div>
        <div class="col-sm-4">
          <h1 class="text-lg dark"><span class="text-primary">August 2014 - August 2016</span></h1>
        </div>
</div>
        <div class="row">
          <h1 class="text-lg dark"><strong>Executive Consultant</strong></h1>
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
    <div class="col-span-2 px-3 my-auto px-auto">
            <a href="https://www.senate.gov/" target="_blank"><img src="/assets/image/biography/Senate.png" alt="United States Senate" class="img-responsive" /></a>
        </div>
        <div class="col-span-8">
          <div class="flex flex-row" style="justify-content: space-between">
        <div class="">
          <h1 class="text-lg dark">United States Senate - Office of Senator Barbara Boxer</h1>
        </div>
        <div class="col-sm-4">
          <h1 class="text-lg dark"><span class="text-primary">January 2015 - May 2015</span></h1>
          </div>
          </div>
        <div class="col-sm-7">
          <h1 class="text-lg dark"><strong>Legislative Intern</strong></h1>
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
    <div class="col-span-2 px-3 my-auto px-auto">
                <a href="https://www.crunchbase.com/organization/gobeme" target="_blank"><img src="/assets/image/biography/GoBeMe.png" alt="GoBeMe" class="img-responsive" /></a>
            </div>
        <div class="col-span-8">
          <div class="flex flex-row" style="justify-content: space-between">
        <div class="">
        <h1 class="text-lg dark">GoBeMe</h1>
            </div>
            <div class="col-sm-4">
                <h1 class="text-lg dark"><span class="text-primary">August 2012 - May 2014</span></h1>
            </div>
</div>
            <div class="col-sm-7">
              <h1 class="text-lg dark"><strong>Co-Founder, Director of Government Affairs</strong></h1>
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
    <div class="col-span-2 px-3 my-auto px-auto">
              <a href="http://www.vulpelab.net/" target="_blank"><img src="/assets/image/biography/Vulpe.png" alt="Vulpe Lab" class="img-responsive"></a>
            </div>
        <div class="col-span-8">
          <div class="flex flex-row" style="justify-content: space-between">
        <div class="">
                  <h1 class="text-lg dark">Vulpe Lab</h1>
            </div>
            <div class="col">
            <h1 class="text-lg dark"><span class="text-primary">August 2010 - July 2012</span></h1>
            </div>
            </div>
            <div class="flex-row">
            <div class="col-4">
                  <h1 class="text-lg dark"><strong>Assistant Research Team Leader</strong></h1>
                  <p>

                  I was in the ecotoxicogenomics division of the lab, and worked on a very diverse set of chemicals during my tenure. When I became the most senior undergraduate researcher, I was approved to hire and train a team of new students. This bump in productivity led to several significant scientific <a href="https://www.researchgate.net/profile/Daniel_Nowinski" target="_blank">publications</a>. I am still incredibly proud of the work my team was able to accomplish.

                  </p>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>

<!----- Education --> <br> <br> <br>




<!-- UC Berkeley --> <br> <br> <br>
<div class="container">
  <div class="grid grid-cols-10 align-items-start">
    <div class="col-span-2 px-3 my-auto px-auto">
    <img src="/assets/image/biography/Berkeley.png" alt="UC Berkeley" class="img-responsive"/>
        </div>
        <div class="col-span-8">
          <div class="flex flex-row" style="justify-content: space-between">
        <div class="">
          <h1 class="text-lg dark">University of California, Berkeley</h1>
        </div>
        <div class="col-sm-4">
          <h1 class="text-lg dark"><span class="text-primary">August 2010 - May 2012</span></h1>
        </div>
        </div>
        <div class="col-sm-7">
        <p><em>Bachelor of Science</em> - <a href="#!" data-toggle="collapse" data-target="#dip0"><strong>Molecular Toxicology</strong><div class="collapse" id="dip0"><img class="product-image-large img-responsive" src="assets/img/biography/UCB-BS-Toxicology.jpg"/></div></a></p>
          <p>Molecular toxicology is the study of the physiological mechanisms of poisons and drugs. There's not a lot of handholding at Berkeley, and many assignments were purposely ambiguous. An example of this was an experimental new course that was taught by a former "big pharma" executive where my group had to go through the FDA drug development process. My favorite course was an acting class that I would guest lecture twice a semester until moving to Washington, D.C.</p>        </div>
      </div>
    </div>
  </div>

<!-- Contra Costa College --> <br> <br> <br>
<div class="container">
  <div class="grid grid-cols-10 align-items-start">
    <div class="col-span-2 px-3 my-auto px-auto">
            <img src="/assets/image/biography/CCC.png" alt="Contra Costa College" class="img-responsive"/>
        </div>
        <div class="col-span-8">
          <div class="flex flex-row" style="justify-content: space-between">
        <div class="">
          <h1 class="text-lg dark">Contra Costa College</h1>
        </div>
        <div class="col-sm-4">
          <h1 class="text-lg dark"><span class="text-primary">August 2007 - May 2010</span></h1>
        </div>
        </div>
        <div class="col-sm-7">
        <p><em>Associate in Science</em> - <a href="#!" data-toggle="collapse" data-target="#dip1"><strong>Chemistry</strong><div class="collapse" id="dip1"><img class="product-image-large img-responsive" src="assets/img/biography/CCC-AS-Chemistry.jpg"/></div></a></p>
          <p><em>Associate in Science</em> - <a href="#!" data-toggle="collapse" data-target="#dip2"><strong>Biological Science</strong><div class="collapse" id="dip2"><img class="product-image-large img-responsive" src="assets/img/biography/CCC-AS-Biology.jpg"/></div></a></p>
          <p><em>Associate in Arts</em> - <a href="#!" data-toggle="collapse" data-target="#dip3"><strong>Economics</strong><div class="collapse" id="dip3"><img class="product-image-large img-responsive" src="assets/img/biography/CCC-AA-Economics.jpg"/></div></a></p>
          <p><em>Associate in Arts</em> - <a href="#!" data-toggle="collapse" data-target="#dip4"><strong>Liberal Arts: Math &amp; Science</strong><div class="collapse" id="dip4"><img class="product-image-large img-responsive" src="assets/img/biography/CCC-AA-LAMS.jpg"/></div></a></p>
          <p><em>Associate in Arts</em> - <a href="#!" data-toggle="collapse" data-target="#dip5"><strong>Liberal Arts: Social &amp; Behavioral Sciences</strong><div class="collapse" id="dip5"><img class="product-image-large img-responsive" src="assets/img/biography/CCC-AA-LASB.jpg"/></div></a></p>
          <p>In preparation for my transfer to Berkeley, I took as much as thirty units per semester. Juggling that many classes in several unrelated fields trained me how to become intensely interdisciplinary as well as manage my time with a narrow margin of error.</p>        </div>
      </div>
    </div>
  </div>

 
  <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>

  
<!----- Activities --> <br> <br> <br>

<!-- The Rotary Club of Detroit --> <br> <br> <br>
<div class="container">
  <div class="grid grid-cols-10 align-items-start">
    <div class="col-span-2 px-3 my-auto px-auto">
            <a href="https://www.detroitrotary.org/"target="_blank"><img src="/assets/image/biography/DRotary.png" alt="The Rotary Club of Detroit" class="img-responsive"/></a>
        </div>
        <div class="col-span-8">
          <div class="flex flex-row" style="justify-content: space-between">
        <div class="">
          <h1 class="text-lg dark">The Rotary Club of Detroit</h1>
        </div>
        <div class="col-sm-4">
          <h1 class="text-lg dark"><span class="text-primary">August 2021 - June 2025</span></h1>
        </div>
</div>
        <div class="row">
          <h1 class="text-lg dark"><strong>Board Member</strong></h1>
          <p>Proud to serve on the board of the Rotary Club of Detroit. I've never been there, and... it's kind of a funny story.</p>        </div>
      </div>
    </div>
  </div>

<!-- Berkeley Free Clinic --> <br> <br> <br>
<div class="container">
  <div class="grid grid-cols-10 align-items-start">
    <div class="col-span-2 px-3 my-auto px-auto">
            <a href="https://www.dnowinski.com"target="_blank"><img src="/assets/image/biography/BFC.png" alt="Berkeley Free Clinic" class="img-responsive"/></a>
        </div>
        <div class="col-span-8">
          <div class="flex flex-row" style="justify-content: space-between">
        <div class="">
          <h1 class="text-lg dark">Berkeley Free Clinic</h1>
        </div>
        <div class="col-sm-4">
          <h1 class="text-lg dark"><span class="text-primary">January 2011 - May 2011</span></h1>
        </div>
</div>
        <div class="row">
          <h1 class="text-lg dark"><strong>Volunteer</strong></h1>
          <p>The Berkeley Free Clinic offers basic medical and dental care, education and vaccination, men's, women's and trans people's STI testing and treatment, anonymous HIV testing, peer counseling, information and referral services, and clean needle services through a collaboration with NEED (Needle Exchange Emergency Distribution).
         <br>
          I of course worked in the lab processing urine, blood, and sputum samples. Not a glorious position, but my lab skills were in high demand, and as a member of the local community, how could I not?
          </p>        </div>
      </div>
    </div>
  </div>

<!-- Environmental Leadership Pathway Program --> <br> <br> <br>
<div class="container">
  <div class="grid grid-cols-10 align-items-start">
    <div class="col-span-2 px-3 my-auto px-auto">
            <a href="https://nature.berkeley.edu/cnrelp/2009_cohort.html"target="_blank"><img src="/assets/image/biography/ELP.png" alt="Environmental Leadership Pathway Program" class="img-responsive"/></a>
        </div>
        <div class="col-span-8">
          <div class="flex flex-row" style="justify-content: space-between">
        <div class="">
          <h1 class="text-lg dark">Environmental Leadership Pathway Program</h1>
        </div>
        <div class="col-sm-4">
          <h1 class="text-lg dark"><span class="text-primary">January 2009 - December 2009</span></h1>
        </div>
</div>
        <div class="row">
          <h1 class="text-lg dark"><strong>Fellow</strong></h1>
          <p>As part of the program we were tasked with finding a teacher to sponsor us in their classroom for half of the school year. I taught third grade natural science at Washington Elementary School in Berkeley. It was an amazing and challenging experience that brought to my attention the critical necessity of parental involvement in their children's education.</p>        </div>
      </div>
    </div>
  </div>

  <!-- Center for Science Excellence --> <br> <br> <br>
<div class="container">
  <div class="grid grid-cols-10 align-items-start">
    <div class="col-span-2 px-3 my-auto px-auto">
            <a href="https://www.contracosta.edu/classes/learning-communities/center-science-excellence/"target="_blank"><img src="/assets/image/biography/CSE.png" alt="Center for Science Excellence" class="img-responsive"/></a>
        </div>
        <div class="col-span-8">
          <div class="flex flex-row" style="justify-content: space-between">
        <div class="">
          <h1 class="text-lg dark">Center for Science Excellence</h1>
        </div>
        <div class="col-sm-4">
          <h1 class="text-lg dark"><span class="text-primary">September 2007 - May 2010</span></h1>
        </div>
</div>
        <div class="row">
          <h1 class="text-lg dark"><strong>Fellow</strong></h1>
          <p>Nominated for membership by my chemistry professor, I was accepted into the Presidential Award winning, Center for Science Excellence (CSE). The program pairs members up with mentors in their STEM field, and provides academic enrichment seminars on Friday afternoons. The seminars prepared me for the many briefings and hearings I would later attend in Congress. It was through this program that I would hear about the Environmental Leadership Pathway Program (ELP).</p>        </div>
      </div>
    </div>
  </div>

  <style>
  .my-custom-header::after {
    content: none;
  }
</style>

<div ngbAccordionHeader class="accordion-button my-custom-header">
  <p>Custom header</p>
  <div>
    <button ngbAccordionToggle class="my-toggle-button">Toggle this panel</button>
    <button class="my-close-all-button">Close all</button>
  </div>
</div>


  <div ngbAccordion>
  <div ngbAccordionItem>
    <h2 ngbAccordionHeader>
      <button ngbAccordionButton>First</button>
    </h2>
    <div ngbAccordionCollapse>
      <div ngbAccordionBody>
        <ng-template>Content for the first item</ng-template>
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
