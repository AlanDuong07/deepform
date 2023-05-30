import {
    CloudArrowUpIcon,
    LockClosedIcon,
    ServerIcon,
    ArrowUpOnSquareStackIcon,
    MicrophoneIcon,
    DocumentTextIcon,
    PencilSquareIcon,
} from "@heroicons/react/20/solid";
import AnswerDeepform from "../../public/images/AnswerDeepform.png";
import SubmissionsDeepform from "../../public/images/SubmissionsDeepform.png";
import Link from "next/link";
import CTAButtons from "./atoms/CTAButtons";

const featuresSection1 = [
    {
        name: "Easy Setup",
        description:
            "Simply create a Deepform and tell the A.I. your research goal.",
        icon: CloudArrowUpIcon,
    },
    {
        name: "Instant Deployment",
        description:
            "Send a Deepform link to your users and start conducting automated interviews immediately.",
        icon: ArrowUpOnSquareStackIcon,
    },
    {
        name: "Text and Voice Interviews",
        description: "Your users can respond to the A.I. in text or voice.",
        icon: MicrophoneIcon,
    },
];

const featuresSection2 = [
    {
        name: "A.I. Summary",
        description:
            "Easily get up to speed on key insights, notable remarks, and trends via A.I. summaries.",
        icon: DocumentTextIcon,
    },
    {
        name: "Full Transcripts",
        description:
            "Review full transcripts of every interview, so you can dig deeper into the data.",
        icon: PencilSquareIcon,
    },
    {
        name: "Cross Interview Analysis",
        description:
            "Uncover trends across 1000s of interviews with ease via A.I. analysis.",
        icon: MicrophoneIcon,
    },
];

// const featuresSection3 = [
//     {
//         name: "Easy Setup",
//         description:
//             "Simply create a Deepform and tell the A.I. your research goal.",
//         icon: CloudArrowUpIcon,
//     },
//     {
//         name: "Instant Deployment",
//         description:
//             "Send a Deepform link to your users and start conducting automated interviews immediately.",
//         icon: ArrowUpOnSquareStackIcon,
//     },
//     {
//         name: "Text and Voice Interviews",
//         description: "Your users can respond to the A.I. in text or voice.",
//         icon: MicrophoneIcon,
//     },
// ];

export default function FeatureSection() {
    return (
        <>
            <div className="overflow-hidden bg-transparent py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pr-8 lg:pt-4">
                            <div className="lg:max-w-lg">
                                <h2 className="text-base font-semibold leading-7 text-indigo-600">
                                    Collect
                                </h2>
                                <p className="font-satoshi mt-2 text-4xl font-medium tracking-tight text-gray-900">
                                    Automate your insight collection
                                </p>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    Gather user insights at 100x the speed and a
                                    fraction of the cost of manual interviews,
                                    freeing you to do what you're passionate
                                    about: analyzing and acting on the data.
                                </p>
                                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                    {featuresSection1.map((feature) => (
                                        <div
                                            key={feature.name}
                                            className="relative pl-9"
                                        >
                                            <dt className="inline font-semibold text-gray-900">
                                                <feature.icon
                                                    className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                                                    aria-hidden="true"
                                                />
                                                {feature.name}
                                            </dt>{" "}
                                            <dd className="inline">
                                                {feature.description}
                                            </dd>
                                        </div>
                                    ))}
                                </dl>
                                <CTAButtons centered={false} />
                            </div>
                        </div>
                        <img
                            src={AnswerDeepform.src}
                            alt="Product screenshot"
                            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                            width={2432}
                            height={1442}
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
            <div className="overflow-hidden bg-transparent py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:ml-auto lg:pl-4 lg:pt-4">
                            <div className="lg:max-w-lg">
                                <h2 className="text-base font-semibold leading-7 text-indigo-600">
                                    Analyze
                                </h2>
                                <p className="font-satoshi mt-2 text-4xl font-medium tracking-tight text-gray-900">
                                    Make insight driven decisions
                                </p>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    After every interview, Deepform presents you
                                    the data in a simple, easy to understand
                                    format. Make insight driven decisions with
                                    confidence.
                                </p>
                                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                    {featuresSection2.map((feature) => (
                                        <div
                                            key={feature.name}
                                            className="relative pl-9"
                                        >
                                            <dt className="inline font-semibold text-gray-900">
                                                <feature.icon
                                                    className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                                                    aria-hidden="true"
                                                />
                                                {feature.name}
                                            </dt>{" "}
                                            <dd className="inline">
                                                {feature.description}
                                            </dd>
                                        </div>
                                    ))}
                                </dl>
                                <CTAButtons centered={false} />
                            </div>
                        </div>
                        <div className="flex items-start justify-end lg:order-first">
                            <img
                                src={SubmissionsDeepform.src}
                                alt="Product screenshot"
                                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                                width={2432}
                                height={1442}
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="bg-transparent py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="font-satoshi text-4xl font-medium tracking-tight text-gray-900 sm:text-5xl">
                            Your customers are constantly evolving.
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Inject Deepforms into every customer touchpoint to
                            keep up with their changing needs, so you can build
                            products they love.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                        
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3"> */}
            {/* {featuresSection3.map((feature) => (
                                <div
                                    key={feature.name}
                                    className="flex flex-col"
                                >
                                    <dt className="text-base font-semibold leading-7 text-gray-900">
                                        <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                            <feature.icon
                                                className="h-6 w-6 text-white"
                                                aria-hidden="true"
                                            />
                                        </div>
                                        {feature.name}
                                    </dt>
                                    <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                        <p className="flex-auto">
                                            {feature.description}
                                        </p>
                                        <p className="mt-6">
                                            <a
                                                href={feature.href}
                                                className="text-sm font-semibold leading-6 text-indigo-600"
                                            >
                                                Learn more{" "}
                                                <span aria-hidden="true">
                                                    →
                                                </span>
                                            </a>
                                        </p>
                                    </dd>
                                </div>
                            ))} */}
            {/* </dl>
                    </div>
                </div>
            </div> */}
        </>
    );
}
