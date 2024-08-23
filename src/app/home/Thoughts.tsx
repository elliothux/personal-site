'use client';

import { motion } from 'framer-motion';
import { Fragment } from 'react';
import { blockSecondaryAnimation } from 'utils/animation';
import { inter, lora } from 'utils/font';
import { cn } from 'utils/misc';

const animation = {
  initial: blockSecondaryAnimation.initial,
  whileInView: blockSecondaryAnimation.animate,
};

const items: [string, [string, string][]][] = [
  [
    'Technology & architecture',
    [
      [
        'Simplicity in coding leads to better understanding and collaboration.',
        'As a software engineer, I’m passionate about technology and driven to create great products with it. Over my years of engineering experience, I’ve adhered to the principle of keeping my code clean, clear, and simple. I’m not a fan of using overly fancy or complex design patterns, or relying on mysterious magic numbers. My aim has always been to write code that anyone can easily understand.',
      ],
      [
        'Good software architecture, like good product design, prioritizes user-friendliness and scalability.',
        'I believe there’s a strong connection between software architecture and product design. Just as a good product should feel simple, intuitive, and easy to use for customers, software architecture should do the same for its users—the entire tech team, including myself. I approach software architecture with the same care as product design, focusing on building systems that are consistent, transparent, and scalable, ensuring that the entire team benefits.',
      ],
      [
        'Efficient, cost-effective solutions often come from choosing the right tools and approaches.',
        'I’m highly focused on efficiency and cost control, whether it’s cloud infrastructure costs or development expenses. Software architecture isn’t about mindlessly adding more services and middleware or throwing more time and manpower at a problem. I lean towards small, efficient solutions rather than large, all-encompassing ones. For instance, I prefer lightweight serverless workers over centralized servers. I’m also a fan of monorepos and have extensive experience with cross-project isomorphism. From the perspective of a startup CTO, good architecture means choosing the most suitable solutions that support the product while ensuring minimal cloud expenditure and maximum development efficiency.',
      ],
      [
        'Clear standards and automation improve development efficiency and software quality over time.',
        'To maximize development efficiency and software quality, my answer lies in standards and specifications. The first thing I do in any project is establish project standards and coding guidelines. This includes the engineering structure, service layering, component splitting, API calls, routing, naming rules, code style, and more. I ensure these standards are enforced through a series of automated tools. I invest a lot of effort in this area, but in my experience, the costs are well worth it. As the project evolves, the value of these standards only increases.',
      ],
      [
        'Technology should be a means to an end, focusing on delivering real value to users.',
        "At the end of the day, I believe technology should serve the product, not the other way around. I'm not into tech for tech's sake. I focus on using technology to make the product better, always thinking about how it helps the end user.",
      ],
    ],
  ],
  [
    'Product design & User experience',
    [
      [
        'Great products go beyond basic functionality to provide exceptional user experiences.',
        'I consider myself a programmer with a strong product sense. I enjoy exploring new products, especially those with excellent interaction or innovative design. I believe products can be categorized into different levels: first, meeting functional needs; second, enhancing efficiency; third, delivering a delightful user experience; and finally, having a unique product philosophy that influences users and the industry. Unfortunately, many products on the market today barely achieve the first level, especially some SaaS products, which are often just a collection of features without much thought beyond that.',
      ],
      [
        'The value in software comes from integrated features that solve real problems.',
        'As someone who has created multiple SaaS products, I place a strong emphasis on the connectivity between features when designing a product. With today\'s advanced technology, many features are not particularly challenging to develop, so it\'s difficult to attract long-term customers with the gimmick of "having X features." Data sitting in a database doesn’t generate value on its own; the product must enable data to interact and flow between features. That’s why I focus on making sure that different functions within the software can interact and integrate, naturally forming a workflow. SaaS software sells solutions and customer value, not just individual features.',
      ],
      [
        'Effective design prioritizes functionality and user needs over mere aesthetics.',
        "The design community today is flooded with fancy, dazzling designs, but I’m not a fan of most of them. At first glance, they might catch your eye, but they often lack deep thought and practical utility. Many UI/UX designs overemphasize aesthetics at the expense of functionality. For instance, some designers use beautiful dashboards to display data that doesn't make sense or that users don’t care about, which is completely missing the point. I prefer to approach design from the perspective of the product and the user, as that’s where true value is created.",
      ],
      [
        'Good design balances familiarity with innovation to create intuitive yet distinctive products.',
        'I see software as a digital reflection of the real world. When designing products, I like to explore the patterns, connections, and contradictions between things, striving to build a unified model that closely aligns with the physical world. However, I don\'t shy away from imbalance or differences in design, as these elements add character and uniqueness. Good design brings everything together in a complementary and balanced way, forming a cohesive whole. In this process, differences aren\'t erased but harmoniously integrated. My design philosophy is to seek "harmony in unity" within the chaos.',
      ],
    ],
  ],
  [
    'Photography & Art',
    [
      [
        '',
        'Over a decade ago, I bought my first camera with money I earned from doing freelance graphic design, and that’s when I fell in love with photography. I’ve taken countless photos and was fortunate enough to be featured in Fuji Film’s annual book. I have a particular affinity for subjects related to humanities, urban life, and architecture. I love capturing dramatic light and shadow, subtle textures, and those decisive moments. I often wander alone through city alleys with my camera, aimlessly exploring. The world is full of chaos and uncertainty, but through my lens, I always manage to find moments of order, harmony, and beauty.',
      ],
      [
        '',
        `Influenced by my family, I developed a strong interest in both literature and painting. This has had a significant impact on my aesthetic sense and design taste.`,
      ],
    ],
  ],
];

export function Thoughts() {
  return (
    <>
      <motion.h2
        {...animation}
        transition={{
          duration: 2,
          type: 'spring',
        }}
        viewport={{ once: true }}
        className={cn('text-neutral-800 text-4xl text-center mt-8', lora.className)}
      >
        My Thoughts
      </motion.h2>
      <motion.div
        {...animation}
        transition={{
          duration: 2,
          type: 'spring',
        }}
        viewport={{ once: true }}
        className={cn('text-xs md:text-sm text-neutral-600 !leading-relaxed font-light', inter.className)}
      >
        {items.map(([title, items], index) => (
          <Fragment key={index}>
            <p className={cn(lora.className, 'mb-8 mt-16 text-center text-lg text-neutral-800')}>{title}</p>
            {items.map(([title, content]) => (
              <Fragment key={title}>
                {title ? (
                  <p className="font-medium relative">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-black absolute -left-3 top-2" />
                    {title}
                  </p>
                ) : null}
                <p className="mb-8 mt-2">{content}</p>
              </Fragment>
            ))}
          </Fragment>
        ))}
      </motion.div>
    </>
  );
}
