import "@styles/globals.css";

export default function Application({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

/**
 * Example implementation of WebVitals -> does nothing
 * @param {object} metric | your metric object
 */
export function reportWebVitals(metric) {
    switch (metric.name) {
        case "FCP":
            // handle FCP results
            break;
        case "LCP":
            // handle LCP results
            break;
        case "CLS":
            // handle CLS results
            break;
        case "FID":
            // handle FID results
            break;
        case "TTFB":
            // handle TTFB results
            break;
        case "Next.js-hydration":
            break;
        case "Next.js-route-change-to-render":
            break;
        case "Next.js-render":
            break;
        default:
            break;
    }
}