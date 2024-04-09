import React, { useEffect } from 'react';

const MathJaxComponent = ({ texExpression }) => {
  useEffect(() => {
    if (window.MathJax) {
      window.MathJax.typeset();
    } else {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://polyfill.io/v3/polyfill.min.js?features=es6';
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        const scriptMathJax = document.createElement('script');
        scriptMathJax.type = 'text/javascript';
        scriptMathJax.async = true;
        scriptMathJax.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
        document.head.appendChild(scriptMathJax);
      };
    }
  }, [texExpression]);

  useEffect(() => {
    if (window.MathJax) {
      window.MathJax.typeset();
    }
  }, [texExpression]);

  return (
    <div>
      <span>{texExpression}</span>
    </div>
  );
};

export default MathJaxComponent;
