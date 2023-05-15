import {
  MapPinIcon,
  UserGroupIcon,
  AtSymbolIcon,
  LinkIcon,
  UserIcon,
  LightBulbIcon,
  CodeBracketSquareIcon,
  BookOpenIcon,
  StarIcon,
} from "@heroicons/react/24/solid";

import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Avatar,
} from "@material-tailwind/react";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData, highlights } from "@/data";

export function Profile() {
  return (
    <>
      <section className="relative block h-[60vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-1.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>

      <section className="relative bg-blue-gray-50/50 px-12 py-16">
        <div className="container mx-auto">
          <div className="relative -mt-64 mb-6 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="flex w-full justify-center px-4 lg:order-2 lg:w-3/12">
                  <div className="relative">
                    <div className="-mt-20 w-[12rem]">
                      <Avatar
                        src="/img/me-1.jpeg"
                        alt="Profile picture"
                        variant="circular"
                        className="h-full w-full object-top shadow-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-8 text-center">
                <Typography variant="h2" color="blue-gray" className="mb-4">
                  Aubrey Mae A. Mulawan
                </Typography>
                <div className="mb-2 flex items-center justify-center gap-2">
                  <MapPinIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                  <Typography className="font-medium text-blue-gray-700">
                    Macanhan Carmen, CDO City
                  </Typography>
                </div>
                <div className="mb-2 flex items-center justify-center gap-2">
                  <AtSymbolIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                  <Typography className="font-medium text-blue-gray-700">
                    mulawan.aubreymae@gmail.com
                  </Typography>
                </div>
                <div className="mb-2 flex items-center justify-center gap-2">
                  <LinkIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                  <Typography className="font-medium text-blue-gray-700">
                    <a
                      className="hover:text-cyan-500"
                      href="https://www.linkedin.com/in/aubrey-mae-mulawan-5a0015220/"
                    >
                      linkedin.com/in/aubrey-mae-mulawan-5a0015220/
                    </a>
                  </Typography>
                </div>
                <div className="mb-16 flex items-center justify-center gap-2">
                  <LinkIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                  <Typography className="font-medium text-blue-gray-700">
                    <a
                      className="hover:text-cyan-500"
                      href="https://github.com/aubreymaemulawan"
                    >
                      github.com/aubreymaemulawan
                    </a>
                  </Typography>
                </div>
              </div>

              <div className=" border-t border-blue-gray-50 py-6 text-center">
                <div className="mt-4 flex flex-wrap justify-center">
                  <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                    <Typography className=" font-normal text-blue-gray-500">
                      A 4th Year College Student with a degree in Information
                      Technology. I am a motivated individual with a passion for
                      technology and a drive for continuous learning. As an
                      enthusiastic problem solver and creative thinker, I thrive
                      in dynamic environments where I can apply my skills and
                      contribute to meaningful projects. Whether it's
                      programming, troubleshooting, or exploring new
                      technologies, I approach every challenge with dedication
                      and a desire to expand my knowledge. With a strong
                      commitment to excellence and a collaborative mindset, I am
                      excited to make a positive impact in the field of
                      technology and contribute to innovative solutions that
                      shape the future.
                    </Typography>
                  </div>
                </div>
              </div>

              <section className="mt-12 px-4 pb-10 pt-4">
                <div className="container mx-auto">
                  <div className="mx-10 grid grid-cols-1 gap-10 md:grid-cols-1 lg:grid-cols-2">
                    <Card className="items-center justify-center rounded-2xl shadow-lg shadow-gray-900/10">
                      <CardBody className="px-8 text-center">
                        <IconButton
                          variant="gradient"
                          size="lg"
                          color="cyan"
                          className="pointer-events-none mb-6 animate-bounce rounded-full"
                        >
                          {React.createElement(LightBulbIcon, {
                            className: "w-5 h-5 text-white",
                          })}
                        </IconButton>
                        <Typography
                          variant="h5"
                          className="mb-2"
                          color="blue-gray"
                        >
                          Personal Skills
                        </Typography>
                        <Typography className="mt-5 flex flex-row gap-8 text-left font-normal text-blue-gray-600">
                          <ul className="list-disc">
                            <li>Leadership</li>
                            <li>Perseverance</li>
                            <li>Communication</li>
                            <li>Analytical Abilities</li>
                          </ul>
                          <ul className="list-disc">
                            <li>Organization</li>
                            <li>Problem Solving</li>
                            <li>Project Management</li>
                            <li>Interest in Helping Others</li>
                          </ul>
                        </Typography>
                      </CardBody>
                    </Card>
                    <Card className="items-center justify-center rounded-2xl shadow-lg shadow-gray-900/10">
                      <CardBody className="px-8 text-center">
                        <IconButton
                          variant="gradient"
                          size="lg"
                          color="cyan"
                          className="pointer-events-none mb-6 animate-bounce rounded-full"
                        >
                          {React.createElement(CodeBracketSquareIcon, {
                            className: "w-5 h-5 text-white",
                          })}
                        </IconButton>
                        <Typography
                          variant="h5"
                          className="mb-2"
                          color="blue-gray"
                        >
                          Technical Skills
                        </Typography>
                        <Typography className="mt-5 flex flex-row gap-8 text-left font-normal text-blue-gray-600">
                          <ul className="list-disc">
                            <li>PHP/Laravel</li>
                            <li>
                              Javascript/JQuery/
                              <br />
                              ReactJS
                            </li>
                            <li>Python/DJango</li>
                          </ul>
                          <ul className="list-disc">
                            <li>Dart/Flutter</li>
                            <li>MySQL</li>
                            <li>Java</li>
                            <li>Selenium Robot Framework</li>
                          </ul>
                        </Typography>
                      </CardBody>
                    </Card>
                  </div>
                </div>
              </section>

              <section id="about-me" className="px-4 pb-20">
                <div className="container mx-auto">
                  <div className="mt-32 flex flex-wrap items-start">
                    <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
                      <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                        <UserIcon className="h-6 w-6 text-cyan-500" />
                      </div>
                      <Typography
                        variant="h3"
                        className="mb-3 font-bold"
                        color="blue-gray"
                      >
                        About Me
                      </Typography>
                      <Typography className="mb-8 font-normal text-blue-gray-500 ">
                        I'm Aubrey Mae Mulawan, also known as 'Brie.' As an
                        enthusiastic IT student specializing in software
                        development, I am passionate about coding, web/mobile
                        development, and database management. Proficient in PHP,
                        JavaScript, HTML, CSS, and Java, I create functional
                        software and user-friendly websites. I embarked on my IT
                        journey in Senior High School, focusing on the TVL-IT
                        Programming track. Currently pursuing my Bachelor's
                        degree in Information Technology, I consistently excel
                        in programming classes, achieving the dean's list and
                        standing out as a top student.
                        <br />
                        <br />
                        Committed to continuous learning, I stay updated on the
                        latest IT trends through workshops and online
                        communities. With strong analytical and problem-solving
                        skills, I collaborate effectively to find innovative
                        solutions. Let's connect and shape the future of IT
                        together!
                      </Typography>
                    </div>
                    <div className="mx-auto mt-12 flex h-full w-full items-center justify-center px-4 md:w-4/12 lg:mt-0">
                      <Card className="shadow-lg shadow-gray-500/10">
                        <CardHeader className="relative h-[75%]">
                          <img
                            alt="Card Image"
                            src="/img/me-2.png"
                            className="h-full w-full object-cover object-center"
                          />
                        </CardHeader>
                        <CardBody>
                          <Typography
                            variant="h5"
                            color="blue-gray"
                            className="mb-3 font-bold"
                          >
                            Future Software Engineer
                          </Typography>
                          <Typography className="font-normal text-blue-gray-500">
                            Passionate learner who excel on coding, web/mobile
                            development, and database management.
                          </Typography>
                        </CardBody>
                      </Card>
                    </div>
                  </div>

                  <div className="mt-16 flex flex-wrap items-center rounded-xl ">
                    <div className="mx-auto flex h-full w-full items-center justify-center px-4 md:w-4/12 lg:mt-0">
                      <Card className="shadow-lg shadow-gray-500/10">
                        <CardHeader className="relative h-[75%]">
                          <img
                            alt="Card Image"
                            src="/img/me.jpeg"
                            className="h-full w-full object-cover object-center"
                          />
                        </CardHeader>
                        <CardBody>
                          <Typography
                            variant="h5"
                            color="blue-gray"
                            className="mb-3 font-bold"
                          >
                            Educational Excellence: From Elementary to Tertiary
                            Achievements
                          </Typography>
                          <Typography className="font-normal text-blue-gray-500">
                            A Journey of Academic Excellence and Scholarly
                            Achievements
                          </Typography>
                        </CardBody>
                      </Card>
                    </div>
                    <div className=" mx-auto mt-12 w-full px-4 md:w-5/12">
                      <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                        <BookOpenIcon className="h-6 w-6 text-cyan-500" />
                      </div>
                      <Typography
                        variant="h3"
                        className="mb-3 font-bold"
                        color="blue-gray"
                      >
                        Education
                      </Typography>
                      <Typography className="mb-8 font-normal text-blue-gray-500 ">
                        <div className="flex  flex-row justify-start">
                          <div className="w-full">
                            <ul className=" list-disc">
                              <li className="mb-2">
                                <div className="flex flex-row justify-between ">
                                  <span className="font-medium">PRIMARY</span>
                                  <span className="italic">2007 - 2013</span>
                                </div>
                                Macanhan Elementary School
                              </li>
                              <li className="mb-2">
                                <div className="flex flex-row justify-between">
                                  <span className="font-medium">SECONDARY</span>
                                  <span className="italic">2013 - 2017</span>
                                </div>
                                Carmen National High School
                              </li>
                              <li className="mb-2">
                                <div className="flex flex-row justify-between">
                                  <span className="font-medium">
                                    UPPER SECONDARY
                                  </span>
                                  <span className="italic">2017 - 2019</span>
                                </div>
                                Phinma Cagayan de Oro College
                                <br />
                                <span className="italic">
                                  TVL - IT Programming Track
                                </span>
                                <ul className="ml-5 list-decimal text-[14px]">
                                  <li>Grade 11 With Honors</li>
                                  <li>Grade 12 With Honors</li>
                                </ul>
                              </li>
                              <li className="mb-2 ">
                                <div className="flex flex-row justify-between">
                                  <span className="font-medium"> TERTIARY</span>
                                  <span className="italic">2019 - 2023</span>
                                </div>
                                University of Science and Technology of <br />
                                Southern Philippines
                                <br />
                                <span className="italic">
                                  Bachelor of Science in Information Technology
                                </span>
                                <ul className="ml-5 list-decimal text-[14px]">
                                  <li>
                                    1st Year Deans Lister - 1st & 2nd Semester
                                  </li>
                                  <li>
                                    2nd Year Deans Lister - 1st & 2nd Semester
                                  </li>
                                  <li>
                                    3rd Year Deans Lister - 1st & 2nd Semester
                                  </li>
                                  <li>4th Year Deans Lister - 1st Semester</li>
                                  <li>
                                    City Scholarship Program (ISDA) Scholar
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </Typography>
                    </div>
                  </div>
                </div>
              </section>

              <section id="pre-experience" className="px-4 pb-32">
                <div className="container mx-auto">
                  <div className="mt-16 flex flex-wrap items-start">
                    <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
                      <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                        <UserGroupIcon className="h-6 w-6 text-cyan-500" />
                      </div>
                      <Typography
                        variant="h3"
                        className="mb-3 font-bold"
                        color="blue-gray"
                      >
                        Pre-Professional Experience
                      </Typography>
                      <Typography className="mb-8 font-normal text-blue-gray-500 ">
                        <div className="flex  flex-row justify-start">
                          <div className="w-full">
                            <ul className=" list-disc">
                              <li className="mb-2 ">
                                <div className="flex flex-row justify-between">
                                  <span className="font-medium">AORBTS</span>
                                  <span className="italic">
                                    12/2020 - 03/2021
                                  </span>
                                </div>
                                Masterson Avenue CDO City
                                <div className="mt-3">
                                  <span className="italic">
                                    Digital Marketing Associate - Part Time
                                  </span>
                                  <ul className="ml-5 list-decimal text-[14px]">
                                    <li>
                                      Successfully generated digital marketing
                                      campaigns and programs for a company.
                                    </li>
                                    <li>
                                      Optimized search engines for client's
                                      website to subsequently rank higher in the
                                      search results on major search engines
                                      like Google.
                                    </li>
                                    <li>
                                      Optimized search engines for client’s
                                      website to subsequently rank higher in the
                                      search results on major search engines
                                      like Google.
                                    </li>
                                  </ul>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </Typography>
                    </div>
                    <div className="mx-auto mt-12 flex h-full w-full items-center justify-center px-4 md:w-4/12 lg:mt-0">
                      <Card className="shadow-lg shadow-gray-500/10">
                        <CardHeader className="relative h-[75%]">
                          <img
                            alt="Card Image"
                            src="/img/dig.png"
                            className="h-full w-full object-cover object-center"
                          />
                        </CardHeader>
                        <CardBody>
                          <Typography
                            variant="h5"
                            color="blue-gray"
                            className="mb-3 font-bold"
                          >
                            Part-Time Digital Marketing Associate at AORBITZ
                          </Typography>
                          <Typography className="font-normal text-blue-gray-500">
                            Harnessing the Power of Digital Marketing to Propel
                            Businesses Forward
                          </Typography>
                        </CardBody>
                      </Card>
                    </div>
                  </div>

                  <div className="mt-32 flex flex-wrap items-center">
                    <div className="mx-auto flex h-full w-full items-center justify-center px-4 md:w-4/12 lg:mt-0">
                      <Card className="shadow-lg shadow-gray-500/10">
                        <CardHeader className="relative h-[75%]">
                          <img
                            alt="Card Image"
                            src="/img/achieve.jpg"
                            className="h-full w-full object-cover object-center"
                          />
                        </CardHeader>
                        <CardBody>
                          <Typography
                            variant="h5"
                            color="blue-gray"
                            className="mb-3 font-bold"
                          >
                            1st Runner Up at NSTW Pitching Competition
                          </Typography>
                          <Typography className="font-normal text-blue-gray-500">
                            Combining Tech Innovation and Entrepreneurial Skills
                            for a Winning Formula
                          </Typography>
                        </CardBody>
                      </Card>
                    </div>
                    <div className="mx-auto mt-12 w-full px-4 md:w-5/12">
                      <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                        <StarIcon className="h-6 w-6 text-cyan-500" />
                      </div>
                      <Typography
                        variant="h3"
                        className="mb-3 font-bold"
                        color="blue-gray"
                      >
                        Academic Achievements
                      </Typography>
                      <Typography className="mb-8 font-normal text-blue-gray-500 ">
                        <div className="flex  flex-row justify-start">
                          <div className="w-full">
                            <ul className=" list-disc">
                              <li className="mb-2 ">
                                <div className="flex flex-row justify-between">
                                  <span className="font-medium uppercase">
                                    NSTW 1st Runner Up Pitching Competition
                                  </span>
                                  <span className="italic">11/2021</span>
                                </div>
                                University of Science and Technology of <br />
                                Southern Philippines
                                <div className="mt-3">
                                  <span className="italic">Team Leader</span>
                                  <ul className="ml-5 list-decimal text-[14px]">
                                    <li>
                                      Led a three-person team for a
                                      Technopreneurship subject which aims to
                                      combine student's technological
                                      advancements and entrepreneurial skills.
                                      Out of all sections in the IT Department
                                      our group was chosen to pitch for the NSTW
                                      competition and won 2nd runner up.
                                    </li>
                                    <li>
                                      Created marketing strategies for our
                                      product as well as developed an
                                      interactive website that was deployed on a
                                      web hosting site.
                                    </li>
                                  </ul>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </Typography>
                    </div>
                  </div>
                </div>
              </section>

              {/* 
              <section id="learn-at-fligno" className="px-4 pb-20 pt-4">
                <div className="container mx-auto">
                  <div className="mt-12 flex  flex-wrap items-center">
                    <div className="mx-auto mt-12 flex h-full w-full items-center justify-center px-4 md:w-4/12 ">
                      <Card className="shadow-lg shadow-gray-500/10">
                        <CardHeader className="relative h-[75%]">
                          <img
                            alt="Card Image"
                            src="/img/fligno/6.jpg"
                            className="h-full w-full object-cover object-center"
                          />
                        </CardHeader>
                        <CardBody>
                          <Typography
                            variant="h5"
                            color="blue-gray"
                            className="mb-3 font-bold"
                          >
                            Learn At Fligno
                          </Typography>
                          <Typography className="font-normal text-blue-gray-500">
                            Basic CRUD Laravel API training with Software
                            Engineers of Fligno. It was a fun and engaging
                            experience, kuddos to the trainors who were very
                            attentive to our questions ;)
                          </Typography>
                        </CardBody>
                      </Card>
                    </div>
                    <div className="mx-auto mt-12 w-full px-4 md:w-5/12">
                      <Typography className="mb-8 font-normal text-blue-gray-500 ">
                        Fligno has always prioritized the growth and development
                        of its employees, and one of the ways they exemplified
                        this was through their engaging learning sessions. The
                        company recognized the importance of continuous learning
                        in the ever-evolving field of technology, and they
                        actively encouraged us to participate in these valuable
                        sessions. Whether it was workshops, training programs,
                        or guest speaker sessions, Fligno provided us with
                        opportunities to expand our knowledge and enhance our
                        skills. These learning sessions were thoughtfully
                        designed to cover a wide range of topics, from the
                        latest industry trends to emerging technologies. By
                        joining these sessions, we were able to stay abreast of
                        the cutting-edge advancements in our field and
                        strengthen our expertise.
                      </Typography>
                    </div>
                  </div>
                </div>
              </section> */}

              {/* <section id="academic-projects" className="px-4 pb-32 pt-20">
                <div className="container mx-auto">
                  <PageTitle heading="Academic Projects">
                    Immensely grateful for the opportunity to collaborate with
                    these exceptional individuals. Our collaborative environment
                    fostered a sense of camaraderie and teamwork, where ideas
                    were freely shared, and diverse perspectives were valued.
                  </PageTitle>
                  <div className="mx-3 mt-12 grid grid-cols-1 gap-20 gap-x-10 gap-y-10 md:grid-cols-2 lg:mx-20 lg:mt-24 xl:grid-cols-4">
                    {highlights.map(({ img, name }) => (
                      <TeamCard key={name} img={img} name={name} />
                    ))}
                  </div>
                </div>
              </section> */}

              <section
                id="academic-projects"
                className="border-t px-4 pb-32 pt-24"
              >
                <div className="container mx-auto">
                  <PageTitle heading="Academic Projects">
                    Worked on various academic projects throughout my IT
                    journey, which have allowed me to apply my knowledge and
                    skills in practical settings. Here are a few notable
                    projects I have completed:
                  </PageTitle>
                  <div className="mx-3 mt-12 grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-1 lg:mx-20 lg:mt-24 lg:gap-y-24 xl:grid-cols-2">
                    <Card color="transparent" shadow={false}>
                      <div className="h-[50%] overflow-hidden rounded-2xl shadow-md shadow-gray-800">
                        <Avatar
                          src="/img/a-1.jpg"
                          alt="fligno-15"
                          className="h-full w-full object-center shadow-lg shadow-gray-500/25 transition delay-150 ease-in-out hover:scale-125 "
                        />
                      </div>
                      <div className="h-[50%]">
                        <Typography
                          variant="h5"
                          color="blue-gray"
                          className="mb-1 mt-6"
                        >
                          Development of a Real Time Bus Tracking and Scheduling
                          System Using GPS For Agora Bus Terminal
                        </Typography>
                        <Typography className="text-justify font-normal text-blue-gray-500">
                          Project Manager, Web/Mobile Developer
                        </Typography>
                        <div className="mx-auto mt-5 justify-start">
                          <ul className="ml-3 list-disc">
                            <li>
                              <Typography className="text-justify text-[14px]">
                                Led a four-person research team to establish and
                                develop a real time bus tracking system for
                                agora bus terminal to enable the rural community
                                to have an easy access on bus trip schedules.
                              </Typography>
                            </li>
                            <li>
                              <Typography className="text-justify text-[14px]">
                                Applied strong programming competency on
                                frameworks like Laravel, JavaScript, and google
                                maps as well as efficient hardware calibration
                                skills to test and evaluate GPS device.
                              </Typography>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Card>
                    <Card color="transparent" shadow={false}>
                      <div className="h-[50%] overflow-hidden rounded-2xl shadow-md shadow-gray-800">
                        <Avatar
                          src="/img/web-2.png"
                          alt="fligno-15"
                          className=" h-full w-full object-center shadow-lg shadow-gray-500/25 transition delay-150 ease-in-out hover:scale-125 "
                        />
                      </div>
                      <div className="h-[50%]">
                        <Typography
                          variant="h5"
                          color="blue-gray"
                          className="mb-1 mt-6"
                        >
                          Bridget's Station POS System
                        </Typography>
                        <Typography className="text-justify font-normal text-blue-gray-500">
                          Backend Developer
                        </Typography>
                        <div className="mx-auto mt-5 justify-start">
                          <ul className="ml-3 list-disc">
                            <li>
                              <Typography className="text-justify text-[14px]">
                                Used programming abilities to integrate the
                                front-end component as well as server-side web
                                application logic. Made sure that the client's
                                website functions properly, paying special
                                attention to the servers, databases, back-end
                                logic, application programming interfaces
                                (APIs), and architecture.
                              </Typography>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Card>
                    <Card color="transparent" shadow={false}>
                      <div className="h-[60%] overflow-hidden rounded-2xl shadow-md shadow-gray-800">
                        <Avatar
                          src="/img/web-3.JPG"
                          alt="fligno-15"
                          className=" h-full w-full object-center shadow-lg shadow-gray-500/25 transition delay-150 ease-in-out hover:scale-125 "
                        />
                      </div>
                      <div className="h-[40%]">
                        <Typography
                          variant="h5"
                          color="blue-gray"
                          className="mb-1 mt-6"
                        >
                          Development of a Real Time Flood Monitoring System
                        </Typography>
                        <Typography className="text-justify font-normal text-blue-gray-500">
                          Web Developer
                        </Typography>
                        <div className="mx-auto mt-5 justify-start">
                          <ul className="ml-3 list-disc">
                            <li>
                              <Typography className="text-justify text-[14px]">
                                Successfully created a database and interactive
                                website that uses real-time data from an IoT
                                device to track local water levels.
                              </Typography>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Card>
                    <Card color="transparent" shadow={false}>
                      <div className="h-[60%] overflow-hidden rounded-2xl shadow-md shadow-gray-800">
                        <Avatar
                          src="/img/web-4.png"
                          alt="fligno-15"
                          className="h-full w-full object-center shadow-lg shadow-gray-500/25 transition delay-150 ease-in-out hover:scale-125 "
                        />
                      </div>
                      <div className="h-[40%] ">
                        <Typography
                          variant="h5"
                          color="blue-gray"
                          className="mb-1 mt-6"
                        >
                          An IOT-Based Home Security Alert Notifier Using Facial
                          Recognition
                        </Typography>
                        <Typography className="text-justify font-normal text-blue-gray-500">
                          Backend Developer
                        </Typography>
                        <div className="mx-auto mt-5 justify-start">
                          <ul className="ml-3 list-disc">
                            <li>
                              <Typography className="text-justify text-[14px]">
                                Integrated front-end and server-side web logic
                                using programming skills. Ensured proper
                                functioning of the website by focusing on
                                servers, databases, back-end logic, APIs, and
                                architecture.
                              </Typography>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </section>

              <section
                id="passion-values"
                className="border-t px-4 pb-32 pt-24"
              >
                <div className="container mx-auto">
                  <PageTitle heading="Passion & Values">
                    Transforming Lives Through Technology: <br />
                    Driven by Passion, Guided by Values
                  </PageTitle>
                </div>
                <div className=" border-blue-gray-50 py-6 text-center">
                  <div className="mt-4 flex flex-wrap justify-center">
                    <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                      <Typography className=" font-normal text-blue-gray-500">
                        As an IT, I have a deep passion for using technology to
                        create positive change and improve people's lives. I
                        enjoy developing innovative software solutions and
                        leveraging cutting-edge technologies to make a tangible
                        impact in the world of IT. My values revolve around
                        integrity, ethical conduct, respect, empathy,
                        collaboration, lifelong learning, and personal growth. I
                        believe in operating with honesty and accountability,
                        fostering inclusive environments, valuing diverse
                        perspectives, working collaboratively, and continuously
                        expanding my knowledge to stay innovative and make a
                        lasting impact.
                      </Typography>
                    </div>
                  </div>
                </div>
              </section>

              {/* <section
                id="personal-interest"
                className="border-t px-4 pb-32 pt-24"
              >
                <div className="container mx-auto">
                  <PageTitle heading="Personal Interest">
                    Embracing Passions, Achieving Excellence: Finding Harmony in
                    Programming, Chess, Photography, and More!
                  </PageTitle>
                  <div className="flex flex-wrap items-start">
                    <div className="mx-auto mt-12  w-full px-4 md:w-5/12 lg:mt-24">
                      <Typography className="mb-8 font-normal text-blue-gray-500 ">
                        I have a diverse range of personal interests that
                        encompass various activities and hobbies. I find joy and
                        fulfillment in programming, chess, photography, enjoying
                        a cup of coffee, dancing, singing, watching KDrama and
                        Marvel movies, and indulging in cozy mornings while
                        listening to music.
                        <br />
                        <br />
                        On the flip side, I have dislikes as well. I prefer calm
                        and organized environments, and I am not fond of chaotic
                        or loud situations. I also dislike closed-mindedness,
                        rushing, and conflicts, as they disrupt my sense of
                        peace and productivity. In terms of achievements, I take
                        pride in being a consistent Dean's Lister throughout
                        college and graduating with honors in Senior High
                        School. I also earned the 1st Runner Up position in the
                        NSTW Pitching Competition, showcasing my skills and
                        expertise.
                        <br />
                        <br />
                        Overall, my personal interests reflect a balance between
                        intellectual pursuits, creative outlets, and moments of
                        relaxation, all while striving for personal and academic
                        excellence.
                      </Typography>
                    </div>
                    <div className="mx-auto mt-12 flex-col items-start justify-start px-4 md:w-4/12 lg:mt-24">
                      <div className=" grid grid-cols-1 gap-5 md:grid-cols-1 xl:grid-cols-1">
                        <TeamCard
                          key="1"
                          img="/img/fligno/3.jpg"
                          name="fligno-pitch-1"
                        />
                        <TeamCard
                          key="2"
                          img="/img/fligno/4.jpg"
                          name="fligno-pitch-2"
                        />
                        <TeamCard
                          key="3"
                          img="/img/fligno/5.jpg"
                          name="fligno-pitch-3"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section> */}
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

export default Profile;
