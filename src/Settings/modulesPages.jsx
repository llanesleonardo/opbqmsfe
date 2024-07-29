import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import settings from "../../settings";
import  LayoutModule from "../Layouts/LayoutModule";

import ListElements from "../Views/PrivatePages/ListElements";
import CreateElement from "../Views/PrivatePages/CreateElement";
import ElementDetail from "../Views/PrivatePages/ElementDetail";
import EditElement from "../Views/PrivatePages/EditElement";
import DeleteElement from "../Views/PrivatePages/DeleteElement";
import elementsAPI from '../Helpers/ApiHelpers/elementsAPI';

const  {getSystemSettingData } = elementsAPI(); 
//let moduleData = settings.modulesSettings;

const moduleData = async () =>{
    const  data = await getSystemSettingData();
    return data;
} 

let data =await moduleData();

let modulesPages = ()=>  data ? (
data?.modulesSettings?.navMenus?.map((item)=> (
            <Route key={item.modulesTitles[1]} exact path={item.modulesTitles[1]} element={<LayoutModule />} >
                 <Route exact index element={<ListElements modulesTitles={item.modulesTitles} moduleSettings={data?.modulesSettings} /> } />
                 <Route exact path={`${item.modulesTitles[0]}/create`}  element={<CreateElement modulesTitles={item.modulesTitles} moduleSettings={data?.modulesSettings} />} />
                 <Route exact path={`${item.modulesTitles[0]}/:id`}  element={<ElementDetail modulesTitles={item.modulesTitles} moduleSettings={data?.modulesSettings}/>} />
                 <Route exact path={`${item.modulesTitles[0]}/:id/edit`} element={<EditElement modulesTitles={item.modulesTitles} moduleSettings={data?.modulesSettings} />} />
                 <Route exact path={`${item.modulesTitles[0]}/:id/delete`} element={<DeleteElement modulesTitles={item.modulesTitles} moduleSettings={data?.modulesSettings} />} />
             </Route>  
         ))):(null);

export default modulesPages;



{/*
modulePages.home.component = <HomePage generalSettings={publicPages.home.general}  cssObject={publicPages.home.cssObject}/>;
modulePages.about.component = <About generalSettings={publicPages.about.general} cssObject={publicPages.about.cssObject}/>;
modulePages.features.component = <Features generalSettings={publicPages.features.general} cssObject={publicPages.features.cssObject}/>;
modulePages.contact.component = <Contact generalSettings={publicPages.contact.general} cssObject={publicPages.contact.cssObject}/>;
modulePages.privacy.component = <PrivacyPolicy generalSettings={publicPages.privacy.general} cssObject={publicPages.privacy.cssObject}/>;
modulePages.login.component = <Login generalSettings={publicPages.login.general} cssObject={publicPages.login.cssObject}/>;
modulePages.createaccount.component = <CreateAccount generalSettings={publicPages.createaccount.general} cssObject={publicPages.createaccount.cssObject}/>;
modulePages.passwordreset.component = <PasswordReset generalSettings={publicPages.passwordreset.general} cssObject={publicPages.passwordreset.cssObject}/>;
modulePages.faq.component = <FAQ generalSettings={publicPages.faq.general} cssObject={publicPages.faq.cssObject}/>;
*/}

{/*
<Route exact path="projects" element={<LayoutModule />} >
<Route exact index element={<ListElements /> }/>
<Route exact path="project/create" element={<CreateElement />} />
<Route exact path="project/:id" element={<ElementDetail />} />
<Route exact path="project/:id/edit" element={<EditElement />} />
<Route exact path="project/:id/delete" element={<DeleteElement />} />
</Route>
*/}
