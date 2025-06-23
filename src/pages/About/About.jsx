const About = () => {
    const teamMembers = [
        {
            name: "Mamudul Hassan",
            role: "Founder & Lead Instructor",
            avatar: "M",
            bio: "Former Google engineer with 8+ years of experience. Passionate about making coding accessible to everyone.",
            specialties: ["Full Stack", "System Design", "Mentorship"],
            social: { twitter: "@mamudul_dev", linkedin: "mamudul-hassan" },
        },
        {
            name: "Sarah Ahmed",
            role: "Head of Curriculum",
            avatar: "S",
            bio: "Ex-Microsoft developer who designs our learning paths. Believes in learning through real projects.",
            specialties: ["React", "Node.js", "Teaching"],
            social: { twitter: "@sarah_codes", linkedin: "sarah-ahmed-dev" },
        },
        {
            name: "Rafiq Khan",
            role: "Career Counselor",
            avatar: "R",
            bio: "HR expert from top tech companies. Helps students land their dream jobs with interview prep.",
            specialties: ["Career Guidance", "Interview Prep", "Industry Insights"],
            social: { twitter: "@rafiq_career", linkedin: "rafiq-khan-hr" },
        },
    ]

    const values = [
        {
            icon: "🎯",
            title: "Purpose-Driven Learning",
            description: "Every lesson has a clear purpose and real-world application",
            color: "from-blue-500 to-cyan-500",
        },
        {
            icon: "🌱",
            title: "Growth Mindset",
            description: "We believe anyone can learn to code with the right guidance",
            color: "from-green-500 to-emerald-500",
        },
        {
            icon: "🤝",
            title: "Community First",
            description: "Learning is better when we support each other",
            color: "from-purple-500 to-pink-500",
        },
        {
            icon: "⚡",
            title: "Practical Focus",
            description: "Build real projects, not just theoretical knowledge",
            color: "from-orange-500 to-red-500",
        },
    ]

    const milestones = [
        {
            year: "2020",
            event: "CodeWithMamudul Founded",
            description: "Started with a vision to democratize coding education",
        },
        {
            year: "2021",
            event: "First 1000 Students",
            description: "Reached our first major milestone with amazing feedback",
        },
        { year: "2022", event: "Corporate Partnerships", description: "Partnered with top companies for job placements" },
        { year: "2023", event: "Global Expansion", description: "Expanded to serve students in 50+ countries" },
        { year: "2024", event: "10K+ Success Stories", description: "Celebrated 10,000+ students landing tech jobs" },
    ]

    const partners = [
        { name: "Google", logo: "G", color: "from-blue-500 to-green-500" },
        { name: "Microsoft", logo: "M", color: "from-blue-600 to-cyan-500" },
        { name: "Amazon", logo: "A", color: "from-orange-500 to-yellow-500" },
        { name: "Meta", logo: "F", color: "from-blue-500 to-purple-500" },
        { name: "Netflix", logo: "N", color: "from-red-500 to-pink-500" },
        { name: "Spotify", logo: "S", color: "from-green-500 to-emerald-500" },
    ]

    const cultureHighlights = [
        {
            title: "Friday Fun Sessions",
            description: "Weekly coding challenges, games, and team bonding",
            icon: "🎉",
            image: "🎮",
        },
        {
            title: "Mentorship Circles",
            description: "Senior students mentor newcomers in small groups",
            icon: "👥",
            image: "🤝",
        },
        {
            title: "Demo Days",
            description: "Students showcase their projects to the community",
            icon: "🚀",
            image: "💻",
        },
        {
            title: "Career Workshops",
            description: "Regular sessions on resume building and interview prep",
            icon: "💼",
            image: "📈",
        },
    ]

    const testimonialVideos = [
        {
            name: "Alex Rodriguez",
            role: "Software Engineer at Google",
            thumbnail: "A",
            quote: "CodeWithMamudul didn't just teach me to code, they taught me to think like an engineer.",
            duration: "2:34",
        },
        {
            name: "Priya Sharma",
            role: "Full Stack Developer at Microsoft",
            thumbnail: "P",
            quote: "The community support here is incredible. I made lifelong friends and connections.",
            duration: "3:12",
        },
        {
            name: "David Kim",
            role: "Frontend Developer at Netflix",
            thumbnail: "D",
            quote: "From zero coding experience to landing my dream job in 6 months. It's possible!",
            duration: "2:58",
        },
    ]

    return (
        <div className="relative bg-gradient-to-r from-purple-400 to-pink-400">
            <div className="min-h-screen flex items-center justify-center px-6 py-20">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="mb-12">
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                            We're not just
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">_</span>
                            <br />
                            another coding school
                        </h1>
                        <p className="text-xl md:text-2xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
                            We're a movement of dreamers, builders, and future tech leaders who believe that coding can change lives.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <div className="group p-8 bg-gradient-to-br from-purple-800/40 to-pink-800/40 rounded-2xl backdrop-blur-sm border border-purple-400/30 hover:border-purple-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:rotate-1">
                            <div className="text-4xl mb-4">🚀</div>
                            <h3 className="text-2xl font-bold text-white mb-4">Launch Your Career</h3>
                            <p className="text-purple-200">
                                From zero to hired in months, not years. We fast-track your journey to tech success.
                            </p>
                        </div>
                        <div className="group p-8 bg-gradient-to-br from-blue-800/40 to-cyan-800/40 rounded-2xl backdrop-blur-sm border border-blue-400/30 hover:border-blue-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:-rotate-1">
                            <div className="text-4xl mb-4">💡</div>
                            <h3 className="text-2xl font-bold text-white mb-4">Think Like a Pro</h3>
                            <p className="text-blue-200">Learn problem-solving skills that make you valuable in any tech role.</p>
                        </div>
                        <div className="group p-8 bg-gradient-to-br from-green-800/40 to-emerald-800/40 rounded-2xl backdrop-blur-sm border border-green-400/30 hover:border-green-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:rotate-1">
                            <div className="text-4xl mb-4">🌟</div>
                            <h3 className="text-2xl font-bold text-white mb-4">Build Amazing Things</h3>
                            <p className="text-green-200">Create projects that wow employers and solve real-world problems.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-20 px-6 bg-gradient-to-r from-indigo-900/20 to-purple-900/20">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                            Hear Their Stories
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">_</span>
                        </h2>
                        <p className="text-xl text-purple-200">Real students, real transformations, real success</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonialVideos.map((video, index) => (
                            <div key={index} className="group cursor-pointer">
                                <div className="relative bg-gradient-to-br from-purple-800/40 to-pink-800/40 rounded-2xl p-6 backdrop-blur-sm border border-purple-400/30 hover:border-purple-400/50 transition-all duration-500 hover:transform hover:scale-105">
                                    <div className="relative mb-6">
                                        <div className="w-full h-48 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                                            <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                                                {video.thumbnail}
                                            </div>
                                        </div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                                                <div className="w-0 h-0 border-l-[16px] border-l-white border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1"></div>
                                            </div>
                                        </div>
                                        <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                                            {video.duration}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-2">{video.name}</h3>
                                    <p className="text-purple-300 text-sm mb-4">{video.role}</p>
                                    <p className="text-purple-200 italic">"{video.quote}"</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="py-20 px-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                            Our Story
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">_</span>
                        </h2>
                    </div>

                    <div className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-purple-400/30 mb-12">
                        <div className="text-center mb-8">
                            <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                                <span className="text-white text-2xl font-bold">M</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">It started with a simple question...</h3>
                        </div>

                        <div className="space-y-6 text-lg text-purple-200 leading-relaxed">
                            <p>
                                "Why is learning to code so hard and expensive?" That's what Mamudul asked himself after seeing
                                countless talented people give up on their tech dreams.
                            </p>
                            <p>
                                After working at Google and seeing the gap between what schools teach and what companies need, he
                                decided to do something about it.
                            </p>
                            <p className="text-xl font-semibold text-white">
                                CodeWithMamudul was born from the belief that anyone, regardless of background, can become a successful
                                developer with the right guidance.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h3 className="text-3xl font-bold text-white text-center mb-12">Our Journey</h3>
                        {milestones.map((milestone, index) => (
                            <div
                                key={index}
                                className="group flex items-center gap-6 hover:transform hover:scale-105 transition-all duration-300"
                            >
                                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300">
                                    <span className="text-white font-bold">{milestone.year}</span>
                                </div>
                                <div className="flex-1 bg-purple-800/30 rounded-xl p-6 backdrop-blur-sm border border-purple-400/30 group-hover:border-purple-400/50 group-hover:bg-purple-800/40 transition-all duration-300">
                                    <h4 className="text-xl font-bold text-white mb-2">{milestone.event}</h4>
                                    <p className="text-purple-200">{milestone.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                            Our Culture
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">_</span>
                        </h2>
                        <p className="text-xl text-purple-200">More than learning - it's about belonging</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {cultureHighlights.map((highlight, index) => (
                            <div key={index} className="group">
                                <div className="bg-gradient-to-br from-purple-800/40 to-pink-800/40 rounded-2xl p-8 backdrop-blur-sm border border-purple-400/30 hover:border-purple-400/50 transition-all duration-500 hover:transform hover:scale-105">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="text-4xl">{highlight.icon}</div>
                                        <div className="text-6xl opacity-20">{highlight.image}</div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{highlight.title}</h3>
                                    <p className="text-purple-200 text-lg">{highlight.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-white">
                        <h3 className="text-3xl font-bold text-center mb-8">Community by the Numbers</h3>
                        <div className="grid md:grid-cols-4 gap-6 text-center">
                            <div>
                                <div className="text-4xl font-bold mb-2">500+</div>
                                <div className="text-lg opacity-90">Weekly Active Members</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold mb-2">50+</div>
                                <div className="text-lg opacity-90">Study Groups</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold mb-2">200+</div>
                                <div className="text-lg opacity-90">Projects Shared Monthly</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold mb-2">24/7</div>
                                <div className="text-lg opacity-90">Community Support</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-20 px-6 bg-gradient-to-b from-transparent to-purple-900/20">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                            Meet the Dream Team
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">_</span>
                        </h2>
                        <p className="text-xl text-purple-200">The people behind your success</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="group">
                                <div className="bg-gradient-to-br from-purple-800/40 to-pink-800/40 rounded-2xl p-8 backdrop-blur-sm border border-purple-400/30 hover:border-purple-400/50 transition-all duration-500 hover:transform hover:scale-105">
                                    <div className="text-center mb-6">
                                        <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                                            <span className="text-white text-2xl font-bold">{member.avatar}</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                                        <p className="text-purple-300 font-semibold">{member.role}</p>
                                    </div>

                                    <p className="text-purple-200 mb-6 leading-relaxed">{member.bio}</p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {member.specialties.map((specialty, idx) => (
                                            <span key={idx} className="px-3 py-1 bg-purple-600/30 text-purple-200 rounded-full text-sm">
                                                {specialty}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4 justify-center">
                                        <button className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-500/30 transition-colors duration-200">
                                            Twitter
                                        </button>
                                        <button className="px-4 py-2 bg-blue-600/20 text-blue-300 rounded-lg hover:bg-blue-600/30 transition-colors duration-200">
                                            LinkedIn
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                            Trusted Partners
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">_</span>
                        </h2>
                        <p className="text-xl text-purple-200">Companies that hire our graduates</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
                        {partners.map((partner, index) => (
                            <div key={index} className="group">
                                <div
                                    className={`bg-gradient-to-r ${partner.color} p-1 rounded-2xl hover:scale-110 transition-all duration-300`}
                                >
                                    <div className="bg-purple-900/80 rounded-2xl p-6 backdrop-blur-sm h-full flex flex-col items-center justify-center">
                                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-3">
                                            <span className="text-2xl font-bold text-gray-800">{partner.logo}</span>
                                        </div>
                                        <span className="text-white font-semibold text-sm">{partner.name}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <p className="text-purple-200 text-lg mb-6">Our graduates work at these amazing companies and many more!</p>
                        <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-500 hover:to-pink-500 transition-all duration-300">
                            See All Partner Companies
                        </button>
                    </div>
                </div>
            </div>

            <div className="py-20 px-6 bg-gradient-to-b from-transparent to-purple-900/20">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                            What We Believe
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">_</span>
                        </h2>
                        <p className="text-xl text-purple-200">The values that guide everything we do</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {values.map((value, index) => (
                            <div key={index} className="group">
                                <div
                                    className={`bg-gradient-to-br ${value.color} p-1 rounded-2xl hover:scale-105 transition-all duration-500`}
                                >
                                    <div className="bg-purple-900/80 rounded-2xl p-8 backdrop-blur-sm h-full">
                                        <div className="text-5xl mb-6">{value.icon}</div>
                                        <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                                        <p className="text-purple-200 text-lg leading-relaxed">{value.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-12">
                        Our Impact
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">_</span>
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        <div className="bg-gradient-to-br from-blue-800/40 to-cyan-800/40 rounded-2xl p-8 backdrop-blur-sm border border-blue-400/30">
                            <div className="text-4xl font-bold text-blue-300 mb-2">10,000+</div>
                            <div className="text-white font-semibold mb-1">Lives Changed</div>
                            <div className="text-blue-200 text-sm">Students who found their dream careers</div>
                        </div>
                        <div className="bg-gradient-to-br from-green-800/40 to-emerald-800/40 rounded-2xl p-8 backdrop-blur-sm border border-green-400/30">
                            <div className="text-4xl font-bold text-green-300 mb-2">$2.5M+</div>
                            <div className="text-white font-semibold mb-1">Salary Increase</div>
                            <div className="text-green-200 text-sm">Total salary boost for our graduates</div>
                        </div>
                        <div className="bg-gradient-to-br from-purple-800/40 to-pink-800/40 rounded-2xl p-8 backdrop-blur-sm border border-purple-400/30">
                            <div className="text-4xl font-bold text-purple-300 mb-2">95%</div>
                            <div className="text-white font-semibold mb-1">Success Rate</div>
                            <div className="text-purple-200 text-sm">Students who complete our program get hired</div>
                        </div>
                        <div className="bg-gradient-to-br from-orange-800/40 to-red-800/40 rounded-2xl p-8 backdrop-blur-sm border border-orange-400/30">
                            <div className="text-4xl font-bold text-orange-300 mb-2">50+</div>
                            <div className="text-white font-semibold mb-1">Countries</div>
                            <div className="text-orange-200 text-sm">Global community of learners</div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-white">
                        <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Write Your Success Story?</h3>
                        <p className="text-xl mb-8 opacity-90">
                            Join thousands who've transformed their lives through code. Your journey starts here.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200">
                                Start Your Journey
                            </button>
                            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200">
                                Talk to Our Team
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
