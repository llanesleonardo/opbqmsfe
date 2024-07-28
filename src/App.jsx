import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from "./Context/userContext";
import HomePage from "./Views/PublicPages/HomePage"
import Features from "./Views/PublicPages/Features"
import LayoutDefault from "./Layouts/LayoutDefault"
import About from './Views/PublicPages/About';
import Contact from './Views/PublicPages/Contact';
import PrivacyPolicy from "./Views/PublicPages/PrivacyPolicy"
import Login from "./Views/PublicPages/Login"
import PasswordReset from './Views/PublicPages/PasswordReset';
import CreateAccount from './Views/PublicPages/CreateAccount';
import FAQ from './Views/PublicPages/FAQ';
import Page404 from './Views/PublicPages/Page404';
import MainDashboard from "./Views/PrivatePages/Dashboards/MainDashboard"
import ProjectLists from "./Views/PrivatePages/Projects/ProjectLists"


import LayoutApp from "./Layouts/LayoutApp"
import CreateElement from "./Views/PrivatePages/CreateElement"
import EditElement from "./Views/PrivatePages/EditElement"
import DeleteElement from "./Views/PrivatePages/DeleteElement"



import ProjectDetail from "./Views/PrivatePages/Projects/ProjectDetail"


import ProjectSchema from "./Views/Schema/ProjectSchema"
import { ProjectProvider } from './Context/projectContext';
import { SystemProvider } from './Context/systemContext';

function App() {


  return (
    <>
  <SystemProvider>
    <UserProvider>
      <ProjectProvider>
         <Router>
            <Routes>
              <Route exact path="/" element={<LayoutDefault />}>
                <Route index element={<HomePage />} />
                <Route exact path="about" element={<About />} />
                <Route exact path="features" element={<Features />} />
                <Route exact path="contact" element={<Contact />} />
                <Route exact path="privacy" element={<PrivacyPolicy />} />
                <Route exact path="login" element={<Login />} />
                <Route exact path="passwordreset" element={<PasswordReset />} />
                <Route exact path="createaccount" element={<CreateAccount />} />
                <Route exact path="faq" element={<FAQ />} />
              </Route>

              
              <Route  path="/app" element={<LayoutApp />}>
              <Route  path="main-dashboard" element={<MainDashboard />} />
              <Route  path="projects" element={<ProjectLists />} />
              </Route>

              <Route  path="/app/projects" element={<LayoutApp />}>
              <Route  path="project/create" element={<CreateElement />} />
              <Route  path="project/:id" element={<ProjectDetail />} />
              <Route  path="project/:id/edit" element={<EditElement />} />
              <Route  path="project/:id/delete" element={<DeleteElement />} />
              </Route>

              <Route  path="/schema" element={<LayoutApp />}>
              <Route  path="project" element={<ProjectSchema />} />
              </Route>

              <Route path="*" element={<Page404 />} />
              </Routes>
        </Router>
        </ProjectProvider>
      </UserProvider>
      </SystemProvider>
    </>
  )
}

export default App
