using backend.Dtos;
using backend.Models;
using Microsoft.EntityFrameworkCore;
using Org.BouncyCastle.Utilities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Services
{
    public class UserService : IUserService
    {
        private readonly walkinportalContext _context;
        public UserService(walkinportalContext context)
        {
            _context = context;
        }
        public async Task<List<Job>> GetAllJobsAsync()
        {
            var jobs = await _context.Jobs
                .Include(j => j.Location)
                .Include(j => j.JobSlots)
                    .ThenInclude(s => s.Slot)
                .Include(j => j.JobDescs)
                .Include(j => j.JobRoles)
                    .ThenInclude(r => r.Role)
                .Include(j => j.JobRoles)
                    .ThenInclude(r => r.JobRolesDescs)
                .AsSplitQuery()
                .AsNoTrackingWithIdentityResolution()
                .ToListAsync();

            var jobDtoList = jobs.Select(job => new Job
            {
                JobId = job.JobId,
                JobName = job.JobName,
                FromTime = job.FromTime,
                ToTime = job.ToTime,
                Venue = job.Venue,
                ThingsToRemember = job.ThingsToRemember,
                LocationId = job.LocationId,
                Location = new Location
                {
                    LocationId = job.Location.LocationId,
                    LocationName = job.Location.LocationName
                },
                JobDescs = job.JobDescs.Select(jd => new JobDesc
                {
                    Id = jd.Id,
                    DescTitle = jd.DescTitle,
                    Description = jd.Description,
                    JobId = jd.JobId
                }).ToList(),
                JobSlots = job.JobSlots.Select(js => new JobSlot
                {
                    SlotId = js.SlotId,
                    JobId = js.JobId,
                    Slot = new Slot
                    {
                        SlotId = js.Slot.SlotId,
                        FromTime = js.Slot.FromTime,
                        ToTime = js.Slot.ToTime
                    },
                }).ToList(),
                JobRoles = job.JobRoles.Select(jr => new JobRole
                {
                    Id = jr.Id,
                    Package = jr.Package,
                    JobId = jr.JobId,
                    RoleId = jr.RoleId,
                    Role = new Role
                    {
                        RoleId = jr.Role.RoleId,
                        RoleName = jr.Role.RoleName
                    },
                    JobRolesDescs = jr.JobRolesDescs.Select(jrd => new JobRolesDesc
                    {
                        Id = jrd.Id,
                        DescTitle = jrd.DescTitle,
                        Description = jrd.Description,
                        RolesId = jrd.RolesId
                    }).ToList(),
                }).ToList(),
            }).ToList();
            return jobDtoList;
        }

        public async Task<Job> GetJobByIdAsync(int jobId)
        {
            var job = await _context.Jobs
                .Where(j => j.JobId == jobId)
                .Include(j => j.Location)
                .Include(j => j.JobSlots)
                    .ThenInclude(s => s.Slot)
                .Include(j => j.JobDescs)
                .Include(j => j.JobRoles)
                    .ThenInclude(r => r.Role)
                .Include(j => j.JobRoles)
                    .ThenInclude(r => r.JobRolesDescs)
                .AsSplitQuery()
                .AsNoTrackingWithIdentityResolution()
                .FirstOrDefaultAsync();

            if(job == null)
            {
                return null;
            }

            var jobDto = new Job
            {
                JobId = job.JobId,
                JobName = job.JobName,
                FromTime = job.FromTime,
                ToTime = job.ToTime,
                Venue = job.Venue,
                ThingsToRemember = job.ThingsToRemember,
                LocationId = job.LocationId,
                DtCreated = job.DtCreated,
                DtModified = job.DtModified,
                Location = new Location
                {
                    LocationId = job.Location.LocationId,
                    LocationName = job.Location.LocationName,
                    DtCreated = job.Location.DtCreated,
                    DtModified = job.Location.DtModified,
                },
                JobDescs = job.JobDescs.Select(jd => new JobDesc
                {
                    Id = jd.Id,
                    DescTitle = jd.DescTitle,
                    Description = jd.Description,
                    JobId = jd.JobId,
                    DtCreated = jd.DtCreated,
                    DtModified = jd.DtModified,
                }).ToList(),
                JobSlots = job.JobSlots.Select(js => new JobSlot
                {
                    SlotId = js.SlotId,
                    JobId = js.JobId,
                    DtCreated = js.DtCreated,
                    DtModified = js.DtModified,
                    Slot = new Slot
                    {
                        SlotId = js.Slot.SlotId,
                        FromTime = js.Slot.FromTime,
                        ToTime = js.Slot.ToTime,
                        DtCreated = js.Slot.DtCreated,
                        DtModified = js.Slot.DtModified,
                    },
                }).ToList(),
                JobRoles = job.JobRoles.Select(jr => new JobRole
                {
                    Id = jr.Id,
                    Package = jr.Package,
                    JobId = jr.JobId,
                    RoleId = jr.RoleId,
                    DtCreated = jr.DtCreated,
                    DtModified = jr.DtModified,
                    Role = new Role
                    {
                        RoleId = jr.Role.RoleId,
                        RoleName = jr.Role.RoleName,
                        DtCreated = jr.Role.DtCreated,
                        DtModified = jr.Role.DtModified,
                    },
                    JobRolesDescs = jr.JobRolesDescs.Select(jrd => new JobRolesDesc
                    {
                        Id = jrd.Id,
                        DescTitle = jrd.DescTitle,
                        Description = jrd.Description,
                        RolesId = jrd.RolesId,
                        DtCreated = jrd.DtCreated,
                        DtModified = jrd.DtModified,
                    }).ToList(),
                }).ToList(),
            };
            return job;
        }

        public async Task<Int32> InsertApplicationAsync(ApplicationRequest application)
        {
            Application app = new Application {
                Resume = application.Resume,
                UserId = application.UserId,
                SlotId = application.SlotId,
                JobId = application.JobId
            };
            _context.Applications.Add(app);
            await _context.SaveChangesAsync();
            foreach (var roleId in application.Rolesid)
            {
                ApplicationRole appRole = new ApplicationRole {
                    ApplicationId = app.ApplicationId,
                    RoleId = roleId
                };
                _context.ApplicationRoles.Add(appRole);
            }
            await _context.SaveChangesAsync();
            return app.ApplicationId;
        }


        public async Task<Application> GetApplicationByIdAsync(int applicationId)
        {
            var application = _context.Applications.Where(a => a.ApplicationId == applicationId).Include(a => a.Job).Include(a => a.Slot).AsSplitQuery().FirstOrDefault();
            return application;
        }
    }
}
