using backend.Dtos;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace backend.Services
{
    public interface IUserService
    {
        public Task<List<Job>> GetAllJobsAsync();
        public Task<Job> GetJobByIdAsync(int jobId);
        public Task InsertApplication(ApplicationRequest application);
    }
}
