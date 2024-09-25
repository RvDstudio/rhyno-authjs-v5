export default function HomePage() {
  return (
    <div className="mx-auto max-w-[900px] px-4 h-screen flex items-center justify-center sm:px-8 xl:px-0 relative z-1">
      <div className="text-center">
        <a href="/#" className="hero-subtitle-gradient hover:hero-subtitle-hover relative mb-5 font-medium text-sm inline-flex items-center gap-2 py-3 px-4.5 rounded-full">
          <img src="../../images/icon-title.svg" alt="icon" className="pl-4" />
          <span className="hero-subtitle-text hero-subtitle-gradient pr-4">
            Your Ultimate Creative Companion!
          </span>
        </a>
        <h1 className="text-white mb-6 text-3xl font-extrabold sm:text-5xl xl:text-heading-1">
          Elevate Your Content with Our AI-Powered Writing Tool
        </h1>
        <p className="max-w-[500px] mx-auto mb-9 font-medium md:text-lg text-[#918EA0]">
          Highly customizable Tailwind CSS template for AI - Tool, Startup, Software, App and Product Sites. Comes
          with everything you need - pages, features, sections, components and more that you can easily customize.
        </p>
        <a href="/auth/signin" className="hero-button-gradient inline-flex rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80">
          Start Your Free Trial
        </a>
      </div>
    </div>
  );
}
