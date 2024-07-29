import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import modulesPages from "./Settings/modulesPages";
import publicPages from "./Settings/publicPages";
import settings from '../settings';

import LayoutDefault from "./Layouts/LayoutDefault"

import Page404 from './Views/PublicPages/Page404';
import MainDashboard from "./Views/PrivatePages/Dashboards/MainDashboard"
import LayoutApp from "./Layouts/LayoutApp"

import ProjectSchema from "./Views/Schema/ProjectSchema";

import { UserProvider } from "./Context/userContext";
import { DataProvider } from './Context/dataContext';
import { SystemProvider } from './Context/systemContext';



function App() {

  return (
    <>
  <SystemProvider>
    <UserProvider>
      <DataProvider>
         <Router>
            <Routes>
              <Route exact path="/" element={<LayoutDefault />}>
               {publicPages}
               <Route path="*" element={<Page404 cssObject={settings.generalSettings.publicPages.page404.cssObject} generalSettings={settings.generalSettings.publicPages.page404.general}/>} />
            </Route>

              <Route exact path="/app" element={<LayoutApp />}>
              <Route exact path="main-dashboard" element={<MainDashboard />} />   
              {modulesPages()}
              <Route path="*" element={<Page404 cssObject={settings.generalSettings.publicPages.page404.cssObject} generalSettings={settings.generalSettings.publicPages.page404.general}/>} />
              </Route>
              </Routes>
        </Router>
        </DataProvider>
      </UserProvider>
      </SystemProvider>
    </>
  )
}

export default App

{/**
    <Route  path="/schema" element={<LayoutApp />}>
              <Route  path="project" element={<ProjectSchema />} />
              </Route>
  */}

{/*import LayoutModule from "./Layouts/LayoutModule"
import ListElements from "./Views/PrivatePages/Projects/ListElements"
import ElementDetail from "./Views/PrivatePages/Projects/ElementDetail"
import CreateElement from "./Views/PrivatePages/CreateElement"
import EditElement from "./Views/PrivatePages/EditElement"
import DeleteElement from "./Views/PrivatePages/DeleteElement"
*/}


{/**
 * 
              <Route  path="/app/projects" element={<LayoutApp />}>
              <Route  path="project/create" element={<CreateElement />} />
              <Route  path="project/:id" element={<ProjectDetail />} />
              <Route  path="project/:id/edit" element={<EditElement />} />
              <Route  path="project/:id/delete" element={<DeleteElement />} />
              </Route>
 * 
 */}