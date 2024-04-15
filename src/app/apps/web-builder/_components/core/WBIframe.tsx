import React from "react";

const WBIframe = ({ html }: { html: string }) => {
  return (
    <div>
      {/* Your other content (optional) */}
      <iframe srcDoc={html} width="600" height="400" />
    </div>
  );
};

export default WBIframe;
