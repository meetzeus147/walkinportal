import { Time } from '@angular/common';

export interface IJob {
    job_id: string;
    job_name: string;
    from_time: string;
    to_time: string;
    venue: string;
    things_to_remember: string;
    location_name: string;
    roles:{
        role_name: string;
        package:number;
        role_desc:{
            desc_title: string;
            desc: string;
        }[];
    }[];
    job_desc:{
        desc_title: string;
        desc: string;
    }[];
    slots: {
        from_time: string;
        to_time: string;
    }[];
}