/* Add New Job using asynch function to be passed in the AddJobPage */
export const addJob = async (newJob) =>{
    const res = await fetch('/api/jobs', {
     method: 'POST',
     headers:{
       'content-type':'application/json'
     },
     body: JSON.stringify(newJob),
    });
    return; 
   };
 
/* Delete Job using asynch function to be passed in the JobPage  */
export const deleteJob = async (id) =>{
     const res = await fetch(`/api/jobs/${id}`,{
       method: 'DELETE',
     });
     return;
   };
 
/* Update Job using asynch function to be passed in the EditJobPage  */
export const updateJob = async (job)=>{
     const res = await fetch(`/api/jobs/${job.id}`, {
       method: 'PUT',
       headers:{
         'content-type':'application/json'
       },
       body: JSON.stringify(job),
      });
      return; 
   };