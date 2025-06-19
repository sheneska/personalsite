import Navbar from "@/components/Navbar";
import TypingText from '@/components/TypingText';
import Image from "next/image";
import Footer from "@/components/Footer";

const techStack = [
  <Image src="/icons/javascript-plain.svg" alt="JavaScript" width={48} height={48} />,
  <Image src="/icons/python-plain.svg" alt="Python" width={48} height={48} />,
  <Image src="/icons/golang-plain.svg" alt="Go" width={48} height={48} />,
  <Image src="/icons/c-plain.svg" alt="C" width={48} height={48} />,
  <Image src="/icons/html5-plain.svg" alt="HTML" width={48} height={48} />,
  <Image src="/icons/react-original.svg" alt="React" width={48} height={48} />,
  <Image src="/icons/css3-plain.svg" alt="CSS" width={48} height={48} />,
  <Image src="/icons/Terraform.svg" alt="Terraform" width={48} height={48} />,
  <Image src="/icons/java-plain.svg" alt="Java" width={48} height={48} />,
  <Image src="/icons/Tailwindcss.svg" alt="Tailwind CSS" width={48} height={48} />,
  <Image src="/icons/Googlecloud.svg" alt="Google Cloud" width={48} height={48} />,
  <Image src="/icons/Kubernetes.svg" alt="Kubernetes" width={48} height={48} />,
];

const featuredProjects = [
  {
    title: "TerraformRun Dashboard",
    description: "Dashboard surfacing Terraform run triggers and usage data.",
    icon: "/icons/react-original.svg",
    tech: ["React", "GoLang", "GCP"],
    link: "https://github.com/sheneska/TerraformRunDashboard",
  },
  {
    title: "Personal Portfolio",
    description: "Cleanly built developer site to highlight my work.",
    icon: "/icons/react-original.svg",
    tech: ["React", "Tailwind"],
    link: "https://github.com/sheneska/personalsite",
  },
  {
    title: "Google SPS App",
    description: "GCP-integrated web tool built during Google's SPS program.",
    icon: "/icons/Googlecloud.svg",
    tech: ["JavaScript", "App Engine", "Datastore"],
    link: "https://github.com/sheneska/software-product-sprint",
  },
];



export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <Navbar />

      <section className="bg-black text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-16 tracking-tight">
            <TypingText />
          </h1>
          <div className="flex flex-col md:flex-row items-start gap-[60px]">
            <div className="flex-shrink-0">
              <Image
                src="/profile.jpg"
                alt="Sheneska Williams"
                width={300}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>

            <div className="max-w-4xl text-base font-extralight text-gray-300 leading-relaxed">
              <p className="mb-5">
                {`Hey, I'm Sheneska , 
                an engineer with a love for creativity, automation, and storytelling through code.`}
              </p>
              <p className="mb-5">
                {`I'm currently a Software Engineer at HashiCorp 
                I work on infrastructure tooling and integrations, exploring the intersection of 
                devops, user experience, and full-stack development.`}
              </p>
              <p>
                {`I'm all about impact - from solving real-world problems to collaborating with thoughtful teams.
                Outside of work, I’m into fitness and design.`}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="text-4xl font-heading mb-10 text-center font-light">Tech Stack</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 items-center justify-center">
          {techStack.map((icon, index) => (
            <div key={index} className="flex justify-center items-center grayscale hover:grayscale-0 transition duration-300">
              {icon}
            </div>
          ))}
        </div>
        </div>
      </section>

    <section id="projects" className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-4xl font-light mb-10 text-center">Featured Projects</h2>

        <div className="overflow-x-auto pb-4">
           <div className="flex gap-6 w-max mx-auto">
            {featuredProjects.map((project) => (
              <div
                key={project.title}
                className="bg-[#111] rounded-2xl border border-gray-700 p-6 w-72 min-w-[18rem] hover:border-purple-400 transition duration-300 shadow-sm"
              >
                <div className="mb-4 h-16 flex justify-center items-center">
                  <Image src={project.icon} alt={project.title} width={40} height={40} />
                </div>

                <h3 className="text-lg font-semibold text-white mb-1">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-purple-400 hover:underline"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>


      <section className="bg-black text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10">
          <h2 className="text-4xl font-heading font-light mb-10 text-center">Work</h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-heading font-extralight text-purple-400">
                HashiCorp – Software Engineer
              </h3>
              <p className="text-sm text-gray-400 mb-3">June 2023 – Present</p>
              <p className="text-base font-extralight text-gray-300 leading-relaxed">
                Terraform, HCP Terraform Operator, ServiceNow, Kubernetes, Hashicorp Cloud Platform
              </p>
            </div>

            <div>
              <h3 className="text-xl font-heading font-extralight text-purple-400">
                HashiCorp – Software Engineer Intern
              </h3>
              <p className="text-sm text-gray-400 mb-3">June 2022 – May 2023</p>
              <p className="text-base font-extralight text-gray-300 leading-relaxed">
                Terraform, Kubernetes Provider, Helm Provider, Google Cloud Provider
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
