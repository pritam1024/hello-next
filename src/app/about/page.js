import React from "react";

export default function AboutPage() {
  return (
    <main>
      <section
        style={{
          display: "flex",
          alignItems: "center",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        <img
          src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
          alt="Profile"
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        />
        <div>
          <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>
            About Me
          </h1>
          <p style={{ fontSize: "1.2rem", color: "#444" }}>
            Hi! I'm Pritam, a passionate developer building modern web
            experiences with Next.js.
            <br />I love working on creative projects, learning new
            technologies, and collaborating with others.
          </p>
        </div>
      </section>
      <section style={{ marginTop: "2.5rem" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
          Skills & Interests
        </h2>
        <ul
          style={{ fontSize: "1.1rem", color: "#333", paddingLeft: "1.2rem" }}
        >
          <li>JavaScript, TypeScript, React, Next.js</li>
          <li>UI/UX Design & Frontend Architecture</li>
          <li>Open Source & Community</li>
          <li>Continuous Learning</li>
        </ul>
      </section>
      <section style={{ marginTop: "2.5rem" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Contact</h2>
        <p style={{ fontSize: "1.1rem" }}>
          Feel free to reach out via{" "}
          <a href="mailto:pritam@example.com">email</a> or connect on{" "}
          <a
            href="https://github.com/pritam1024"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
      </section>
    </main>
  );
}
