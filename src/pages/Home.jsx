import { useNavigate } from 'react-router-dom';
import { CreditCard, TrendingUp, PiggyBank, FolderOpen } from 'lucide-react';

function Home() {
  const navigate = useNavigate();

  const quickLinks = [
    {
      title: "Transactions",
      description: "View and manage all your transactions",
      icon: CreditCard,
      url: "/transactions",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Categories",
      description: "Organize spending by categories",
      icon: FolderOpen,
      url: "/category",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Budget",
      description: "Set and track your budgets",
      icon: PiggyBank,
      url: "/budget",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Analytics",
      description: "View spending insights and trends",
      icon: TrendingUp,
      url: "/analytics",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const stats = [
    { label: "Total Balance", value: "$5,234.50", icon: "💰" },
    { label: "This Month", value: "$1,245.00", icon: "📊" },
    { label: "Categories", value: "12", icon: "📁" },
    { label: "Transactions", value: "48", icon: "💳" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <div className="bg-gradient-to-r text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Expendiq</h1>
          <p className="text-xl opacity-90">Take control of your finances and build better spending habits</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-lg transition-shadow p-6"
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <p className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-2">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Quick Action Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Quick Actions</h2>
              <p className="text-gray-600 dark:text-gray-400">Access your most used features</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <button
                  key={index}
                  onClick={() => navigate(link.url)}
                  className="group relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 shadow-md hover:shadow-xl transition-all duration-300 p-6 text-left"
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  {/* Icon Container */}
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${link.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r from-blue-600 to-blue-700 group-hover:bg-clip-text transition-all">
                    {link.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                    {link.description}
                  </p>

                  {/* Arrow Icon */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300">
                    <span className="text-xl">→</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Info Section */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Get Started</h3>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
              Track all your spending in one place
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
              Create budgets and stay within your limits
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
              Organize expenses by categories
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
              Get insights and analytics on your spending patterns
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;