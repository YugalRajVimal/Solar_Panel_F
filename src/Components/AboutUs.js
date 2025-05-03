import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-us font-sans text-gray-800">
      

      {/* Hero Section */}
      <section className="text-center bg-yellow-100 py-12">
        <h1 className="text-3xl font-bold mb-2">COMPLETE COMMERCIAL, RESIDENTIAL & INDUSTRIAL SOLAR SYSTEMS</h1>
        <h2 className="text-xl font-semibold mb-6">We Invest In The Future Of Planet!</h2>
        <p className="max-w-3xl mx-auto text-gray-700 mb-6">
          As a worldwide distributor of solar supplies, we provide fast and knowledgeable service. 
          We can get you materials by sea or air.
        </p>
        <button className="bg-green-600 text-white px-6 py-2 rounded">More About Us</button>
      </section>

      {/* Statistics Section */}
      <section className="py-12 bg-white text-center">
        <h3 className="text-xl font-semibold mb-6">We Are Ready For Solar Energy, All We Need Is To Use It Well!</h3>
        <div className="flex flex-wrap justify-center gap-10">
          <div><h4 className="text-3xl font-bold">6,154</h4><p>Projects Completed</p></div>
          <div><h4 className="text-3xl font-bold">2,512</h4><p>Employees & Workers</p></div>
          <div><h4 className="text-3xl font-bold">241</h4><p>Awards & Milestones</p></div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-100 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">We drive the transition to more sustainable, reliable, and affordable energy systems.</h2>
        <p className="max-w-4xl mx-auto mb-6">
          With our innovative technologies, we energize society — that’s our aim. Climate change, rising sea levels, and lack of energy access 
          for 850 million people are challenges we aim to solve.
        </p>
        <button className="bg-blue-600 text-white px-5 py-2 rounded">Learn More</button>
      </section>

      {/* Founder Section */}
      <section className="py-12 bg-white text-center">
        <h3 className="text-2xl font-semibold mb-4">Michael Brian</h3>
        <p className="italic mb-2">Solatec Founder</p>
        <p className="mb-4 font-medium">Making Tomorrow Different Today.</p>
        <p className="max-w-3xl mx-auto text-gray-600">
          Our solar business creates PV material solutions that reduce costs and improve performance of solar energy products.
        </p>
      </section>

      {/* Services Overview */}
      <section className="bg-gray-100 py-12 text-center">
        <h2 className="text-2xl font-bold mb-6">Explore All Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { title: "Solar Panels", desc: "Assembly of photovoltaic cells." },
            { title: "Wind Turbines", desc: "Used for battery charging and more." },
            { title: "Hydropower Plants", desc: "Use falling water energy." },
            { title: "Fossil Resources", desc: "Clean and green chemistry tech." },
            { title: "Battery Materials", desc: "High-energy lithium batteries." },
            { title: "Charge Controllers", desc: "Regulate inverter charge rates." },
          ].map((item, i) => (
            <div key={i} className="bg-white p-4 shadow rounded">
              <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
              <p>{item.desc}</p>
              <a href="#" className="text-blue-600 underline mt-2 inline-block">Read More</a>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values & Features */}
      <section className="py-12 text-center bg-white">
        <h2 className="text-2xl font-bold mb-6">Energize Society With Sustainable And Reliable Energy Systems!</h2>
        <p className="max-w-4xl mx-auto mb-8 text-gray-700">
          New capacity is essential for PV market growth. But capital and operations are challenges.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            "Save Your Money",
            "5 Stars Customer Service",
            "Your Home Is Energy",
            "Consult & Planning",
            "Certified Engineers",
            "Awards & Milestones"
          ].map((feature, i) => (
            <div key={i} className="bg-gray-50 p-4 rounded shadow">
              <p className="font-semibold">{feature}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects / Blog Section */}
      <section className="py-12 bg-gray-100 text-center">
        <h2 className="text-2xl font-bold mb-6">Latest Projects, Solutions And Energy Supplies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto text-left">
          {[
            "Expanding The Solar Supply Chain Finance Program",
            "Addressing Wind Energy Innovation Challenges",
            "Smarter Ways To Manage EV Charging Infrastructures",
            "New Public Attitude Tracker Towards Renewable Energy"
          ].map((proj, i) => (
            <div key={i} className="bg-white p-4 rounded shadow">
              <h4 className="font-semibold text-lg">{proj}</h4>
              <p className="text-sm text-gray-600 mt-2">Learn how we’re changing the game in renewable energy.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials / Customer Experience */}
      <section className="bg-white py-12 text-center">
        <h2 className="text-2xl font-bold mb-6">Our Customers Share Their Experiences</h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <div>
            <h4 className="font-semibold">Design & Shipping</h4>
            <p>We design and deliver utility systems tailored for your needs.</p>
          </div>
          <div>
            <h4 className="font-semibold">Installation</h4>
            <p>Install with us or hire contractors, we manage the entire setup.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
