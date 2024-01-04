import React from "react";
import * as Prism from "prismjs";
import { types, useVisualEdit } from "../../shared";
import Editor from "./SimpleCodeEditor";
import Container from "../../shared/components/Container";
import Section from "../../shared/components/Section";
import PrismCode from "./PrismCode";
import Styles from "./Styles";
import { LayoutProps } from "../../LayoutSideProps";

require("prismjs/components/prism-typescript");
require("prismjs/components/prism-bash");
require("prismjs/components/prism-jsx");
require("prismjs/components/prism-tsx");
require("prismjs/plugins/line-numbers/prism-line-numbers.js");
require("prismjs/plugins/show-language/prism-show-language.js");
require("prismjs/plugins/line-highlight/prism-line-highlight.js");

export interface CodeProps extends LayoutProps {
  language: string;
  dataline?: string;
  showLineNumbers: boolean;
  code?: string;
}

const Code: types.Brick<CodeProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  width,
  language = "javascript",
  dataline = "",
  showLineNumbers = false,
  code,
}) => {
  const [hasMount, setHasMount] = React.useState(false);
  React.useEffect(() => {
    setHasMount(true);
  }, []);

  const [value, onChange, isReadOnly] = useVisualEdit(code);
  const plugins = [];
  if (showLineNumbers) {
    plugins.push("line-numbers");
  }
  if (dataline !== "") {
    plugins.push("line-highlight");
  }

  if (!hasMount) {
    return null;
  }
  if (isReadOnly) {
    return (
      <Section
        backgroundColor={backgroundColor}
        borderTop={borderTop}
        borderBottom={borderBottom}
      >
        <Styles />
        <Container
          size={width}
          paddingTop={paddingTop}
          paddingBottom={paddingBottom}
        >
          <style>{`
        .dark pre {
          background-color: #1f2937;
        }
        .line-highlight {
          background: rgba(255,255,255,0.4);
        }
        .line-highlight:before {
          content: '';
        }
      `}</style>
          <PrismCode
            code={value}
            language={language}
            plugins={plugins}
            dataLine={dataline}
          />
        </Container>
      </Section>
    );
  }

  return (
    <Section
      backgroundColor={backgroundColor}
      borderTop={borderTop}
      borderBottom={borderBottom}
    >
      <Styles />
      <style>{`
        .dark pre {
          background-color: #1f2937;
        }
      `}</style>
      <Container paddingTop={paddingTop} paddingBottom={paddingBottom}>
        <pre className={`rounded-lg language-${language}`}>
          <code className={`language-${language}`}>
            <Editor
              value={value}
              onValueChange={onChange}
              highlight={(code: any) => {
                return Prism.highlight(
                  code || "",
                  Prism.languages[language],
                  `${language}`
                );
              }}
              padding={10}
              textareaId="codeArea"
              className={showLineNumbers ? "editor-line-number" : ""}
            />
          </code>
        </pre>
      </Container>
    </Section>
  );
};

export default Code;
