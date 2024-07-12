import FAQ from "./FAQ";
import { Typography } from "@mui/material";
export default function FAQs() {
  const faqs = [
    {
      header: "What is Ewabey?",
      body: (
        <>
          Ewabey is a platform that specializes in building custom web solutions
          for businesses, companies, and individuals. Whether you need a website
          for your business, a personal blog, or an e-commerce store, Ewabey can
          help bring your ideas to life with tailored web development services.
        </>
      ),
    },
    {
      header: "What services does Ewabey offer?",
      body: (
        <>
          Ewabey offers a wide range of services, including website design and
          development, e-commerce development, custom web application
          development, website maintenance and support, digital marketing
          services, and more. We work closely with our clients to understand
          their unique requirements and deliver solutions that meet their needs.
        </>
      ),
    },
    {
      header: "How does the Ewabey process work?",
      body: (
        <>
          Our process typically begins with a consultation to discuss your
          project requirements, goals, and timeline. Once we have a clear
          understanding of your needs, our team of experienced developers and
          designers will work diligently to design and develop your website or
          web application. We provide regular updates and involve you in the
          feedback and revision process to ensure the final product meets your
          expectations.
        </>
      ),
    },
    {
      header: "How long does it take to build a website with Ewabey?",
      body: (
        <>
          The time it takes to build a website depends on various factors,
          including the complexity of the project, the number of features
          required, and the client's responsiveness during the development
          process. We strive to deliver projects in a timely manner while
          maintaining high-quality standards. During the initial consultation,
          we can provide an estimated timeline based on your specific project
          requirements.
        </>
      ),
    },
    {
      header: "What technologies does Ewabey use?",
      body: (
        <>
          Ewabey utilizes a wide range of technologies and tools to build custom
          web solutions, including HTML, CSS, JavaScript, Python, React,
          Next.js, Node.js, Nest.js, MySql, PostgresSql, MongoDB and many more.
          We stay up-to-date with the latest industry trends and technologies to
          ensure that our clients receive modern and innovative solutions.
        </>
      ),
    },
    {
      header: "Do you offer website maintenance and support services?",
      body: (
        <>
          Yes, Ewabey provides website maintenance and support services to
          ensure that your website remains secure, up-to-date, and optimized for
          performance. Our maintenance plans include regular backups, security
          updates, content updates, bug fixes, and ongoing technical support to
          address any issues that may arise.
        </>
      ),
    },
    {
      header: "Is Ewabey GDPR compliant?",
      body: (
        <>
          Yes, Ewabey takes data privacy and security seriously and is fully
          committed to complying with the General Data Protection Regulation
          (GDPR) and other relevant data protection laws. We implement
          appropriate measures to protect the personal data of our clients and
          users and ensure that their rights are respected.
        </>
      ),
    },
    {
      header: "How can I get started with Ewabey?",
      body: (
        <>
          Getting started with Ewabey is easy! Simply create a new project from
          the Let's build section of our website and you will get a consultation
          for that project. During the consultation, we'll discuss your project
          requirements, goals, and budget, and provide you with a personalized
          proposal outlining our recommended solutions and services. We look
          forward to working with you to bring your project to life!
        </>
      ),
    },
  ];
  return (
    <div
      style={{ marginTop: "5rem", marginLeft: "0.5rem", marginRight: "0.5rem", marginBottom: "5rem" }}
    >
      <Typography sx={{ ml: "1rem", fontSize: "2rem" }}>
        FAQs
      </Typography>
      {faqs.map((faq, index) => {
        return <FAQ key={index} faq={faq} />;
      })}
    </div>
  );
}
