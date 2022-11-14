import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routers/App";
import { AppProvider } from "./Context/Context";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "./index.scss";

//Config Apollo
const client = new ApolloClient({
  // link: new HttpLink({
  // }),
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <AppProvider>
        <App />
      </AppProvider>
    </ApolloProvider>
  </React.StrictMode>
);
