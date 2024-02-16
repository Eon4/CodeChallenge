export function Headline({ title, display, justifyContent, alignItems }) {
    return (
      <>
        <h1 style={{ display: display, justifyContent: justifyContent, alignItems:alignItems }}>{title}</h1>
      </>
    );
  }
  