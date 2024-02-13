import { Component, OnInit } from '@angular/core';
import { IJob } from 'src/interface/interfaces';

@Component({
  selector: 'app-job-info',
  templateUrl: './job-info.component.html',
  styleUrls: ['./job-info.component.scss']
})
export class JobInfoComponent implements OnInit {

  // job = {
  //   "title": "Walk In for Multiple Job Roles",
  //   "from": "03-Jul-2021",
  //   "to": " 04-Jul-2021",
  //   "slots": [
  //     { "from": "09:00:00", "to": "11:00:00" },
  //     { "from": "13:00:00", "to": "15:00:00" }
  //   ],
  //   "location": "Mumbai",
  //   "roles": [
  //     {
  //       "role-title": "Instructional Designer",
  //       "role-desc": [
  //         { "desc-title": "gross compensation package", "desc": "Rs. 5,00,000 lpa" },
  //         { "desc-title": "Role Description", "desc": "- Generate highly interactive and innovative instructional strategies for e-learning solutions \n- Develop course structure and learning specifications addressing the requirements of the target audience \n- Construct appropriate testing strategies to ensure learners' understanding and performance \n- Address usability issues \n- Keep abreast of new trends in e-learning \n- Ensure that the instructional strategies are as per global standards \n- Prepare instructional design checklists and guidelines \n- Check for quality assurance" },
  //         { "desc-title": "Requirements", "desc": "- Experience in creating instructional plans and course maps. \n- Experience in the use of media like graphics, illustrations, photographs, audio, video, animations, and simulations in instruction \n- Awareness of different instructional design models and familiarity with instructional and learning theories \n- Awareness of latest trends in e-learning and instructional design \n- Strong client consulting/interfacing skills. \n- Ability to guide clients to focus on specific objectives and teaching points \n- Strong meeting facilitation, presentation and interpersonal skills \n- A thorough understanding of the web as an instructional medium \n- Post graduate degree in Education, Instructional Design, Mass Communication or Journalism" }
  //       ]
  //     },
  //     {
  //       "role-title": "Software Engineer",
  //       "role-desc": [
  //         { "desc-title": "gross compensation package", "desc": "Rs. 5,00,000 lpa" },
  //         { "desc-title": "Role Description", "desc": "- Generate highly interactive and innovative instructional strategies for e-learning solutions \n- Develop course structure and learning specifications addressing the requirements of the target audience \n- Construct appropriate testing strategies to ensure learners' understanding and performance \n- Address usability issues \n- Keep abreast of new trends in e-learning \n- Ensure that the instructional strategies are as per global standards \n- Prepare instructional design checklists and guidelines \n- Check for quality assurance" },
  //         { "desc-title": "Requirements", "desc": "- Experience in creating instructional plans and course maps. \n- Experience in the use of media like graphics, illustrations, photographs, audio, video, animations, and simulations in instruction \n- Awareness of different instructional design models and familiarity with instructional and learning theories \n- Awareness of latest trends in e-learning and instructional design \n- Strong client consulting/interfacing skills. \n- Ability to guide clients to focus on specific objectives and teaching points \n- Strong meeting facilitation, presentation and interpersonal skills \n- A thorough understanding of the web as an instructional medium \n- Post graduate degree in Education, Instructional Design, Mass Communication or Journalism" }
  //       ]
  //     },
  //     {
  //       "role-title": "Software Quality Engineer",
  //       "role-desc": [
  //         { "desc-title": "gross compensation package", "desc": "Rs. 5,00,000 lpa" },
  //         { "desc-title": "Role Description", "desc": "- Generate highly interactive and innovative instructional strategies for e-learning solutions \n- Develop course structure and learning specifications addressing the requirements of the target audience \n- Construct appropriate testing strategies to ensure learners' understanding and performance \n- Address usability issues \n- Keep abreast of new trends in e-learning \n- Ensure that the instructional strategies are as per global standards \n- Prepare instructional design checklists and guidelines \n- Check for quality assurance" },
  //         { "desc-title": "Requirements", "desc": "- Experience in creating instructional plans and course maps. \n- Experience in the use of media like graphics, illustrations, photographs, audio, video, animations, and simulations in instruction \n- Awareness of different instructional design models and familiarity with instructional and learning theories \n- Awareness of latest trends in e-learning and instructional design \n- Strong client consulting/interfacing skills. \n- Ability to guide clients to focus on specific objectives and teaching points \n- Strong meeting facilitation, presentation and interpersonal skills \n- A thorough understanding of the web as an instructional medium \n- Post graduate degree in Education, Instructional Design, Mass Communication or Journalism" }
  //       ]
  //     }],
  //   "req": [
  //     { "req-title": "General Instructions", "req-desc": "- We have a two-year indemnity for permanent candidates. We will provide training to the selected candidates.\n- Candidates who have appeared for any test held by Zeus Learning in the past 12 months will not be allowed to appear for this recruitment test." },
  //     { "req-title": "Instructions for the Exam", "req-desc": "- Candidates are requested to log in half an hour prior to the exam start time as they would need to capture their image using a web camera. By taking this test, you are permitting the examination system to capture your video for invigilation purposes.\n- Candidates would not be able to appear for the exam if the web camera attached to their system is not functional.\n- The web camera of your system must be enabled and must remain switched on throughout the examination. In the event of non-receipt of a webcam, your examination will be considered null and void.\n- Candidate's audio and video will be recorded during the examination and will also be monitored by a live proctor. The proctor may terminate your exam in case he/she observes any malpractice during the exam.\n- Candidates are advised to use their own Laptop/PC with a stable internet connection (min 1 Mbps) during the exam.\n- Candidates cannot use an iOS system/device for this exam." },
  //     { "req-title": "Minimum System Requirements", "req-desc": "- Personal Laptop or Desktop computer in working condition with good quality camera (you can use Windows 7 and above).\n- The latest version of Google Chrome Browser only.\n- Please note that Internet speed should be minimum 1 Mbps.\n- Do not use a MacBook or iPad for the proctored exam." },
  //     { "req-title": "Process", "req-desc": "- Every round is an elimination round.Candidates need to clear all rounds to get selected.\n\n- Round I : 4th August, 2018\n- Aptitude Test : 25 Questions\n\n- Round II (Interview) : 4th August, 2018." }
  //   ],
  // };

  job: IJob = {
    job_id: '1',
    job_name: 'Walk In for Multiple Job Roles',
    from_time: '03-Jul-2021',
    to_time: '04-Jul-2021',
    venue: 'Zeus Systems Pvt. Ltd.\n1402, 14th Floor, Tower B, Peninsula Business Park. Ganpatrao Kadam Marg\nLower Parel (W) \nMumbai - 400 013 \nPhone: +91-22-66600000',
    things_to_remember: '- Please report 30 MINUTES prior to your reporting time.\n- Download your Hall Ticket from below and carry it with you during your Walk-In.',
    location_name: 'Mumbai',
    roles: [
      {
        role_name: 'Instructional Designer',
        package: 500000,
        role_desc: [
          { desc_title: "gross compensation package", desc: "Rs. 5,00,000 lpa" },
          { desc_title: "Role Description", "desc": "- Generate highly interactive and innovative instructional strategies for e-learning solutions \n- Develop course structure and learning specifications addressing the requirements of the target audience \n- Construct appropriate testing strategies to ensure learners' understanding and performance \n- Address usability issues \n- Keep abreast of new trends in e-learning \n- Ensure that the instructional strategies are as per global standards \n- Prepare instructional design checklists and guidelines \n- Check for quality assurance" },
          { desc_title: "Requirements", "desc": "- Experience in creating instructional plans and course maps. \n- Experience in the use of media like graphics, illustrations, photographs, audio, video, animations, and simulations in instruction \n- Awareness of different instructional design models and familiarity with instructional and learning theories \n- Awareness of latest trends in e-learning and instructional design \n- Strong client consulting/interfacing skills. \n- Ability to guide clients to focus on specific objectives and teaching points \n- Strong meeting facilitation, presentation and interpersonal skills \n- A thorough understanding of the web as an instructional medium \n- Post graduate degree in Education, Instructional Design, Mass Communication or Journalism" }
        ]
      },
      {
        role_name: 'Software Engineer',
        package: 700000,
        role_desc: [
          { desc_title: "gross compensation package", desc: "Rs. 5,00,000 lpa" },
          { desc_title: "Role Description", desc: "- Generate highly interactive and innovative instructional strategies for e-learning solutions \n- Develop course structure and learning specifications addressing the requirements of the target audience \n- Construct appropriate testing strategies to ensure learners' understanding and performance \n- Address usability issues \n- Keep abreast of new trends in e-learning \n- Ensure that the instructional strategies are as per global standards \n- Prepare instructional design checklists and guidelines \n- Check for quality assurance" },
          { desc_title: "Requirements", desc: "- Experience in creating instructional plans and course maps. \n- Experience in the use of media like graphics, illustrations, photographs, audio, video, animations, and simulations in instruction \n- Awareness of different instructional design models and familiarity with instructional and learning theories \n- Awareness of latest trends in e-learning and instructional design \n- Strong client consulting/interfacing skills. \n- Ability to guide clients to focus on specific objectives and teaching points \n- Strong meeting facilitation, presentation and interpersonal skills \n- A thorough understanding of the web as an instructional medium \n- Post graduate degree in Education, Instructional Design, Mass Communication or Journalism" }
        ]
      },
      {
        role_name: "Software Quality Engineer",
        package: 700000,
        role_desc: [
          { desc_title: "gross compensation package", desc: "Rs. 5,00,000 lpa" },
          { desc_title: "Role Description", desc: "- Generate highly interactive and innovative instructional strategies for e-learning solutions \n- Develop course structure and learning specifications addressing the requirements of the target audience \n- Construct appropriate testing strategies to ensure learners' understanding and performance \n- Address usability issues \n- Keep abreast of new trends in e-learning \n- Ensure that the instructional strategies are as per global standards \n- Prepare instructional design checklists and guidelines \n- Check for quality assurance" },
          { desc_title: "Requirements", desc: "- Experience in creating instructional plans and course maps. \n- Experience in the use of media like graphics, illustrations, photographs, audio, video, animations, and simulations in instruction \n- Awareness of different instructional design models and familiarity with instructional and learning theories \n- Awareness of latest trends in e-learning and instructional design \n- Strong client consulting/interfacing skills. \n- Ability to guide clients to focus on specific objectives and teaching points \n- Strong meeting facilitation, presentation and interpersonal skills \n- A thorough understanding of the web as an instructional medium \n- Post graduate degree in Education, Instructional Design, Mass Communication or Journalism" }
        ]
      }
    ],
    job_desc: [
      { desc_title: "General Instructions", desc: "- We have a two-year indemnity for permanent candidates. We will provide training to the selected candidates.\n- Candidates who have appeared for any test held by Zeus Learning in the past 12 months will not be allowed to appear for this recruitment test." },
      { desc_title: "Instructions for the Exam", desc: "- Candidates are requested to log in half an hour prior to the exam start time as they would need to capture their image using a web camera. By taking this test, you are permitting the examination system to capture your video for invigilation purposes.\n- Candidates would not be able to appear for the exam if the web camera attached to their system is not functional.\n- The web camera of your system must be enabled and must remain switched on throughout the examination. In the event of non-receipt of a webcam, your examination will be considered null and void.\n- Candidate's audio and video will be recorded during the examination and will also be monitored by a live proctor. The proctor may terminate your exam in case he/she observes any malpractice during the exam.\n- Candidates are advised to use their own Laptop/PC with a stable internet connection (min 1 Mbps) during the exam.\n- Candidates cannot use an iOS system/device for this exam." },
      { desc_title: "Minimum System Requirements", desc: "- Personal Laptop or Desktop computer in working condition with good quality camera (you can use Windows 7 and above).\n- The latest version of Google Chrome Browser only.\n- Please note that Internet speed should be minimum 1 Mbps.\n- Do not use a MacBook or iPad for the proctored exam." },
      { desc_title: "Process", desc: "- Every round is an elimination round.Candidates need to clear all rounds to get selected.\n\n- Round I : 4th August, 2018\n- Aptitude Test : 25 Questions\n\n- Round II (Interview) : 4th August, 2018." }
    ],
    slots: [
      { from_time: "09:00:00", to_time: "11:00:00" },
      { from_time: "13:00:00", to_time: "15:00:00" }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

  isNotExpanded = false;
  maxHeight: number = 0;

  toggleExpansion() {
    this.isNotExpanded = !this.isNotExpanded;
    if (this.isNotExpanded) {
      this.maxHeight = 0;
    } else {
      const contentElement = document.querySelector('.job-pre-requisite');
      this.maxHeight = contentElement ? contentElement.scrollHeight : 0;
    }
  }

  convertTo12HourFormat(time24: string) {
    const [hours, minutes, seconds] = time24.split(':');

    let period = 'AM';
    let adjustedHours = parseInt(hours, 10);

    if (adjustedHours >= 12) {
      period = 'PM';
      adjustedHours = adjustedHours > 12 ? adjustedHours - 12 : adjustedHours;
    }

    const time12 = `${adjustedHours.toString().padStart(2, '0')}:${minutes} ${period}`;
    return time12;
  }

  input = document.querySelector("#resume-input");
  fileName = document.querySelector(".file-name");
  inputFile: any;

  uploadResume(event: any): void {
    this.inputFile = event.target.files[0];
    console.log(this.inputFile);
    this.fileName = this.inputFile ? this.inputFile.name : '';
  }

}
