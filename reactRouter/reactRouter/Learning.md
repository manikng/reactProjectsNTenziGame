# React Router Learnings

## Setting Up Routes

1. **Creating Browser Router**:
   - Use `createBrowserRouter` to create a router instance.
   - Use `createRoutesFromElements` to define routes using JSX elements.
   - Example:
     ```jsx
     const router = createBrowserRouter(
       createRoutesFromElements(
         <Route path="/" element={<Layout />}>
           <Route path="" element={<Home />} />
           <Route path="about" element={<Aboutus />} />
           <Route path="contact" element={<Contact />} />
           <Route path="user/:userid" element={<User />} />
           <Route loader={GithubDataLoader} path="github" element={<Github />} />
         </Route>
       )
     );
     ```

2. **Router Provider**:
   - Use `RouterProvider` to provide the router instance to the application.
   - Example:
     ```jsx
     createRoot(document.getElementById("root")).render(
       <StrictMode>
         <RouterProvider router={router} />
       </StrictMode>
     );
     ```

## Layout and Outlet

1. **Layout Component**:
   - The `Layout` component contains common elements like `Header` and `Footer`.
   - Use the `Outlet` component to render child routes.
   - Example:
     ```jsx
     export default function Layout() {
       return (
         <>
           <Header />
           <Outlet />
           <Footer />
         </>
       );
     }
     ```

## Dynamic Routing

1. **Using `useParams`**:
   - Use `useParams` to access route parameters.
   - Example:
     ```jsx
     function User() {
       const { userid } = useParams();
       return <div>User: {userid}</div>;
     }
     ```

## Data Fetching with Loaders

1. **Optimized Data Fetching**:
   - Use `loader` functions to fetch data before rendering the component.
   - Example:
     ```jsx
     const GithubDataLoader = async () => {
       const response = await fetch('https://api.github.com/users');
       return response.json();
     };

     <Route loader={GithubDataLoader} path="github" element={<Github />} />
     ```

## Navigation

1. **Using `Link` and `NavLink`**:
   - Use `Link` for navigation without reloading the page.
   - Use `NavLink` to apply active styles to the current route.
   - Example:
     ```jsx
     <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
       About Us
     </NavLink>
     ```

## Summary

- **Router Setup**: Use `createBrowserRouter` and `RouterProvider` for setting up routing.
- **Layout**: Use `Layout` and `Outlet` for common layout components.
- **Dynamic Routing**: Use `useParams` for accessing route parameters.
- **Data Fetching**: Use `loader` for optimized data fetching.
- **Navigation**: Use `Link` and `NavLink` for navigation and active styles.

These concepts help in building a robust and efficient routing system in a React application.

## Common Mistakes and Best Practices

### Common Mistakes

1. **Forgetting to Wrap Application with RouterProvider**:
   - Always ensure your application is wrapped with `RouterProvider` to enable routing.
   - Example:
     ```jsx
     createRoot(document.getElementById("root")).render(
       <StrictMode>
         <RouterProvider router={router} />
       </StrictMode>
     );
     ```

2. **Incorrect Route Paths**:
   - Ensure route paths are correctly defined and do not have leading or trailing slashes.
   - Example:
     ```jsx
     <Route path="about" element={<Aboutus />} /> // Correct
     <Route path="/about/" element={<Aboutus />} /> // Incorrect
     ```

3. **Not Using `exact` for Nested Routes**:
   - Use `exact` to avoid unintended route matches.
   - Example:
     ```jsx
     <Route exact path="/" element={<Home />} />
     ```

### Best Practices

1. **Use Layouts for Common Components**:
   - Use a `Layout` component to wrap common elements like headers and footers.
   - Example:
     ```jsx
     export default function Layout() {
       return (
         <>
           <Header />
           <Outlet />
           <Footer />
         </>
       );
     }
     ```

2. **Use `NavLink` for Active Links**:
   - Use `NavLink` instead of `Link` to apply active styles to the current route.
   it is same as link but it provide some more method like isActive which tell whether this 
   component is mounted / active or not based on which if it is active you can highlight its node 
   or text like about is highlighted when about compo is mounted or rendered
   - Example:
     ```jsx
     <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
       About Us
     </NavLink>
     ```

3. **Optimize Data Fetching with Loaders**:
   - Use `loader` functions to fetch data before rendering the component.
   - Example:
     ```jsx
     const GithubDataLoader = async () => {
       const response = await fetch('https://api.github.com/users');
       return response.json();
     };

     <Route loader={GithubDataLoader} path="github" element={<Github />} />
     ```

By following these best practices and avoiding common mistakes, you can create a more efficient and maintainable routing system in your React application.
