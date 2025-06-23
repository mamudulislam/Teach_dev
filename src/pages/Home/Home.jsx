import { useState, useEffect } from "react"
import CountUp from 'react-countup';
import { motion } from 'framer-motion'
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            when: "beforeChildren"
        }
    }
}

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10
        }
    }
}

const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.8 }
    }
}

const scaleUp = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.5 }
    }
}

const slideInFromLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.6 }
    }
}

const slideInFromRight = {
    hidden: { x: 100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.6 }
    }
}

const Home = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    const floatingIcons = [
        { text: "{ }", position: "top-20 left-20", delay: "0s" },
        { text: "⚛️", position: "top-32 right-32", delay: "1s" },
        { text: "🗄️", position: "top-64 left-64", delay: "2s" },
        { text: "📱", position: "bottom-64 right-20", delay: "0.5s" },
        { text: "💻", position: "bottom-32 left-32", delay: "1.5s" },
        { text: "🌐", position: "top-48 right-48", delay: "2.5s" },
    ]

    const courses = [
        {
            title: "Web Development",
            description: "Master HTML, CSS, JavaScript, React, and Node.js",
            icon: "🌐",
            duration: "6 months",
            level: "Beginner to Advanced",
        },
        {
            title: "Mobile App Development",
            description: "Build iOS and Android apps with React Native",
            icon: "📱",
            duration: "4 months",
            level: "Intermediate",
        },
        {
            title: "Backend Development",
            description: "Learn server-side programming and databases",
            icon: "⚙️",
            duration: "5 months",
            level: "Intermediate",
        },
    ]

    const successStory = {
        name: "Ahmed Rahman",
        role: "Full Stack Developer",
        company: "Google",
        image: "A",
        story: "From a complete beginner to landing a job at Google in just 8 months. CodeWithMamudul changed my life!",
        salary: "$130k",
    }

    return (
        <div className="relative bg-gradient-to-r from-purple-400 to-pink-400">
            <div className="relative min-h-screen flex items-center justify-center px-6">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full">
                        <motion.div
                            className="absolute top-20 left-10 w-64 h-64 border border-purple-400/20 rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        ></motion.div>
                        <motion.div
                            className="absolute bottom-20 right-10 w-96 h-96 border border-pink-400/20 rounded-full"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        ></motion.div>
                        <motion.div
                            className="absolute top-1/2 left-1/4 w-32 h-32 border border-purple-300/30 rotate-45"
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        ></motion.div>
                    </div>
                    {floatingIcons.map((icon, index) => (
                        <motion.div
                            key={index}
                            className={`absolute ${icon.position}`}
                            initial={{ y: -20 }}
                            animate={{ y: [0, -20, 0] }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: parseFloat(icon.delay)
                            }}
                        >
                            <div className="p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg backdrop-blur-sm border border-purple-400/30">
                                <span className="text-2xl">{icon.text}</span>
                            </div>
                        </motion.div>
                    ))}

                    <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-purple-900/80 to-transparent">
                        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-r from-purple-600/40 via-pink-600/40 to-purple-600/40">
                            <div className="absolute bottom-0 left-0 w-full h-full flex items-end justify-center space-x-1">
                                {Array.from({ length: 20 }).map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="bg-gradient-to-t from-purple-800/60 to-purple-600/40"
                                        initial={{ height: 0 }}
                                        animate={{ height: `${Math.random() * 120 + 60}px` }}
                                        transition={{
                                            duration: 1.5,
                                            delay: i * 0.1,
                                            repeat: Infinity,
                                            repeatType: "reverse"
                                        }}
                                        style={{
                                            width: `${Math.random() * 40 + 20}px`,
                                        }}
                                    ></motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <motion.div
                    className="relative z-10 text-center max-w-4xl mx-auto px-4 py-20"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.h1
                        className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-8 leading-tight"
                        variants={itemVariants}
                    >
                        Let's Code
                        <motion.span
                            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            _
                        </motion.span>
                        <br />
                        Your Career
                    </motion.h1>

                    <motion.p
                        className="text-lg md:text-xl lg:text-2xl text-purple-200 mb-12 max-w-2xl mx-auto leading-relaxed"
                        variants={itemVariants}
                    >
                        We're on a mission to provide personalized learning and empower individuals to kick-start their careers.
                    </motion.p>

                    <motion.button
                        aria-label="Explore our platform"
                        className="group relative px-8 md:px-12 py-3 md:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-semibold rounded-full hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="relative z-10">Explore</span>
                    </motion.button>
                </motion.div>
            </div>

            <div className="py-20 px-6 bg-gradient-to-b from-transparent to-purple-900/20">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                    >
                        <motion.h2
                            className="text-4xl md:text-6xl font-bold text-white mb-6"
                            variants={itemVariants}
                        >
                            Our Courses
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">_</span>
                        </motion.h2>
                        <motion.p
                            className="text-xl text-purple-200 max-w-2xl mx-auto"
                            variants={itemVariants}
                        >
                            Choose from our comprehensive programming courses designed to take you from zero to hero.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-3 gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                    >
                        {courses.map((course, index) => (
                            <motion.div
                                key={index}
                                className="p-8 bg-purple-800/30 rounded-xl backdrop-blur-sm border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105"
                                variants={itemVariants}
                                whileHover={{ y: -10 }}
                            >
                                <motion.div
                                    className="text-4xl mb-4"
                                    whileHover={{ scale: 1.2 }}
                                    transition={{ type: "spring" }}
                                >
                                    {course.icon}
                                </motion.div>
                                <h3 className="text-2xl font-semibold text-white mb-4">{course.title}</h3>
                                <p className="text-purple-200 mb-6">{course.description}</p>
                                <div className="space-y-2 text-sm text-purple-300">
                                    <div className="flex justify-between">
                                        <span>Duration:</span>
                                        <span>{course.duration}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Level:</span>
                                        <span>{course.level}</span>
                                    </div>
                                </div>
                                <motion.button
                                    className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Learn More
                                </motion.button>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            <div className="py-20 px-6 bg-gradient-to-r from-purple-900/40 to-pink-900/40">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    <motion.h2
                        className="text-4xl md:text-6xl font-bold text-white mb-8"
                        variants={itemVariants}
                    >
                        Are you absolute
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">_</span>
                        <br />
                        Beginner?
                    </motion.h2>
                    <motion.p
                        className="text-xl text-purple-200 mb-12 leading-relaxed"
                        variants={itemVariants}
                    >
                        Don't worry! We've designed our courses specifically for complete beginners. No prior experience needed.
                    </motion.p>

                    <motion.div
                        className="grid md:grid-cols-2 gap-8 mb-12"
                        variants={containerVariants}
                    >
                        <motion.div
                            className="p-6 bg-purple-800/30 rounded-xl backdrop-blur-sm border border-purple-400/30"
                            variants={itemVariants}
                            whileHover={{ scale: 1.03 }}
                        >
                            <motion.div
                                className="text-3xl mb-4"
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                🎯
                            </motion.div>
                            <h3 className="text-xl font-semibold text-white mb-3">Step-by-Step Learning</h3>
                            <p className="text-purple-200">
                                Our curriculum is designed to take you from absolute zero to job-ready developer with clear, structured
                                lessons.
                            </p>
                        </motion.div>
                        <motion.div
                            className="p-6 bg-purple-800/30 rounded-xl backdrop-blur-sm border border-purple-400/30"
                            variants={itemVariants}
                            whileHover={{ scale: 1.03 }}
                        >
                            <motion.div
                                className="text-3xl mb-4"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                👨‍🏫
                            </motion.div>
                            <h3 className="text-xl font-semibold text-white mb-3">Expert Mentorship</h3>
                            <p className="text-purple-200">
                                Get personalized guidance from industry experts who will help you overcome challenges and accelerate
                                your learning.
                            </p>
                        </motion.div>
                    </motion.div>

                    <motion.button
                        className="bg-gradient-to-r from-purple-300 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-purple-300 transition-all duration-900 transform hover:scale-105"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Start Your Journey Today
                    </motion.button>
                </motion.div>
            </div>

            <div className="py-20 px-6">
                <motion.div
                    className="max-w-4xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    <motion.div
                        className="text-center mb-16"
                        variants={itemVariants}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Success
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">_</span>
                            Story
                        </h2>
                        <p className="text-xl text-purple-200">Real transformation, real success</p>
                    </motion.div>

                    <motion.div
                        className="bg-gradient-to-r from-purple-800/40 to-pink-800/40 rounded-2xl p-8 md:p-12 backdrop-blur-sm border border-purple-400/30"
                        variants={scaleUp}
                    >
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <motion.div
                                className="flex-shrink-0"
                                whileHover={{ rotate: 5 }}
                                transition={{ type: "spring" }}
                            >
                                <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                                    {successStory.image}
                                </div>
                            </motion.div>
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-2xl font-bold text-white mb-2">{successStory.name}</h3>
                                <p className="text-purple-300 mb-1">{successStory.role}</p>
                                <p className="text-purple-400 mb-4">{successStory.company}</p>
                                <p className="text-purple-200 italic mb-4">"{successStory.story}"</p>
                                <motion.div
                                    className="inline-block bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-semibold"
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    💰 {successStory.salary} starting salary
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <div className="py-20 px-6 bg-gradient-to-b from-transparent to-purple-900/30">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    <motion.h2
                        className="text-4xl md:text-6xl font-bold text-white mb-8"
                        variants={itemVariants}
                    >
                        Our Mission
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">_</span>
                    </motion.h2>

                    <motion.div
                        className="bg-purple-800/30 rounded-2xl p-8 md:p-12 backdrop-blur-sm border border-purple-400/30 mb-12"
                        variants={fadeIn}
                    >
                        <p className="text-xl text-purple-200 leading-relaxed mb-8">
                            "To democratize programming education and empower individuals from all backgrounds to build successful
                            careers in technology through personalized, practical, and accessible learning experiences."
                        </p>

                        <motion.div
                            className="grid md:grid-cols-3 gap-6"
                            variants={containerVariants}
                        >
                            <motion.div
                                className="text-center"
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                            >
                                <div className="text-3xl mb-3">🌍</div>
                                <h3 className="text-lg font-semibold text-white mb-2">Global Impact</h3>
                                <p className="text-purple-200 text-sm">Reaching students worldwide</p>
                            </motion.div>
                            <motion.div
                                className="text-center"
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                            >
                                <div className="text-3xl mb-3">💡</div>
                                <h3 className="text-lg font-semibold text-white mb-2">Innovation</h3>
                                <p className="text-purple-200 text-sm">Cutting-edge curriculum</p>
                            </motion.div>
                            <motion.div
                                className="text-center"
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                            >
                                <div className="text-3xl mb-3">🤝</div>
                                <h3 className="text-lg font-semibold text-white mb-2">Community</h3>
                                <p className="text-purple-200 text-sm">Supportive learning environment</p>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-4 gap-6 text-center"
                        variants={containerVariants}
                    >
                        <motion.div
                            className="bg-purple-800/30 rounded-xl p-6 backdrop-blur-sm border border-purple-400/30"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="text-3xl font-bold text-purple-400 mb-2">
                                <CountUp end={10000} duration={2} separator="," suffix="+" />
                            </div>
                            <div className="text-white text-sm">Students Trained</div>
                        </motion.div>

                        <motion.div
                            className="bg-purple-800/30 rounded-xl p-6 backdrop-blur-sm border border-purple-400/30"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="text-3xl font-bold text-pink-400 mb-2">
                                <CountUp end={95} duration={2} suffix="%" />
                            </div>
                            <div className="text-white text-sm">Job Placement</div>
                        </motion.div>

                        <motion.div
                            className="bg-purple-800/30 rounded-xl p-6 backdrop-blur-sm border border-purple-400/30"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="text-3xl font-bold text-cyan-400 mb-2">
                                <CountUp end={50} duration={2} suffix="+" />
                            </div>
                            <div className="text-white text-sm">Countries</div>
                        </motion.div>

                        <motion.div
                            className="bg-purple-800/30 rounded-xl p-6 backdrop-blur-sm border border-purple-400/30"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="text-3xl font-bold text-green-400 mb-2">
                                <CountUp end={24} duration={2} suffix="/7" />
                            </div>
                            <div className="text-white text-sm">Support</div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            <div className="py-20 px-6">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    <motion.div
                        className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-white"
                        variants={scaleUp}
                    >
                        <motion.h2
                            className="text-3xl md:text-5xl font-bold mb-6"
                            variants={itemVariants}
                        >
                            Ready to Transform Your Life?
                        </motion.h2>
                        <motion.p
                            className="text-xl mb-8 opacity-90"
                            variants={itemVariants}
                        >
                            Join thousands of successful developers who started their journey with CodeWithMamudul
                        </motion.p>
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                            variants={containerVariants}
                        >
                            <motion.button
                                className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Start Learning Now
                            </motion.button>
                            <motion.button
                                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200"
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View All Courses
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default Home