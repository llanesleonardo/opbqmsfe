import React from "react";
import Hero from "../../Components/Sections/Hero";
import PlainContent from "../../Components/MainContent/PlainContent"

export default function PrivacyPolicy(props) {
 
    
  const {cssObject,generalSettings } = props;
  const { title, subtitle,url,content } = generalSettings;
  const {Heros} = cssObject;


  return (
    <>
      <Hero
        title={title}
        subtitle={subtitle}
        content={content}
        link=""
        linkContent=""
        isButtonShown={false}
        cssObject={Heros}
      />
     <PlainContent  content={content}/>
    </>
  );
}

