using backend.Models;
using backend.Dtos;
using backend.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;
using System.Net.Http;
using Microsoft.AspNetCore.Http;
using System.Reflection.Metadata.Ecma335;

namespace backend.Controllers
{
    [ApiController]
    [Route("/[controller]")]
    public class UserController : Controller
    {
        private IUserService _userService;
        private readonly walkinportalContext _context;
        public UserController(IUserService userService, walkinportalContext context)
        {
            _userService = userService;
            _context = context;
        }

        [HttpGet]
        [Route("/getregistrationdata")]
        public async Task<IActionResult> getRegistrationDataAsync()
        {
            var collegesTask = await _context.Colleges.ToListAsync();
            var streamsTask = await _context.Streams.ToListAsync();
            var locationsTask = await _context.Locations.ToListAsync();
            var techsTask = await _context.Techs.ToListAsync();
            var qualificationsTask = await _context.Qualifications.ToListAsync();
            var rolesTask = await _context.Roles.ToListAsync();
            var applicationTypesTask = await _context.ApplicationTypes.ToListAsync();


            var registrationData = new RegistrationData
            {
                college = collegesTask,
                location = locationsTask,
                stream = streamsTask,
                qualification = qualificationsTask,
                tech = techsTask,
                role = rolesTask,
                applicationTypes = applicationTypesTask
            };
            return Ok(registrationData);
        }

        [HttpGet]
        [Route("/jobs")]
        public async Task<IActionResult> GetAllJobsAsync()
        {
            var jobDtoList = await _userService.GetAllJobsAsync();
            return Ok(jobDtoList);
        }

        [HttpGet]
        [Route("/job/{id}")]
        public async Task<IActionResult> GetJobByIdAsync([FromRoute] int id)
        {
            var job = await _userService.GetJobByIdAsync(id);
            if(job == null)
            {
                return NotFound();
            }
            return Ok(job);
        }

        [HttpPost]
        [Route("/apply")]
        public async Task<IActionResult> InsertApplicationAsync([FromBody] ApplicationRequest application)
        {
            Int32 applicationId = await _userService.InsertApplicationAsync(application);
            return Ok(applicationId);
        }

        [HttpGet]
        [Route("/getapplication/{applicationId}")]
        public async Task<IActionResult> GetApplicationByIdAsync([FromRoute] int applicationId)
        {
            var application = _userService.GetApplicationByIdAsync(applicationId);
            return Ok(application);
        }

        [HttpPost]
        [Route("/user")]
        public async Task<IActionResult> RegisterUser(UserRegistrationRequest userRegistrationRequest)
        {
            await _userService.RegisterUser(userRegistrationRequest);
            return Ok();
        }

    }
}