const Success = () => {
    const successStories = [
        {
            name: "Sarah Johnson",
            role: "Frontend Developer",
            company: "Google",
            testimonial:
                "CodeWithMamudul transformed my career completely! The hands-on approach and mentorship helped me land my dream job.",
            salary: "$120k",
            timeToJob: "4 months",
        },
        {
            name: "Mike Chen",
            role: "Full Stack Engineer",
            company: "Facebook",
            testimonial:
                "The best investment I've made in my career. The curriculum is up-to-date and the community support is amazing.",
            salary: "$135k",
            timeToJob: "3 months",
        },
        {
            name: "Emily Davis",
            role: "Software Engineer",
            company: "Microsoft",
            testimonial:
                "From zero to hero in just 6 months! The structured learning path and real-world projects made all the difference.",
            salary: "$115k",
            timeToJob: "5 months",
        },
    ];

    return (
        <section className="min-h-screen flex items-center justify-center px-6 py-16 bg-gradient-to-r from-purple-400 to-pink-400">
            <div className="text-center max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    Success Stories
                </h1>
                <p className="text-xl text-purple-200 mb-12">
                    See how our students have transformed their careers through programming.
                </p>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
                    {successStories.map((story) => (
                        <div
                            key={story.name}
                            className="p-8 bg-purple-800/30 rounded-xl backdrop-blur-sm border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300"
                        >
                            <div className="mb-6">
                                <div
                                    className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center"
                                    aria-hidden="true"
                                >
                                    <span className="text-white font-bold text-xl">
                                        {story.name.charAt(0)}
                                    </span>
                                </div>
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-2">
                                {story.name}
                            </h3>
                            <p className="text-purple-300 mb-1">{story.role}</p>
                            <p className="text-purple-400 mb-4">{story.company}</p>

                            <div className="flex justify-between text-sm text-purple-200 mb-4">
                                <span>
                                    <span role="img" aria-label="Salary">💰</span> {story.salary}
                                </span>
                                <span>
                                    <span role="img" aria-label="Time to job">⏱️</span> {story.timeToJob}
                                </span>
                            </div>

                            <p className="text-purple-200 italic text-sm">"{story.testimonial}"</p>
                        </div>
                    ))}
                </div>

                <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-white">
                    <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
                    <p className="text-xl mb-6">
                        Join thousands of successful graduates and transform your career today.
                    </p>
                    <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200">
                        Get Started Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Success;
