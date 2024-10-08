import React from 'react'
import "./HeroSection.css"

export default function HeroSection() {
  return (
    <div id='home' className='hero'>
        <div className="container">
            <div className="hero-wraper">
                <div className="hero-title">
                    <h1>A Web Developer Working With Clients Globally</h1>
                </div>
                <div className="hero-skills">
                    <div className="skill-tag">SKILLS</div>
                    <div className="skill">Webflow</div>
                    <div className="skill">React js</div>
                    <div className="skill">Wordpress</div>
                </div>
            </div>
        </div>
    </div>
  )
}
