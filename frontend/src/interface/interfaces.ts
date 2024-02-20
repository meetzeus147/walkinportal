import { Time } from '@angular/common';

export interface IJob {
    jobId: number;
    jobName: string;
    fromTime: Date;
    toTime: Date;
    venue: string;
    thingsToRemember: string;
    locationId: number;
    special_message: string;
    location: {
        locationId: number;
        locationName: string;
    },
    jobRoles: jobRoles[];
    jobDescs: jobDesc[];
    jobSlots: jobSlots[];
}

interface role {
    roleId: number;
    roleName: string;
}

interface jobRoleDescs {
    id: number;
    descTitle: string;
    description: string;
}

export interface jobRoles {
    id: number;
    package: number;
    jobId: number;
    roleId: number;
    role: role;
    jobRolesDescs: jobRoleDescs[];
}

interface jobDesc {
    id: number;
    descTitle: string;
    description: string;
}

interface slot {
    slotId: number;
    fromTime: Time;
    toTime: Time;
}

interface jobSlots {
    slotId: number;
    jobId: number;
    slot: slot;
}

export interface IApplicationRequest{
    resume: string | null;
    userId: number;
    jobId: number;
    slotId: number;
    rolesid: number[];
}

export interface IApplication{
    applicationId: number;
    resume: string;
    userId: number;
    jobId: number;
    slotId: number;
    hallticket: string;
    job: {
        jobId: number;
        jobName: string;
        fromTime: Date;
        toTime: Date;
        venue: string;
        thingsToRemember: string;
        date: Date;
    };
    slot: slot;
    applicationRoles: {
        roleId: number;
        applicationId: number;
    }[] | null;
}