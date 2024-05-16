'use client';
import React from 'react';
import TypeWriter from 'typewriter-effect';

const TypewriterText = () => {
  return (
    <div className="text-xl text-slate-500">
      <TypeWriter
        options={{
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString('Start writing your thoughts')
            .pauseFor(2500)
            .deleteAll()
            .typeString('Elevate your expression with AI')
            .pauseFor(2500)
            .deleteAll()
            .typeString('Empower your thoughts with Pensieve')
            .pauseFor(2500)
            .start();
        }}
      />
    </div>
  );
};

export default TypewriterText;
