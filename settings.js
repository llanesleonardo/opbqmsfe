let settings = {
  generalSettings: {
    baseInfo:{
      appname: "OPB QMS",
    applogo: "",
    version: "1.0.0",
    description: "",
    defaultLanguage: "english",
    languages: ["english", "spanish"],
    timeZone: "",  
    theme: ['white','dark']  
    },
    publicPages: {
      navMenus: [
        {
          url: "",
          modulesTitles: ["home", "home"],
          label: "Home",
        },
        {
          url: "about",
          modulesTitles: ["about", "about"],
          label: "About",
        },
        {
          url: "features",
          modulesTitles: ["features", "features"],
          label: "Features",
        },
        {
          url: "contact",
          modulesTitles: ["contact", "contact"],
          label: "Contact",
        },
        {
          url: "login",
          modulesTitles: ["login", "login"],
          label: "Log in",
        },
        {
          url: "createaccount",
          modulesTitles: ["createaccount", "createaccount"],
          label: "create account",
        },
        {
          url: "passwordreset",
          modulesTitles: ["passwordreset", "passwordreset"],
          label: "password reset",
        },
        {
          url: "faq",
          modulesTitles: ["faq", "faq"],
          label: "faq",
        },
      ],
      page404:{
        general: {
          title: "404 Not Found",
          subtitle: "",
          url: "",
          content: ``,
        },
        cssObject: {
          Heros: {
            side: "justify-center",
            bgcolor: "bg-white",
            size: "h-96",
            color: "text-sky-600",
            buttonColor: "bg-sky-600",
            buttonTextColor: "text-white",
            shapeButton:"rounded"
          },
        },
      },
      home: {
        general: {
          title: "Improve one percent each day.",
          subtitle: "This is the solution to progress.",
          url: "",
          content: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
        },
        cssObject: {
          Heros: {
            side: "justify-center",
            bgcolor: "bg-sky-600",
            size: "h-96",
            color: "text-white",
            buttonColor: "bg-white",
            buttonTextColor: "text-blue",
          },
          MarketingGrids: {
            side: "justify-center",
            bgcolor: "bg-white",
            size: "",
            color: "text-blue",
            aligment: "text-center",
          },
        },
      },
      about: {
        general: {
          title: "About",
          subtitle: "Customer-focused company",
          url: "about",
          content: `<p class=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
        },
        cssObject: {
          Heros: {
            side: "justify-left",
            bgcolor: "bg-sky-600",
            size: "h-96",
            color: "text-white",
            buttonColor: "bg-white",
            buttonTextColor: "text-blue",
          },
        },
      },
      features: {
        general: {
          title: "Features",
          url: "features",
          subtitle: "You wont stop innovating your company",
          content: "",
        },
        cssObject: {
          MarketingGrids: {
            side: "justify-center",
            bgcolor: "bg-white",
            size: "",
            color: "text-blue",
            aligment: "text-center",
          },
        },
      },
      contact: {
        general: {
          title: "Contact us!",
          subtitle: "¿Necesitas ayuda o quieres dejarnos comentarios?",
          content: "",
          url: "contact",
          phone: "5203690755",
          address: "Phoenix,AZ",
          email: "llanesleonardo@gmail.com",
        },
        cssObject: {
          ContactForms: {
            buttonBackground: "bg-sky-900",
            buttonColor: "text-white",
            inputBackground: "bg-slate-200",
            shapeButton: "rounded",
          },
          DisplayInfos: {
            side: "justify-center",
          },
        },
      },
      privacy: {
        general: {
          title: "Privacy Policy",
          subtitle:"",
          url: "privacy",
          content:  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        cssObject: {
          Heros: {
            side: "justify-left",
            bgcolor: "bg-sky-600",
            size: "h-96",
            color: "text-white",
            buttonColor: "bg-white",
            buttonTextColor: "text-blue",
          },
        }
      },
      login: {
        general: {
          title: "Log In",
          url: "login",
        },
        cssObject: {
          LoginForms: {
            formPosition: "justify-center",
            buttonBackground: "bg-sky-900",
            buttonColor: "text-white",
            inputBackground: "bg-slate-200",
            shapeButton: "rounded",
          },
        },
      },
      passwordreset: {
        general: {
          title: "Password reset",
          subtitle:"Start with a free account today.",
          url: "passwordreset",
        },
        cssObject: {
          passwordResetForm: {
            formPosition: "justify-center",
            buttonBackground: "bg-sky-900",
            buttonColor: "text-white",
            inputBackground: "bg-slate-200",
            shapeButton: "rounded",
          },
        },
      },
      createaccount: {
        general: {
          title: "Create account",
          subtitle:"Start with a free account today.",
          url: "createaccount",
        },
        cssObject: {
          createAccountForms: {
            formPosition: "justify-center",
            buttonBackground: "bg-sky-900",
            buttonColor: "text-white",
            inputBackground: "bg-slate-200",
            shapeButton: "rounded",
          },
        },
      },
      faq: {
        general: {
          title: "Frequently asked questions",
          subtitle:"",
          url: "faq",
          content:""
        },
        cssObject: {
          Heros: {
            side: "justify-left",
            bgcolor: "bg-sky-600",
            size: "h-96",
            color: "text-white",
            buttonColor: "bg-white",
            buttonTextColor: "text-blue",
          },
        }
      },
    },
    modules: {
      modulesTitles: [
        "Context",
        "Leadership",
        "Planning",
        "Support",
        "Operations",
        "Evaluations",
        "Improvments",
        "QMS System",
      ],
      navMenus: [
        {
          url: "/app/main-dashboard",
          modulesTitles: ["dashboard", "dashboards"],
          label: "Dashboard",
          icon: "",
          form: "",
        },
        {
          url: "/app/projects",
          modulesTitles: ["project", "projects"],
          label: "Projects",
          icon: "",
        },
        {
          url: "/app/processes",
          modulesTitles: ["project", "projects"],
          label: "Processes",
          icon: "",
        },
        {
          url: "/app/profiles",
          modulesTitles: ["project", "projects"],
          label: "Profiles",
          icon: "",
        },
        {
          url: "/app/roles",
          modulesTitles: ["project", "projects"],
          label: "Roles",
          icon: "",
        },
        {
          url: "/app/reportcards",
          modulesTitles: ["project", "projects"],
          label: "Report cards",
          icon: "",
        },
        {
          url: "/app/users",
          modulesTitles: ["project", "projects"],
          label: "Users",
          icon: "",
        },
      ],
      modulesStructure: {
        Context: {
          titles: ["context", "contexts"],
          menuIcon: "<ListBulletIcon className='w-4  text-white mr-2' />",
          relatedModules: [""],
          urlMainSection: "/app/context/",
          actions: ["list", "view", "new", "edit", "delete"],
          submodules: {
            industry: {
              title: "industry standard",
              url: "industry-standard",
            },
            issues: {
              title: "issues",
              url: "issues",
            },
            needs: {
              title: "needs",
              url: "needs",
            },
          },
          schema: {},
          context: ["companyContext"],
          layouts: ["companyContextLayout"],
          helpers: [],
          components: [],
          data: {
            SeedDataUrlAndFile: {
              url: "",
              file: "",
            },
          },
        },
      },
    },
  },
  modulesSettings: {
    modulesTitles: [
      "Context",
      "Leadership",
      "Planning",
      "Support",
      "Operations",
      "Evaluations",
      "Improvments",
      "QMS System",
    ],
    navMenus: [
      {
        url: "/app/main-dashboard",
        modulesTitles: ["dashboard", "dashboards"],
        label: "Dashboard",
        icon: "",
        form: "",
      },
      {
        url: "/app/projects",
        modulesTitles: ["project", "projects"],
        label: "Projects",
        icon: "",
      },
      {
        url: "/app/processes",
        modulesTitles: ["process", "processes"],
        label: "Processes",
        icon: "",
      },
      {
        url: "/app/profiles",
        modulesTitles: ["profile", "profiles"],
        label: "Profiles",
        icon: "",
      },
      {
        url: "/app/roles",
        modulesTitles: ["role", "roles"],
        label: "Roles",
        icon: "",
      },
      {
        url: "/app/reportcards",
        modulesTitles: ["reportcard", "reportcards"],
        label: "Report cards",
        icon: "",
      },
      {
        url: "/app/users",
        modulesTitles: ["user", "users"],
        label: "Users",
        icon: "",
      },
    ],
    modulesStructure: {
      Context: {
        titles: ["context", "contexts"],
        menuIcon: "<ListBulletIcon className='w-4  text-white mr-2' />",
        relatedModules: [""],
        urlMainSection: "/app/context/",
        actions: ["list", "view", "new", "edit", "delete"],
        submodules: [
           {
            title: "industry standard",
            url: "industry-standard",
          },
           {
            title: "issues",
            url: "issues",
          },
          {
            title: "needs",
            url: "needs",
          },
        ],
        schema: {},
        context: ["companyContext"],
        layouts: ["companyContextLayout"],
        helpers: [],
        components: [],
        data: {
          SeedDataUrlAndFile: {
            url: "",
            file: "",
          },
        },
      },
    },
  },
  usersPreferences: {},
  securitySettings: {
    roles:[
        {
          role:"admin",
          permissions:{},
        }
      ]
    },
  dataManagement: {},
  integrationSettings: {},
  performanceOptimizations: {},
  emailCommunication: {},
  analyticsReporting: {},
  complianceLegal: {},
  advanceSettings: {},
};

export default settings;
