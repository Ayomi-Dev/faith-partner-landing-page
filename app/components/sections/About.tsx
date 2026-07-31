import Image from "next/image";
import { Button } from "../uis/Button";
import { SectionLabel } from "../uis/SectionLabel";
import Chairman from "@/public/assets/images/chairman.jpeg"
// import Link from "@/public/"


const CORE_VALUES = [
  {
    title: "Passion for God",
    desc: `We put God first in all we do, acknowledging Him as our
    source. We pursue a vibrant personal relationship with God
    through worship, prayer, and the Word.
    We encourage godly values in learning, conduct, and
    community life.`
  },
  {
    title: "Academic Excellence",
    desc: `We strive for the highest standards in teaching and
          learning.We nurture curiosity, critical thinking, and a love for
          knowledge. We measure success by both character formation and intellectual achievement.`
  },
  {
    title: "Passion for God",
    desc: `We put God first in all we do, acknowledging Him as our
    source. We pursue a vibrant personal relationship with God
    through worship, prayer, and the Word.
    We encourage godly values in learning, conduct, and
    community life.`
  },
  {
    title: "Hard Work",
    desc: `We embrace diligence as a path to growth and distinction. 
      We reject shortcuts and commit to giving our best always.
      We believe that effort, discipline, and perseverance
      produce lasting rewards..`
  },
  {
    title: "Creativity",
    desc: `We encourage innovation, imagination, and original
      thinking. We provide a safe space to explore new ideas and express talents.
      We believe creativity reflects the nature of our Creator.`
  },
  {
    title: "Teamwork",
    desc: `We collaborate with others, valuing each person’s unique
      contribution. We believe shared goals are better achieved through 
      unity and cooperation. We cultivate empathy, communication, and mutual support.`
  },
  {
    title: "Personal Development",
    desc: `We promote self-awareness, confidence, and purposeful
      living. We help students discover and develop their God-given potentials.
      We support growth in character, leadership, and responsibility`
  },
  {
    title: "Truthfulness",
    desc: `We uphold honesty in words, actions, and relationships. We teach integrity as the foundation for trust and
          respect. We reject deceit, even when truth is inconvenient.`
  },
  {
    title: "Grateful Heart",
    desc: ` We cultivate a lifestyle of thanksgiving and appreciation.
        We acknowledge God’s goodness in every success and challenge.
      We celebrate the efforts of others with a thankful spirit.`
  },
  {
    title: "Respect for Others",
    desc: ` We treat everyone with dignity, regardless of age,
        background, or opinion. We listen, speak, and act with kindness and courtesy.
        We model Christ-like lov`
  },
];

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <SectionLabel>About Us</SectionLabel>
        </div>
          {/* Content column */}
          <div className="reveal-right pt-6">
            <h2 className="font-head font-bold text-center text-(--navy) text-3xl sm:text-4xl leading-tight mb-4">
              Shaping Futures Since 2014
            </h2>
            <p className="text-gray-500 leading-relaxed mb-7">
              Founded with a passion for transforming young minds, Lordfaith has grown into one
              of Nigeria&apos;s most respected educational institutions — combining rigorous academics with
              strong moral values and a vibrant school community.
            </p>

            {/* Mission / Vision */}
            <div className="space-y-4 mb-7">
              {[
                {
                  heading: "Our Vision",
                  subheading: "To provide qualitative and affordable education for national development.",
                  body: `We envision a Nigeria where every child, regardless of
                      background, can access high-quality education that
                      prepares them for leadership, service, and excellence. Our
                      classrooms are filled with creativity, discipline, and
                      diligence. We aim to be known not just for affordability, but
                      for excellence in academics and character development.
                    `,
                },
                {
                  heading: "Our Mission",
                  subheading: `We are committed to raising godly children who will
                    shape the destiny of Nigeria through their outstanding
                    performances in all fields of human endeavour.
                  `,
                  body: `Our mission is to prepare learners who are confident in
                      their identity, strong in their faith, and excellent in their
                      studies. From mathematics to music, from science to
                      service—we guide every pupil to pursue greatness in the
                      fear of God. This mission is lived out daily through:
                       Qualified and passionate teachers
                       Faith-based morning assemblies
                       Disciplinary but loving culture
                       Competitions, projects, and mentorship
                  `
                }
              ].map((item) => (
                <div key={item.heading} className="reveal pl-5 border-l-[3px] border-gold bg-gray-50 rounded-r-xl py-4 pr-5">
                  <h3 className="font-head text-[0.8rem] font-bold text-(--navy) uppercase tracking-widest mb-1">
                    {item.heading}
                  </h3>
                  <h4 className="font-head text-[0.8rem] font-bold italic text-(--navy) tracking-widest mb-1">
                    {item.subheading}
                  </h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>

            {/* Core values chips */}
              <h3 className="font-head text-[0.8rem] font-bold bg-(--navy) text-white p-3 rounded-md uppercase mb-1">
                Our Core Values
              </h3>
              {CORE_VALUES.map((val, indx) => (
                <div key={indx} className="reveal mb-2 pl-5 border-l-[3px] border-gold bg-gray-50 rounded-r-xl py-4 pr-5">
                  <h3 className="font-head text-[0.8rem] font-bold text-(--navy) uppercase tracking-widest mb-1">
                    {val.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{val.desc}</p>
                </div>
              ))}
          </div>
          {/* Image column */}
          <div className="relative gap-4 mt-5 mb-4">
            <div className="flex flex-col sm:flex-row gap-5">
            <Image 
                src={Chairman} 
                width={0}
                height={0} 
                sizes="100vw" 
                style={{
                  width: '400px', 
                  height: '400px',
                  objectFit: 'cover',
                  borderRadius: "10px"
                }} 
                alt="chairman" 
              />
              <div className="flex flex-col justify-center items-center">
                <h4 className="font-head font-bold text-(--navy) sm:text-2xl leading-tight mb-4">
                  Meet The Chairman
                </h4>
                <p className="text-gray-500 mb-7 text-[0.8rem] ">
                  Dr. Alaba G. Olusemore is a distinguished finance expert,
                  economist, and leadership consultant with over three
                  decades of impactful service across Africa’s financial and
                  educational sectors. A Fellow of both the Chartered
                  Institute of Bankers of Nigeria (CIBN) and the Fellow
                  Institute of Credit Administer (FICA), Dr. Olusemore has
                  held top-level management roles in several leading
                  Nigerian banks. For more than 25 years, he has designed
                  and delivered transformational training programs for
                  financial institutions and corporate organisations across
                  the continent.
                  With academic credentials in Economics, Finance, and
                  Organisational Leadership, he brings a strategic mind, a
                  wealth of knowledge, and a heart for raising ethical leaders.
                  The author of six acclaimed books on lending,
                  entrepreneurship, and personal finance, Dr. Olusemore is
                  passionate about helping individuals and institutions align
                  purpose with performance and values with vision.
                </p>
              </div>
            </div>
            <div className="flex gap-5 flex-col sm:flex-row">
              <div className="flex flex-col justify-center items-center">
                <h4 className="font-head font-bold text-(--navy) sm:text-2xl leading-tight mb-4">
                  Meet The Proprietor
                </h4>
                <p className="text-gray-500 mb-7 text-[0.8rem]">
                  Mrs. Funmilayo Olusemore is a seasoned educator and the
                  dedicated proprietress of Lordfaith Partners Private
                  School. A graduate of the University of Lagos, she holds an
                  NCE, B.Ed., and M.Ed. in Education, with a strong focus
                  on child development and school leadership. Her teaching
                  career spans several years in reputable private schools,
                  where she rose to the position of Vice-Principal before
                  establishing Lordfaith twelve years ago. As the heartbeat of the school, Mrs. Olusemore combines
                  her deep love for children with her academic expertise and
                  spiritual grounding to build a nurturing environment
                  where pupils thrive. She is committed to mentoring staff,
                  supporting families, and championing values-based
                  education that prepares learners for excellence in life and
                  eternity
                </p>
              </div>
              <Image 
                src={Chairman} 
                width={0} 
                height={0} 
                sizes="100vw" 
                style={{
                  width: '400px', 
                  height: '400px',
                  objectFit: 'cover',
                  borderRadius: "10px"
                }} 
                alt="proprietress" />
            </div>
            

            {/* Floating badge */}
            {/* <div className="absolute -bottom-5 -right-5 bg-gold text-(--navy)-dark rounded-2xl px-6 py-5 text-center font-head font-bold shadow-card-hover">
              <p className="text-3xl leading-none">15+</p>
              <p className="text-[0.72rem] font-semibold opacity-80 mt-1 uppercase tracking-wide">Years of Excellence</p>
            </div> */}
          </div>
          <div className="flex gap-5 items-center mt-4">
            <Button href="#programs" variant="outline">
              Explore Our Programs
            </Button>
            <Button variant="outline" href="" size="md">
            <a
              href="/handbook.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-(--gold)"
              download
            >
              Download Our Handbook
            </a>
            </Button>
          </div>
          
      </div>
    </section>
  );
}