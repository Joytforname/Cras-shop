import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const rootNodeId = "root";

const container = document.getElementById(rootNodeId);

if (!container) {
  throw new Error(`Не найден Dom элемент с ${rootNodeId} `);
}

const root = createRoot(container);

root.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<App />
		</QueryClientProvider>
	</React.StrictMode>
);
