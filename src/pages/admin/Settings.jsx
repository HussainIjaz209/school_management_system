import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCog,
    faSchool,
    faPalette,
    faSave,
    faGlobe,
    faCalendarAlt,
    faEnvelope
} from '@fortawesome/free-solid-svg-icons'
import { useTheme } from '../../contexts/ThemeContext'

const AdminSettings = () => {
    const { theme, toggleTheme } = useTheme()
    const [activeTab, setActiveTab] = useState('general')
    const [loading, setLoading] = useState(false)

    // Mock Settings Data
    const [settings, setSettings] = useState({
        schoolName: 'Excellence International School',
        address: '123 Education Ave, Knowledge City',
        phone: '+1 234 567 8900',
        email: 'admin@excellence.edu',
        website: 'www.excellence.edu',
        currentSession: '2024-2025',
        language: 'English',
        timezone: 'UTC-5'
    })

    const handleSave = (e) => {
        e.preventDefault()
        setLoading(true)
        // Simulate API call
        setTimeout(() => {
            setLoading(false)
            alert('Settings saved successfully!')
        }, 1500)
    }

    const renderGeneralSettings = () => (
        <div className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">School Name</label>
                    <div className="relative">
                        <FontAwesomeIcon icon={faSchool} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                        <input
                            type="text"
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            value={settings.schoolName}
                            onChange={(e) => setSettings({ ...settings, schoolName: e.target.value })}
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Official Email</label>
                    <div className="relative">
                        <FontAwesomeIcon icon={faEnvelope} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                        <input
                            type="email"
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            value={settings.email}
                            onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                        />
                    </div>
                </div>
                <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Address</label>
                    <textarea
                        rows="3"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                        value={settings.address}
                        onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                    ></textarea>
                </div>
                <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Phone Number</label>
                    <input
                        type="tel"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        value={settings.phone}
                        onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Website</label>
                    <div className="relative">
                        <FontAwesomeIcon icon={faGlobe} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                        <input
                            type="text"
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            value={settings.website}
                            onChange={(e) => setSettings({ ...settings, website: e.target.value })}
                        />
                    </div>
                </div>
            </div>
        </div>
    )

    const renderSystemSettings = () => (
        <div className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Current Academic Session</label>
                    <div className="relative">
                        <FontAwesomeIcon icon={faCalendarAlt} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                        <select
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all appearance-none"
                            value={settings.currentSession}
                            onChange={(e) => setSettings({ ...settings, currentSession: e.target.value })}
                        >
                            <option value="2023-2024">2023-2024</option>
                            <option value="2024-2025">2024-2025</option>
                            <option value="2025-2026">2025-2026</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">System Language</label>
                    <select
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        value={settings.language}
                        onChange={(e) => setSettings({ ...settings, language: e.target.value })}
                    >
                        <option value="English">English</option>
                        <option value="Spanish">Spanish</option>
                        <option value="French">French</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Timezone</label>
                    <select
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        value={settings.timezone}
                        onChange={(e) => setSettings({ ...settings, timezone: e.target.value })}
                    >
                        <option value="UTC-5">Eastern Time (UTC-5)</option>
                        <option value="UTC-8">Pacific Time (UTC-8)</option>
                        <option value="UTC+0">UTC</option>
                        <option value="UTC+1">Central European Time (UTC+1)</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Theme Preference</label>
                    <div className="flex gap-4">
                        <label className={`flex-1 cursor-pointer p-4 rounded-xl border-2 transition-all ${theme === 'light' ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30' : 'border-gray-200 dark:border-gray-600 hover:border-blue-200 dark:hover:border-blue-400'}`}>
                            <input
                                type="radio"
                                name="theme"
                                value="light"
                                className="hidden"
                                checked={theme === 'light'}
                                onChange={() => toggleTheme('light')}
                            />
                            <div className="flex items-center justify-center gap-2">
                                <div className="w-4 h-4 rounded-full bg-white border border-gray-300"></div>
                                <span className="font-medium text-gray-700 dark:text-gray-300">Light</span>
                            </div>
                        </label>
                        <label className={`flex-1 cursor-pointer p-4 rounded-xl border-2 transition-all ${theme === 'dark' ? 'border-blue-500 bg-gray-800 dark:bg-gray-700' : 'border-gray-200 dark:border-gray-600 hover:border-blue-200 dark:hover:border-blue-400'}`}>
                            <input
                                type="radio"
                                name="theme"
                                value="dark"
                                className="hidden"
                                checked={theme === 'dark'}
                                onChange={() => toggleTheme('dark')}
                            />
                            <div className="flex items-center justify-center gap-2">
                                <div className="w-4 h-4 rounded-full bg-gray-900 border border-gray-600"></div>
                                <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>Dark</span>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )



    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-6">
            {/* Header */}
            <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                        System Settings
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        Configure school and application preferences
                    </p>
                </div>
                <button
                    onClick={handleSave}
                    disabled={loading}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {loading ? (
                        <span className="animate-spin mr-2">
                            <FontAwesomeIcon icon={faCog} />
                        </span>
                    ) : (
                        <FontAwesomeIcon icon={faSave} className="mr-2" />
                    )}
                    {loading ? 'Saving...' : 'Save Changes'}
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Sidebar Navigation */}
                <div className="lg:col-span-1">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 border border-gray-100 dark:border-gray-700 sticky top-6">
                        <nav className="space-y-2">
                            <button
                                onClick={() => setActiveTab('general')}
                                className={`w-full flex items-center px-4 py-3 rounded-xl font-medium transition-all ${activeTab === 'general'
                                    ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                                    }`}
                            >
                                <FontAwesomeIcon icon={faSchool} className="w-5 mr-3" />
                                General
                            </button>
                            <button
                                onClick={() => setActiveTab('system')}
                                className={`w-full flex items-center px-4 py-3 rounded-xl font-medium transition-all ${activeTab === 'system'
                                    ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                                    }`}
                            >
                                <FontAwesomeIcon icon={faCog} className="w-5 mr-3" />
                                System
                            </button>

                        </nav>
                    </div>
                </div>

                {/* Main Content */}
                <div className="lg:col-span-3">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700 min-h-[600px]">
                        {activeTab === 'general' && renderGeneralSettings()}
                        {activeTab === 'system' && renderSystemSettings()}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminSettings
