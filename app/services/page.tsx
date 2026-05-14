import { ArrowRight, CheckCircle, Bug, Shield, AlertCircle, Leaf } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      icon: Bug,
      title: "Ant Control",
      description: "Get rid of carpenter ants, fire ants, and common household ants with targeted treatments.",
      price: "Starting $95",
      details: [
        "Complete colony elimination",
        "Interior and exterior treatment",
        "Entry point sealing recommendations",
        "30-day guarantee"
      ]
    },
    {
      icon: Shield,
      title: "Roach Elimination",
      description: "Fast, effective roach removal with safe methods for families with kids and pets.",
      price: "Starting $85",
      details: [
        "German and American roach treatment",
        "Gel baits and safe sprays",
        "Kitchen and bathroom focus",
        "Follow-up inspection included"
      ]
    },
    {
      icon: AlertCircle,
      title: "Rodent Prevention",
      description: "Keep mice and rats out before they become a problem.",
      price: "Starting $120",
      details: [
        "Perimeter inspection",
        "Trap installation and monitoring",
        "Entry point identification",
        "Habitat recommendations"
      ]
    },
    {
      icon: Leaf,
      title: "Spider & Wasp Control",
      description: "Remove spiders, wasps, and outdoor pests safely.",
      price: "Starting $75",
      details: [
        "Web removal and prevention",
        "Wasp nest treatment",
        "Outdoor perimeter spray",
        "Safe for landscaping"
      ]
    },
    {
      icon: Leaf,
      title: "Yard Pest Treatment",
      description: "Protect your outdoor space from mosquitoes, fleas, and other yard invaders.",
      price: "Starting $110",
      details: [
        "Mosquito and flea treatment",
        "Yard perimeter spray",
        "Eco-friendly options available",
        "Seasonal recommendations"
      ]
    },
    {
      icon: Shield,
      title: "Annual Maintenance",
      description: "Regular inspections keep your home protected year-round.",
      price: "Starting $45/month",
      details: [
        "Quarterly inspections",
        "Preventative treatments",
        "Priority response time",
        "20% savings vs. as-needed service"
      ]
    },
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-700 to-green-900 text-white py-16 px-6 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-green-100 max-w-2xl">
            Comprehensive pest control solutions tailored to your Central Oregon home
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 sm:px-8 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="rounded-xl border-2 border-gray-200 p-8 hover:shadow-lg hover:border-green-300 transition-all">
                  <Icon className="w-12 h-12 text-green-700 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <p className="text-lg font-bold text-green-700 mb-6">{service.price}</p>

                  <ul className="space-y-2">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex gap-2 text-gray-700">
                        <CheckCircle size={20} className="flex-shrink-0 text-green-600" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Our Approach Works */}
      <section className="py-20 px-6 sm:px-8 bg-gray-50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Why This Works</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Diagnosis</h3>
              <p className="text-gray-600">
                I identify the root cause, not just treat symptoms. Where are they coming from? What's attracting them? Fixing that prevents the problem from returning.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Right Treatment</h3>
              <p className="text-gray-600">
                Different pests need different approaches. I use eco-friendly methods when possible, always prioritizing safety for your family and pets.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Real Results</h3>
              <p className="text-gray-600">
                Follow-up inspections ensure the problem is actually solved. If it's not, I keep treating at no extra cost—that's our guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 sm:px-8 bg-green-700 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-green-100 mb-8">
            Let's solve your pest problem with a free inspection and honest estimate.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-white text-green-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-colors"
          >
            Schedule Free Inspection
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
