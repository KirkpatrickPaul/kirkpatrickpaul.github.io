import React from 'react';
const portfolioItems = [
  {
    id: 1,
    name: 'Serial Search',
    page: 'https://kirkpatrickpaul.github.io/SerialSearch/',
    image: './Assets/Serial Search.jpg',
    github: 'https://github.com/KirkpatrickPaul/SerialSearch',
    children: (
      <p>
        <strong>$erial.search</strong> provides users with a simple tool to find
        information or entertainment related to their favorite serial killers.
        The website is able to find all available Movies, TV, and Books on any
        killer of the users choosing.
      </p>
    )
  },
  {
    id: 2,
    name: 'See Something Say Something',
    page: 'https://fierce-mountain-61777.herokuapp.com/',
    image: './Assets/See Something Say Something.jpg',
    github: 'https://github.com/KirkpatrickPaul/Project02_Crime_Reporting',
    children: (
      <p>
        <strong>See Something Say Something</strong> is an app that allows
        concerned members of the community to report on crimes that they've
        witnessed. This allows others to stay informed with what is happening
        around them.
      </p>
    )
  },
  {
    id: 3,
    name: 'Weather Forecaster',
    page: 'https://kirkpatrickpaul.github.io/06_weather_app/',
    image: './Assets/Forecaster.jpg',
    github: 'https://github.com/KirkpatrickPaul/06_weather_app',
    children: (
      <p>
        <strong>Paul's Weather Forecaster</strong>{' '}
        <span>
          <i>for the Discerning Traveler</i>
        </span>
        . Are you more than a simple traveler? Do you wish you could{' '}
        <i>discern</i> what the weather would be in cities you plan to visit?
        Perhaps you simply wish to amaze your friends with the ability to
        predict what the weather will be like with moderate accuracy. Whatever
        the case, this webpage is for you!
      </p>
    )
  }
];

export default portfolioItems;
