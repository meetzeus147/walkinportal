using backend.Dtos;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace backend.Services
{
    public interface IUserService
    {
        public Task<RegistrationData> getRegistrationDataAsync();
        public Task<List<Job>> GetAllJobsAsync();
        public Task<Job> GetJobByIdAsync(int jobId);
        public Task<Int32> InsertApplicationAsync(ApplicationRequest application);
        public Task<Application> GetApplicationByIdAsync(int applicationId);
        public Task<LoginRequest> AuthenticateUser(string username, string password, bool RememberMe);
        public Task RegisterUser(UserRegistrationRequest userRegistrationRequest);
    }
}
