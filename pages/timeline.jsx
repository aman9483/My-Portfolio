import React from 'react';
import Head from 'next/head';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Timeline = () => {
  return (
    <div className="px-10 sm:px-20 md:px-32 md:-mb-52 lg:mb-0 lg:px-60 mx-auto max-w-[75rem]">
      <Head>
        <title>timeline ✦ Aman</title>
        <link rel="icon" href="/Avatar-white.svg" />
      </Head>
      <main className="min-h-screen max-w-screen">
        <div className="pt-24 flex flex-col items-center mx-auto">
          <h2 className="selection:text-black/40 dark:selection:text-white/40 bg-gradient-to-r from-teal-200 to-lime-200 bg-clip-text text-transparent items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">
            Education Timeline
          </h2>
          <p className="mt-8 max-w-xl text-center md:w-[70%] mx-auto text-sm md:text-base lg:text-xl mb-2 px-2">
            The linear view of some milestones and notable moments that happened
            so far. And you can always find more information on LinkedIn.
          </p>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2020 - 2024"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              icon={<i className="fas fa-graduation-cap"></i>}
            >
              <h3 className="vertical-timeline-element-title">Bachelor of Technology</h3>
              <h4 className="vertical-timeline-element-subtitle">XYZ University</h4>
              <p>
                Major in Computer Science
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2018 - 2020"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              icon={<i className="fas fa-graduation-cap"></i>}
            >
              <h3 className="vertical-timeline-element-title">High School</h3>
              <h4 className="vertical-timeline-element-subtitle">ABC School</h4>
              <p>
                Science Stream with a focus on Physics, Chemistry, and Mathematics
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2016 - 2018"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              icon={<i className="fas fa-graduation-cap"></i>}
            >
              <h3 className="vertical-timeline-element-title">Secondary School</h3>
              <h4 className="vertical-timeline-element-subtitle">DEF School</h4>
              <p>
                Completed secondary education with a focus on Science and Mathematics
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2014 - 2016"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fffd' }}
              icon={<i className="fas fa-graduation-cap"></i>}
            >
              <h3 className="vertical-timeline-element-title">Middle School</h3>
              <h4 className="vertical-timeline-element-subtitle">GHI School</h4>
              <p>
                Focused on foundational subjects and developed an interest in science
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2012 - 2014"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              icon={<i className="fas fa-graduation-cap"></i>}
            >
              <h3 className="vertical-timeline-element-title">Elementary School</h3>
              <h4 className="vertical-timeline-element-subtitle">JKL School</h4>
              <p>
                Developed basic skills in reading, writing, and arithmetic
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </main>
    </div>
  );
};

export default Timeline;
