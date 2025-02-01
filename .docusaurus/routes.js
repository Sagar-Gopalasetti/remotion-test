import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/remotion-test/blog',
    component: ComponentCreator('/remotion-test/blog', '902'),
    exact: true
  },
  {
    path: '/remotion-test/blog/archive',
    component: ComponentCreator('/remotion-test/blog/archive', 'c6a'),
    exact: true
  },
  {
    path: '/remotion-test/blog/authors',
    component: ComponentCreator('/remotion-test/blog/authors', 'a16'),
    exact: true
  },
  {
    path: '/remotion-test/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/remotion-test/blog/authors/all-sebastien-lorber-articles', '450'),
    exact: true
  },
  {
    path: '/remotion-test/blog/authors/yangshun',
    component: ComponentCreator('/remotion-test/blog/authors/yangshun', '76c'),
    exact: true
  },
  {
    path: '/remotion-test/blog/first-blog-post',
    component: ComponentCreator('/remotion-test/blog/first-blog-post', 'b5c'),
    exact: true
  },
  {
    path: '/remotion-test/blog/long-blog-post',
    component: ComponentCreator('/remotion-test/blog/long-blog-post', '9c9'),
    exact: true
  },
  {
    path: '/remotion-test/blog/mdx-blog-post',
    component: ComponentCreator('/remotion-test/blog/mdx-blog-post', '8fe'),
    exact: true
  },
  {
    path: '/remotion-test/blog/tags',
    component: ComponentCreator('/remotion-test/blog/tags', 'e42'),
    exact: true
  },
  {
    path: '/remotion-test/blog/tags/docusaurus',
    component: ComponentCreator('/remotion-test/blog/tags/docusaurus', 'c60'),
    exact: true
  },
  {
    path: '/remotion-test/blog/tags/facebook',
    component: ComponentCreator('/remotion-test/blog/tags/facebook', '667'),
    exact: true
  },
  {
    path: '/remotion-test/blog/tags/hello',
    component: ComponentCreator('/remotion-test/blog/tags/hello', '201'),
    exact: true
  },
  {
    path: '/remotion-test/blog/tags/hola',
    component: ComponentCreator('/remotion-test/blog/tags/hola', '9cd'),
    exact: true
  },
  {
    path: '/remotion-test/blog/welcome',
    component: ComponentCreator('/remotion-test/blog/welcome', 'b70'),
    exact: true
  },
  {
    path: '/remotion-test/markdown-page',
    component: ComponentCreator('/remotion-test/markdown-page', '517'),
    exact: true
  },
  {
    path: '/remotion-test/docs',
    component: ComponentCreator('/remotion-test/docs', '600'),
    routes: [
      {
        path: '/remotion-test/docs',
        component: ComponentCreator('/remotion-test/docs', 'ebd'),
        routes: [
          {
            path: '/remotion-test/docs',
            component: ComponentCreator('/remotion-test/docs', '685'),
            routes: [
              {
                path: '/remotion-test/docs/category/tutorial---basics',
                component: ComponentCreator('/remotion-test/docs/category/tutorial---basics', '9df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/remotion-test/docs/category/tutorial---extras',
                component: ComponentCreator('/remotion-test/docs/category/tutorial---extras', 'a42'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/remotion-test/docs/intro',
                component: ComponentCreator('/remotion-test/docs/intro', 'f75'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/remotion-test/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/remotion-test/docs/tutorial-basics/congratulations', 'c7f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/remotion-test/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/remotion-test/docs/tutorial-basics/create-a-blog-post', '15d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/remotion-test/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/remotion-test/docs/tutorial-basics/create-a-document', '21e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/remotion-test/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/remotion-test/docs/tutorial-basics/create-a-page', '672'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/remotion-test/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/remotion-test/docs/tutorial-basics/deploy-your-site', 'c72'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/remotion-test/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/remotion-test/docs/tutorial-basics/markdown-features', '35f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/remotion-test/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/remotion-test/docs/tutorial-extras/manage-docs-versions', '42f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/remotion-test/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/remotion-test/docs/tutorial-extras/translate-your-site', 'b37'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/remotion-test/',
    component: ComponentCreator('/remotion-test/', 'd0e'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
