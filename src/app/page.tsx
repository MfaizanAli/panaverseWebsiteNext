import {Inter} from '@next/font/google';
import Card from '../components/card';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   
    <div>
      <div class="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="row">
                <div class="col-lg-6 align-self-center">
                  <div class="left-content show-up header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                    <div class="row">
                      <div class="col-lg-11">
                        <h2>Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</h2>
                        <p>Certified Web 3.0 and Metaverse Developer
                          A One and Quarter Years Panaverse DAO Earn as you Learn Program
                          Getting Ready for the Next Generation of the Internet
                          Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies
                        </p>
                      </div>
                      <div class="col-lg-12">
                        <div class="white-button first-button scroll-to-section">
                          <a href="https://www.piaic.org ">Visit PIAIC<i class="fab fa-apple"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                    <img src="assets/images/slider-dec.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div id="services" class="services section">
        <div class="container">
          <div class="row">
            <div class="col-lg-10 offset-lg-1">
              <div class="section-heading  wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
                <h4>The internet is <em>without &amp; a</em> doubt</h4>
                <img src="assets/images/heading-line-dec.png" alt="" />
                <p>The internet is without a doubt the most important technological development in human history. Web3, 3D Metaverse, AI, IoT, Cloud, and Edge technologies expand the internet as we know it by introducing novel features and advancements. Metaverse will make use of all aspects of modern technology, including 3D, VR, AR, AI, blockchain, cloud and edge computing, voice computing, ambient computing, and more.</p>
                <p>Citi is the latest Wall Street business to give a positive prognosis for Web 3.0 and the Metaverse, terms used to depict a future internet vision centered on decentralized technologies and virtual worlds. Citi stated in a March 2022 research paper that the metaverse economy might have a total addressable market of up to $13 trillion and five billion people by 2030.</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-10 offset-lg-1">
              <div class="section-heading  wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
                <h4>The Program <em>in a  &amp; Nutshell: </em> Earn While You Learn</h4>
                <img src="assets/images/heading-line-dec.png" alt="" />
                <p>In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program&apos;s beginning. It resembles a cross between a corporate venture and an educational project.</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-10 offset-lg-1">
              <div class="section-heading  wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
                <h4>Program <em> of </em> Studies</h4>
                <img src="/assets/images/heading-line-dec.png" alt="" />
                <p>In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program&apos;s beginning. It resembles a cross between a corporate venture and an educational project.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="container" >
          <div class="row">
            <div class="col-lg-10 offset-lg-1">
              <div class="section-heading  wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
                <h4> Core Courses <em> (Common in All Specializations): </em></h4>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4">
              <Card
                heading="Quarter I (Core)"
                para="CS-101: Object-Oriented Programming using TypeScript"
              />
            </div>
            <div class="col-lg-4">
              <Card
                heading="Quarter II (Core"
                para="W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform"
              />
            </div>
            <div class="col-lg-4">
              <Card
                heading="Quarter III (Core)"
                para="$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development"
              />
            </div>
      
          </div>
          <div class="row pt-5">
            <div class="col-lg-10 offset-lg-1">
              <div class="section-heading  wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
                <h6> After completing the first three quarters the participants will <br />select one or more specializations consisting of two courses each: </h6>
              </div>
            </div>
          </div>
        </div>
        <div class="container mt-5">
          <div class="row">
            <div class="col-lg-10 offset-lg-1">
              <div class="section-heading  wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
                <h4> Web 3.0 <em> (Blockchain)</em> and Metaverse Specialization </h4>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 offset-lg-2">
           
              <Card
                heading="Quarter IV"
                para="W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps"
              />
                
            </div>
            <div class="col-lg-4">
             
             
              <Card
                heading="Quarter V"
                para="MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences"
              />
                
            </div>
          </div>
       
        </div>
        <div class="container mt-5">
          <div class="row">
            <div class="col-lg-10 offset-lg-1">
              <div class="section-heading  wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
                <h4> Artificial Intelligence <em> (AI)</em> and Deep Learning Specialization </h4>
                <p>The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 offset-lg-2">
             
              <Card
                heading="Quarter IV"
                para="AI-351: Developing Planet-Scale Intelligent APIs and Python Programming"
              />
               
            </div>
            <div class="col-lg-4">
             
              <Card
                heading="Quarter V"
                para="AI-361: Deep Learning and MLOps"
              />
               
            </div>
          </div>
        </div>
        <div class="container mt-5">
          <div class="row">
            <div class="col-lg-10 offset-lg-1">
              <div class="section-heading  wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
                <h4>Cloud-Native Computing  <em> Specialization</em> </h4>
                <p>The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes. </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 offset-lg-2">
             
              <Card
                heading="Quarter IV"
                para="CN-351: Certified Kubernetes Application Developer (CKAD)"
              />
              
            </div>
            <div class="col-lg-4">
            
              <Card
                heading="Quarter V"
                para="CN-361: Developing Multi-Cloud APIs using CDK for Terraform"
              />
               
            </div>
          </div>
        </div>
    
        <div class="container mt-5">
          <div class="row">
            <div class="col-lg-10 offset-lg-1">
              <div class="section-heading  wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
                <h4>Ambient Computing and <em> IoT</em> Specialization   </h4>
                <p>The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.  </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 offset-lg-2">
            
              <Card
                heading="Quarter IV"
                para="AC-351: Ambient Computing with Voice Assistants and Matter Protocol Devices"
              />
              
              
            </div>
            <div class="col-lg-4">
              
              <Card
                heading="Quarter V"
                para="AC-361: Embedded Programming using C and Rust"
              />
                
           
            </div>
          </div>
        </div>
        <div class="container mt-5">
          <div class="row">
            <div class="col-lg-10 offset-lg-1">
              <div class="section-heading  wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
                <h4>Genomics and <em> Bioinformatics</em> Specialization   </h4>
                <p>Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications. </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 offset-lg-2">
              
                
              <Card
                heading="Quarter IV"
                para="Bio-351: Python for Biologists"
              />
                
              
            </div>
            <div class="col-lg-4">
             
              <Card
                heading="Quarter V"
                para="Bio-361: Bioinformatics with Python"
              />
                
                
            </div>
          </div>
        </div>
        <div class="container mt-5">
          <div class="row">
            <div class="col-lg-10 offset-lg-1">
              <div class="section-heading  wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
                <h4>Network Programmability and <em> Automation</em> Specialization   </h4>
                <p>More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 offset-lg-2">
              
              <Card
                heading="Quarter IV"
                para="NPA-351: CCNA 200-301 Certification"
              />
            </div>
            <div class="col-lg-4">
              <Card
                heading="Quarter V"
                para="NPA-361: Network Programmability and Automation"
              />
            </div>
          </div>
        </div>
      </div>
      
      
      <div id="about" class="about-us section">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 align-self-center">
              <div class="section-heading">
                <h4>The Outcome  <em>for Participants</em> of the Program </h4>
                <img src="assets/images/heading-line-dec.png" alt="" />
                <p>The graduates of this program will own products (Full-Stack App Templates, AR and VR Experiences, and APIs) that are marketed globally by the Panaverse DAO and, if they like, will also be able to start off by offering services at a rate of $50 per hour ($96,000 per year). This would give Pakistani professionals and students a fantastic opportunity to better their financial situation while also giving the economy a much-needed boost by expanding software exports.</p>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <div class="box-item">
                    <h4><a href="https://content.techgig.com/hiring/top-5-metaverse-jobs-that-will-rule-the-future-of-tech-industry/articleshow/87581325.cms "><em>Metaverse</em></a></h4>
                    <p>Top 5 Metaverse jobs that will rule the future of tech industry</p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="box-item">
                    <h4><a href="https://web3.career/web3-salaries/blockchain-developer"><em>Blockchain</em></a></h4>
                    <p>Blockchain Developer Salary - Jun 2022</p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="box-item">
                    <h4><a href="https://thedefiant.io/web3-soaring-salaries/"><em>Web 3.0</em></a></h4>
                    <p>Web3 Salaries Soar to $750,000 for Rank-and-File Devs</p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="box-item">
                    <h4><a href="https://www.blockchain-council.org/metaverse/how-to-become-metaverse-developer/ "><em>Scope, Skills, and Salary</em></a></h4>
                    <p>How To Become Metaverse Developer: Scope, Skills, and Salary</p>
                  </div>
                </div>
                
              </div>
            </div>
            <div class="col-lg-6">
              <div class="right-image">
                <img src="assets/images/about-right-dec.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};
