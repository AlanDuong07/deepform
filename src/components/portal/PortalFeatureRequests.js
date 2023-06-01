import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
    PlusSmallIcon,
    ChevronUpIcon,
    ChatBubbleLeftIcon,
} from "@heroicons/react/24/outline";
import StatusBadge from "components/atoms/StatusBadge";
import PreviewFeatureRequest from "./PreviewFeatureRequest";
import AddIdea from "./AddIdea";
import { useFeedbackByPortal } from "util/db";
import { useAuth } from "util/auth";
import AuthModal from "./AuthModal";

const oldNav = [
    // { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
    // { name: "Team", href: "#", icon: UsersIcon, current: false },
    // { name: "Projects", href: "#", icon: FolderIcon, current: false },
    // { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
    // {
    //     name: "Documents",
    //     href: "#",
    //     icon: DocumentDuplicateIcon,
    //     current: false,
    // },
    // { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function PortalFeatureRequests({ portalData }) {
    const auth = useAuth();
    const [openAuthModal, setOpenAuthModal] = useState(false);
    const { data: feedback, status: feedbackStatus } = useFeedbackByPortal(
        portalData?.id
    );
    // console.log("feedback", feedback)

    const checkAuth = () => {
        // Check if user is logged in. If they aren't, show the AuthModal.
        if (!auth.user) {
            setOpenAuthModal(true);
            return false;
        }
        setOpenAuthModal(false);
        return true;
    };

    return (
        <>
            <div className="fixed bottom-0 flex h-[calc(100vh-65px)] w-screen overflow-auto">
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="fixed hidden h-screen grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-gray-50 px-6 lg:flex lg:w-52 lg:flex-col xl:w-72">
                    <nav className="mt-10 flex flex-1 flex-col">
                        <ul
                            role="list"
                            className="flex flex-1 flex-col gap-y-7"
                        >
                            <li>
                                <ul role="list" className="-mx-2 space-y-1">
                                    {oldNav.map((item) => (
                                        <li key={item.name}>
                                            <a
                                                href={item.href}
                                                className={classNames(
                                                    item.current
                                                        ? "bg-gray-50 text-indigo-600"
                                                        : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600",
                                                    "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                                                )}
                                            >
                                                <item.icon
                                                    className={classNames(
                                                        item.current
                                                            ? "text-indigo-600"
                                                            : "text-gray-400 group-hover:text-indigo-600",
                                                        "h-6 w-6 shrink-0"
                                                    )}
                                                    aria-hidden="true"
                                                />
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
                <main className="flex h-fit w-screen items-center justify-center py-6 px-4 sm:py-8 lg:ml-52 lg:py-10 xl:ml-72">
                    <section className="flex w-full max-w-3xl flex-col gap-12 lg:w-4/6 ">
                        <div className="flex justify-between">
                            <div className="flex flex-col gap-4">
                                <h1 className="font-satoshi text-3xl font-medium tracking-tight text-gray-900 md:text-4xl">
                                    Deepform Feature Requests
                                </h1>
                                <p className="text-gray-500">
                                    Feature suggestions for Deepform 💡
                                </p>
                            </div>
                            <AddIdea
                                portalId={portalData?.id}
                                checkAuth={checkAuth}
                            />
                        </div>
                        <div>
                            {feedback?.map((singleFeedback) => (
                                <PreviewFeatureRequest
                                    key={singleFeedback.id}
                                    singleFeedback={singleFeedback}
                                    portalData={portalData}
                                    checkAuth={checkAuth}
                                />
                            ))}
                        </div>
                    </section>
                </main>
                {openAuthModal && (
                    <AuthModal
                        open={openAuthModal}
                        setOpen={setOpenAuthModal}
                    />
                )}
            </div>
        </>
    );
}