import React from "react";
import { useParams } from "react-router-dom";

function ContactUs() {

    const {id} = useParams()

  return <div>contactUs</div>;
}

export default ContactUs;
