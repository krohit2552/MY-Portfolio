import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => (
  <div className='info-box'>
    <p className='font-medium sm:text-0.8xl text-center'>{text}</p>
    <Link to={link} className='neo-brutalism-white neo-btn'>
      <div className='hover:ml-1.5 hover:scale-110 transform transition duration-500 flex object-contain'>
        {btnText}
        <img src={arrow} className='w-4 h-4 object-contain mt-1 ml-1' alt='arrow icon'/>
      </div>
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className='sm:text-0.8xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
      Hi, I am <span className='font-semibold'>Rohit</span>👋
      <br />
      An aspiring Software Engineer
    </h1>
  ),
  2: (
    <InfoBox
      text="Curious about my journey and the skills I've gained along the way? Join me as we explore the story behind who I am."
      link='/about'
      btnText='Learn more'
    />
  ),
  3: (
    <InfoBox
      text="Eager to discover? Join me on a journey as we explore the showcase of my projects."
      link='/projects'
      btnText='Visit my portfolio'
    />
  ),
  4: (
    <InfoBox
      text="Unlocking Career Conversations. Your next move starts with a message."
      link='/contact'
      btnText="Let's Talk"
    />
  )
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
