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

const Product = () => {
    const featuredCourses = [
        {
            title: "Complete Web Development",
            description: "Master HTML, CSS, JavaScript, React, Node.js and become a full-stack developer",
            icon: "🌐",
            price: "$299",
            originalPrice: "$499",
            duration: "6 months",
            level: "Beginner to Advanced",
            students: "5,200+",
            rating: 4.9,
            features: ["HTML5 & CSS3", "JavaScript ES6+", "React.js", "Node.js", "MongoDB", "Portfolio Projects"],
            badge: "Most Popular",
            badgeColor: "bg-green-500",
        },
        {
            title: "Mobile App Development",
            description: "Build iOS and Android apps with React Native and Flutter",
            icon: "📱",
            price: "$399",
            originalPrice: "$599",
            duration: "5 months",
            level: "Intermediate",
            students: "3,800+",
            rating: 4.8,
            features: [
                "React Native",
                "Flutter",
                "iOS Development",
                "Android Development",
                "App Store Deployment",
                "Push Notifications",
            ],
            badge: "High Demand",
            badgeColor: "bg-orange-500",
        },
        {
            title: "Backend Development Mastery",
            description: "Master server-side programming, databases, and cloud technologies",
            icon: "⚙️",
            price: "$349",
            originalPrice: "$549",
            duration: "4 months",
            level: "Intermediate to Advanced",
            students: "2,900+",
            rating: 4.7,
            features: ["Node.js", "Express.js", "Database Design", "API Development", "Cloud Deployment", "Microservices"],
            badge: "New",
            badgeColor: "bg-blue-500",
        },
    ]

    const allCourses = [
        {
            category: "Frontend Development",
            courses: [
                {
                    title: "React.js Complete Course",
                    description: "Master React from basics to advanced concepts",
                    icon: "⚛️",
                    price: "$199",
                    duration: "3 months",
                    level: "Beginner",
                    students: "4,100+",
                    rating: 4.8,
                },
                {
                    title: "Vue.js Development",
                    description: "Build modern web apps with Vue.js ecosystem",
                    icon: "💚",
                    price: "$179",
                    duration: "2.5 months",
                    level: "Beginner",
                    students: "1,800+",
                    rating: 4.6,
                },
                {
                    title: "Angular Complete Guide",
                    description: "Enterprise-level Angular development",
                    icon: "🅰️",
                    price: "$229",
                    duration: "4 months",
                    level: "Intermediate",
                    students: "2,200+",
                    rating: 4.7,
                },
                {
                    title: "Advanced CSS & Animations",
                    description: "Master CSS Grid, Flexbox, and animations",
                    icon: "🎨",
                    price: "$149",
                    duration: "2 months",
                    level: "Beginner",
                    students: "3,500+",
                    rating: 4.9,
                },
            ],
        },
        {
            category: "Backend Development",
            courses: [
                {
                    title: "Python Django Mastery",
                    description: "Build scalable web applications with Django",
                    icon: "🐍",
                    price: "$249",
                    duration: "3.5 months",
                    level: "Intermediate",
                    students: "2,700+",
                    rating: 4.8,
                },
                {
                    title: "PHP Laravel Development",
                    description: "Modern PHP development with Laravel framework",
                    icon: "🐘",
                    price: "$219",
                    duration: "3 months",
                    level: "Beginner",
                    students: "1,900+",
                    rating: 4.5,
                },
                {
                    title: "Java Spring Boot",
                    description: "Enterprise Java development with Spring",
                    icon: "☕",
                    price: "$279",
                    duration: "4 months",
                    level: "Intermediate",
                    students: "2,100+",
                    rating: 4.6,
                },
                {
                    title: "Go Programming",
                    description: "Modern backend development with Go",
                    icon: "🔷",
                    price: "$199",
                    duration: "2.5 months",
                    level: "Intermediate",
                    students: "1,200+",
                    rating: 4.7,
                },
            ],
        },
        {
            category: "Mobile Development",
            courses: [
                {
                    title: "iOS Development with Swift",
                    description: "Native iOS app development",
                    icon: "🍎",
                    price: "$329",
                    duration: "4 months",
                    level: "Intermediate",
                    students: "1,600+",
                    rating: 4.8,
                },
                {
                    title: "Android Development with Kotlin",
                    description: "Modern Android app development",
                    icon: "🤖",
                    price: "$299",
                    duration: "4 months",
                    level: "Intermediate",
                    students: "2,000+",
                    rating: 4.7,
                },
                {
                    title: "Flutter Cross-Platform",
                    description: "Build apps for iOS and Android with Flutter",
                    icon: "🦋",
                    price: "$279",
                    duration: "3.5 months",
                    level: "Beginner",
                    students: "2,800+",
                    rating: 4.9,
                },
                {
                    title: "React Native Pro",
                    description: "Advanced React Native development",
                    icon: "📲",
                    price: "$259",
                    duration: "3 months",
                    level: "Intermediate",
                    students: "2,400+",
                    rating: 4.6,
                },
            ],
        },
        {
            category: "Data Science & AI",
            courses: [
                {
                    title: "Python Data Science",
                    description: "Data analysis, visualization, and machine learning",
                    icon: "📊",
                    price: "$349",
                    duration: "5 months",
                    level: "Beginner",
                    students: "3,200+",
                    rating: 4.8,
                },
                {
                    title: "Machine Learning Mastery",
                    description: "Deep dive into ML algorithms and applications",
                    icon: "🤖",
                    price: "$399",
                    duration: "6 months",
                    level: "Intermediate",
                    students: "1,800+",
                    rating: 4.9,
                },
                {
                    title: "Deep Learning with TensorFlow",
                    description: "Neural networks and deep learning",
                    icon: "🧠",
                    price: "$449",
                    duration: "6 months",
                    level: "Advanced",
                    students: "1,200+",
                    rating: 4.7,
                },
                {
                    title: "Data Visualization",
                    description: "Create stunning data visualizations",
                    icon: "📈",
                    price: "$199",
                    duration: "2 months",
                    level: "Beginner",
                    students: "2,600+",
                    rating: 4.6,
                },
            ],
        },
        {
            category: "DevOps & Cloud",
            courses: [
                {
                    title: "AWS Cloud Practitioner",
                    description: "Master Amazon Web Services",
                    icon: "☁️",
                    price: "$299",
                    duration: "3 months",
                    level: "Beginner",
                    students: "2,100+",
                    rating: 4.8,
                },
                {
                    title: "Docker & Kubernetes",
                    description: "Containerization and orchestration",
                    icon: "🐳",
                    price: "$249",
                    duration: "2.5 months",
                    level: "Intermediate",
                    students: "1,700+",
                    rating: 4.7,
                },
                {
                    title: "CI/CD Pipeline Mastery",
                    description: "Automated deployment and testing",
                    icon: "🔄",
                    price: "$219",
                    duration: "2 months",
                    level: "Intermediate",
                    students: "1,400+",
                    rating: 4.6,
                },
                {
                    title: "Linux System Administration",
                    description: "Master Linux for developers",
                    icon: "🐧",
                    price: "$179",
                    duration: "2 months",
                    level: "Beginner",
                    students: "2,800+",
                    rating: 4.5,
                },
            ],
        },
        {
            category: "Cybersecurity",
            courses: [
                {
                    title: "Ethical Hacking Fundamentals",
                    description: "Learn cybersecurity and penetration testing",
                    icon: "🔒",
                    price: "$379",
                    duration: "4 months",
                    level: "Intermediate",
                    students: "1,500+",
                    rating: 4.8,
                },
                {
                    title: "Web Application Security",
                    description: "Secure coding practices and vulnerability assessment",
                    icon: "🛡️",
                    price: "$299",
                    duration: "3 months",
                    level: "Intermediate",
                    students: "1,200+",
                    rating: 4.7,
                },
                {
                    title: "Network Security",
                    description: "Protect networks and infrastructure",
                    icon: "🌐",
                    price: "$329",
                    duration: "3.5 months",
                    level: "Advanced",
                    students: "900+",
                    rating: 4.6,
                },
            ],
        },
    ]

    const learningPaths = [
        {
            title: "Full-Stack Developer Path",
            description: "Complete journey from frontend to backend development",
            icon: "🚀",
            courses: 6,
            duration: "12 months",
            price: "$799",
            originalPrice: "$1,299",
            savings: "$500",
            color: "from-purple-500 to-pink-500",
        },
        {
            title: "Mobile Developer Path",
            description: "Master both iOS and Android development",
            icon: "📱",
            courses: 4,
            duration: "8 months",
            price: "$699",
            originalPrice: "$1,099",
            savings: "$400",
            color: "from-blue-500 to-cyan-500",
        },
        {
            title: "Data Scientist Path",
            description: "From data analysis to machine learning mastery",
            icon: "📊",
            courses: 5,
            duration: "10 months",
            price: "$899",
            originalPrice: "$1,399",
            savings: "$500",
            color: "from-green-500 to-emerald-500",
        },
        {
            title: "DevOps Engineer Path",
            description: "Cloud, containers, and automation expertise",
            icon: "⚙️",
            courses: 4,
            duration: "6 months",
            price: "$599",
            originalPrice: "$999",
            savings: "$400",
            color: "from-orange-500 to-red-500",
        },
    ]

    const specialPrograms = [
        {
            title: "Career Accelerator Program",
            description: "Intensive 1-on-1 mentorship with job guarantee",
            icon: "🎯",
            price: "$2,999",
            duration: "6 months",
            features: ["Personal Mentor", "Job Guarantee", "Interview Prep", "Resume Review", "Salary Negotiation"],
            color: "from-gold-500 to-yellow-500",
            badge: "Premium",
        },
        {
            title: "Corporate Training",
            description: "Custom training programs for teams and companies",
            icon: "🏢",
            price: "Custom Pricing",
            duration: "Flexible",
            features: ["Custom Curriculum", "On-site Training", "Progress Tracking", "Certificates", "24/7 Support"],
            color: "from-indigo-500 to-purple-500",
            badge: "Enterprise",
        },
        {
            title: "Bootcamp Intensive",
            description: "12-week intensive full-time program",
            icon: "⚡",
            price: "$4,999",
            duration: "12 weeks",
            features: ["Full-time Schedule", "Live Classes", "Project-based", "Career Services", "Alumni Network"],
            color: "from-red-500 to-pink-500",
            badge: "Intensive",
        },
    ]

    return (
        <div className="bg-gradient-to-r from-purple-400 to-pink-400">
            <div className="min-h-screen py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Hero Section */}
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        <motion.h1
                            className="text-4xl md:text-6xl font-bold text-white mb-8"
                            variants={itemVariants}
                        >
                            Our Products
                            <motion.span
                                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                _
                            </motion.span>
                        </motion.h1>
                        <motion.p
                            className="text-xl text-purple-200 max-w-3xl mx-auto"
                            variants={itemVariants}
                        >
                            Choose from our comprehensive range of programming courses, learning paths, and special programs designed to
                            accelerate your tech career.
                        </motion.p>
                    </motion.div>

                    {/* Featured Courses Section */}
                    <motion.div
                        className="mb-20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                    >
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
                            variants={itemVariants}
                        >
                            Featured Courses
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">_</span>
                        </motion.h2>

                        <motion.div
                            className="grid md:grid-cols-3 gap-8"
                            variants={containerVariants}
                        >
                            {featuredCourses.map((course, index) => (
                                <motion.div
                                    key={index}
                                    className="relative group"
                                    variants={itemVariants}
                                    whileHover={{ y: -10 }}
                                >
                                    {course.badge && (
                                        <motion.div
                                            className={`absolute -top-3 -right-3 ${course.badgeColor} text-white px-3 py-1 rounded-full text-sm font-semibold z-10`}
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: "spring" }}
                                        >
                                            {course.badge}
                                        </motion.div>
                                    )}
                                    <motion.div
                                        className="p-8 bg-purple-800/30 rounded-xl backdrop-blur-sm border border-purple-400/30 h-full"
                                        whileHover={{ scale: 1.03 }}
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

                                        <div className="flex items-center gap-2 mb-4">
                                            <span className="text-3xl font-bold text-purple-300">{course.price}</span>
                                            <span className="text-lg text-purple-400 line-through">{course.originalPrice}</span>
                                        </div>

                                        <div className="space-y-2 text-sm text-purple-300 mb-6">
                                            <div className="flex justify-between">
                                                <span>Duration:</span>
                                                <span>{course.duration}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Level:</span>
                                                <span>{course.level}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Students:</span>
                                                <span>{course.students}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Rating:</span>
                                                <span className="flex items-center gap-1">⭐ {course.rating}</span>
                                            </div>
                                        </div>

                                        <ul className="text-left text-purple-200 mb-8 space-y-2">
                                            {course.features.map((feature, idx) => (
                                                <motion.li
                                                    key={idx}
                                                    className="flex items-center text-sm"
                                                    whileHover={{ x: 5 }}
                                                >
                                                    <span className="text-green-400 mr-2">✓</span>
                                                    {feature}
                                                </motion.li>
                                            ))}
                                        </ul>

                                        <motion.button
                                            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Enroll Now
                                        </motion.button>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Learning Paths Section */}
                    <motion.div
                        className="mb-20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                    >
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
                            variants={itemVariants}
                        >
                            Learning Paths
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">_</span>
                        </motion.h2>
                        <motion.p
                            className="text-center text-purple-200 mb-12 text-lg"
                            variants={itemVariants}
                        >
                            Structured learning journeys that take you from beginner to expert
                        </motion.p>

                        <motion.div
                            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                            variants={containerVariants}
                        >
                            {learningPaths.map((path, index) => (
                                <motion.div
                                    key={index}
                                    className="group"
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <motion.div
                                        className={`bg-gradient-to-br ${path.color} p-1 rounded-2xl`}
                                        whileHover={{ scale: 1.03 }}
                                    >
                                        <div className="bg-purple-900/80 rounded-2xl p-6 backdrop-blur-sm h-full">
                                            <motion.div
                                                className="text-4xl mb-4"
                                                animate={{ rotate: [0, 10, -10, 0] }}
                                                transition={{ duration: 4, repeat: Infinity }}
                                            >
                                                {path.icon}
                                            </motion.div>
                                            <h3 className="text-xl font-bold text-white mb-3">{path.title}</h3>
                                            <p className="text-purple-200 mb-4 text-sm">{path.description}</p>

                                            <div className="space-y-2 text-sm text-purple-300 mb-4">
                                                <div className="flex justify-between">
                                                    <span>Courses:</span>
                                                    <span>{path.courses}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Duration:</span>
                                                    <span>{path.duration}</span>
                                                </div>
                                            </div>

                                            <div className="mb-4">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className="text-2xl font-bold text-white">{path.price}</span>
                                                    <span className="text-sm text-purple-400 line-through">{path.originalPrice}</span>
                                                </div>
                                                <div className="text-green-400 text-sm font-semibold">Save {path.savings}</div>
                                            </div>

                                            <motion.button
                                                className="w-full bg-white/20 text-white py-2 rounded-lg hover:bg-white/30 transition-all duration-300 text-sm"
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                View Path
                                            </motion.button>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* All Courses Section */}
                    <motion.div
                        className="mb-20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                    >
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
                            variants={itemVariants}
                        >
                            All Courses
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">_</span>
                        </motion.h2>

                        {allCourses.map((category, categoryIndex) => (
                            <motion.div
                                key={categoryIndex}
                                className="mb-16"
                                variants={containerVariants}
                            >
                                <motion.h3
                                    className="text-2xl font-bold text-white mb-8 border-b border-purple-400/30 pb-4"
                                    variants={itemVariants}
                                >
                                    {category.category}
                                </motion.h3>

                                <motion.div
                                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                                    variants={containerVariants}
                                >
                                    {category.courses.map((course, courseIndex) => (
                                        <motion.div
                                            key={courseIndex}
                                            className="group"
                                            variants={itemVariants}
                                            whileHover={{ y: -5 }}
                                        >
                                            <div className="p-6 bg-purple-800/30 rounded-xl backdrop-blur-sm border border-purple-400/30 h-full">
                                                <motion.div
                                                    className="text-3xl mb-3"
                                                    whileHover={{ scale: 1.2 }}
                                                    transition={{ type: "spring" }}
                                                >
                                                    {course.icon}
                                                </motion.div>
                                                <h4 className="text-lg font-semibold text-white mb-2">{course.title}</h4>
                                                <p className="text-purple-200 text-sm mb-4">{course.description}</p>

                                                <div className="space-y-1 text-xs text-purple-300 mb-4">
                                                    <div className="flex justify-between">
                                                        <span>Price:</span>
                                                        <span className="font-semibold text-purple-200">{course.price}</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span>Duration:</span>
                                                        <span>{course.duration}</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span>Level:</span>
                                                        <span>{course.level}</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span>Students:</span>
                                                        <span>{course.students}</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span>Rating:</span>
                                                        <span>⭐ {course.rating}</span>
                                                    </div>
                                                </div>

                                                <motion.button
                                                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300 text-sm"
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                >
                                                    Learn More
                                                </motion.button>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Special Programs Section */}
                    <motion.div
                        className="mb-20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                    >
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
                            variants={itemVariants}
                        >
                            Special Programs
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">_</span>
                        </motion.h2>
                        <motion.p
                            className="text-center text-purple-200 mb-12 text-lg"
                            variants={itemVariants}
                        >
                            Premium programs for accelerated learning and career transformation
                        </motion.p>

                        <motion.div
                            className="grid md:grid-cols-3 gap-8"
                            variants={containerVariants}
                        >
                            {specialPrograms.map((program, index) => (
                                <motion.div
                                    key={index}
                                    className="group relative"
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.03 }}
                                >
                                    <motion.div
                                        className={`bg-gradient-to-br ${program.color} p-1 rounded-2xl`}
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <div className="bg-purple-900/80 rounded-2xl p-8 backdrop-blur-sm h-full">
                                            <motion.div
                                                className="absolute -top-3 -right-3 bg-gradient-to-r from-gold-400 to-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold"
                                                animate={{
                                                    rotate: [0, 10, -10, 0],
                                                    scale: [1, 1.1, 1]
                                                }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                            >
                                                {program.badge}
                                            </motion.div>

                                            <motion.div
                                                className="text-4xl mb-6"
                                                animate={{ y: [0, -10, 0] }}
                                                transition={{ duration: 3, repeat: Infinity }}
                                            >
                                                {program.icon}
                                            </motion.div>
                                            <h3 className="text-2xl font-bold text-white mb-4">{program.title}</h3>
                                            <p className="text-purple-200 mb-6">{program.description}</p>

                                            <div className="space-y-2 text-sm text-purple-300 mb-6">
                                                <div className="flex justify-between">
                                                    <span>Price:</span>
                                                    <span className="font-semibold text-white">{program.price}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Duration:</span>
                                                    <span>{program.duration}</span>
                                                </div>
                                            </div>

                                            <ul className="text-left text-purple-200 mb-8 space-y-2">
                                                {program.features.map((feature, idx) => (
                                                    <motion.li
                                                        key={idx}
                                                        className="flex items-center text-sm"
                                                        whileHover={{ x: 5 }}
                                                    >
                                                        <span className="text-gold-400 mr-2">★</span>
                                                        {feature}
                                                    </motion.li>
                                                ))}
                                            </ul>

                                            <motion.button
                                                className="w-full bg-white text-purple-900 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                Get Started
                                            </motion.button>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div
                        className="text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={scaleUp}
                    >
                        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-white">
                            <motion.h2
                                className="text-3xl md:text-4xl font-bold mb-6"
                                variants={itemVariants}
                            >
                                Not Sure Which Course to Choose?
                            </motion.h2>
                            <motion.p
                                className="text-xl mb-8 opacity-90"
                                variants={itemVariants}
                            >
                                Talk to our career counselors and get personalized recommendations based on your goals.
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
                                    Get Free Consultation
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
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>

    )
}

export default Product;
