import {
  Button,
  CodeBlock,
  FeatureCard,
  MotionDiv,
  PerformanceMetrics
} from '@/components';
import {
  codeExamples,
  containerVariants,
  features,
  itemVariants
} from '@/config';
import { GithubIcon, RocketIcon } from '@/constants';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="container relative mx-auto overflow-hidden py-20">
        <div className="absolute inset-0 -z-10 overflow-hidden opacity-15">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <MotionDiv
            animate={{
              x: [0, -100, 0],
              y: [0, 50, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="absolute left-1/3 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
          />
        </div>

        <MotionDiv
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col items-center text-center"
        >
          <MotionDiv variants={itemVariants}>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Next.js 15 <span className="text-primary">Starter</span>
            </h1>
          </MotionDiv>
          <MotionDiv variants={itemVariants} transition={{ delay: 0.1 }}>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Production-ready template with App Router, TypeScript, and all the
              latest Next.js 15 features.
            </p>
          </MotionDiv>
          <MotionDiv
            variants={itemVariants}
            transition={{ delay: 0.2 }}
            className="mt-10 flex gap-4"
          >
            <Button size="lg" className="gap-2">
              <RocketIcon className="h-4 w-4" />
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <GithubIcon className="h-4 w-4" />
              View on GitHub
            </Button>
          </MotionDiv>
        </MotionDiv>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto py-20">
        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center text-3xl font-bold">Features</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Everything you need to build modern web applications
          </p>
        </MotionDiv>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      {/* Code Snippet Showcase */}
      <section className="container mx-auto bg-muted/50 py-20">
        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center text-3xl font-bold">Clean Code</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Type-safe, modular, and easy to understand
          </p>
        </MotionDiv>
        <CodeBlock examples={codeExamples} />
      </section>

      {/* Performance Metrics */}
      <section className="container mx-auto py-20">
        <PerformanceMetrics />
      </section>

      {/* Footer */}
      <footer className="border-t py-10">
        <div className="container mx-auto flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Next.js 15 Starter. MIT License.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Documentation
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              GitHub
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
