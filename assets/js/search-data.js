// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-yongsoo-kim",
    title: "Yongsoo Kim",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "cv",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "List of publications by Yongsoo Kim.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "My activities in Github (which is less and less) and major repositories from the group (tgac-vumc).",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-switching-to-neovim",
        
          title: "Switching to neovim",
        
        description: "another effort to set up environment - neovim",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/nvim-setting/";
          
        },
      },{id: "post-vim-environment-creation",
        
          title: "Vim environment creation",
        
        description: "a note for setting up vim environment",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2019/vim-setting/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-hollis-brownstein-research-grant-awarded-by-leukemia-research-foundation-100-000-usd-for-1-year",
          title: 'Hollis Brownstein Research Grant awarded by Leukemia research foundation (100,000 USD for 1...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/LRF_support/";
            },},{id: "news-our-work-on-a-novel-integration-method-won-parafac-is-published-in-nature-communication",
          title: 'Our work on a novel integration method (WON-PARAFAC) is published in Nature Communication...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/WON_PARAFAC/";
            },},{id: "news-cca-grant-accepted-150-000-euros-for-2-years",
          title: 'CCA grant accepted (150,000 Euros for 2 years)',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/CCA_accepted/";
            },},{id: "news-cell2sample-project-will-start-adore-funded-project",
          title: 'Cell2Sample project will start (ADORE funded project)',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/ADORE_started/";
            },},{id: "news-statescope-software-is-out",
          title: 'Statescope software is out',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/Statescope_released/";
            },},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F.%6B%69%6D@%61%6D%73%74%65%72%64%61%6D%75%6D%63.%6E%6C", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/anoyaro84# your GitHub user name", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=46r9fWwAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
