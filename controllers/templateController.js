

import Template from '../models/Template';
import ActiveSlug from '../models/ActiveSlug';



// Get template 
export const getTemplateContent = async () => {
  try {
    const templateContent = await Template.find()
    .populate({
      path: 'servicesSection.fetchOnSlug',
      model: ActiveSlug
    })
    .populate({
      path: 'heroSection.fetchOnSlug',
      model: ActiveSlug
    })
    .populate({
      path: 'servicesSection.ctaRedirectUrl',
      model: ActiveSlug
    });

    // templateContent[1].servicesSection.forEach((serObj)=>{console.log(serObj.fetchOnSlug)})

    return { success: true, data: templateContent }; // Return the updated template
  } catch (error) {
    console.error('Error in GET request:', error.message);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};


export const getPageByStr = async (templateName, pageSlug) => {

  // console.log("templateName, pageSlug", templateName, pageSlug);
  
  try {
    // Fetch the template and populate fetchOnSlug references
    const templateComponent = await Template.findOne({ templateName })
      .populate({
        path: 'heroSection.fetchOnSlug',
        model: 'ActiveSlug',
      })
      .populate({
        path: 'servicesSection.fetchOnSlug',
        model: 'ActiveSlug',
      })
      .populate({
        path: 'servicesSection.ctaRedirectUrl',
        model: 'ActiveSlug',
      });

    if (!templateComponent) {
      throw new Error(`Template with name ${templateName} not found`);
    }

    // Filter heroSection where fetchOnSlug.slug matches pageSlug
    const filteredHeroSection = templateComponent.heroSection.find(
      (hero) => hero.fetchOnSlug && hero.fetchOnSlug.slug === pageSlug
    );

    // Filter servicesSection where at least one fetchOnSlug.slug matches pageSlug
    const filteredServicesSection = templateComponent.servicesSection.filter(
      (service) =>
        service.fetchOnSlug.some((slugObj) => slugObj.slug === pageSlug)
    );

    return {
      success: true,
      data: {
        heroSection: filteredHeroSection,
        servicesSection: filteredServicesSection,
      },
    };
  } catch (error) {
    console.error('Error in getPageByStr:', error.message);
    return { success: false, error: error.message };
  }
};




export const getTemplateByStr = async (data) => {
  try {
    const templateComponent = await Template.findOne({ templateName: data })
    .populate({
      path: 'servicesSection.fetchOnSlug',
      model: ActiveSlug
    })
    .populate({
      path: 'heroSection.fetchOnSlug',
      model: ActiveSlug
    })
    .populate({
      path: 'servicesSection.ctaRedirectUrl',
      model: ActiveSlug
    });
    
    if (!templateComponent) {
      throw new Error(`Template with name ${data} not found`);
    }
    return { success: true, data: templateComponent };
  } catch (error) {
    console.error('Error in getTemplateByStr:', error.message);
    return { success: false, error: error.message };
  }
};


// Create a page or component data
export const createComponentContent = async (data) => {

  console.log(data);
  
  try {

  if(data?.ctaRedirectUrl === ""){ // this is for service cards of service template because they have ctaRedirectUrl as null too
    data.ctaRedirectUrl = null;
  }
  
    const template = await Template.findOne({ templateName: data.templateName });

    if (!template) {
      throw new Error("Template not found");
    }
    

    if (data.componentName === 'callToAction') {
      // Ensure heroSection is initialized as an array if not already
      if (!Array.isArray(template.callToAction)) {
        template.callToAction = [];
      }
      template.callToAction.push(data); // Add new data to the array
    } else 
    if (data.componentName === 'heroSection') {
      // Ensure heroSection is initialized as an array if not already
      if (!Array.isArray(template.heroSection)) {
        template.heroSection = [];
      }
      template.heroSection.push(data); // Add new data to the array
    } else 
    if (data.componentName === 'servicesSection') {
      // Ensure servicesSection is initialized as an array if not already
      if (!Array.isArray(template.servicesSection)) {
        template.servicesSection = [];
      }
      template.servicesSection.push(data); // Add new data to the array
    } else {
      throw new Error("Invalid component name");
    }

    await template.save();

    return { success: true, data: template }; // Return the updated template
  } catch (error) {
    console.error("Error saving component content:", error);
    throw new Error(error.message || "Failed to save the component content");
  }
};




export const updateComponentContent = async ({ id, templateName, componentName, componentData }) => {
  try {

    if(componentData?.ctaRedirectUrl === ""){
      componentData.ctaRedirectUrl = null;
    }
    

    // Fetch the template by `templateName`
    const template = await Template.findOne({ templateName });

    if (!template) {
      throw new Error("Template not found");
    }

    // Update the specific component based on `componentName`
    if (componentName === "heroSection") {
      // Find the component to be updated in the heroSection array
      const heroSectionItem = template.heroSection.find(item => item._id.toString() === id);

      if (!heroSectionItem) {
        throw new Error("Hero Section content not found");
      }

      // Update the fields of the component
      Object.assign(heroSectionItem, componentData);

    } else if (componentName === "servicesSection") {
      // Find the component to be updated in the servicesSection array
      const servicesSectionItem = template.servicesSection.find(item => item._id.toString() === id);

      if (!servicesSectionItem) {
        throw new Error("Services Section content not found");
      }

      // Update the fields of the component
      Object.assign(servicesSectionItem, componentData);

    } else {
      throw new Error("Invalid component name");
    }

    // Save the updated template
    await template.save();

    return { success: true, data: template }; // Return the updated template
  } catch (error) {
    console.error("Error updating component content:", error.message);
    throw new Error(error.message || "Failed to update the component content");
  }
};



export const deleteComponentContent = async ({ id, templateName, componentName }) => {
  try {
    // Fetch the template by `templateName`
    const template = await Template.findOne({ templateName });

    if (!template) {
      throw new Error("Template not found");
    }

    if (componentName === "heroSection") {
      // Filter out the component with the given ID from `heroSection`
      template.heroSection = template.heroSection.filter(item => item._id.toString() !== id);
    } else if (componentName === "servicesSection") {
      // Filter out the component with the given ID from `servicesSection`
      template.servicesSection = template.servicesSection.filter(item => item._id.toString() !== id);
    } else {
      throw new Error("Invalid component name");
    }

    await template.save(); // Save the updated template

    return { success: true, template };
  } catch (error) {
    console.error("Error deleting component content:", error.message);
    throw new Error(error.message || "Failed to delete the component content");
  }
};





// Backend controller function
// export const createComponentContent = async (data1) => {
  

//   // Dummy data for servicesSection
//   const data = {
//     templateName: "service",
//     heroSection: [
//       {
//         "titlePrefix": "Backend Developers",
//         "title": "Hire Expert Backend Developers",
//         "description": "Build robust, scalable, and secure backend systems with our skilled developers. From APIs to database management, our backend experts deliver efficient solutions that power your applications seamlessly.",
//         "imageUrl": "soon",
//         "ctaRedirectUrl": "#contact-us",
//         "ctaText": "Get connected with us",
//         "fetchOnSlug": "backend-developers"
//       },
//       {
//         "titlePrefix": "Frontend Developers",
//         "title": "Hire Skilled Frontend Developers",
//         "description": "Bring your vision to life with intuitive, engaging, and responsive front-end designs. Our expert frontend developers specialize in creating user-friendly interfaces that captivate and perform seamlessly across all devices. Build a world-class user experience with our top talent.",
//         "imageUrl": "soon",
//         "ctaRedirectUrl": "#contact-us",
//         "ctaText": "Get connected with us",
//         "fetchOnSlug": "frontend-developers"
//       },
//       {
//         "titlePrefix": "Hire",
//         "title": "Expert .NET Developers",
//         "description": "Discover skilled .NET developers to build secure, scalable applications that power your business growth. From enterprise solutions to cloud-based applications, our developers bring extensive expertise in .NET technologies to meet your specific needs.",
//         "imageUrl": "soon",
//         "ctaRedirectUrl": "#contact-us",
//         "ctaText": "Get connected with us",
//         "fetchOnSlug": "dot-net-developers"
//       },
//       {
//         "titlePrefix": "Professional",
//         "title": "Software Development Services",
//         "description": "Highlights customization, security, scalability, and business growth—core benefits of professional software development.",
//         "imageUrl": "soon",
//         "ctaRedirectUrl": "#contact-us",
//         "ctaText": "Get connected with us",
//         "fetchOnSlug": "software-development"
//       },
//       {
//         "titlePrefix": "Professional",
//         "title": "Application Development Services",
//         "description": "Transform your ideas into high-performing, user-friendly applications tailored to your business needs. Our expert team provides end-to-end application development, delivering innovative solutions with speed and precision to drive your digital success.",
//         "imageUrl": "soon",
//         "ctaRedirectUrl": "#contact-us",
//         "ctaText": "Get connected with us",
//         "fetchOnSlug": "application-development-company-india"
//       },
//       {
//         "titlePrefix": "Professional",
//         "title": "Software Consulting Services",
//         "description": "Transform your business with expert software consulting services that drive innovation and efficiency. Our consultants provide tailored solutions to optimize processes, reduce costs, and maximize technology investments.",
//         "imageUrl": "soon",
//         "ctaRedirectUrl": "#contact-us",
//         "ctaText": "Get connected with us",
//         "fetchOnSlug": "software-consulting-services-india"
//       }
//     ],


//   };

//   try {
//     const heroSection = new Template(data);
//     const savedData = await heroSection.save();
//     return { success: true, data: savedData }; // Return success response with data
//   } catch (error) {
//     console.error("Error saving hero section:", error);
//     return { success: false, error: error.message || "An error occurred while saving the hero section content" };
//   }
// };







// heroSection: [
//   {
//     "titlePrefix": "Backend Developers",
//     "title": "Hire Expert Backend Developers",
//     "description": "Build robust, scalable, and secure backend systems with our skilled developers. From APIs to database management, our backend experts deliver efficient solutions that power your applications seamlessly.",
//     "imageUrl": "soon",
//     "ctaRedirectUrl": "#contact-us",
//     "ctaText": "Get connected with us",
//     "fetchOnSlug": "backend-developers1"
//   },
//   {
//     "titlePrefix": "Frontend Developers",
//     "title": "Hire Skilled Frontend Developers",
//     "description": "Bring your vision to life with intuitive, engaging, and responsive front-end designs. Our expert frontend developers specialize in creating user-friendly interfaces that captivate and perform seamlessly across all devices. Build a world-class user experience with our top talent.",
//     "imageUrl": "soon",
//     "ctaRedirectUrl": "#contact-us",
//     "ctaText": "Get connected with us",
//     "fetchOnSlug": "frontend-developers1"
//   },
//   {
//     "titlePrefix": "Hire",
//     "title": "Expert .NET Developers",
//     "description": "Discover skilled .NET developers to build secure, scalable applications that power your business growth. From enterprise solutions to cloud-based applications, our developers bring extensive expertise in .NET technologies to meet your specific needs.",
//     "imageUrl": "soon",
//     "ctaRedirectUrl": "#contact-us",
//     "ctaText": "Get connected with us",
//     "fetchOnSlug": "dot-net-developers1"
//   },

// ],


// servicesSection: [
//   {
//     title: "Custom Software Development",
//     description:
//       "We are committed to deliver custom software solutions that perfectly align with your complex technical needs. You Share your requirements, and we'll create a custom application that evolves with your business and user demands.",
//     ctaRedirectUrl: "custom-software-development-services",
//     fetchOnSlug: ["software-development", "software-outsourcing", "qa-testing", "ecommerce"]
//   },
//   {
//     title: "Software Outsourcing Services",
//     description:
//       "Our software outsourcing services reduce costs, accelerate timelines, and connect you with top-tier talent to give you a competitive edge. At Bunnx we have domain experts, our team delivers tailored, efficient solutions that meet your business needs.",
//     ctaRedirectUrl: "software-outsourcing",
//     fetchOnSlug: ["software-development", "software-outsourcing", "devops", "ecommerce"]
//   },
//   {
//     title: "QA & Testing",
//     description:
//       "Our certified experts perform thorough testing to detect and resolve any errors or bugs that could affect your software’s performance. Guarantee the quality, reliability, and performance of your software applications with our QA Experts and testing services.",
//     ctaRedirectUrl: "qa-testing",
//     fetchOnSlug: ["software-development", "mobile-app-development-company-india", "qa-testing", "cloud-services"]
//   }
// ],