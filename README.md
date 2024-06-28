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

Note that loader is a function to fetch the data from api.
in menu component, we consume loader with useLoaderData from react router dom.

```bash
const menuData = useLoaderData();
```

### Getting orders with react router
```
App.jsx
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: loader,
      },
```
```
Order.jsx
export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}
```
to get the id we normally use useParams hook but,
useParams hook works on components not in regular components.
with react router loader function can receive params.

Notice it is orderId because its how we call the url.

# Setaup and Start
- npm install
- npm run dev
