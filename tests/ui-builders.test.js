import assert from 'node:assert/strict';
import { buildNavLinksMarkup } from '../assets/js/components/header.js';
import { buildHeroMarkup, buildSocialLinksMarkup } from '../assets/js/components/hero.js';

function runTests() {
  const navLinks = [
    { id: 'home', label: 'Home', href: 'index.html' },
    { id: 'about', label: 'About', href: 'about.html' }
  ];
  const navMarkup = buildNavLinksMarkup(navLinks, 'about');
  assert(navMarkup.includes('about.html'));
  assert(navMarkup.includes('class="active"'));

  const heroMarkup = buildHeroMarkup({
    name: 'Test',
    tagline: 'Working with ',
    typedItems: ['Alpha', 'Beta'],
    fallbackText: 'Software Developer',
    imageSrc: 'test.png',
    imageAlt: 'Test image',
    socialLinks: [{ href: 'https://example.com', icon: 'bi bi-example', label: 'Example' }]
  });
  assert(heroMarkup.includes('Test'));
  assert(heroMarkup.includes('data-typed-items="Alpha, Beta"'));

  const socialMarkup = buildSocialLinksMarkup([
    { href: 'https://profile.com', icon: 'bi bi-profile', label: 'Profile' }
  ]);
  assert(socialMarkup.includes('href="https://profile.com"'));
  assert(socialMarkup.includes('aria-label="Profile"'));

  console.log('ui builder helpers tests passed');
}

runTests();
