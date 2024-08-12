'use client';

import { Bento } from 'components/Bento';
import { HeroSection } from 'components/HeroSection';
import { LinkButton } from 'components/Link';
import { AnimatePresence, motion } from 'framer-motion';
import { useOutsideClick } from 'hooks/useOutsideClick';
import { useScrollLock } from 'hooks/useScrollLock';
import { X } from 'lucide-react';
import { default as Image } from 'next/image';
import { memo, ReactNode, useRef, useState } from 'react';
import { cn } from 'utils/misc';

const tencentLogo = (
  <svg viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[60%] ml-[10%]">
    <path
      d="M4.79995 21L7.94995 7.2H2.39995L1.19995 4.05H8.54995L9.59995 0L19.8 7.2H11.7L8.54995 21H4.79995Z"
      fill="white"
    />
  </svg>
);

interface ConfigItem {
  company: string;
  logo: (className: string) => ReactNode;
  position: string;
  period: string;
  link?: string;
  description?: string;
  works: string[];
}

const items: ConfigItem[] = [
  {
    company: 'Cocast.fit',
    position: 'Co-founder & CEO & CTO',
    period: 'June 2023 - Present',
    logo: (className) => (
      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <circle cx={18.0001} cy={18.0001} r={17.6471} fill="url(#paint0_linear_35_414)" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M26.1 7.61a1.569 1.569 0 01.61 2.133l-1.372-.762-1.37-.762A1.569 1.569 0 0126.1 7.61zm-1.973 6.778l2.582-4.645-1.37-.762-1.371-.762-1.747 3.141c-2.016-2.288-5.808-2.055-7.463.699l-.03.052c-1.98 3.6-3.961 7.2-5.945 10.8a1.569 1.569 0 102.748 1.513c1.978-3.59 3.955-7.18 5.93-10.771a1.512 1.512 0 012.58.02l.463.774-2.43 4.37a4.993 4.993 0 001.67 6.634 4.98 4.98 0 006.932-1.596 4.993 4.993 0 00.08-5.08l-2.63-4.387zm-1.76 3.166l-1.552 2.79a1.856 1.856 0 00.62 2.464 1.844 1.844 0 002.839-1.523c.006-.322-.07-.64-.224-.923l-1.683-2.808z"
          fill="#fff"
        />
        <defs>
          <linearGradient
            id="paint0_linear_35_414"
            x1={18.0001}
            y1={0.353027}
            x2={18.0001}
            y2={35.6472}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#7692FF" />
            <stop offset={1} stopColor="#3809BF" />
          </linearGradient>
        </defs>
      </svg>
    ),
    link: 'https://www.cocast.fit',
    description:
      'A SaaS company pioneering the future of fitness training software, empowering a revolution in how fitness training is delivered and experienced globally.',
    works: [
      'Lead the foundation and development of cocast.fit, a progressive start-up offering SaaS for fitness trainers.',
      'Develop and execute the technical vision and roadmap for cocast.fit.',
      'Architect and drive the implementation of cutting-edge technologies to ensure the platform is secure, reliable, user-friendly and scalable, aligning with the overall business strategy.',
      'Hands-on development and infrastructure of the software, including front-end, back-end, apps (Android & iOS), database, DevOps and more.',
      'Oversaw all operations and development from product design and visual design to business activities to ensure the desired vision and advance the mission.',
    ],
  },
  {
    company: 'MoeGo',
    position: 'Principle Engineer & Team Lead',
    period: 'June 2022 - May 2023',
    logo: (className) => (
      <div className={cn(className, 'bg-white relative flex items-center justify-center')}>
        <Image src="ff68e379-b983-4265-e3f4-6ec4ebe7de00" alt="moego" width={21} height={19} className="w-[55%]" />
      </div>
    ),
    link: 'https://www.moego.pet',
    description:
      'A leading unicorn SaaS company in the pet industry, providing comprehensive one-stop solutions for pet groomers around the globe.',
    works: [
      'Led the team responsible for all client-facing aspects of the pet grooming service software.',
      'Coordinating closely with product managers, designers, business analysts, quality engineers, and operations teams to create innovative solutions meeting functional and non-functional requirements, standards, and expectations.',
      'Ensuring the delivery of optimal experiences for pet groomers and their clients by leveraging modern web technologies while upholding high quality, reusability, performance, and other front-end standard methodologies.',
      'Contributing to critical system documentation and technical infrastructure strategies.',
    ],
  },
  {
    company: 'Tencent',
    position: 'Principle Engineer & Project Lead',
    period: 'Jul 2021 - Jun 2022',
    logo: (className) => (
      <div className={cn(className, 'bg-blue-600 relative flex items-center justify-center')}>{tencentLogo}</div>
    ),
    works: [
      'Owned, led, oversaw, and drove a design-to-code platform.',
      'Design and implement the complete functional flow of the platform, from parsing and recognizing to rendering and final code.',
      'Establish standardized specifications for UI models, DSL and processors.',
      'Lead the development of an algorithm system, including layout recognition, block segmentation, semantic recognition, similarity analysis, visual diff, and more.',
      'Develop a heterogeneous deployment solution for Node containerization + Python high-density deployment algorithm service.',
      'Construct a complete ML system based on PyTorch.',
    ],
  },
  {
    company: 'Alibaba Group',
    position: 'Senior Engineer',
    period: 'Apr 2020 - Jun 2021',
    logo: (className) => (
      <div className={cn(className, 'bg-white relative flex items-center justify-center')}>
        <svg viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[75%] ml-[5%]">
          <path
            d="M19.0182 13.2395C17.7831 13.3258 17.9026 12.665 18.6364 11.7055C20.3098 9.47422 23.4077 6.44277 23.5471 4.22812C23.7397 1.35273 20.8477 0.462891 17.8694 0.462891C15.7975 0.516016 13.6526 1.09043 12.1916 1.61172C7.15805 3.38809 4.00375 6.17715 2.00161 9.31484C-0.0702693 12.416 0.573871 15.3977 5.04965 15.484C8.42973 15.3445 10.7108 14.4049 13.0084 13.2195C13.025 13.2195 6.61684 15.049 4.24614 13.7076C3.98383 13.5682 3.72485 13.3756 3.65512 12.8377C3.65512 11.7387 5.46801 10.5898 6.53051 10.2246V8.34199C8.67211 9.09238 11.1989 8.8832 13.3604 7.27949C13.4301 7.47207 13.4998 7.71445 13.4832 7.97676H13.8485C13.9348 7.22637 13.4301 6.4959 12.5934 6.44277C12.8358 6.63535 13.0118 6.79141 13.0981 6.93086L13.0649 6.96406L13.0483 6.98066C10.2625 8.93301 7.55981 8.02656 7.30082 7.97344L8.85141 6.45605L8.41645 5.35703C11.501 4.27793 14.0444 3.49102 18.2745 2.74395L17.3282 1.98027L17.8163 1.68477C20.3231 2.38203 22.0131 2.90332 21.9268 4.22812C21.8936 4.45391 21.8039 4.71621 21.6645 4.99512C20.9174 6.47598 18.7227 8.86328 17.8329 9.89258C17.2584 10.5732 16.684 11.2008 16.2823 11.8283C15.8307 12.4725 15.6016 13.0668 15.585 13.6047C15.6713 17.9809 28.5807 11.5494 31.1241 9.85606C27.4153 11.4432 23.3911 12.9605 19.0182 13.2395ZM21.8405 3.18223C21.9334 3.35488 21.9766 3.56738 21.9766 3.81641C21.9733 3.59063 21.9301 3.3748 21.8405 3.18223Z"
            fill="#FF6914"
          />
        </svg>
      </div>
    ),
    link: 'https://www.tmall.com',
    description:
      'Tmall is one of the largest e-commerce platforms in China, with over 500 million monthly active users.',
    works: [
      'Manage two of the largest FMCG catalogs, serving parents, children and pets, with a daily user flow exceeding 3.5 million',
      'Utilize expertise in the React framework (both web and Native) to develop and maintain a scalable UI framework that encompasses core functionalities.',
      'Contribute to the structure and implementation of the operational platform, collaborating closely with key stakeholders to deeply understand customer needs and translate them into precise and product catalog-focused data delivery.',
      'Participated in the construction of Function as a Service (FaaS) infrastructures, implementing service registration, management, monitoring, and more',
    ],
  },
  {
    company: 'Tencent',
    position: 'Junior Engineer',
    period: 'Jul 2018 - Apr 2020',
    logo: (className) => (
      <div className={cn(className, 'bg-blue-600 relative flex items-center justify-center')}>{tencentLogo}</div>
    ),
    link: 'https://weda.cloud.tencent.com',
    description: "Weda is one of China's leading low-code platform, with over 300,000 applications built by it.",
    works: [
      "Designed, developed, and implemented Vision, a low-code engine and platform, from scratch. The Weda low-code platform was derived from Vision's open-source version.",
      'Implemented a high-performance simulator rendering solution for the low-code engine.',
      'Designed an adapter mechanism for compatibility with React, Vue, and other web frameworks in the low-code engine.',
    ],
  },
];

export function Works({ show }: { show: boolean }) {
  const [index, setIndex] = useState(-1);

  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick(ref, () => setIndex(-1));

  const current = index > -1 ? items[index] : null;
  useScrollLock(!!current);

  return (
    <>
      <HeroSection show={show} delay={3} className="col-span-full md:col-span-5">
        <Bento
          title="My works"
          className="h-full"
          contentClassName="flex flex-col"
          titleClassName="max-md:mb-8"
          background={[520, 385, '801cb044-2747-46f9-0901-1d83a19f5500']}
        >
          <div className="grid gap-6 my-auto">
            {items.map((item, index) => (
              <motion.div
                key={item.period}
                className="flex justify-start items-center border rounded-lg py-2 cursor-pointer"
                initial={{
                  paddingLeft: 0,
                  paddingRight: 0,
                  backgroundColor: 'rgba(255, 255, 255, 0)',
                  borderColor: 'rgba(54, 54, 54, 0)',
                  scale: 1,
                }}
                whileHover={{
                  paddingLeft: 10,
                  paddingRight: 10,
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderColor: '#363636',
                  scale: 1,
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIndex(index)}
                layoutId={item.period}
              >
                <Item item={item} />
              </motion.div>
            ))}
          </div>
        </Bento>
      </HeroSection>
      <AnimatePresence>
        {current ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 h-full w-full bg-black/65 backdrop-blur z-50"
          />
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {current ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.section
              className="w-[90vw] md:w-[580px] max-h-[100vh] py-5 overflow-scroll scrollbar-hide relative"
              layoutId={current.period}
              ref={ref}
            >
              <div className="flex mb-2">
                <button className="p-2 border rounded-full ml-auto bg-white/10" onClick={() => setIndex(-1)}>
                  <X size={18} />
                </button>
              </div>
              <div className="flex flex-row items-start">
                <Item item={current} />
              </div>
              <div className="mt-10 text-sm font-light">
                {current.link || current.description ? (
                  <motion.div
                    className="border border-neutral-700 bg-black/50 rounded-lg px-5 py-3 mb-8 mx-0.5 flex flex-row items-center justify-center gap-3"
                    initial={{
                      y: 50,
                      opacity: 0,
                      filter: 'blur(10px)',
                    }}
                    animate={{
                      y: 0,
                      opacity: 1,
                      filter: 'blur(0px)',
                    }}
                    transition={{ delay: 0.3 }}
                  >
                    <p>{current.description}</p>
                    {current.link ? <LinkButton href={current.link} target="_blank" /> : null}
                  </motion.div>
                ) : null}
                <motion.ul
                  className="list-disc ml-5 text-white"
                  initial={{
                    y: 50,
                    opacity: 0,
                    filter: 'blur(10px)',
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    filter: 'blur(0px)',
                  }}
                  transition={{ delay: current.link || current.description ? 0.6 : 0.3 }}
                >
                  {current.works.map((work, index) => (
                    <li key={index} className="py-1.5">
                      {work}
                    </li>
                  ))}
                </motion.ul>
              </div>
            </motion.section>
          </div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

const Item = memo(({ item: { company, logo, position, period } }: { item: ConfigItem }) => (
  <>
    <motion.div className="rounded-full border-2 border-neutral-600" layoutId={`logo-${period}`}>
      {logo('w-12 h-12 md:w-10 md:h-10 rounded-full m-[2px]')}
    </motion.div>
    <div className="ml-3 grow shrink">
      <motion.p className="text-xl" layoutId={`company-${period}`}>
        {company}
      </motion.p>
      <motion.p
        className="flex flex-col md:flex-row text-sm font-light text-neutral-400"
        layoutId={`position-${period}`}
      >
        <span>{position}</span>
        <span className="md:ml-auto">{period}</span>
      </motion.p>
    </div>
  </>
));
