"use client";

// import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "@/components/layout/whatsAppBtn";

// import '@n8n/chat/style.css';
// import { createChat } from '@n8n/chat';



export default function HeaderFooterWrapper({ children }) {
    const pathname = usePathname();

    const isExcluded = pathname.includes("bunnx-admin") || pathname.includes("login") || pathname.includes("signup") || pathname.includes("thank-you");
    
    // useEffect(() => {
	// 	createChat({
	// 		webhookUrl: 'https://primary-production-5a33.up.railway.app/webhook/30535c8f-3417-4a9d-8fa6-f99de2b353ec/chat',


    //         initialMessages: [
    //             'Hi 👋 My name is Syra. How can I help you today?'
    //         ],
    //         i18n: {
    //             en: {
    //                 title: 'Bunnx',
    //                 subtitle: "Start a chat. We're here to help you 24/7.",
    //                 footer: 'Please wait...',
    //                 getStarted: 'New Conversation',
    //                 inputPlaceholder: 'Type your question..',
    //             },
    //         },

	// 	});
	// }, []);

    return (
        <>
            {!pathname.includes("bunnx-admin") && <Header />}
            {children}
            {!isExcluded && <Footer />}
            {!isExcluded && <WhatsAppButton phoneNumber="+919971744661" />}
        </>
    );
}
