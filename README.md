A Fast pizza ordering app created by using React Router's data loading capabilities and Redux Toolkit.

![catopizza](https://github.com/cagatayiscann/fast-react-pizza/assets/64129421/e6de891f-8259-4ec9-aef6-bb88349a697b)

# live demo: https://main--catopizza.netlify.app/


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

# Setaup and Start
- npm install
- npm run dev
