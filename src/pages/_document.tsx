/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 */

import {Html, Head, Main, NextScript} from 'next/document';
import {siteConfig} from '../siteConfig';

const MyDocument = () => {
  return (
    <Html lang={siteConfig.languageCode}>
      
      <Head />
      <body className="font-text font-medium antialiased text-lg bg-wash dark:bg-wash-dark text-secondary dark:text-secondary-dark leading-base">


        <script
          dangerouslySetInnerHTML={{
            __html: `
                (function () {
                  function setTheme(newTheme) {
                    window.__theme = newTheme;
                    if (newTheme === 'dark') {
                      document.documentElement.classList.add('dark');
                    } else if (newTheme === 'light') {
                      document.documentElement.classList.remove('dark');
                    }
                  }

                  var preferredTheme;
                  try {
                    preferredTheme = localStorage.getItem('theme');
                  } catch (err) { }

                  window.__setPreferredTheme = function(newTheme) {
                    preferredTheme = newTheme;
                    setTheme(newTheme);
                    try {
                      localStorage.setItem('theme', newTheme);
                    } catch (err) { }
                  };

                  var initialTheme = preferredTheme;
                  var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

                  if (!initialTheme) {
                    initialTheme = darkQuery.matches ? 'dark' : 'light';
                  }
                  setTheme(initialTheme);

                  darkQuery.addEventListener('change', function (e) {
                    if (!preferredTheme) {
                      setTheme(e.matches ? 'dark' : 'light');
                    }
                  });

                  // Detect whether the browser is Mac to display platform specific content
                  // An example of such content can be the keyboard shortcut displayed in the search bar
                  document.documentElement.classList.add(
                      window.navigator.platform.includes('Mac')
                      ? "platform-mac" 
                      : "platform-win"
                  );
                })();
              `,
          }}
        />
        <Main />
        <NextScript />
<div className="col-md-8">
    <h3 className="pb-4 mb-4 fst-italic border-bottom">
       Adsense ads
    </h3>
   <ins
       class="adsbygoogle"
       style={{ display: "block" }}
       data-ad-client="ca-pub-6389784149267865"
       data-ad-slot="6486641123"
       data-ad-format="auto"
        data-full-width-responsive="true"
    > </ins>
      
</div>

      </body>
<script>
          (adsbygoogle = window.adsbygoogle || []).push({});    
     </script>
    </Html>
  );
};

export default MyDocument;
