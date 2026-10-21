import React, { useState } from 'react';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X, Heart, Leaf, HandHeart, Globe2, Mail, Instagram, Facebook, Sparkles } from 'lucide-react';

const products = [
  { name: 'Textured tableware', category: 'TABLE & DINING', image: 'photo-1610701596007-11502861dcfa', description: 'Thoughtful details for everyday rituals.' },
  { name: 'Woven accents', category: 'HOME DÉCOR', image: 'photo-1600210492486-724fe5c67fb0', description: 'Warm textures, made to feel at home.' },
  { name: 'Hand-finished pieces', category: 'ARTISAN CRAFT', image: 'photo-1490312278390-ab64016e0aa9', description: 'Individual character in every piece.' },
];

const imageUrl = (id, width = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="announcement"><span>A purpose woven into every creation</span><span className="announcement-mark">SAMĀJIK PAHAL FOUNDATION <span>✳</span></span></div>
      <header className="nav-wrap">
        <a className="brand" href="#home" aria-label="Samajik Pahal Foundation home" onClick={closeMenu}>
          <span className="brand-symbol">sp<span>f</span></span>
          <span className="brand-name">SAMAJIK PAHAL<small>FOUNDATION</small></span>
        </a>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#story" onClick={closeMenu}>Our story</a>
          <a href="#craft" onClick={closeMenu}>The craft</a>
          <a href="#impact" onClick={closeMenu}>Our purpose</a>
          <a href="#contact" className="nav-cta" onClick={closeMenu}>Connect with us <ArrowUpRight size={15}/></a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line"/> WOMEN. CRAFT. OPPORTUNITY.</div>
            <h1>Made by hand.<br/><em>Made with purpose.</em></h1>
            <p className="hero-intro">Discover handcrafted home décor and tableware shaped by skill, creativity, and the belief that opportunity can change lives.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#craft">Explore the craft <ArrowRight size={17}/></a>
              <a className="text-link" href="#story">Get to know us <ArrowDownRight size={17}/></a>
            </div>
            <div className="hero-footnote"><span className="tiny-star">✳</span><span>Supporting women’s empowerment through craft and meaningful work.</span></div>
          </div>
          <div className="hero-visual">
            <img className="hero-image" src={imageUrl('photo-1603006905003-be475563bc59', 1400)} alt="Warm, handcrafted objects arranged in a calm natural setting" fetchPriority="high"/>
            <div className="image-note"><span className="note-icon"><Leaf size={18}/></span><span><b>Crafted with care</b><small>Objects with a story to tell</small></span></div>
            <div className="hero-index">01 <span/> 03</div>
          </div>
          <div className="hero-side-label">A MORE THOUGHTFUL WAY TO MAKE A DIFFERENCE</div>
        </section>

        <section className="manifesto" id="story">
          <div className="manifesto-label"><span>01 / THE STORY</span><span className="manifesto-flower">✳</span></div>
          <div className="manifesto-content">
            <h2>When women have the opportunity to create, <em>possibility takes shape.</em></h2>
            <div className="manifesto-bottom"><p>Samajik Pahal Foundation works around a simple idea: talent deserves a platform. Through handcrafted products and a focus on women’s empowerment, we want to help bring makers, their skills, and their work into view.</p><a href="#impact" className="round-link" aria-label="Read about our purpose"><ArrowDownRight/></a></div>
          </div>
        </section>

        <section className="craft-section" id="craft">
          <div className="section-heading">
            <div><div className="eyebrow"><span className="eyebrow-line"/> MADE TO BE KEPT</div><h2>Everyday objects.<br/><em>Extraordinary hands.</em></h2></div>
            <p>Explore a world of handcrafted home accents and tableware. Each creation reflects the care and individuality that make handmade work special.</p>
          </div>
          <div className="product-grid">
            {products.map((product, i) => <article className="product-card" key={product.name}>
              <a className="product-image-wrap" href="#contact" aria-label={`Enquire about ${product.name}`}>
                <img src={imageUrl(product.image, 900)} alt={product.name} loading="lazy"/>
                <span className="product-number">0{i + 1}</span><span className="product-arrow"><ArrowUpRight size={20}/></span>
              </a>
              <div className="product-meta"><span>{product.category}</span><span>HANDCRAFTED</span></div>
              <h3>{product.name}</h3><p>{product.description}</p>
            </article>)}
          </div>
          <p className="catalog-note"><Sparkles size={15}/> Product images are illustrative placeholders. Replace them with SPF’s actual products before public launch.</p>
        </section>

        <section className="impact-section" id="impact">
          <div className="impact-image"><img src={imageUrl('photo-1452860606245-08befc0ff44b', 1100)} alt="Creative hands at work in a craft setting" loading="lazy"/><div className="impact-stamp">SKILL<br/><span>✳</span><br/>DIGNITY</div></div>
          <div className="impact-copy">
            <div className="eyebrow"><span className="eyebrow-line"/> 02 / OUR PURPOSE</div>
            <h2>Not just what<br/>we make. <em>Why we make it.</em></h2>
            <p>Behind every handmade object is time, knowledge, and a person who brings it to life. We aim to create more visibility for women’s craft and connect meaningful work with people who value it.</p>
            <div className="impact-values">
              <div><span className="value-icon"><HandHeart size={20}/></span><span><b>Empowerment</b><small>Creating space for women’s skills and initiative.</small></span></div>
              <div><span className="value-icon"><Heart size={20}/></span><span><b>Respect for craft</b><small>Giving handmade work the attention it deserves.</small></span></div>
              <div><span className="value-icon"><Globe2 size={20}/></span><span><b>Wider connections</b><small>Helping people discover the makers and their work.</small></span></div>
            </div>
          </div>
        </section>

        <section className="closing-cta" id="contact">
          <div className="closing-flower">✳</div>
          <div className="eyebrow"><span className="eyebrow-line"/> LET'S MAKE A CONNECTION</div>
          <h2>Good things happen<br/>when we <em>create together.</em></h2>
          <p>Interested in our work, handcrafted products, or a potential collaboration? We’d welcome a conversation.</p>
          <a className="button button-dark" href="mailto:">Contact the foundation <ArrowUpRight size={17}/></a>
          <small className="contact-note">Add the foundation’s verified contact email before publishing this website.</small>
        </section>
      </main>

      <footer className="footer">
        <a className="brand footer-brand" href="#home"><span className="brand-symbol">sp<span>f</span></span><span className="brand-name">SAMAJIK PAHAL<small>FOUNDATION</small></span></a>
        <p>Handcrafted with purpose. Built around possibility.</p>
        <div className="footer-right"><span>© {new Date().getFullYear()} Samajik Pahal Foundation</span><a href="#home">Back to top ↑</a></div>
      </footer>
    </div>
  );
}

export default App;