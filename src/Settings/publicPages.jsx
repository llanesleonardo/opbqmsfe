import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import settings from "../../settings";
import About from '../Views/PublicPages/About';
import HomePage from "../Views/PublicPages/HomePage";
import Features from "../Views/PublicPages/Features";
import Contact from '../Views/PublicPages/Contact';
import PrivacyPolicy from "../Views/PublicPages/PrivacyPolicy";
import Login from "../Views/PublicPages/Login";
import PasswordReset from '../Views/PublicPages/PasswordReset';
import CreateAccount from '../Views/PublicPages/CreateAccount';
import FAQ from '../Views/PublicPages/FAQ';


let publicData = settings.generalSettings.publicPages;
const componentsObject= (page) => {
    switch (page) {
        case 'home':
         return <HomePage generalSettings={publicData[page].general}  cssObject={publicData[page].cssObject}/>;
        case 'about':
         return <About generalSettings={publicData[page].general} cssObject={publicData[page].cssObject}/>;
        case 'features':
            return <Features generalSettings={publicData[page].general} cssObject={publicData[page].cssObject}/>;
        case 'contact':
            return <Contact generalSettings={publicData[page].general} cssObject={publicData[page].cssObject}/>;

        case 'privacy':
            return <PrivacyPolicy generalSettings={publicData[page].general} cssObject={publicData[page].cssObject}/>;

        case 'login':
            return <Login generalSettings={publicData[page].general} cssObject={publicData[page].cssObject}/>;

        case 'createaccount':
            return <CreateAccount generalSettings={publicData[page].general} cssObject={publicData[page].cssObject}/>;

        case 'passwordreset':
            return <PasswordReset generalSettings={publicData[page].general} cssObject={publicData[page].cssObject}/>;

        case 'faq':
            return <FAQ generalSettings={publicData[page].general} cssObject={publicData[page].cssObject}/>;

        default:
            break;
    }
}

const publicPages = publicData.navMenus.map((item)=>{
   return (
    <Route key={item} exact path={item.url} element={componentsObject(item.modulesTitles[0])} />
)});

{/*
publicPages.home.component = <HomePage generalSettings={publicPages.home.general}  cssObject={publicPages.home.cssObject}/>;
publicPages.about.component = <About generalSettings={publicPages.about.general} cssObject={publicPages.about.cssObject}/>;
publicPages.features.component = <Features generalSettings={publicPages.features.general} cssObject={publicPages.features.cssObject}/>;
publicPages.contact.component = <Contact generalSettings={publicPages.contact.general} cssObject={publicPages.contact.cssObject}/>;
publicPages.privacy.component = <PrivacyPolicy generalSettings={publicPages.privacy.general} cssObject={publicPages.privacy.cssObject}/>;
publicPages.login.component = <Login generalSettings={publicPages.login.general} cssObject={publicPages.login.cssObject}/>;
publicPages.createaccount.component = <CreateAccount generalSettings={publicPages.createaccount.general} cssObject={publicPages.createaccount.cssObject}/>;
publicPages.passwordreset.component = <PasswordReset generalSettings={publicPages.passwordreset.general} cssObject={publicPages.passwordreset.cssObject}/>;
publicPages.faq.component = <FAQ generalSettings={publicPages.faq.general} cssObject={publicPages.faq.cssObject}/>;
*/}
export default publicPages;



