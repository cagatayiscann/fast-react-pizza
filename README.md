A Fast pizza ordering app created by using React Router's data loading capabilities and Redux Toolkit.

![catopizza](https://github.com/cagatayiscann/fast-react-pizza/assets/64129421/e6de891f-8259-4ec9-aef6-bb88349a697b)

# live demo: https://main--catopizza.netlify.app/


With v6.4, react router can fetch data into pages and submit data using forms.
To be able to use these features, we need to declare createBrowserRouter outside the jsx.
(imperative way not the old declarative way)
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
App.jsx
```
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: loader,
      },
```
Order.jsx
```
function Order() {
  const order = useLoaderData();
......
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}
```
to get the id we normally use useParams hook but,
useParams hook works on components not in regular functions.
Luckily loader function can receive params.

### React router's Form and action

CreateOrder.jsx
```
function CreateOrder() {
.....
  <Form method="POST">
......
}

export async function action({ request }) {
  const formData = await request.formData();
  .....
}
```
Note that this Form is a special one which gets imported from react router dom.

When Form is submitted, react router calls action function and request is submitted.
So we can access to it.

Then, we connect this action to the route
```{
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
```

lastly, cant use useNavigate in a function like the same logic above with the useParams.
For that, react router has redirect. Check the code for details.

# Setaup and Start
- npm install
- npm run dev
