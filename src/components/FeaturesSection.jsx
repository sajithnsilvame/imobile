import {
  ChatBubbleBottomCenterTextIcon,
  GiftIcon,
  ClipboardDocumentCheckIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Competitive Pricing",
    description:
      "Competitive pricing ensures the best deal in Sri Lanka without compromising quality. Transparent pricing and no hidden fees mean confident shopping and maximum value.",
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    name: "Exclusive Offers",
    description:
      "Watch for exclusive offers at iSpot Lanka, featuring discounts, bundles, and trade-ins. Save more on your Apple Device purchases while enjoying peace of mind.",
    icon: GiftIcon,
  },
  {
    name: "Quality Assurance",
    description:
      "Quality is key at iSpot Lanka. Each device undergoes rigorous testing to meet high standards. Trust iSpot Lanka for an exceptional experience from day one.",
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: "Expert Guidance",
    description:
      "Our expert staff is ready to assist you in finding the perfect Apple device to match your needs and budget. Whether it's specifications, features, or pricing, we're here to help.",
    icon: HeartIcon,
  },
];

const FeaturesSection = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-gray-600 font-semibold tracking-wide uppercase">
            Why Choose Us
          </h2>
          <p className="mt-2 text-2xl leading-8 font-bold tracking-tight text-gray-700 sm:text-4xl">
            Our Promises
          </p>
        </div>
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-gray-600">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
