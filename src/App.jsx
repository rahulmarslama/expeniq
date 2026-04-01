import './App.css'
import Home from './pages/Home.jsx'
import Category from './pages/Category'
import { AuthProvider } from 'oidc-react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/ui/app-sidebar";

const oidcConfig = {
  onSignIn: async (user) => {
    alert('You just signed in, congratz! Check out the console!');
    console.log(user);
  window.history.replaceState({}, document.title, window.location.pathname);
  },
  authority: 'https://localhost:2900',
  clientId:
    'expendiq_client',
  responseType: 'code',
  redirectUri:'http://localhost:2500/',
  scope:'openid profile expendiqApiScope'
};

function App() {

  return (
    <AuthProvider {...oidcConfig}>
      <Router>
        <SidebarProvider>
          <AppSidebar />
          <main className="w-full">
            <SidebarTrigger />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
        </Routes>
         </main>
        </SidebarProvider>
      </Router>
    </AuthProvider>
  )
}

export default App