import { HoverEffect } from "./ui/card-hover-effect";


const featuredWebinars = [
    {
      title: 'Understanding Music Theory',
      description:
        'Dive deep into the fundamentals of music theory and enhance your musical skills.',
      link: 'understanding-music-theory',
      isFeatured: true,
    },
    {
      title: 'The Art of Songwriting',
      description:
        'Learn the craft of songwriting from experienced musicians and songwriters.',
      link: 'the-art-of-songwriting',
      isFeatured: true,
    },
    {
      title: 'Mastering Your Instrument',
      description:
        'Advanced techniques to master your musical instrument of choice.',
      link: 'mastering-your-instrument',
      isFeatured: true,
    },
    {
      title: 'Music Production Essentials',
      description:
        'Get started with music production with this comprehensive overview.',
      link: 'music-production-essentials',
      isFeatured: true,
    },
    // Added two more webinars
    {
      title: 'Live Performance Techniques',
      description:
        'Enhance your live performance skills with expert tips and strategies.',
      link: 'live-performance-techniques',
      isFeatured: true,
    },
    {
      title: 'Digital Music Marketing',
      description:
        'Learn how to promote your music effectively in the digital age.',
      link: 'digital-music-marketing',
      isFeatured: true,
    },
  ];
const UpcommingWebinars = () => {
  return (
    <div>
        <div className="flex flex-col gap-4 text-white w-screen text-center mt-6">
            <p className="text-cyan-500 text-2xl font-bold"> Featured Webinars</p>
            <h1 className="text-5xl font-bold "> Enhance your musically journey</h1>
        </div>
        <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={featuredWebinars} />
    </div>
    <div className="mx-auto w-fit p-3 text-slate-300 mb-8 rounded-md cursor-pointer bg-blue-600 hover:bg-blue-700 transition-all duration-300">
        View our courses
    </div>
    </div>
  )
}


export default UpcommingWebinars