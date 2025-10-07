import React, { useState } from "react";
import {
  Trophy,
  FileText,
  Calendar,
  Calculator,
  Target,
  Flame,
  Award,
  CheckCircle,
  Circle,
  AlertCircle,
  Upload,
  BookOpen,
  TrendingUp,
  User,
  Home,
  GraduationCap,
  Briefcase,
} from "lucide-react";

export default function App() {
  const [activeScreen, setActiveScreen] = useState("landing");

  const [userProgress] = useState({
    level: 3,
    xp: 450,
    xpToNextLevel: 600,
    streak: 8,
    completionPercentage: 65,
    badges: 5,
  });

  const [applications] = useState([
    {
      id: 1,
      university: "University of Cape Town",
      program: "BSc Computer Science",
      deadline: "2025-09-30",
      progress: 75,
      docsUploaded: 6,
      docsTotal: 8,
      apsRequired: 35,
      apsCalculated: 38,
      status: "in-progress",
    },
    {
      id: 2,
      university: "University of Witwatersrand",
      program: "BCom Accounting",
      deadline: "2025-09-15",
      progress: 45,
      docsUploaded: 4,
      docsTotal: 9,
      apsRequired: 32,
      apsCalculated: 38,
      status: "in-progress",
    },
    {
      id: 3,
      university: "UNISA",
      program: "BA Psychology",
      deadline: "2025-10-31",
      progress: 20,
      docsUploaded: 2,
      docsTotal: 7,
      apsRequired: 28,
      apsCalculated: 38,
      status: "not-started",
    },
  ]);

  const [tasks] = useState([
    {
      id: 1,
      title: "Upload certified ID copy",
      university: "UCT",
      completed: false,
      xp: 50,
    },
    {
      id: 2,
      title: "Get Grade 11 results certified",
      university: "Wits",
      completed: false,
      xp: 75,
    },
    {
      id: 3,
      title: "Complete APS calculation",
      university: "UCT",
      completed: true,
      xp: 100,
    },
    {
      id: 4,
      title: "Draft motivation letter",
      university: "All",
      completed: false,
      xp: 150,
    },
  ]);

  const [badges] = useState([
    {
      id: 1,
      title: "First Steps",
      desc: "Created your profile",
      unlocked: true,
      icon: "🎯",
    },
    {
      id: 2,
      title: "Document Master",
      desc: "Uploaded 5 documents",
      unlocked: true,
      icon: "📄",
    },
    {
      id: 3,
      title: "Week Warrior",
      desc: "7 day streak",
      unlocked: true,
      icon: "🔥",
    },
    {
      id: 4,
      title: "APS Pro",
      desc: "Calculated APS for 3 programs",
      unlocked: true,
      icon: "🧮",
    },
    {
      id: 5,
      title: "Early Bird",
      desc: "Completed all tasks 30 days before deadline",
      unlocked: true,
      icon: "⏰",
    },
    {
      id: 6,
      title: "Triple Threat",
      desc: "Apply to 3+ universities",
      unlocked: false,
      icon: "🎓",
    },
  ]);

  const LandingScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 p-6 flex flex-col">
      {/* Hero Section */}
      <div className="flex-1 flex flex-col justify-center items-center text-center text-white space-y-6 pb-20">
        <div className="bg-white/10 backdrop-blur-md rounded-full p-6 mb-4">
          <GraduationCap className="w-16 h-16" />
        </div>

        <h1 className="text-4xl font-bold leading-tight">
          Your Journey to
          <br />
          University Starts Here
        </h1>

        <p className="text-lg text-blue-100 max-w-sm">
          Navigate university applications with confidence. Track documents,
          calculate APS scores, and never miss a deadline.
        </p>

        {/* Feature Pills */}
        <div className="space-y-3 w-full max-w-sm pt-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center space-x-3">
            <div className="bg-white/20 rounded-lg p-2">
              <FileText className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-sm">Document Checklists</p>
              <p className="text-xs text-blue-100">
                Never miss a required document
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center space-x-3">
            <div className="bg-white/20 rounded-lg p-2">
              <Calculator className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-sm">APS Calculator</p>
              <p className="text-xs text-blue-100">
                Check eligibility instantly
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center space-x-3">
            <div className="bg-white/20 rounded-lg p-2">
              <Target className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-sm">Career Roadmaps</p>
              <p className="text-xs text-blue-100">Explore all your options</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="space-y-3">
        <button
          onClick={() => setActiveScreen("home")}
          className="w-full bg-white text-purple-600 font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
        >
          Get Started
        </button>
        <p className="text-center text-sm text-blue-100">
          Join thousands of students preparing for university
        </p>
      </div>
    </div>
  );

  const HomeScreen = () => (
    <div className="p-6 space-y-6 pb-24">
      {/* Hero Progress Card */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white shadow-lg">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-2xl font-bold">
              Level {userProgress.level} Applicant
            </h2>
            <p className="text-blue-100 text-sm mt-1">
              You're {userProgress.completionPercentage}% application ready!
            </p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
            <GraduationCap className="w-6 h-6" />
          </div>
        </div>

        {/* XP Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>{userProgress.xp} XP</span>
            <span>Next: {userProgress.xpToNextLevel} XP</span>
          </div>
          <div className="bg-white/20 rounded-full h-3 overflow-hidden">
            <div
              className="bg-white h-full rounded-full transition-all duration-500"
              style={{
                width: `${
                  (userProgress.xp / userProgress.xpToNextLevel) * 100
                }%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex flex-col items-center text-center">
            <Flame className="w-6 h-6 text-orange-500 mb-2" />
            <span className="text-2xl font-bold text-gray-800">
              {userProgress.streak}
            </span>
            <p className="text-xs text-gray-500 mt-1">Day Streak</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex flex-col items-center text-center">
            <Target className="w-6 h-6 text-green-500 mb-2" />
            <span className="text-2xl font-bold text-gray-800">
              {applications.length}
            </span>
            <p className="text-xs text-gray-500 mt-1">Applications</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex flex-col items-center text-center">
            <Award className="w-6 h-6 text-yellow-500 mb-2" />
            <span className="text-2xl font-bold text-gray-800">
              {userProgress.badges}
            </span>
            <p className="text-xs text-gray-500 mt-1">Badges</p>
          </div>
        </div>
      </div>

      {/* Urgent Tasks */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-bold text-gray-800">Urgent Tasks</h3>
          <span className="text-sm text-purple-600 font-medium">View All</span>
        </div>
        <div className="space-y-2">
          {tasks
            .filter((t) => !t.completed)
            .slice(0, 3)
            .map((task) => (
              <div
                key={task.id}
                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3 flex-1">
                    <Circle className="w-5 h-5 text-gray-300 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="font-medium text-gray-800">{task.title}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {task.university}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 ml-2">
                    <Trophy className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-semibold text-gray-700">
                      {task.xp}
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Active Applications */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-bold text-gray-800">Your Applications</h3>
          <button className="text-sm text-purple-600 font-medium">
            + Add New
          </button>
        </div>
        <div className="space-y-3">
          {applications.map((app) => (
            <div
              key={app.id}
              className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {app.university}
                  </h4>
                  <p className="text-sm text-gray-600">{app.program}</p>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-semibold text-gray-700">
                    {app.apsCalculated}
                  </span>
                  <span className="text-xs text-gray-500">
                    / {app.apsRequired}
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-3">
                <div className="flex justify-between text-xs text-gray-600 mb-1">
                  <span>{app.progress}% Complete</span>
                  <span>
                    {app.docsUploaded}/{app.docsTotal} docs
                  </span>
                </div>
                <div className="bg-gray-100 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-blue-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${app.progress}%` }}
                  />
                </div>
              </div>

              {/* Deadline */}
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center space-x-1 text-orange-600">
                  <Calendar className="w-3 h-3" />
                  <span>
                    Deadline:{" "}
                    {new Date(app.deadline).toLocaleDateString("en-ZA", {
                      day: "numeric",
                      month: "short",
                    })}
                  </span>
                </div>
                <button className="text-purple-600 font-medium">
                  Continue →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ApplicationsScreen = () => (
    <div className="p-6 space-y-6 pb-24">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          My Applications
        </h2>
        <p className="text-gray-600 text-sm">
          Track your progress across all universities
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        <button className="px-4 py-2 rounded-full bg-purple-600 text-white text-sm font-medium whitespace-nowrap">
          All (3)
        </button>
        <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium whitespace-nowrap">
          In Progress (2)
        </button>
        <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium whitespace-nowrap">
          Not Started (1)
        </button>
      </div>

      {/* Detailed Application Cards */}
      <div className="space-y-4">
        {applications.map((app) => (
          <div
            key={app.id}
            className="bg-white rounded-2xl p-5 shadow-md border border-gray-100"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-bold text-gray-800 text-lg">
                  {app.university}
                </h3>
                <p className="text-gray-600">{app.program}</p>
              </div>
              <div
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  app.apsCalculated >= app.apsRequired
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {app.apsCalculated >= app.apsRequired
                  ? "Eligible"
                  : "Check APS"}
              </div>
            </div>

            {/* APS Score */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 mb-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Your APS Score</p>
                  <p className="text-3xl font-bold text-gray-800">
                    {app.apsCalculated}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600 mb-1">Required</p>
                  <p className="text-3xl font-bold text-gray-400">
                    {app.apsRequired}
                  </p>
                </div>
                <Calculator className="w-8 h-8 text-purple-500" />
              </div>
            </div>

            {/* Documents Progress */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">
                  Documents
                </span>
                <span className="text-sm text-gray-600">
                  {app.docsUploaded} / {app.docsTotal}
                </span>
              </div>
              <div className="bg-gray-100 rounded-full h-2.5 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-green-500 to-emerald-500 h-full rounded-full"
                  style={{
                    width: `${(app.docsUploaded / app.docsTotal) * 100}%`,
                  }}
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button className="px-4 py-2.5 bg-purple-600 text-white rounded-xl font-medium text-sm flex items-center justify-center space-x-2">
                <Upload className="w-4 h-4" />
                <span>Upload Docs</span>
              </button>
              <button className="px-4 py-2.5 bg-gray-100 text-gray-700 rounded-xl font-medium text-sm flex items-center justify-center space-x-2">
                <FileText className="w-4 h-4" />
                <span>Checklist</span>
              </button>
            </div>

            {/* Deadline Warning */}
            <div className="mt-4 flex items-center space-x-2 text-orange-600 bg-orange-50 rounded-lg p-3">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span className="text-sm">
                Deadline in{" "}
                {Math.ceil(
                  (new Date(app.deadline) - new Date()) / (1000 * 60 * 60 * 24)
                )}{" "}
                days
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const RoadmapScreen = () => (
    <div className="p-6 space-y-6 pb-24">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Career Roadmaps
        </h2>
        <p className="text-gray-600 text-sm">Explore your path to success</p>
      </div>

      {/* Roadmap Categories */}
      <div className="space-y-4">
        {/* University Path */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold mb-1">University Path</h3>
              <p className="text-blue-100 text-sm">
                Traditional degree programs
              </p>
            </div>
            <GraduationCap className="w-8 h-8 opacity-80" />
          </div>
          <div className="space-y-2">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 flex items-center justify-between">
              <span className="text-sm">Grade 11-12 Prep</span>
              <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                Active
              </span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 flex items-center justify-between">
              <span className="text-sm">Undergraduate Programs</span>
              <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                Planning
              </span>
            </div>
          </div>
        </div>

        {/* Alternative Paths */}
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold mb-1">Alternative Paths</h3>
              <p className="text-purple-100 text-sm">
                Certifications & vocational training
              </p>
            </div>
            <Briefcase className="w-8 h-8 opacity-80" />
          </div>
          <div className="space-y-2">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium">
                  Cloud Engineering (AWS)
                </span>
                <TrendingUp className="w-4 h-4" />
              </div>
              <p className="text-xs text-purple-100">
                6-12 months • High demand
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium">
                  Data Science Bootcamp
                </span>
                <TrendingUp className="w-4 h-4" />
              </div>
              <p className="text-xs text-purple-100">
                3-6 months • Growing field
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium">
                  Trade Certifications
                </span>
                <Target className="w-4 h-4" />
              </div>
              <p className="text-xs text-purple-100">
                1-2 years • Stable careers
              </p>
            </div>
          </div>
        </div>

        {/* Upskilling Path */}
        <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                Upskilling & Advancement
              </h3>
              <p className="text-gray-600 text-sm">
                Build on your existing qualifications
              </p>
            </div>
            <BookOpen className="w-8 h-8 text-green-500" />
          </div>
          <div className="space-y-2">
            <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
              <span className="text-sm text-gray-700">
                Postgraduate Studies
              </span>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
              <span className="text-sm text-gray-700">
                Professional Certifications
              </span>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
              <span className="text-sm text-gray-700">Bridging Courses</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ProfileScreen = () => (
    <div className="p-6 space-y-6 pb-24">
      {/* Profile Header */}
      <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-6 text-white text-center">
        <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
          <User className="w-10 h-10" />
        </div>
        <h2 className="text-2xl font-bold mb-1">
          Level {userProgress.level} Applicant
        </h2>
        <p className="text-purple-100 text-sm">
          {userProgress.xp} / {userProgress.xpToNextLevel} XP
        </p>
        <div className="bg-white/20 rounded-full h-2 overflow-hidden mt-3">
          <div
            className="bg-white h-full rounded-full"
            style={{
              width: `${(userProgress.xp / userProgress.xpToNextLevel) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Achievements Section */}
      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-4">Achievements</h3>
        <div className="grid grid-cols-3 gap-3">
          {badges.map((badge) => (
            <div
              key={badge.id}
              className={`rounded-xl p-4 text-center ${
                badge.unlocked
                  ? "bg-gradient-to-br from-yellow-400 to-orange-400 text-white shadow-lg"
                  : "bg-gray-100 text-gray-400"
              }`}
            >
              <div className="text-3xl mb-2">{badge.icon}</div>
              <p className="text-xs font-semibold mb-1">{badge.title}</p>
              <p className="text-xs opacity-80">{badge.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Overview */}
      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-4">Your Stats</h3>
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Applications Started</span>
            <span className="text-xl font-bold text-gray-800">
              {applications.length}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Documents Uploaded</span>
            <span className="text-xl font-bold text-gray-800">12</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Tasks Completed</span>
            <span className="text-xl font-bold text-gray-800">
              {tasks.filter((t) => t.completed).length}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Current Streak</span>
            <span className="text-xl font-bold text-orange-500">
              {userProgress.streak} days
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen">
      {/* Conditional Top Bar - Only show on main screens */}
      {activeScreen !== "landing" && (
        <div className="bg-white border-b border-gray-200 p-4 sticky top-0 z-10">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setActiveScreen("landing")}
                className="text-gray-600 hover:text-gray-800"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
              </button>
              <h1 className="text-xl font-bold text-gray-800">UniPrep</h1>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1 bg-orange-100 px-3 py-1 rounded-full">
                <Flame className="w-4 h-4 text-orange-500" />
                <span className="text-sm font-bold text-orange-700">
                  {userProgress.streak}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Screen Content */}
      <div className="min-h-screen">
        {activeScreen === "landing" && <LandingScreen />}
        {activeScreen === "home" && <HomeScreen />}
        {activeScreen === "applications" && <ApplicationsScreen />}
        {activeScreen === "roadmap" && <RoadmapScreen />}
        {activeScreen === "profile" && <ProfileScreen />}
      </div>

      {/* Bottom Navigation - Only show on main screens */}
      {activeScreen !== "landing" && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 max-w-md mx-auto">
          <div className="grid grid-cols-4 gap-1 p-2">
            <button
              onClick={() => setActiveScreen("home")}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
                activeScreen === "home"
                  ? "bg-purple-100 text-purple-600"
                  : "text-gray-400"
              }`}
            >
              <Home className="w-5 h-5 mb-1" />
              <span className="text-xs font-medium">Home</span>
            </button>
            <button
              onClick={() => setActiveScreen("applications")}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
                activeScreen === "applications"
                  ? "bg-purple-100 text-purple-600"
                  : "text-gray-400"
              }`}
            >
              <FileText className="w-5 h-5 mb-1" />
              <span className="text-xs font-medium">Apps</span>
            </button>
            <button
              onClick={() => setActiveScreen("roadmap")}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
                activeScreen === "roadmap"
                  ? "bg-purple-100 text-purple-600"
                  : "text-gray-400"
              }`}
            >
              <Target className="w-5 h-5 mb-1" />
              <span className="text-xs font-medium">Roadmap</span>
            </button>
            <button
              onClick={() => setActiveScreen("profile")}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
                activeScreen === "profile"
                  ? "bg-purple-100 text-purple-600"
                  : "text-gray-400"
              }`}
            >
              <User className="w-5 h-5 mb-1" />
              <span className="text-xs font-medium">Profile</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
