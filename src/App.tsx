import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import Layout from "./Components/Layout";
import HomePage from "./Pages/HomePage";
import SearchPage from "./Pages/SearchPage";
import BookmarksPage from "./Pages/BookmarksPage";
import ProfilePage from "./Pages/ProfilePage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="bookmarks" element={<BookmarksPage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
