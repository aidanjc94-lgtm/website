import { mkdir, rm, readFile, writeFile, copyFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { club, navigation } from '../src/data/site.mjs';
import { events } from '../src/data/events.mjs';
import { news } from '../src/data/news.mjs';
import { policies } from '../src/data/policies.mjs';
import { people } from '../src/data/people.mjs';
import { faqs } from '../src/data/faqs.mjs';

const out = 'dist';
const css = await readFile('src/styles/global.css', 'utf8');

const escape = (value) => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const slugify = (value) => value.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const pagePath = (path) => path === '/' ? 'index.html' : `${path.replace(/^\//, '').replace(/\/$/, '')}/index.html`;
const href = (label) => navigation.find(([name]) => name === label)?.[1] ?? '/';

function layout({ title, description, path, body }) {
  const nav = navigation.map(([label, url]) => `<li><a href="${url}"${url === path ? ' aria-current="page"' : ''}>${label}</a></li>`).join('');
  return `<!doctype html>
<html lang="en-GB">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escape(title)} | Fenland Running Club</title>
  <meta name="description" content="${escape(description)}">
  <style>${css}</style>
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header">
    <div class="header-inner">
      <a class="logo" href="/" aria-label="Fenland Running Club home"><img src="/images/OIP.png" alt="Fenland Running Club logo"></a>
      <nav aria-label="Main navigation"><ul class="nav-list">${nav}</ul></nav>
    </div>
  </header>
  <main id="main">${body}</main>
  <footer class="site-footer">
    <div class="container footer-grid">
      <div><h2>Fenland Running Club</h2><p>Friendly, inclusive running in Wisbech since ${club.established}.</p><p>${club.venue}, ${club.postcode}</p></div>
      <div><h3>Quick links</h3><ul><li><a href="${href('Join Us')}">Join Us</a></li><li><a href="${href('Welfare & Policies')}">Welfare & Policies</a></li><li><a href="${href('Contact')}">Contact</a></li></ul><p>© 2026 Fenland Running Club.</p></div>
    </div>
  </footer>
</body>
</html>`;
}

const hero = (eyebrow, h1, lede, buttons = '') => `<section class="hero"><div class="container hero-grid"><div><p class="eyebrow">${eyebrow}</p><h1>${h1}</h1><p class="lede">${lede}</p>${buttons}</div><div class="hero-card"><img src="/images/OIP.png" alt="Fenland Running Club logo"><div class="stat-grid"><div class="stat"><strong>${club.established}</strong>Established</div><div class="stat"><strong>Tue & Thu</strong>Club nights</div><div class="stat"><strong>18+</strong>Adult club</div></div></div></div></section>`;
const cta = (text, url, cls = '') => `<a class="button ${cls}" href="${url}">${text}</a>`;
const section = (title, intro, content, cls = '') => `<section class="section ${cls}"><div class="container"><div class="section-header"><h2>${title}</h2><p class="lede">${intro}</p></div>${content}</div></section>`;
const cards = (items) => `<div class="card-grid">${items.map(item => `<article class="card highlight"><span class="badge">${escape(item.badge ?? item.type ?? item.category ?? 'Club')}</span><h3>${escape(item.title)}</h3><p>${escape(item.summary)}</p>${item.meta ? `<p><strong>${escape(item.meta)}</strong></p>` : ''}${item.link ? `<p><a href="${item.link}">${escape(item.linkText ?? 'Read more')}</a></p>` : ''}</article>`).join('')}</div>`;
const faqList = (page) => `<div class="card-grid">${faqs.filter(f => f.page === page).map(f => `<article class="card"><h3>${escape(f.question)}</h3><p>${escape(f.answer)}</p></article>`).join('')}</div>`;

const pages = new Map();

pages.set('/', layout({ path: '/', title: 'Friendly running in Wisbech', description: 'Fenland Running Club is an adult running club in Wisbech, Cambridgeshire.', body:
  hero('Wisbech, Cambridgeshire', 'Run with Fenland.', 'A friendly adult running club for people who want to train, race, get fitter or simply enjoy running with others.', `<div class="button-row">${cta('Start joining', href('Join Us'))}${cta('View training', href('Training'), 'ghost')}</div>`)
  + section('Welcome to the club', 'We are based in the market town of Wisbech and aim to encourage every runner, whatever their ability.', cards([
    { title: 'Join Us', summary: 'Complete the PARQ form first, then get in touch so the club can help you choose a suitable first session.', badge: 'New runners', link: href('Join Us') },
    { title: 'Training', summary: 'Tuesday and Thursday evening sessions are planned for different goals and abilities, with qualified coaches and run leaders.', badge: 'Club nights', link: href('Training') },
    { title: 'Couch to 5K', summary: 'A free, supportive route into running for people who do not see themselves as runners yet.', badge: 'Beginners', link: href('Couch to 5K') },
    { title: 'Fenland 10', summary: 'The club hosts a flat 10-mile road race around local villages, with a 300-runner limit.', badge: 'Race', link: href('Fenland 10') }
  ]))
  + section('Latest updates', 'News and dated information is held in simple data files so committee members can update it later.', cards(news.map(n => ({...n, meta: n.date, link: `/news/#${n.slug}`}))), 'alt')
}));

pages.set('/about/', layout({ path: '/about/', title: 'About', description: 'About Fenland Running Club.', body:
  hero('About us', 'Friendly by design.', 'Fenland Running Club is an England Athletics affiliated adult running club with a welcoming atmosphere and year-round running at every distance.')
  + section('What makes FRC different?', 'The club brings together people training for personal bests, team relays, local races and social miles.', `<div class="two-col"><div class="prose"><p>Fenland Running Club has more than a hundred members and celebrates success across the whole team. Training is arranged so members can choose groups that suit their goals and current ability.</p><p>The club takes part in events such as the Round Norfolk, Hereward and Peterborough Green Wheel relays, as well as the Frostbite Friendly League.</p></div><div class="callout"><strong>England Athletics affiliated</strong><p>The current website states that FRC meets the seven England Athletics Club Standards requirements.</p></div></div>`)
}));

pages.set('/join-us/', layout({ path: '/join-us/', title: 'Join Us', description: 'How to join Fenland Running Club.', body:
  hero('Join Us', 'Your first run starts here.', 'If you are aged eighteen or over and think the club might be right for you, complete the PARQ form before coming along.', `<div class="button-row">${cta('Fill in the PARQ form', club.parq)}${cta('Contact the club', href('Contact'), 'ghost')}</div>`)
  + section('How joining works', 'The current club process is simple and supportive.', `<div class="card-grid"><article class="card"><h3>1. Complete the PARQ</h3><p>The Physical Activity Readiness Form helps the club understand where you may fit on your first session.</p></article><article class="card"><h3>2. Get in touch</h3><p>After completing the form, contact the club so someone can help arrange when to come along.</p></article><article class="card"><h3>3. Join through Connect My Club</h3><p>Membership and training are managed in Connect My Club. The club code should be shared when you are ready to join.</p></article></div><p class="todo">TODO: confirm current membership fees and England Athletics affiliation fee before launch. The legacy site references £20 single membership, £30 family membership and £23 per affiliated person.</p>`)
  + section('Join Us FAQs', 'Useful answers for prospective members.', faqList('join'), 'alt')
}));

pages.set('/training/', layout({ path: '/training/', title: 'Training', description: 'Training sessions at Fenland Running Club.', body:
  hero('Training', 'Run with purpose.', 'Club sessions usually meet every Tuesday and Thursday from 6:30pm at Wisbech Rugby Club, although some sessions are held elsewhere.')
  + section('What to expect', 'Qualified coaches and run leaders work to keep sessions inclusive.', cards(events.filter(e => e.type === 'Training').map(e => ({...e, badge: e.date, meta: `${e.time} — ${e.location}`}))))
  + section('Training for every goal', 'Some members are chasing PBs, some are preparing for relays and some simply want friendly miles.', `<div class="prose"><ul><li>Multiple groups are used where helpful so runners can choose an appropriate pace.</li><li>Faster groups may run a little further or quicker, but sessions are planned so the club works together.</li><li>New runners should complete the PARQ form first and contact the club before attending.</li></ul></div>`, 'alt')
}));

pages.set('/couch-to-5k/', layout({ path: '/couch-to-5k/', title: 'Couch to 5K', description: 'Free Couch to 5K with Fenland Running Club.', body:
  hero('Couch to 5K', 'You can start here.', 'A free, gentle and encouraging course for people who do not see themselves as runners yet.', `<div class="button-row">${cta('Sign up with the PARQ form', club.parq)}${cta('Ask a question', href('Contact'), 'ghost')}</div>`)
  + section('Course details', 'The current public page lists the next course as starting on Tuesday 12 May 2026.', `<div class="card-grid"><article class="card"><span class="badge">When</span><h3>Tuesdays and Thursdays</h3><p>7:00pm at Wisbech Rugby Club.</p></article><article class="card"><span class="badge">Support</span><h3>Led by run leaders</h3><p>The programme follows the NHS app with extra support for warm-ups, stretching and confidence.</p></article><article class="card"><span class="badge">Community</span><h3>parkrun encouragement</h3><p>The club gently encourages Wisbech parkrun as a friendly third weekly session.</p></article></div><p class="todo">TODO: confirm full names and permissions for run leader profiles before adding photos or biographies.</p>`)
  + section('Couch to 5K FAQs', 'Reassuring answers for people taking the first step.', faqList('c25k'), 'alt')
}));

pages.set('/fenland-10/', layout({ path: '/fenland-10/', title: 'Fenland 10', description: 'Fenland 10 road race information.', body:
  hero('Fenland 10', 'Flat Fenland roads. Big club welcome.', 'Fenland 10 is a flat, PB-potential 10-mile open road race hosted by Fenland Running Club.', `<div class="button-row">${cta('Enter on Sublime Timing', club.sublimeTiming)}${cta('View race FAQs', '#faqs', 'ghost')}</div>`)
  + section('2026 race information', 'Use these details from the current public site, then confirm before launch.', `<div class="card-grid"><article class="card"><span class="badge">Date</span><h3>Sunday 25 October 2026</h3><p>Main race start 11:00am. Number collection from 09:30.</p></article><article class="card"><span class="badge">Venue</span><h3>West Walton School</h3><p>West Walton, Wisbech PE14 7HA.</p></article><article class="card"><span class="badge">Entry</span><h3>300 places</h3><p>The current site lists £26 affiliated and £28 unaffiliated, with no entries on the day.</p></article></div><p class="todo">TODO: confirm race licence. The current page shows #tbc near the top and #29358 in the runner email section.</p>`)
  + section('What runners can expect', 'The race information highlights practical support and a friendly event atmosphere.', cards([{title:'On the course',summary:'Two water stations, a certified route and enthusiastic marshals.',badge:'Support'},{title:'At the finish',summary:'Chip timing with live results, finisher memento, cakes and refreshments.',badge:'Finish'},{title:'Open-road rules',summary:'No over-ear or in-ear headphones; bone-conduction headphones are acceptable.',badge:'Safety'}]), 'red')
  + `<div id="faqs">${section('Fenland 10 FAQs', 'Key answers rewritten from the current race information.', faqList('fen10'))}</div>`
}));

pages.set('/calendar/', layout({ path: '/calendar/', title: 'Calendar', description: 'Fenland Running Club calendar.', body:
  hero('Calendar', 'What’s coming up.', 'Training, beginner courses and races are held in a simple events data file for easy future updates.')
  + section('Upcoming and regular events', 'Replace or expand these placeholders as the committee confirms more dates.', cards(events.map(e => ({...e, badge: e.type, meta: `${e.date} · ${e.time} · ${e.location}`}))))
}));

pages.set('/news/', layout({ path: '/news/', title: 'News', description: 'Fenland Running Club news.', body:
  hero('News', 'Club updates.', 'News posts are stored separately from the page template so they can be updated without changing layout code.')
  + section('Latest news', 'Real posts can replace these starter items when the committee confirms launch content.', `<div class="card-grid">${news.map(n => `<article class="card" id="${n.slug}"><span class="badge">${escape(n.category)}</span><h3>${escape(n.title)}</h3><p><strong>${escape(n.date)}</strong></p><p>${escape(n.summary)}</p></article>`).join('')}</div>`)
}));

pages.set('/welfare-policies/', layout({ path: '/welfare-policies/', title: 'Welfare & Policies', description: 'Fenland Running Club welfare and policy documents.', body:
  hero('Welfare & Policies', 'Safe, fair and welcoming.', 'This page gathers welfare information and club policy placeholders for committee review.')
  + section('Welfare contacts', 'Do not publish private member information until confirmed.', `<div class="card-grid">${people.filter(p => p.role.includes('Welfare')).map(p => `<article class="card"><span class="badge">${escape(p.group)}</span><h3>${escape(p.name)}</h3><p>${escape(p.bio)}</p></article>`).join('')}</div><p class="todo">TODO: confirm welfare officer name, role email and safeguarding contact route.</p>`)
  + section('Policies and processes', 'The legacy club site lists these policy areas. Add approved HTML versions or PDFs before launch.', `<div class="card-grid">${policies.map(p => `<article class="card"><h3>${escape(p.title)}</h3><p>${escape(p.summary)}</p><p><strong>${escape(p.status)}</strong></p></article>`).join('')}</div>`, 'alt')
}));

pages.set('/club-kit/', layout({ path: '/club-kit/', title: 'Club Kit', description: 'Fenland Running Club kit information.', body:
  hero('Club Kit', 'Wear the colours.', 'Club kit information needs committee confirmation before publication.')
  + section('Kit information', 'This page is ready for details about vests, tops, ordering windows and supplier links.', `<div class="two-col"><div class="prose"><p>Use this page to explain how members can order official club kit and when kit is required for races.</p><p class="todo">TODO: confirm kit supplier, prices, ordering process, size guidance and whether images can be used.</p></div><article class="card"><span class="badge">Brand</span><h3>Purple and red</h3><p>The website keeps the Fenland Running Club colours: purple #4E056E and red #D90205.</p></article></div>`)
}));

pages.set('/contact/', layout({ path: '/contact/', title: 'Contact', description: 'Contact Fenland Running Club.', body:
  hero('Contact', 'Come and say hello.', 'The current site lists Wisbech Rugby Club, PE13 1RG and what3words nimbly.organisms.closets for finding the club.', `<div class="button-row">${cta('Complete PARQ form', club.parq)}${cta('Open what3words', `https://what3words.com/${club.what3words}`, 'ghost')}</div>`)
  + section('Contact details', 'Static hosting cannot process forms without adding a service, so this first version uses clear placeholders.', `<div class="two-col"><div class="card"><h3>Find us</h3><p>${club.venue}<br>${club.address}</p><p><a href="https://what3words.com/${club.what3words}">///${club.what3words}</a></p></div><div class="card"><h3>Send a message</h3><p class="todo">TODO: confirm the public club email address or approved form provider.</p><form class="form-grid" action="mailto:TODO-confirm-club-email@example.com" method="post" enctype="text/plain"><label>Name<input name="name" autocomplete="name"></label><label>Email address<input name="email" type="email" autocomplete="email"></label><label>Message<textarea name="message"></textarea></label><button class="button" type="submit">Prepare email</button></form></div></div>`)
}));

pages.set('/404/', layout({ path: '/404/', title: 'Page not found', description: 'Page not found.', body: section('Page not found', 'The page you were looking for could not be found.', `<p><a class="button" href="/">Return home</a></p>`) }));

await rm(out, { recursive: true, force: true });
await mkdir(join(out, 'images'), { recursive: true });
await copyFile('public/images/OIP.png', join(out, 'images/OIP.png'));
for (const [path, html] of pages) {
  const file = join(out, pagePath(path));
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, html);
}
const allLinks = [...pages.values()].flatMap(html => [...html.matchAll(/href="([^"]+)"/g)].map(m => m[1]));
const broken = allLinks.filter(link => link.startsWith('/') && !link.startsWith('//') && !link.includes('#')).filter(link => !pages.has(link.endsWith('/') ? link : `${link}/`) && link !== '/images/OIP.png');
if (broken.length) {
  console.error(`Broken internal links: ${[...new Set(broken)].join(', ')}`);
  process.exit(1);
}
console.log(`Built ${pages.size} pages to ${out}/ with no obvious broken internal links.`);
