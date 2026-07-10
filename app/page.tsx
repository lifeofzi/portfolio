import { Navigation } from '@/components/molecules/Navigation';
import { Hero } from '@/components/molecules/Hero';
import { Timeline } from '@/components/organisms/Timeline';
import { SkillsSection } from '@/components/organisms/SkillsSection';
import { ProjectsTimeline } from '@/components/organisms/ProjectsTimeline';
import { ProductsSection } from '@/components/organisms/ProductsSection';
import { CallbackModal } from '@/components/molecules/CallbackModal';
import { timelineData } from '@/data/timeline';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.page}>
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Timeline Section */}
      <section className={styles.timelineSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Experience{' '}
              <span className={styles.badgeGold}>& Education</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              A journey through my professional growth
            </p>
          </div>
          <Timeline items={timelineData} />
        </div>
      </section>

      {/* Projects Timeline Section */}
      <section className={styles.projectsSection}>
        <div className={styles.projectsDots}>
          <div className="w-full h-full neo-dot-grid" />
        </div>
        <div className={styles.projectsShapes}>
          <div className={styles.projectsShape1} />
          <div className={styles.projectsShape2} />
          <div className={styles.projectsShape3} />
        </div>
        <div className={styles.projectsContent}>
          <div className={styles.projectsHeader}>
            <div className={styles.projectsFeaturedBadge}>
              Featured Projects
            </div>
            <h2 className={styles.sectionTitle}>
              <span className={styles.badgeWhite}>Timeline</span>{' '}
              <span className={styles.badgeCream}>of Builds</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              A timeline of projects I&apos;ve built and deployed
            </p>
          </div>
          <ProjectsTimeline />
        </div>
      </section>

      {/* Products Section */}
      <ProductsSection />

      {/* Callback Section */}
      <section className={styles.callbackSection}>
        <div className={styles.containerNarrow}>
          <h2 className={styles.callbackTitle}>
            Want a{' '}
            <span className={styles.badgePink}>Callback?</span>
          </h2>
          <p className={styles.callbackSubtitle}>
            Leave your WhatsApp and I&apos;ll be in touch.
          </p>
          <CallbackModal source="homepage" />
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p className={`${styles.footerText} text-center`}>
            &copy; {new Date().getFullYear()} Zaman Ishtiyaq. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
