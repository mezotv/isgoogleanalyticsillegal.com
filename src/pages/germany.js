import * as React from "react";
import Layout from "../components/Layout";
import { Map } from "../components/Map";
import arrow from "../images/arrow.svg";
import Main from "../templates/Main";

const Image = () => {
  return <Map className="h-auto w-full" />;
};

const Body = () => {
  return (
    <>
      <p>
        The Cologne Regional Court held that Deutsche Telekom must stop
        transferring personal data to the U.S. through Google Analytics unless
        adequate GDPR safeguards are in place.
      </p>
      <p>
        The court found that the U.S. did not ensure an adequate level of data
        protection and that standard contractual clauses alone could not justify
        the transfer because they do not protect against access by U.S.
        authorities.
      </p>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://nrwe.justiz.nrw.de/pdfdownload/downloadEntscheidung.php?entscheidung=%2Fnrwe%2Flgs%2Fkoeln%2Flg_koeln%2Fj2023%2F33_O_376_22_Urteil_20230323.html"
        className="inline-flex justify-between space-x-1 items-center text-[14px] font-bold p-[10px] text-white rounded border border-white border-opacity-50 hover:border-opacity-75 w-full sm:w-auto"
      >
        <span>Read more on nrwe.justiz.nrw.de</span>
        <img className="opacity-50 transform rotate-[135deg]" src={arrow} />
      </a>
    </>
  );
};

const Title = () => {
  return (
    <span className="inline-block max-w-[430px]">
      Is Google Analytics{" "}
      <span className="text-[70px] sm:text-[96px] text-[#FC4E4E] block">
        ILLEGAL
      </span>{" "}
      in <span className="text-[#F9BD2B]">Germany?</span>
    </span>
  );
};

export default function Index() {
  return (
    <Layout
      title="Germany"
      shareText="Did you know Google Analytics might be illegal in Germany?"
    >
      <Main image={<Image />} body={<Body />} title={<Title />} />
    </Layout>
  );
}
