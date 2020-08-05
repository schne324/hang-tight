import React, { useRef, useState, Fragment, useEffect } from 'react';
import Refractor from 'react-refractor';
import jsx from 'refractor/lang/jsx';
import markup from 'refractor/lang/markup';
import './Section.css';

Refractor.registerLanguage(jsx);
Refractor.registerLanguage(markup);
const format = (html: string) => {
  const TAB = '  ';
  let result = '';
  let indent = '';

  html.split(/>\s*</).forEach((element) => {
    if (element.match(/^\/\w/)) {
      indent = indent.substring(TAB.length);
    }

    switch (element) {
      case 'div':
        result += `${indent}<${element}>`;
        break;
      case '/div':
        result += `<${element}>\r\n`;
        break;
      default:
        result += `${indent}<${element}>\r\n`;
    }

    if (element.match(/^<?\w[^>]*[^\/]$/)) {
      indent += TAB;
    }
  });

  return result.substring(1, result.length - 3);
};

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  children: React.ReactNode;
}

const Section: React.ComponentType<Props> = ({ name, children, ...other }) => {
  const wrapper = useRef(null);
  const [html, setHTML] = useState('');

  useEffect(() => {
    setHTML(wrapper.current ? format(wrapper.current.innerHTML) : '');
  }, [wrapper.current]);

  return (
    <section {...other}>
      <div>
        <h2>{name}</h2>
        <div className="LoadWrap" ref={wrapper}>
          {children}
        </div>
        <h3>React</h3>
        <div
          role="region"
          tabIndex={0}
          aria-label={`${name} react code sample`}
        >
          <Refractor
            language="jsx"
            value={`import { ${name} } from 'hang-tight-react'\n\n<${name} />`}
          />
        </div>
        <h3>HTML</h3>
        <div role="region" tabIndex={0} aria-label={`${name} HTML code sample`}>
          <Refractor language="markup" value={html} />
        </div>
      </div>
    </section>
  );
};

export default Section;
