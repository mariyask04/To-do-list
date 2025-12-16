export default function About() {
  return (
    <section id="about" className="w-full bg-gray-50 py-20 px-6 md:px-20">
      
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Smarter Tasks with Templates
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Create tasks faster using ready-made templates designed for different needs.
        </p>
      </div>

      {/* Content Grid */}
      <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Card 1 */}
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
          <div className="text-4xl mb-4">🗂️</div>
          <h3 className="text-xl font-semibold text-gray-900">
            Task-Based Templates
          </h3>
          <p className="mt-3 text-gray-600">
            Choose templates based on task type like work, study, fitness, or personal goals.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
          <div className="text-4xl mb-4">⚙️</div>
          <h3 className="text-xl font-semibold text-gray-900">
            Smart Customization
          </h3>
          <p className="mt-3 text-gray-600">
            Modify templates to fit your workflow — add deadlines, priorities, and reminders.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
          <div className="text-4xl mb-4">🚀</div>
          <h3 className="text-xl font-semibold text-gray-900">
            Faster Productivity
          </h3>
          <p className="mt-3 text-gray-600">
            Spend less time planning and more time completing what truly matters.
          </p>
        </div>
      </div>
    </section>
  );
}
