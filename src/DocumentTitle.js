import { useEffect } from "react";

function DocumentTitle({ title }) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return null;
}

export default DocumentTitle;
