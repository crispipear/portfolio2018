import React, {Component} from 'react'
import PageTransition from 'gatsby-plugin-page-transitions'
import Header from '../components/proj/Header'
import Footer from '../components/proj/Footer'
import Carousel from '../components/carousel/Carousel'
import {getProjectData} from '../utils.js'
import '../components/proj/proj.scss'

const Content = () => (
  <PageTransition>
    <Header project={getProjectData("clinicplus")}/>
    <section className="projectPage">
      <img src={require('../data/clinicplus/showcase.png')}/>
      <div className="block-two">
        <div>
          <h3>the problem</h3>
          <h1>How can we improve the overall satisfaction of clinic patients?</h1>
          <p>
            Research has shown that clinic patient and consumer satisfaction is tied to wait time. Excluding the actual consultation with the doctor,
            the average wait time of a typical clinic visit can take up more than an hour.
            However, patients are more likely to be dissatisfied if their wait time is more than 30 minutes.
          </p>
        </div>
        <img src={require('../data/clinicplus/research.png')}/>
      </div>
      <div className="block-two">
        <img src={require('../data/clinicplus/clinic.jpg')}/>
        <div>
          <h3>potential solution</h3>
          <h1>Bring the data out of the dark.</h1>
          <p>
            Utilize web/mobile applications with data transfer.
            Let communication be more efficient and transparent within the clinic staff, also between the clinic and the patients. Make the essential tools for a clinic
            visit more accessible and convenient to the patients or users. The goal is to minimize wait times and improve patients{"'"}overall satisfaction.
          </p>
        </div>
      </div>
      <div className="block">
        <h3>the design</h3>
        <h1>General Flow</h1>
        <p>
          I started designing the mobile application after I have finished the research and project proposal. My first step was to draft out the user flow of a typical
          clinic visit, determine the key actions and key features. then I wireframed the main screens with the key components of the application.
        </p>
        <img src={require('../data/clinicplus/userflow.png')}/>
        <img src={require('../data/clinicplus/wireframe.png')}/>
      </div>
      <div className="block">
        <h3>the design</h3>
        <h1>Visual Elements</h1>
        <p>
          I chose a calm color scheme with tones that are used in most medical related fields. The logo combines graphics with the symbolism of care and clinc.
        </p>
        <img src={require('../data/clinicplus/colorscheme.png')}/>
        <img src={require('../data/clinicplus/logo.png')}/>
        <img src={require('../data/clinicplus/icons.png')}/>
      </div>
      <img src={require('../data/clinicplus/ui.png')}/>
      <div className="block-two-center">
        <div>
          <h3>app feature</h3>
          <h1>Easy appointment scheduling</h1>
          <p>
            A few clicks will make an appointment easily at anytime and no need to make a phone call during business hours (and avoiding lunch time) only. The clinic will also be able to get
            insights of the patient{"'"}conditions prior to the visit.
          </p>
        </div>
        <Carousel images={[require('../data/clinicplus/screen_1_1.png'),require('../data/clinicplus/screen_1_2.png'),require('../data/clinicplus/screen_1_3.png')]}/>
      </div>
      <div className="block-two-center">
      <Carousel images={[require('../data/clinicplus/screen_2_1.png'),require('../data/clinicplus/screen_2_2.png')]}/>
        <div>
          <h3>app feature</h3>
          <h1>Update documents digitally, saves trees</h1>
          <p>
            Updates on address? No need to make a phone call or be physically in the clinic to update the documents.
            This avoids filling out a bunch of paperwork and waste more time in the clinic before being checked-in.
          </p>
        </div>
      </div>
      <div className="block-two-center">
        <div>
          <h3>app feature</h3>
          <h1>Know the time</h1>
          <p>
            Getting an estimated wait time with a notification add-on can be useful when you want to step out to get a cup of coffee or something to snack on nearby.
          </p>
        </div>
        <Carousel images={[require('../data/clinicplus/screen_4_1.png'),require('../data/clinicplus/screen_4_2.png')]}/>
      </div>
      <div className="block-two-center">
      <Carousel images={[require('../data/clinicplus/screen_3_1.png'),require('../data/clinicplus/screen_3_2.png'),require('../data/clinicplus/screen_3_3.png')]}/>
        <div>
          <h3>app feature</h3>
          <h1>Check the records, get the prescriptions</h1>
          <p>
            It is useful to go back to the medical report with information to give you insights on recovering from sickness. Sending prescriptions
            directly to the selected pharmacy online also saves a lot of time.
          </p>
        </div>
      </div>
      <div className="block-two">
        <div>
          <h3>reflection</h3>
          <h1>What I did</h1>
          <p>
            The topic of the Independent Study was to create a design solution for a
            business problem. I have researched on the clinic work flow, stakeholders and
            statistics for a better understanding in the general situation of a clinic visit experience.
            After I have outlined the potential solution, I began my work on designing the user
            experience and user interface for the mobile application.
          </p>
          <a className="button" href="http://students.washington.edu/rice74/bis398/wordpress/" target="_blank">PROCESS DOC</a>
        </div>
        <div>
          <h3>reflection</h3>
          <h1>What I learned</h1>
          <p>
            The main challenge was being able to do project management and design individually. Outlining tasks were very important. Half way through the quarter
            I almost ran out of time trying to do research, design and learn development at the same time. I had to give up the application prototype on mobile this quarter
            in order to focus on research and design. As for next steps, I plan on develop the application prototype with React Native.
          </p>
        </div>
      </div>
    </section>
    <Footer page={0}/>
  </PageTransition>
)

export default Content
