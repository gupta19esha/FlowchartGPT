// src/app/new/page.js
'use client';

import { Editor } from '@/components/flowchart/Editor';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

// Array of interesting facts about flowcharts
const flowchartFacts = [
  "Flowcharts are one of the oldest and most widely used tools for visualizing processes.",
  "Flowcharts help in breaking down complex processes into simple, easy-to-understand steps.",
  "The first documented use of flowcharts was in the 1920s by industrial engineers.",
  "Flowcharts are used in software development to map out algorithms and program flow.",
  "A well-designed flowchart can save hours of troubleshooting and debugging.",
  "Flowcharts are a universal language, making them easy to share across teams and departments.",
  "Flowcharts can be used to visualize decision-making processes in business and personal life.",
  "The diamond shape in a flowchart represents a decision or condition.",
  "Flowcharts are often used in project management to track progress and identify bottlenecks.",
  "Flowcharts can help in identifying inefficiencies in workflows and optimizing them.",
];

export default function NewFlowchartPage() {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  // Automatically change the fact every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFactIndex((prevIndex) => (prevIndex + 1) % flowchartFacts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-10 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-400 to-purple-400 opacity-10 animate-pulse"></div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <Editor />
      </div>

      {/* Dynamic Facts Carousel */}
      <div className="relative z-10 bg-white shadow-lg rounded-lg p-8 mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Did You Know?
        </h2>
        <div className="relative h-20 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentFactIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-gray-600 text-lg"
            >
              {flowchartFacts[currentFactIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}