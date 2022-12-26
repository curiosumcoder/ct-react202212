import Script from "next/script";
import React from "react";
import Header from "./Header";

function Layout({ children }: any) {
  return (
    <>
      <Header />
      <main className="container" style={{ marginTop: "1em" }}>
        {children}
      </main>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
        crossOrigin="anonymous"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, Bootstrap has been populated`)
        }
      />
    </>
  );
}

export default Layout;
