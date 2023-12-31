import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom';
import Layout from './components/layout';
import { LoadingProvider } from './components/LoadingContext';
import { useParams } from 'react-router-dom';

const Home = React.lazy(() => import('./pages/home/home'));
const AboutUs = React.lazy(() => import('./pages/about/about'));
const NotFound = React.lazy(() => import('./pages/not-found'));
const ServiceDetail = React.lazy(() => import('./pages/services/service-detail'));
const ScheduleDemo = React.lazy(() => import('./pages/schedule-demo'));
const BecomePartner = React.lazy(() => import('./pages/partners/become-partner'));
const OurPeople = React.lazy(() => import('./pages/about/our-team'));
const GetinTouch = React.lazy(() => import('./pages/contact-us/get-in-touch'));
const PrivacyPolicy = React.lazy(() => import('./pages/privacy-policy/privacy-policy'));
const TermsConditions = React.lazy(() => import('./pages/terms-conditions/terms-conditions'));
const Blog = React.lazy(() => import('./pages/resources/blog/blog'));
const BlogCategory = React.lazy(() => import('./pages/resources/blog/blog-category'));
const BlogDetail = React.lazy(() => import('./pages/resources/blog/blog-detail/blog-detail'));
const Career = React.lazy(() => import('./pages/about/career'));
const ThePlatform = React.lazy(() => import('./pages/platform/platform'))

function App() {
 
  return (
    <LoadingProvider>
      <Router>
        <Routes>
          <Route element={
            <Suspense >
              <Layout />
            </Suspense>
          }
          >
            <Route index element={<Home />} />
            <Route path="/company/company-page" element={<AboutUs />} />
            <Route path="/service/:slug" element={<ServiceDetail />} />
            <Route path="/schedule-demo" element={<ScheduleDemo />} />
            <Route path="/become-partner" element={<BecomePartner />} />
            <Route path="/company/our-people" element={<OurPeople />} />
            <Route path="/company/get-in-touch" element={<GetinTouch />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-condition" element={<TermsConditions />} />
            <Route path='/resources' element={<Blog />} />
            <Route path="/resources/:slug" element={<BlogDetail />} />
            {/* <Route path="/category/:slug" element={<RedirectToResources />} /> */}
            <Route path="/category/:slug" element={<BlogCategory />} />
            <Route path='/company/careers' element={<Career />} />
            <Route path='/platform/the-platform' element={<ThePlatform />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </LoadingProvider>
  );
}
// const RedirectToResources = () => {
//   const { slug } = useParams();
//   return slug ? <Navigate to={`/resources/${slug}`} replace /> : null;
// };
export default App;
