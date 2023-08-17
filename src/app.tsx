import React from 'react';
import { Route } from 'react-router-dom';
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider } from 'zmp-ui';
import { RecoilRoot } from 'recoil';
import HomePage from './pages';
import About from './pages/About';
import Discover from './pages/Discover';
import History from "@/pages/History";
import Layout from "@/components/layout";

const MyApp = () => {
  return (
    <RecoilRoot>
      <App>
        <SnackbarProvider>
          <ZMPRouter>
            <AnimationRoutes>
              <Route
                path="/"
                element={
                  <Layout>
                    <HomePage />
                  </Layout>
                }
              ></Route>
              <Route
                path="/about"
                element={
                  <Layout>
                    <About />
                  </Layout>
                }
              ></Route>
              <Route
                path="/discover"
                element={
                  <Layout>
                    <Discover />
                  </Layout>
                }
              ></Route>
              <Route
                path="/history"
                element={
                  <Layout>
                    <History />
                  </Layout>
                }
              ></Route>
            </AnimationRoutes>
          </ZMPRouter>
        </SnackbarProvider>
      </App>
    </RecoilRoot>
  );
};
export default MyApp;
