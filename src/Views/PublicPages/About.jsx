import React ,{ useContext}from "react";
import Hero from "../../Components/Sections/Hero";
import PlainContent from "../../Components/MainContent/PlainContent"


export default function About(props) {

  const {cssObject,generalSettings } = props;
  const { title, subtitle,url,content } = generalSettings;
  const {Heros} = cssObject;


  return (
    <>
      <Hero
        title={title}
        subtitle={subtitle}
        cssObject={Heros}
        isButtonShown={false}
        content=""
        link=""
        linkContent=""
      />
     <PlainContent content={content}/>
    </>
  );
}
