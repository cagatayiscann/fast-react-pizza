A Fast pizza ordering app created by using React Router's data loading capabilities and Redux Toolkit.

With v6.4, react router can fetch data into pages and submit data using forms.
To be able to use these features, we need to declare createBrowserRouter outside the jsx.
 ```bash
const router = createBrowserRouter([
      {
        path: '/menu',
        element: <Menu />,
        loader: loader
      },    
]);

```
in menu component, we consume loader with useLoaderData from react router dom.

```bash
const menuData = useLoaderData();
```

# live demo: https://main--catopizza.netlify.app/

# Setaup and Start
- npm install
- npm run dev
