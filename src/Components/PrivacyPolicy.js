import React from 'react'
import './TermsAndConditions.css'
import bone from'../assets/bone-removebg-preview.png'
import nft from'../assets/Aqua.png'
import { ethers, BigNumber } from "ethers";
import { useEffect, useState} from "react";
import mint from "../../src/mintAbi.json"
import HeaderPages from "./HeaderPages";
import Header from "./Header";
import Footer from "./Footer";
import {Container} from "react-bootstrap";
import HeaderMobile from "./HeaderMobile";
import ScrollAnimate from "react-scroll-fade-animation";
const mintAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";



const PrivacyPolicy = () => {




    return (
        <div className="TermsAndConditions">
            <HeaderMobile/>
            <div className="space"> </div>
            <ScrollAnimate path={'bottom'}>
            <Container>
                <div className="text-cont">
                    <p className="text-h">Privacy Policy</p>
                    <br/>
                    <p className="text">Introduction
                        These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, doberlads.com accessible at doberlads.com.
                        These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions.
                        Minors or people below 18 years old are not allowed to use this Website.</p>
                    <p className="text">Intellectual Property Rights
                        Other than the content you own, under these Terms, doberlads.com and/or its licensors own all the intellectual property rights and materials contained in this Website.
                        You are granted limited license only for purposes of viewing the material contained on this Website.</p>
                    <p className="text">Restrictions
                        You are specifically restricted from all of the following:
                        •	publishing any Website material in any other media;
                        •	selling, sublicensing and/or otherwise commercializing any Website material;
                        •	publicly performing and/or showing any Website material;
                        •	using this Website in any way that is or may be damaging to this Website;
                        •	using this Website in any way that impacts user access to this Website;
                        •	using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity;
                        •	engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website;
                        •	using this Website to engage in any advertising or marketing.
                        Certain areas of this Website are restricted from being access by you and doberlads.com may further restrict access by you to any areas of this Website, at any time, in absolute discretion. Any user ID and password you may have for this Website are confidential and you must maintain confidentiality as well.
                        Your Content</p>
                    <p className="text">In these Website Standard Terms and Conditions, “Your Content” shall mean any audio, video text, images or other material you choose to display on this Website. By displaying Your Content, you grant doberlads.com a non-exclusive, worldwide irrevocable, sub licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.
                        Your Content must be your own and must not be invading any third-party's rights. doberlads.com reserves the right to remove any of Your Content from this Website at any time without notice.
                        No warranties</p>
                    <p className="text">This Website is provided “as is,” with all faults, and doberlads.com express no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.
                        Limitation of liability</p>
                    <p className="text">In no event shall doberlads.com, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract.  doberlads.com, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.
                        Indemnification</p>
                    <p className="text">You hereby indemnify to the fullest extent doberlads.com from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms.
                        Severability</p>
                    <p className="text">If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.
                        Variation of Terms</p>
                    <p className="text">doberlads.com is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.
                        Assignment</p>
                    <p className="text">The doberlads.com is allowed to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.
                        Entire Agreement</p>
                    <p className="text">These Terms constitute the entire agreement between doberlads.com and you in relation to your use of this Website, and supersede all prior agreements and understandings.
                        Governing Law & Jurisdiction</p>
                    <p className="text-margin">These Terms will be governed by and interpreted in accordance with the laws of the Netherlands, and you submit to the non-exclusive jurisdiction of the state and federal courts located in Netherlands for the resolution of any disputes.</p>
                </div>
                <div className="space"> </div>
            </Container>
            </ScrollAnimate>
            <Footer/>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Fredoka&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet"/>

        </div>

    )

}

export default PrivacyPolicy
