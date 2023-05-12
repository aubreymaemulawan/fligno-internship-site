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
import { UserIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData, highlights } from "@/data";
export function Journal() {
  return (
    <>
      <div className="relative flex h-screen content-center items-end justify-center pb-32 pt-16">
        <div className="bg-start bg-start absolute top-0 h-full w-full bg-[url('/img/1.JPG')] bg-cover bg-center" />
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
                Cherished Connections,
                <br /> Unforgettable{" "}
                <span className="text-cyan-400">Growth</span> .
              </Typography>
              <Typography variant="lead" color="white" className=" opacity-80">
                A defining chapter in my professional life that equipped me with
                industry-relevant skills, exposed me to real-world challenges,
                and instilled a passion for innovation and excellence.
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <section id="welcoming" className=" bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="mt-32 flex flex-wrap items-start">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <UserIcon className="h-6 w-6 text-blue-gray-900" />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                My Internship Journey at <br />
                <a
                  className="font-semibold text-cyan-500 "
                  href="https://fligno.com/"
                >
                  Fligno Software Philippines
                </a>{" "}
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500 ">
                My time as an intern at Fligno was a truly enriching experience.
                From the moment I stepped through their doors, I was greeted
                with a warm and supportive environment that fostered growth and
                learning. During my internship, I had the opportunity to work
                alongside skilled professionals in the IT industry. This allowed
                me to witness firsthand the inner workings of a reputable
                company and gain practical knowledge that cannot be acquired
                through textbooks alone.
              </Typography>
            </div>
            <div className="mx-auto mt-12 flex h-full w-full items-center justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="relative h-[75%]">
                  <img
                    alt="Card Image"
                    src="/img/fligno/1.png"
                    className="h-full w-full object-cover object-center"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold"
                  >
                    Welcoming Family
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    The HR Management was very thoughtful on introducing us to
                    all the employees of the company. Which made us feel special
                    of course :)
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
                    src="/img/fligno/2.JPG"
                    className="h-full w-full object-cover object-center"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold"
                  >
                    Best Mentorship
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    Big thanks to Mr. Richard who had pushed us to bring out our
                    true potential and empowered us with real life situations
                    that we will surely bring on to our next journey :)
                  </Typography>
                </CardBody>
              </Card>
            </div>
            <div className="mx-auto mt-12 w-full px-4 md:w-5/12">
              <Typography className="mb-8 font-normal text-blue-gray-500 ">
                Under the guidance and mentorship of MR. Richard Badlisan, I was
                entrusted with various responsibilities and projects. Whether it
                was developing software solutions, project testing, or
                collaborating with cross-functional teams, each task provided me
                with invaluable hands-on experience and a chance to apply the
                theories and skills I had learned during my studies.
                <br />
                <br />
                Throughout my journey, he emphasized not just technical
                competence, but also the importance of teamwork, effective
                communication, and problem-solving. I had the privilege of
                working alongside a diverse and talented group of individuals
                who are also interns who not only challenged me to grow
                professionally but also fostered a supportive and collaborative
                atmosphere.
              </Typography>
            </div>
          </div>
        </div>
      </section>

      <section id="curatoro-pitch" className=" bg-blue-gray-50/50 px-4 py-24">
        <div className="container mx-auto">
          <PageTitle heading="CURATORO: Product Pitching">
            Pitching a product to the executives of Fligno was a remarkable
            experience that stretched my abilities and broadened my perspective.
          </PageTitle>
          <div className="flex flex-wrap items-start">
            <div className="mx-auto mt-12  w-full px-4 md:w-5/12 lg:mt-24">
              <Typography className="mb-8 font-normal text-blue-gray-500 ">
                Pitching a product to executives can be a nerve-wracking yet
                exhilarating experience. Such was the case when me and my team
                had the opportunity to present a product idea to the esteemed
                executives at Fligno. The experience was a pivotal moment in my
                professional journey, where we showcased our creativity,
                communication skills, and passion for innovation.
                <br />
                <br />
                Ahead of the presentation, with the guidance of our supervisor,
                we invested ample time researching the target market, analyzing
                competitors, and understanding the unique value proposition of
                the product. I crafted a compelling narrative, outlining the
                problem the product aimed to solve, its features, and the
                potential benefits for end-users. Visual aids and prototypes
                were created to enhance the clarity and impact of our pitch.
                <br />
                <br />
                The reaction was overwhelming since they really love how we
                pitched our product and the idea itself. Praises coming from the
                executives is a big honor for me knowing we passed the
                expectations of people who are investors in real-life. Also
                their insightful comments and suggestions allowed us to further
                refine the product concept, considering aspects we may have
                overlooked.
                <br />
                <br />
                This product pitching experience taught me invaluable lessons
                that have shaped my professional growth. Firstly, I learned the
                importance of thorough research and preparation, enabling me to
                present a well-informed and persuasive pitch. Secondly,
                effective communication, both verbal and non-verbal, was
                essential in conveying my ideas and building rapport with the
                executives. Lastly, I gained an appreciation for receiving
                constructive feedback as a means for improvement, fostering a
                mindset of continuous learning and adaptation.
              </Typography>
            </div>
            <div className="mx-auto mt-12 flex-col items-start justify-start px-4 md:w-4/12 lg:mt-24">
              <div className=" grid grid-cols-1 gap-5 md:grid-cols-1 xl:grid-cols-1">
                <TeamCard
                  key="1"
                  img="/img/fligno/3.JPG"
                  name="fligno-pitch-1"
                />
                <TeamCard
                  key="2"
                  img="/img/fligno/4.JPG"
                  name="fligno-pitch-2"
                />
                <TeamCard
                  key="3"
                  img="/img/fligno/5.JPG"
                  name="fligno-pitch-3"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="learn-at-fligno" className=" bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="mt-12 flex  flex-wrap items-center">
            <div className="mx-auto mt-12 flex h-full w-full items-center justify-center px-4 md:w-4/12 ">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="relative h-[75%]">
                  <img
                    alt="Card Image"
                    src="/img/fligno/6.JPG"
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
                    Basic CRUD Laravel API training with Software Engineers of
                    Fligno. It was a fun and engaging experience, kuddos to the
                    trainors who were very attentive to our questions ;)
                  </Typography>
                </CardBody>
              </Card>
            </div>
            <div className="mx-auto mt-12 w-full px-4 md:w-5/12">
              <Typography className="mb-8 font-normal text-blue-gray-500 ">
                Fligno has always prioritized the growth and development of its
                employees, and one of the ways they exemplified this was through
                their engaging learning sessions. The company recognized the
                importance of continuous learning in the ever-evolving field of
                technology, and they actively encouraged us to participate in
                these valuable sessions. Whether it was workshops, training
                programs, or guest speaker sessions, Fligno provided us with
                opportunities to expand our knowledge and enhance our skills.
                These learning sessions were thoughtfully designed to cover a
                wide range of topics, from the latest industry trends to
                emerging technologies. By joining these sessions, we were able
                to stay abreast of the cutting-edge advancements in our field
                and strengthen our expertise.
              </Typography>
            </div>
          </div>
        </div>
      </section>

      <section id="curatoro-team" className="px-4 pb-32 pt-20">
        <div className="container mx-auto">
          <PageTitle heading="Team Cuatro">
            Immensely grateful for the opportunity to collaborate with these
            exceptional individuals. Our collaborative environment fostered a
            sense of camaraderie and teamwork, where ideas were freely shared,
            and diverse perspectives were valued.
          </PageTitle>
          <div className="mx-3 mt-12 grid grid-cols-1 gap-20 gap-x-10 gap-y-10 md:grid-cols-2 lg:mx-20 lg:mt-24 xl:grid-cols-4">
            {highlights.map(({ img, name }) => (
              <TeamCard key={name} img={img} name={name} />
            ))}
          </div>
        </div>
      </section>

      <section id="curatoro-site" className="bg-gray-50 px-4 pb-48 pt-20">
        <div className="container mx-auto">
          <PageTitle heading="Bringing The Art To The Cart">
            Curatoro is the result of our teamwork and collaboration during our
            internship at Fligno. It is a marketplace for Art Enthusiasts who
            love to buy original made artworks. I play the part as the Backend
            Developer of this project and this is still a work on progress but I
            would say people will love this once this project will be deployed.
          </PageTitle>
          <div className="mx-3 mt-12 grid grid-cols-1 gap-20 gap-x-10 gap-y-10 md:grid-cols-1 lg:mx-20 lg:mt-24 xl:grid-cols-2">
            <Card color="gray" shadow={false}>
              <div className="overflow-hidden rounded-2xl shadow-md shadow-gray-800">
                <Avatar
                  src="/img/fligno/15.JPG"
                  alt="fligno-15"
                  className="object-stretch h-full w-full object-center shadow-lg shadow-gray-500/25 transition delay-150 ease-in-out hover:scale-125 "
                />
              </div>
            </Card>
            <Card color="transparent" shadow={false}>
              <div className="h-full w-full overflow-hidden rounded-2xl shadow-md shadow-gray-800">
                <Avatar
                  src="/img/fligno/16.JPG"
                  alt="fligno-16"
                  className="h-full w-full object-cover object-center shadow-lg shadow-gray-500/25 transition delay-150 ease-in-out hover:scale-125 "
                />
              </div>
            </Card>
          </div>
        </div>
      </section>

      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Journal;
