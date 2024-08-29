import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, {jobLoader} from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';

/* Import Crud Operation for add, delete, and update jobs */
import { addJob, deleteJob, updateJob } from './services/JobServices';


const App = () => {
  /* Routes for each pages using react-router-dom */
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage/>} />
        <Route path='/jobs' element={<JobsPage/>} />
        <Route path='/add-job' 
          element={<AddJobPage  addJobSubmit={addJob}  />} 
        />
        <Route path='/jobs/:id' 
          element={<JobPage deleteJob = {deleteJob} />} 
          loader={jobLoader}
        />
        <Route path='/edit-job/:id' 
          element={<EditJobPage  updateJobSubmit={updateJob}/> } 
          loader={jobLoader}
        />
        <Route path='*' element={<NotFoundPage/>} />
      </Route>
  )
  );
  return <RouterProvider router = {router} />
};

export default App