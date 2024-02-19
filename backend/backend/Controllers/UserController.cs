using backend.Models;
using backend.Dtos;
using backend.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;

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
        public async Task<IActionResult> InsertApplication([FromBody] ApplicationRequest application)
        {
            await _userService.InsertApplication(application);
            return Ok();
        }

        [HttpPost]
        [Route("/user")]
        public async Task<IActionResult> RegisterUser(UserRegistrationRequest userRegistrationRequest)
        {
            await Console.Out.WriteLineAsync($"Email: {userRegistrationRequest.Email}");
            await Console.Out.WriteLineAsync($"FirstName: {userRegistrationRequest.FirstName}");
            await Console.Out.WriteLineAsync($"LastName: {userRegistrationRequest.LastName}");
            await Console.Out.WriteLineAsync($"PhoneNo: {userRegistrationRequest.PhoneNo}");
            await Console.Out.WriteLineAsync($"PortfolioUrl: {userRegistrationRequest.PortfolioUrl}");
            await Console.Out.WriteLineAsync($"ReferalEmpName: {userRegistrationRequest.ReferalEmpName}");
            await Console.Out.WriteLineAsync($"SendMeUpdate: {userRegistrationRequest.SendMeUpdate}");
            await Console.Out.WriteLineAsync($"UserId: {userRegistrationRequest.UserId}");
            await Console.Out.WriteLineAsync($"Countrycode: {userRegistrationRequest.Countrycode}");
            await Console.Out.WriteLineAsync($"Resume: {userRegistrationRequest.Resume}");
            await Console.Out.WriteLineAsync($"ProfilePhoto: {userRegistrationRequest.ProfilePhoto}");
            await Console.Out.WriteLineAsync($"Percentage: {userRegistrationRequest.Percentage}");
            await Console.Out.WriteLineAsync($"PassingYear: {userRegistrationRequest.PassingYear}");
            await Console.Out.WriteLineAsync($"QualificationId: {userRegistrationRequest.QualificationId}");
            await Console.Out.WriteLineAsync($"StreamId: {userRegistrationRequest.StreamId}");
            await Console.Out.WriteLineAsync($"CollegeId: {userRegistrationRequest.CollegeId}");
            await Console.Out.WriteLineAsync($"ExpYear: {userRegistrationRequest.ExpYear}");
            await Console.Out.WriteLineAsync($"CurrentCtc: {userRegistrationRequest.CurrentCtc}");
            await Console.Out.WriteLineAsync($"ExpectedCtc: {userRegistrationRequest.ExpectedCtc}");
            await Console.Out.WriteLineAsync($"CurrentlyOnNoticePeriod: {userRegistrationRequest.CurrentlyOnNoticePeriod}");
            await Console.Out.WriteLineAsync($"NoticeEnd: {userRegistrationRequest.NoticeEnd}");
            await Console.Out.WriteLineAsync($"NoticePeriodLength: {userRegistrationRequest.NoticePeriodLength}");
            await Console.Out.WriteLineAsync($"AppearedZeusTest: {userRegistrationRequest.AppearedZeusTest}");
            await Console.Out.WriteLineAsync($"ZeusTestRole: {userRegistrationRequest.ZeusTestRole}");
            await Console.Out.WriteLineAsync($"ApplicationTypeId: {userRegistrationRequest.ApplicationTypeId}");

            await Console.Out.WriteLineAsync("ExpertTechsId:");
            foreach (var techId in userRegistrationRequest.ExpertTechsId)
            {
                await Console.Out.WriteLineAsync($"  - {techId}");
            }

            Console.Out.WriteLine("FamiliarTechsId:");
            foreach (var techId in userRegistrationRequest.FamiliarTechsId)
            {
                await Console.Out.WriteLineAsync($"  - {techId}");
            }

            return Ok();
        }

    }
}