'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const projects = [
    {
        title: 'AuraLog',
        description: 'Aura Log is an iOS app built on SwiftUI and inspired by my personal journey with migraine with aura. Specifically designed to track and document scintillating scotoma—a highly niche and under-researched symptom—this app empowers users to capture granular, real-time data about their visual aura experiences. Prioritizing privacy and ease of use, the app requires no account creation and stores all data locally on your device. AuraLog now supports over 500 users!',
        image: '/migraine.jpg',
        tags: ['SwiftUI', 'localStorage'],
        liveUrl: 'https://apps.apple.com/us/app/aura-log/id6744613084'
    },
    {
        title: 'Do Hue Recall?!',
        description: 'A fun tool I designed to speed up CSS development and train your color code memorization skills. Choose either color to code or code to color mode and challenge yourself to recall hex codes or visualize colors from code. Or, simply mess with RGB and HEX sliders to see how colors interact with each other while also seeing the codes change!',
        image: '/code.jpg',
        tags: ['SwiftUI'],
        liveUrl: 'https://apps.apple.com/us/app/do-hue-recall/id6745530746',
    },
    {
        title: 'Student/Faculty Collaboration Platform For TXST',
        description: 'Developed a React-based web application to facilitate collaboration between university faculty and students by connecting faculty-led research opportunities with students seeking to participate. Enabled faculty to post detailed research projects and allowed students to easily discover and apply for opportunities, fostering academic and professional growth.',
        image: '/laptop.jpg',
        tags: ['React'],
    },
    {
    title: "CADS Website Redesign For TXST",
    description:
      "Redesigned the outdated CADS website for Texas State University, improving navigation, SEO, and the overall user experience. I used the GATO CMS to edit raw HTML, CSS, and JavaScript files. I worked closely with Dr. Apan to make our vision come to life.",
    image: "/cads.jpg",
    tags: ["HTML", "CSS", "JavaScript", "GATO"],
	liveUrl: "https://cads.txst.edu/",
  },
    {
        title: 'Neuro Nest',
        description: 'Neuro Nest is a neural network based application that performs object detection to detect and flag defect(s) for those with Alzheimer\'s. I worked closely with Texas State University faculty Dr. Nadim Adi and Dr. Greg Lakomski to create the frontend for Neuro Nest.',
        image: '/color.jpg',
        tags: ['React Native', 'TypeScript', 'Node.js'],
    },
    {
    title: "PedalPath",
    description:
      "If you are a guitarist who has ever designed or planned a pedalboard, this website will be your best friend. Choose from a large bank of pedal tiles to get real-time tips about your signal chain. PedalPath automatically calculates the total price, necessary cable length, and ideal board size based on PedalTrain models. More pedal tiles coming soon!",
    image: "/guitar.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://www.pedalpath.samchutter.com",
  },
];

export default function ProjectsSection() {
    return (
        <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
                    Featured Projects
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative bg-white/50 dark:bg-gray-900/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-200 dark:border-gray-800"
                        >
                            <div className="aspect-video relative overflow-hidden">
                                <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-200 via-gray-200/40 to-transparent dark:from-gray-900 dark:via-gray-900/40 dark:to-transparent transition-transform duration-300 group-hover:scale-105" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-2">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-sm px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-white rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                {project.liveUrl && (
                                    <div className="mt-2">
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 dark:text-blue-400 text-sm font-medium underline"
                                            style={{ display: 'inline-block', textAlign: 'left' }}
                                        >
                                            View live
                                        </a>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
