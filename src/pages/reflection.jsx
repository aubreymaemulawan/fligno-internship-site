import React from "react";
import { Avatar, Typography, Button } from "@material-tailwind/react";
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";

export function Reflection() {
  return (
    <>
      <section className="relative block h-[70vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/fligno/6.JPG')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>
      <section className="relative bg-blue-gray-50/50 px-12 py-16">
        <div className="container mx-auto">
          <div className="relative -mt-64 mb-6 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
            <div className="px-6">
              <div className="my-16 text-center">
                <Typography variant="h2" color="blue-gray" className="mb-2">
                  An Enriching Journey as an Intern at{" "}
                  <span className="text-cyan-600">Fligno</span>
                </Typography>
                <div className="mb-16 flex items-center justify-center gap-2">
                  <MapPinIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                  <Typography className="font-medium text-blue-gray-700">
                    Fligno Software Philippines
                  </Typography>
                </div>
              </div>

              <div className="mb-10 border-t border-blue-gray-50 py-6 text-justify">
                <div className="mt-2 flex flex-wrap justify-center">
                  <div className="divide flex w-full flex-col items-center px-4 lg:w-9/12">
                    <Typography className="my-12 font-normal text-blue-gray-500">
                      <span className="ml-20"></span> My experience as an intern
                      at Fligno was a transformative period in my professional
                      journey, offering me invaluable insights into the
                      company's operations and a platform to apply my skills and
                      knowledge. Join me as I will delve into the various
                      aspects of my internship, sharing details about the
                      department I worked in, my contributions to the team,
                      specific accomplishments, lessons learned, the company
                      culture, memorable events, recommendations for future
                      practicum experiences, and advice for future interns.
                    </Typography>

                    <Typography className="mb-8 font-normal text-blue-gray-500">
                      <Typography
                        color="inherit"
                        variant="lead"
                        className="font-medium"
                      >
                        1. The Department and Methods of Operation
                      </Typography>{" "}
                      <br />
                      During my internship at Fligno, I was assigned to the
                      Research and Development (R&D) department. This department
                      was responsible for designing and developing innovative
                      software solutions for clients. The team operated using an
                      agile methodology, promoting collaboration, adaptability,
                      and iterative development. Daily stand-up meetings, sprint
                      planning, and frequent code reviews were essential
                      elements in ensuring efficient and high-quality
                      deliverables.
                      <br />
                      <br />
                      <Typography
                        color="inherit"
                        variant="lead"
                        className="font-medium"
                      >
                        2. My Contribution to the Department
                      </Typography>{" "}
                      <br />
                      As an intern, I brought a fresh perspective and a strong
                      willingness to learn and contribute. I actively
                      participated in team discussions, sharing ideas, and
                      offering suggestions for improving development processes.
                      I also assisted in the testing and debugging of software,
                      helping to identify and resolve issues to enhance the
                      overall quality of the products being developed. Through
                      my dedication and proactive approach, I aimed to add value
                      to the department and support the team in achieving their
                      goals.
                      <br />
                      <br />
                      <Typography
                        color="inherit"
                        variant="lead"
                        className="font-medium"
                      >
                        3. Accomplishments and Hours Spent
                      </Typography>{" "}
                      <br />
                      Throughout my practicum, I spent my hours engaged in a
                      variety of tasks and projects. I successfully issued
                      important bugs on their existing apps, developed the
                      backend as well as frontsend side of our internship
                      project, and learned new programming languages and
                      frameworks. Additionally, I actively contributed to the
                      team's code repository, conducting code reviews, and
                      suggesting optimizations. These accomplishments allowed me
                      to strengthen my technical skills and gain practical
                      experience in software development.
                      <br />
                      <br />
                      <Typography
                        color="inherit"
                        variant="lead"
                        className="font-medium"
                      >
                        4. Lessons Learned
                      </Typography>{" "}
                      <br />
                      Working at Fligno provided me with numerous valuable
                      lessons. Firstly, I learned the importance of effective
                      communication within a team. Clear and concise
                      communication was crucial for project success and
                      fostering collaboration. Additionally, I developed a
                      deeper understanding of agile development methodologies
                      and the iterative nature of software development.
                      Furthermore, I honed my problem-solving abilities and
                      learned to embrace challenges as opportunities for growth.
                      <br />
                      <br />
                      <Typography
                        color="inherit"
                        variant="lead"
                        className="font-medium"
                      >
                        5. Experience with People in the Company
                      </Typography>{" "}
                      <br />
                      My experience with the people at Fligno was incredibly
                      positive. The company fostered a supportive and
                      collaborative environment where everyone was approachable
                      and willing to lend a helping hand. From the senior
                      developers to my fellow interns, I felt welcomed and
                      valued as a part of the team. The camaraderie and
                      knowledge-sharing among colleagues made for a conducive
                      learning atmosphere.
                      <br />
                      <br />
                      <Typography
                        color="inherit"
                        variant="lead"
                        className="font-medium"
                      >
                        6. Most Memorable Event
                      </Typography>{" "}
                      <br />
                      The most memorable event during my practicum was when the
                      team successfully pitched a Curatoro that we had been
                      working on for weeks. Witnessing the culmination of our
                      efforts and the positive response from the executives was
                      truly rewarding. The event not only highlighted the
                      effectiveness of teamwork but also reinforced the
                      significance of perseverance and dedication in achieving
                      collective goals.
                      <br />
                      <br />
                      <Typography
                        color="inherit"
                        variant="lead"
                        className="font-medium"
                      >
                        7. Recommendations for Future Practicum Experiences
                      </Typography>{" "}
                      <br />
                      To facilitate practicum experiences in the future, I would
                      recommend that the company provide interns with more
                      structured mentorship programs. Assigning mentors who can
                      guide interns throughout their internship journey would
                      greatly enhance their learning and overall experience.
                      Additionally, offering regular feedback sessions and
                      performance evaluations would provide interns with a
                      clearer understanding of their progress and areas for
                      improvement.
                      <br />
                      <br />
                      <Typography
                        color="inherit"
                        variant="lead"
                        className="font-medium"
                      >
                        8. Advice for Future Interns
                      </Typography>{" "}
                      <br />
                      For future interns at Fligno, my advice would be to
                      embrace every opportunity for learning and growth. Take
                      initiative, ask questions, and seek guidance from
                      experienced professionals. Be proactive in seeking out
                      challenging tasks and projects that will allow you to
                      stretch your capabilities. Lastly, foster relationships
                      with your colleagues, as they can serve as valuable
                    </Typography>

                    <Typography className="my-8 font-normal text-blue-gray-500">
                      Ultimately, my internship at Fligno was a defining chapter
                      in my professional life. It equipped me with
                      industry-relevant skills, exposed me to real-world
                      challenges, and instilled a passion for innovation and
                      excellence. The journey not only solidified my aspirations
                      in the IT field but also set the foundation for a
                      promising career filled with continuous growth and
                      meaningful contributions.
                      <span className="mt-10 flex flex-row">
                        Thank you FLIGNO Family
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="ml-2 h-6 w-6 animate-pulse"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>
                      </span>
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Reflection;
