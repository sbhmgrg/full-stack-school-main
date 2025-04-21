// app/page.tsx
import Link from 'next/link';
import { FaChalkboardTeacher, FaUserGraduate, FaBook, FaCalendarAlt, FaChartLine } from 'react-icons/fa';

export default function HomePage() {
  // Sample data - replace with your actual data fetching logic
  const stats = [
    { value: '1,250', label: 'Total Students', icon: <FaUserGraduate className="text-blue-500" /> },
    { value: '85', label: 'Faculty Members', icon: <FaChalkboardTeacher className="text-green-500" /> },
    { value: '32', label: 'Courses Offered', icon: <FaBook className="text-purple-500" /> },
    { value: '94%', label: 'Attendance Rate', icon: <FaCalendarAlt className="text-orange-500" /> },
  ];

  const announcements = [
    { id: 1, title: 'Semester Registration Open', date: 'May 15, 2023', category: 'Academic' },
    { id: 2, title: 'Campus Maintenance Scheduled', date: 'May 20, 2023', category: 'Facilities' },
    { id: 3, title: 'Scholarship Applications Due', date: 'June 1, 2023', category: 'Financial' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to Our College Management System</h1>
          <p className="text-xl md:text-2xl mb-8">Streamlining academic operations for students, faculty, and administrators</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/sign-in" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition duration-300">
              Sign In
            </Link>
            <Link href="/register-request" className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition duration-300">
              Register
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 flex items-center">
              <div className="mr-4 text-3xl">
                {stat.icon}
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Announcements */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FaChartLine className="mr-2 text-blue-500" />
                Latest Announcements
              </h2>
              <div className="space-y-4">
                {announcements.map((announcement) => (
                  <div key={announcement.id} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-medium text-gray-900 hover:text-blue-600 transition duration-300">
                        <Link href={`/announcements/${announcement.id}`}>
                          {announcement.title}
                        </Link>
                      </h3>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {announcement.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{announcement.date}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link href="/announcements" className="text-blue-600 hover:text-blue-800 font-medium">
                  View all announcements →
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Access</h2>
              <div className="space-y-4">
                <Link href="/courses" className="block p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-200 transition duration-300">
                  <h3 className="font-medium text-gray-900">Course Catalog</h3>
                  <p className="text-sm text-gray-500 mt-1">Browse available courses</p>
                </Link>
                <Link href="/calendar" className="block p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-200 transition duration-300">
                  <h3 className="font-medium text-gray-900">Academic Calendar</h3>
                  <p className="text-sm text-gray-500 mt-1">View important dates</p>
                </Link>
                <Link href="/faculty" className="block p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-200 transition duration-300">
                  <h3 className="font-medium text-gray-900">Faculty Directory</h3>
                  <p className="text-sm text-gray-500 mt-1">Find instructors</p>
                </Link>
                <Link href="/resources" className="block p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-200 transition duration-300">
                  <h3 className="font-medium text-gray-900">Student Resources</h3>
                  <p className="text-sm text-gray-500 mt-1">Access learning materials</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mx-auto h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaUserGraduate className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Student Management</h3>
              <p className="text-gray-600">
                Comprehensive student profiles, attendance tracking, and performance analytics.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mx-auto h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <FaChalkboardTeacher className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Faculty Portal</h3>
              <p className="text-gray-600">
                Grade submission, class scheduling, and communication tools for instructors.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mx-auto h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <FaBook className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Course Administration</h3>
              <p className="text-gray-600">
                Manage curriculum, assignments, and resources in one centralized platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}