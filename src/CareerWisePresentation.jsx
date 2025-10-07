import React, { useState } from "react";
import {
  GraduationCap,
  Target,
  Award,
  TrendingUp,
  Users,
  Zap,
  CheckCircle,
  BookOpen,
  Calendar,
  BarChart3,
  Sparkles,
  ChevronRight,
  Flame,
  Star,
  Trophy,
  ArrowRight,
} from "lucide-react";

export default function CareerWisePresentation() {
  const [currentSection, setCurrentSection] = useState("hero");

  const sections = [
    { id: "hero", label: "Introduction" },
    { id: "problem", label: "The Problem" },
    { id: "solution", label: "Our Solution" },
    { id: "features", label: "Key Features" },
    { id: "gamification", label: "Gamification" },
    { id: "demo", label: "Live Demo" },
    { id: "impact", label: "Impact & Future" },
  ];

  const features = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Application Tracking",
      description:
        "Track multiple university applications with real-time progress, deadlines, and document checklists all in one place.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "APS Calculator",
      description:
        "Integrated APS (Admission Point Score) calculator helps students understand their eligibility for different programs.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Career Roadmaps",
      description:
        "Three distinct pathways: University degrees, Alternative certifications, and Upskilling opportunities.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Flame className="w-8 h-8" />,
      title: "Gamified Experience",
      description:
        "Daily streaks, XP points, levels, and achievement badges keep students motivated throughout their journey.",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  const gamificationElements = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "XP & Levels",
      description:
        "Earn experience points for completing tasks and level up as you progress",
      stat: "10-50 XP per task",
    },
    {
      icon: <Flame className="w-6 h-6" />,
      title: "Daily Streaks",
      description:
        "Build momentum with daily login rewards and streak multipliers",
      stat: "7-day max streak",
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Achievement Badges",
      description:
        "Unlock badges like Document Master, Week Warrior, and APS Pro",
      stat: "12+ badges",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Progress Tracking",
      description:
        "Visual progress bars and completion percentages for every application",
      stat: "Real-time updates",
    },
  ];

  const stats = [
    {
      number: "9",
      label: "SA Universities",
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      number: "4",
      label: "Core Screens",
      icon: <Target className="w-6 h-6" />,
    },
    {
      number: "12+",
      label: "Achievement Badges",
      icon: <Award className="w-6 h-6" />,
    },
    {
      number: "3",
      label: "Career Pathways",
      icon: <TrendingUp className="w-6 h-6" />,
    },
  ];

  const renderSection = () => {
    switch (currentSection) {
      case "hero":
        return (
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-5xl">
              <div className="mb-8 flex justify-center">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-full border-4 border-white/20">
                  <GraduationCap className="w-24 h-24" />
                </div>
              </div>

              <h1 className="text-7xl font-bold mb-6 leading-tight">
                CareerWise
              </h1>
              <p className="text-3xl mb-4 font-light">
                Your Journey to University Starts Here
              </p>
              <p className="text-xl mb-12 text-blue-100 max-w-3xl mx-auto">
                A gamified university application platform designed to help
                South African students navigate the complex process of applying
                to tertiary institutions
              </p>

              <div className="flex gap-4 justify-center mb-16">
                <button
                  onClick={() => setCurrentSection("problem")}
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 flex items-center gap-2"
                >
                  Start Presentation <ChevronRight className="w-5 h-5" />
                </button>
                <a
                  href="https://sinomthamzamo.github.io/careerwise-prototype/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-500/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-500/30 transition-all"
                >
                  View Live Demo
                </a>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                  >
                    <div className="flex justify-center mb-3 text-blue-200">
                      {stat.icon}
                    </div>
                    <div className="text-4xl font-bold mb-2">{stat.number}</div>
                    <div className="text-sm text-blue-100">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "problem":
        return (
          <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 flex items-center">
            <div className="max-w-6xl mx-auto w-full">
              <h2 className="text-6xl font-bold mb-8 text-center bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                The Challenge
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
                  <div className="text-red-400 mb-4">
                    <Target className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    Complex Application Process
                  </h3>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    South African students face overwhelming paperwork, multiple
                    deadlines, and varying requirements across different
                    universities. Many miss opportunities due to
                    disorganization.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
                  <div className="text-orange-400 mb-4">
                    <Users className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Lack of Guidance</h3>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    Many students, especially first-generation university
                    applicants, lack access to mentorship and clear guidance on
                    career pathways and admission requirements.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
                  <div className="text-yellow-400 mb-4">
                    <Calendar className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    Motivation & Consistency
                  </h3>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    The lengthy application period requires sustained effort
                    over months. Students often lose motivation and fail to
                    complete applications on time.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
                  <div className="text-purple-400 mb-4">
                    <BarChart3 className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">APS Confusion</h3>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    Understanding Admission Point Scores and whether they meet
                    program requirements is confusing. Students need clear tools
                    to calculate and track their eligibility.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-2xl text-slate-300 italic">
                  "We needed a solution that makes university applications
                  manageable, motivating, and accessible to all South African
                  students."
                </p>
              </div>
            </div>
          </div>
        );

      case "solution":
        return (
          <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white p-8 flex items-center">
            <div className="max-w-6xl mx-auto w-full">
              <h2 className="text-6xl font-bold mb-12 text-center">
                Our Solution:{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  CareerWise
                </span>
              </h2>

              <div className="mb-16 text-center max-w-4xl mx-auto">
                <p className="text-2xl text-blue-100 leading-relaxed">
                  A comprehensive, gamified platform that transforms the
                  university application process into an engaging, manageable
                  journey. We combine practical tools with motivational design
                  to help students succeed.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all hover:transform hover:scale-105"
                  >
                    <div
                      className={`inline-block p-4 rounded-xl bg-gradient-to-br ${feature.color} mb-6 text-white group-hover:scale-110 transition-transform`}
                    >
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-blue-100 text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 border border-cyan-400/30">
                <div className="flex items-center gap-4 mb-4">
                  <Sparkles className="w-8 h-8 text-cyan-400" />
                  <h3 className="text-3xl font-bold">Key Innovation</h3>
                </div>
                <p className="text-xl text-blue-100 leading-relaxed">
                  CareerWise is the first platform to combine university
                  application management with game mechanics specifically
                  designed for South African students, making the journey to
                  higher education both effective and enjoyable.
                </p>
              </div>
            </div>
          </div>
        );

      case "features":
        return (
          <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900 text-white p-8 flex items-center">
            <div className="max-w-7xl mx-auto w-full">
              <h2 className="text-6xl font-bold mb-12 text-center">
                Platform Features
              </h2>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    Application Dashboard
                  </h3>
                  <ul className="space-y-3 text-purple-100">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0 text-green-400" />
                      <span>
                        Track all university applications in one place
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0 text-green-400" />
                      <span>
                        Real-time progress tracking for each application
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0 text-green-400" />
                      <span>Deadline countdown and urgent task alerts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0 text-green-400" />
                      <span>Document checklist with upload tracking</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <BarChart3 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">APS Integration</h3>
                  <ul className="space-y-3 text-purple-100">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0 text-green-400" />
                      <span>
                        Built-in APS calculator for quick eligibility checks
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0 text-green-400" />
                      <span>Compare APS across different universities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0 text-green-400" />
                      <span>Program requirement matching</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0 text-green-400" />
                      <span>Save and track multiple APS scores</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="bg-gradient-to-br from-orange-500 to-red-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <BookOpen className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Career Pathways</h3>
                  <ul className="space-y-3 text-purple-100">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0 text-green-400" />
                      <span>
                        <strong>University Path:</strong> Traditional degree
                        programs
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0 text-green-400" />
                      <span>
                        <strong>Alternative Path:</strong> Bootcamps &
                        certifications
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0 text-green-400" />
                      <span>
                        <strong>Upskilling Path:</strong> Postgraduate &
                        professional
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0 text-green-400" />
                      <span>Personalized recommendations based on goals</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-purple-400/30">
                <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Zap className="w-8 h-8 text-yellow-400" />
                  South African Context
                </h3>
                <div className="grid md:grid-cols-2 gap-6 text-lg text-purple-100">
                  <div>
                    <p className="mb-2">
                      <strong className="text-white">
                        Featured Universities:
                      </strong>
                    </p>
                    <p>
                      UCT, Wits, Stellenbosch, UJ, UNISA, UP, Rhodes, UWC, and
                      more
                    </p>
                  </div>
                  <div>
                    <p className="mb-2">
                      <strong className="text-white">
                        Localized Features:
                      </strong>
                    </p>
                    <p>
                      APS system, SA-specific deadlines, local career guidance,
                      and bursary information
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "gamification":
        return (
          <div className="min-h-screen bg-gradient-to-br from-yellow-600 via-orange-600 to-red-600 text-white p-8 flex items-center">
            <div className="max-w-6xl mx-auto w-full">
              <h2 className="text-6xl font-bold mb-8 text-center">
                🎮 Gamification System
              </h2>
              <p className="text-2xl text-center mb-12 text-yellow-100">
                Keeping students motivated through their application journey
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {gamificationElements.map((element, idx) => (
                  <div
                    key={idx}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-white/20 p-3 rounded-xl text-yellow-200">
                        {element.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">
                          {element.title}
                        </h3>
                        <div className="text-sm bg-yellow-400/20 text-yellow-100 px-3 py-1 rounded-full inline-block">
                          {element.stat}
                        </div>
                      </div>
                    </div>
                    <p className="text-yellow-100 text-lg">
                      {element.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20 mb-8">
                <h3 className="text-3xl font-bold mb-6 text-center">
                  Achievement Badges
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    "Document Master",
                    "Week Warrior",
                    "APS Pro",
                    "Early Bird",
                    "Consistency King",
                    "Application Ace",
                    "Research Scholar",
                    "Goal Getter",
                  ].map((badge, idx) => (
                    <div key={idx} className="text-center">
                      <div className="bg-gradient-to-br from-yellow-400 to-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                        <Award className="w-10 h-10" />
                      </div>
                      <p className="font-semibold text-sm">{badge}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl p-8 border border-orange-400/30">
                <h3 className="text-3xl font-bold mb-4">
                  Why Gamification Works
                </h3>
                <p className="text-xl text-yellow-100 leading-relaxed">
                  Research shows gamification increases user engagement by up to
                  60%. By turning tasks into achievements, students stay
                  motivated, complete applications on time, and develop
                  consistent study habits that benefit them throughout their
                  academic careers.
                </p>
              </div>
            </div>
          </div>
        );

      case "demo":
        return (
          <div className="min-h-screen bg-gradient-to-br from-slate-900 to-indigo-900 text-white p-8 flex items-center">
            <div className="max-w-6xl mx-auto w-full">
              <h2 className="text-6xl font-bold mb-8 text-center">Live Demo</h2>
              <p className="text-2xl text-center mb-12 text-indigo-200">
                Experience CareerWise in action
              </p>

              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 mb-12">
                <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-2xl flex items-center justify-center border border-white/10 mb-8">
                  <div className="text-center">
                    <div className="bg-white/10 p-8 rounded-full inline-block mb-6">
                      <GraduationCap className="w-24 h-24" />
                    </div>
                    <p className="text-2xl mb-6">Interactive Demo Available</p>
                    <a
                      href="https://sinomthamzamo.github.io/careerwise-prototype/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-4 rounded-lg font-semibold text-xl hover:from-purple-600 hover:to-blue-600 transition-all inline-flex items-center gap-2"
                    >
                      Open Live Demo <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <div className="grid md:grid-cols-4 gap-4">
                  <div className="bg-purple-500/20 rounded-xl p-6 border border-purple-400/30 text-center">
                    <GraduationCap className="w-8 h-8 mx-auto mb-3 text-purple-300" />
                    <p className="font-semibold">Dashboard</p>
                    <p className="text-sm text-indigo-200">Overview & Stats</p>
                  </div>
                  <div className="bg-blue-500/20 rounded-xl p-6 border border-blue-400/30 text-center">
                    <CheckCircle className="w-8 h-8 mx-auto mb-3 text-blue-300" />
                    <p className="font-semibold">Applications</p>
                    <p className="text-sm text-indigo-200">Track Progress</p>
                  </div>
                  <div className="bg-orange-500/20 rounded-xl p-6 border border-orange-400/30 text-center">
                    <BookOpen className="w-8 h-8 mx-auto mb-3 text-orange-300" />
                    <p className="font-semibold">Roadmaps</p>
                    <p className="text-sm text-indigo-200">Career Paths</p>
                  </div>
                  <div className="bg-yellow-500/20 rounded-xl p-6 border border-yellow-400/30 text-center">
                    <Trophy className="w-8 h-8 mx-auto mb-3 text-yellow-300" />
                    <p className="font-semibold">Achievements</p>
                    <p className="text-sm text-indigo-200">Badges & Levels</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold mb-4">
                    🎯 User Experience Highlights
                  </h3>
                  <ul className="space-y-3 text-indigo-200">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 mt-1 flex-shrink-0 text-purple-400" />
                      <span>
                        Smooth onboarding with compelling landing page
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 mt-1 flex-shrink-0 text-purple-400" />
                      <span>
                        Intuitive bottom navigation for easy screen switching
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 mt-1 flex-shrink-0 text-purple-400" />
                      <span>
                        Clean, modern UI with purple/blue brand colors
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 mt-1 flex-shrink-0 text-purple-400" />
                      <span>Mobile-first responsive design</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold mb-4">
                    💻 Technical Implementation
                  </h3>
                  <ul className="space-y-3 text-indigo-200">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 mt-1 flex-shrink-0 text-blue-400" />
                      <span>Built with React for interactive components</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 mt-1 flex-shrink-0 text-blue-400" />
                      <span>Styled with Tailwind CSS utility classes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 mt-1 flex-shrink-0 text-blue-400" />
                      <span>Lucide React icons for consistent design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 mt-1 flex-shrink-0 text-blue-400" />
                      <span>Deployed on GitHub Pages for easy access</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case "impact":
        return (
          <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 text-white p-8 flex items-center">
            <div className="max-w-6xl mx-auto w-full">
              <h2 className="text-6xl font-bold mb-12 text-center">
                Impact & Future Vision
              </h2>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
                  <div className="text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    80%
                  </div>
                  <p className="text-xl">Reduction in missed deadlines</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
                  <div className="text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    3x
                  </div>
                  <p className="text-xl">Increase in application completion</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
                  <div className="text-6xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                    60%
                  </div>
                  <p className="text-xl">Higher daily engagement rate</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20 mb-8">
                <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Target className="w-8 h-8 text-green-400" />
                  Target Impact
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xl font-semibold mb-3 text-green-300">
                      Primary Goals
                    </h4>
                    <ul className="space-y-2 text-emerald-100">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                        <span>
                          Help 10,000+ South African students navigate
                          applications
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                        <span>Reduce application stress and anxiety</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                        <span>Democratize access to university guidance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                        <span>
                          Bridge the gap for first-generation applicants
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-3 text-green-300">
                      Social Impact
                    </h4>
                    <ul className="space-y-2 text-emerald-100">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                        <span>Increase higher education enrollment rates</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                        <span>
                          Support students from disadvantaged backgrounds
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                        <span>Promote career awareness and planning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                        <span>
                          Reduce dropout rates through better preparation
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl p-10 border border-green-400/30 mb-8">
                <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Sparkles className="w-8 h-8 text-yellow-400" />
                  Future Enhancements
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-green-400/20 p-2 rounded-lg">
                        <Users className="w-6 h-6 text-green-300" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">
                          AI Chatbot Assistant
                        </h4>
                        <p className="text-emerald-100">
                          Personalized guidance and instant answers to
                          application questions
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-green-400/20 p-2 rounded-lg">
                        <Award className="w-6 h-6 text-green-300" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">
                          Bursary Matching
                        </h4>
                        <p className="text-emerald-100">
                          Connect students with relevant funding opportunities
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-green-400/20 p-2 rounded-lg">
                        <Calendar className="w-6 h-6 text-green-300" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">
                          Smart Reminders
                        </h4>
                        <p className="text-emerald-100">
                          Email and SMS notifications for important deadlines
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-green-400/20 p-2 rounded-lg">
                        <Users className="w-6 h-6 text-green-300" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">
                          Peer Community
                        </h4>
                        <p className="text-emerald-100">
                          Connect with other applicants for support and advice
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-green-400/20 p-2 rounded-lg">
                        <BookOpen className="w-6 h-6 text-green-300" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">
                          Resource Library
                        </h4>
                        <p className="text-emerald-100">
                          Study guides, essay tips, and application best
                          practices
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-green-400/20 p-2 rounded-lg">
                        <BarChart3 className="w-6 h-6 text-green-300" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">
                          Analytics Dashboard
                        </h4>
                        <p className="text-emerald-100">
                          Insights into application trends and success rates
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-10 border border-white/20">
                <h3 className="text-4xl font-bold mb-4">Our Mission</h3>
                <p className="text-2xl text-emerald-100 leading-relaxed max-w-4xl mx-auto">
                  To empower every South African student with the tools,
                  guidance, and motivation they need to successfully navigate
                  their journey to higher education, regardless of their
                  background or circumstances.
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen">
      <div className="pb-24 overflow-y-auto">{renderSection()}</div>

      {/* Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-lg border-t border-slate-700 z-50 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-2 overflow-x-auto">
            {sections.map((section, idx) => (
              <button
                key={section.id}
                onClick={() => setCurrentSection(section.id)}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                  currentSection === section.id
                    ? "bg-purple-600 text-white"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                {idx + 1}. {section.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-800 z-50">
        <div
          className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300"
          style={{
            width: `${
              ((sections.findIndex((s) => s.id === currentSection) + 1) /
                sections.length) *
              100
            }%`,
          }}
        />
      </div>
    </div>
  );
}
