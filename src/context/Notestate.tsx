import React, { ReactNode } from "react";
import NoteContext from "./noteContext";

interface NoteStateProps {
    children: ReactNode;
}

const NoteState: React.FC<NoteStateProps> = (props) => {
    
    const state = {
        "screen": ["Login", "SignUp", "Reset Password"],
        "company": "SMS-iT",
        "heading": "WITH SMS-iT YOU CAN START BUILDING:",
        "uldata": [
            "14 days FREE TRIAL",
            "SMS | Email | MMS | Fax | Voice | Social Media Marketing",
            "Workflow Automations",
            "Artificial Intelligence",
            "Omnichannel Contact Center",
            "Call Tracking",
            "Smart Engagement Tools",
            "Push Notification",
            "Iteractive Elements/Videos",
            "Alert and Notifications",
            "Phone Verification", 
        ],
        "dropData":[
            "(UTC-11:00) Midway Island",
            "(UTC-11:00) Midway Samoa",
            "(UTC-10:00) Midway Hawaii",
            "(UTC-9:00) Midway Alaska",
            "(UTC-8:00) Midway Tijuana",
            "(UTC-7:00) La Paz",
            "(UTC-7:00) Midway Arizona"
        ]
}
    return (
        <NoteContext.Provider value={state}>
            {props.children}
        </NoteContext.Provider>
    );

}
export default NoteState;
