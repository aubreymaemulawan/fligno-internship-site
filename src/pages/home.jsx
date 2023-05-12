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
} from "@material-tailwind/react";
import { UserIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
export function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pb-32 pt-16">
        <div className="bg-start bg-start absolute top-0 h-full w-full bg-[url('/img/4.jpeg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                shadow={true}
                className="mb-6 font-black drop-shadow-lg"
              >
                Hello, World! Meet <br className="lg:hidden" />[
                <span className="text-cyan-400"> "Aubrey" </span>]
              </Typography>
              <Typography variant="lead" color="white" className=" opacity-80">
                An aspiring Software Engineer armed with a passion for
                innovation. Join me as I share insights, and reflections, giving
                you a glimpse into the person behind the words.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-28 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="mx-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <UserIcon className="h-6 w-6 text-blue-gray-900" />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Get to Know Me
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500 ">
                Hi there! My name is{" "}
                <span className="font-semibold"> Aubrey Mae Mulawan</span>, and
                I'm delighted to share a little about myself with you. I'm a
                passionate IT enthusiast, with a love for Web/Mobile App
                Development. I'm constantly curious and seeking new knowledge,
                which is why I love learning and exploring different subjects.
                <br />
                <br />
                As a lifelong learner, I am always seeking out new challenges
                and opportunities to expand my knowledge and skills. Whether
                it's developing software, troubleshooting complex problems, or
                staying up-to-date with the latest industry trends, I am
                constantly pushing myself to be the best I can be.
                <br />
                <br />
                Aside from my passion for IT, I also have some hobbies that I
                enjoy sharing with others. Dancing, singing, and photography are
                just a few of the hobbies that I love to engage in when I have
                some free time. I find peace and tranquility in these
                activities, as they allow me to relax my mind and soul. When I'm
                not at home, you can often find me at coffee shops. These cozy
                establishments provide me with a safe haven where I can unwind
                and recharge.
                <br />
                <br />
                Lastly, I believe in living life to the fullest and always
                strive to inspire and uplift others around me.
              </Typography>
            </div>
            <div className="mx-auto mt-12 flex h-full w-full items-center justify-center px-4 md:w-4/12 lg:mt-24">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="relative h-[75%]">
                  <img
                    alt="Card Image"
                    src="/img/6.jpg"
                    className="h-full w-full object-cover object-center"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6 animate-pulse"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    I am a little shy so if you see me please say hi. ;)
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="px-4 pb-48 pt-20">
        <div className="container mx-auto">
          <PageTitle heading="Highlights Of My Life">
            Here are some photos of me doing my likes.
          </PageTitle>
          <div className="mx-20 mt-24 grid grid-cols-1 gap-20 gap-x-10 gap-y-10 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name }) => (
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-lg fa-${name}`} />
                      </IconButton>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section> */}
      <section className=" bg-blue-gray-50/50 px-4 py-24">
        <div className="container mx-auto">
          <PageTitle heading="One Line At A Time: My IT Experience">
            "Technology is just a tool. In terms of getting the kids working
            together and motivating them, the teacher is the most important." -
            Bill Gates
          </PageTitle>
          <div className="mt-12 flex flex-wrap items-start lg:mt-32">
            <div className="mx-auto  w-full px-4 md:w-5/12 ">
              <Typography className="mb-8 font-normal text-blue-gray-500 ">
                I'm really not a tech-savvy kind of person growing up, having no
                background and experience on how technology evolves or even how
                to open a browser is still a challenge, that's why it was really
                a surprise that I decided to pursue a degree in Information
                Technology. During my studies, I took every opportunity to gain
                hands-on experience and learn new skills. <br />
                <br />
                As a freshman, I taught myself programming, which I found to be
                a challenging but rewarding experience as I tried to comprehend
                data exchange and engineering principles for application
                development. In addition, I completed several freelance
                projects, such as designing websites and creating software for
                school assignments, which allowed me to apply my programming
                skills to real-world situations. My sophomore year was a
                challenging moment not just for me but for everyone of us due to
                pandemic. However, I decided to make the most of my time by
                focusing on enhancing my programming skills. I spent a lot of
                time practicing website creation and learning new frameworks
                with the help of online resources such as YouTube and Google.{" "}
                <br />
                <br />
                As I entered my junior year, I was given the opportunity to lead
                school projects. This experience taught me how to manage teams
                effectively and overcome obstacles that inevitably arise during
                a project. I learned how to handle burnout and avoidable
                problems, which were valuable lessons that I will carry with me
                throughout my career in IT. Now, as a senior, I am excited to
                embark on the next chapter of my career in IT. My experiences as
                a student have taught me the importance of networking, hands-on
                experience, and a passion for learning in the ever-evolving
                field of technology.
              </Typography>
            </div>
            <div className="mx-auto flex-col items-start justify-start px-4 md:w-4/12 ">
              {/* <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="relative h-[75%]">
                  <img
                    alt="Card Image"
                    src="/img/6.jpg"
                    className="h-full w-full object-cover object-center"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    I am a little shy so if you see me please say hi. ;)
                  </Typography>
                </CardBody>
              </Card> */}
              {/* <div className="h-[50%]"> */}
              {/* <div className=" -mt-8 grid grid-cols-1 gap-5 md:grid-cols-1 xl:grid-cols-1"> */}
              <div className=" grid grid-cols-1 gap-5 md:grid-cols-1 xl:grid-cols-1">
                {teamData.map(({ img, name, position, socials }) => (
                  <TeamCard
                    key={name}
                    img={img}
                    name={name}
                    position={position}
                    // socials={
                    //   <div className="flex items-center gap-2">
                    //     {socials.map(({ color, name }) => (
                    //       <IconButton key={name} color={color} variant="text">
                    //         <i className={`fa-brands text-lg fa-${name}`} />
                    //       </IconButton>
                    //     ))}
                    //   </div>
                    // }
                  />
                ))}
              </div>
              {/* </div> */}
              {/* </div> */}
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

export default Home;
