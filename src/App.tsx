import styles from './App.module.css';

import React from 'react';
import Tab from './components/Tab/Tab';
import TabContent from './components/Tabcontent/Tabcontent';


const App: React.FC = () => {
  const tabContents = [
    {
      
      image: "../src/assets/images/contents/phone.png",    
      title: "Scan with Ease",
      subTitle: "Document Scanner",
      description: "Scan any document instantly with your mobile device by just a few steps. Save as PDF,JPG,ZIP,TXT and Word format. ",
      icon: "../src/assets/images/icons/document.svg",
      text: "Document Scanner",
      buttonText: "Learn More",
      frameID: "framezero"
    },
    {
      backgroundImage: "../src/assets/images/bg/signstampbg.png",
      image: "../src/assets/images/contents/signature.svg",
      image2: "../src/assets/images/contents/complated.svg",
      
      title: "One-Tap Focus",
      subTitle: "Sign & Stamp",
      description: "Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!",
      icon: "../src/assets/images/icons/certificated.svg",
      text: "Sign & Stamp",
      buttonText: "Learn More",
      frameID: "frameone"
    },
    {
      backgroundImage: "../src/assets/images/contents/phone.png",
      image: "../src/assets/images/contents/filepreview.svg",
      image2: "../src/assets/images/contents/filepreview.svg",
      image3: "../src/assets/images/contents/filepreview.svg",
      title: "Multiple Page Scan",
      subTitle: "Batch Scanning",
      description: "Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document.",
      icon: "../src/assets/images/icons/scan.svg",
      text: "Batch Scanning",
      buttonText: "Learn More",
      frameID: "frametwo"
    },
    {
      backgroundImage: "../src/assets/images/contents/phone.png",
      image: "../src/assets/images/contents/brightnes.svg",
      image2: "../src/assets/images/contents/contrast.svg",     
      title: "Unique Filters",
      subTitle: "Advanced fılters",
      description: "Apply advanced filters and enhance quality with various custom made filters. Manually edit brightness and contrast by your own choice on the custom filters.",
      icon: "../src/assets/images/icons/filters.svg",
      text: "Advanced Filters",
      buttonText: "Learn More",
      frameID: "framethree"
    },
    {
      backgroundImage: "../src/assets/images/contents/phone.png",
      image: "../src/assets/images/contents/arrow.svg",
      image2: "../src/assets/images/contents/pdf.svg",
      image3: "../src/assets/images/contents/jpg.svg",
      image4: "../src/assets/images/contents/txt.svg",
      title: "All-Round Conversion",
      subTitle: "EXPORT & SHARE",
      description: "Export your scans as PDF,JPG,ZIP,TXT and Word.",
      icon: "../src/assets/images/icons/export.svg",
      text: "Export & Share",
      buttonText: "Learn More",
      frameID: "framefour"


    }
  ];

  const[activeTab, setActiveTab] = React.useState(0);

  function handleActiveTab(index: number) {
    setActiveTab(index);    
  }

  return (
    <div className={styles.app}>
      <div className={styles.tabcontents}>
        {Array.from({ length: tabContents.length }, (_, i) => {
          return (
            <TabContent
              frameID={tabContents[i].frameID}
              tabIndex={i}
              activeTab={activeTab}              
              key={i}
              backgroundImage={tabContents[i].backgroundImage}
              image={tabContents[i].image}
              image2={tabContents[i].image2}
              image3={tabContents[i].image3}
              image4={tabContents[i].image4}
              title={tabContents[i].title}
              subTitle={tabContents[i].subTitle}
              description={tabContents[i].description}
              buttonText= {tabContents[i].buttonText}
            />
          );
        })}
      </div>
      <div className={styles.tabContainer}>
        {Array.from({ length: tabContents.length }, (_, i) => {
          return (
            <Tab tabIndex={i}  activeTab={activeTab} handleActiveTab={handleActiveTab} key={i} icon={tabContents[i].icon} text={tabContents[i].text} />
          );
        })}
      </div>
      
    </div>
  );
};

export default App;
