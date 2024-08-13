export interface ProjectConfig {
  name: string;
  description: string;
  cover: string;
  link?: string;
  highlight?: string;
  cursor?: string;
}

export const projects: ProjectConfig[] = [
  {
    name: 'Cocast.fit',
    description: 'Next-Gen SaaS platform for fitness trainers.',
    cover: '898bd5a9-885d-4425-439b-72db3de6bc00',
    link: 'https://www.cocast.fit',
    highlight: '#01a3ec',
    cursor: '#1effff',
  },
  {
    name: 'Cocast Builder',
    description: 'Website builder for fitness professionals.',
    cover: '748043cc-7ff7-4300-1fa6-a82ef31ffb00',
    link: 'https://www.cocast.fit/solution/website/',
    highlight: '#2B65EA',
  },
  {
    name: 'Cocast Connect',
    description: 'All in one mobile app for fitness trainers.',
    cover: '9bc8f5fe-7995-4fc6-999d-1d85cd465700',
    link: 'https://apps.apple.com/us/app/cocast-connect/id6503934326',
    highlight: '#774aff',
  },
  {
    name: 'Cocast Client',
    description: 'All in one mobile app for fitness clients.',
    cover: 'b15e5a1d-47b5-4b30-7d3f-9a420ba37600',
    link: 'https://apps.apple.com/us/app/cocast-fit/id6469503941',
    highlight: '#d6d924',
  },
  {
    name: 'MoeGo Booking',
    description: 'Online booking system for pet grooming business.',
    cover: '2e5e0c0b-c1d7-4608-0fcf-de0021e1ac00',
    link: 'https://www.moego.pet/online-booking-feature',
    highlight: '#FF7A00',
  },
  {
    name: 'Vision',
    description: 'The core engine of Tencent Weda, one of the most popular low-code solution in China.',
    cover: '82d45ce9-5489-49a2-9c6c-81e2e4ad3b00',
    link: 'https://weda.cloud.tencent.com',
    highlight: '#0DB833',
    cursor: '#39f561',
  },
  {
    name: 'Auton',
    description: 'Convert designs into clean code with one click.',
    cover: '59b5f9d9-4c6f-4c3a-f47a-f3dcf2f59400',
    highlight: '#d50682',
  },
  {
    name: 'Luoo.qy',
    description: 'A third-party player for the music community LuooFM.',
    cover: '021003a5-f2f7-4776-f02f-f33d9047a900',
    link: 'https://github.com/elliothux/Luoo.qy',
    highlight: '#3FA1FC',
  },
  {
    name: 'Apate',
    description: 'A browser-based realtime image process application.',
    cover: '691f6833-91b4-4144-7401-b90e85dcc000',
    link: 'https://github.com/elliothux/Apate',
    highlight: '#00EBDD',
  },
  {
    name: 'Vize',
    description: 'A modern web visualization editor engine.',
    cover: '441eccc0-5a6d-4398-488e-cac8a10e0000',
    link: 'https://github.com/elliothux/vize',
    highlight: '#1dc2ff',
  },
];
